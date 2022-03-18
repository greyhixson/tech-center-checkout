/* eslint-disable no-unused-vars */
import {
  getDocs, onSnapshot, query, collection, where, deleteDoc, doc, getDoc,
} from 'firebase/firestore';
import db from './techCenterCheckout.Firestore';

// Read all items from inventory
async function getCollection() {
  const querySnapshot = await getDocs(collection(db, 'All Devices'));
  const allDevices = [];
  // used to be doc here...
  querySnapshot.forEach((document) => {
    const data = {
      deviceName: document.data().deviceName,
      deviceTag: document.data().deviceTag,
      status: document.data().status,
    };
    allDevices.push(data);
  });
  return allDevices;
}

async function getAvailableReservations() {
  const querySnapshot = await getDocs(collection(db, 'All Devices'));
  const allDevices = [];
  querySnapshot.forEach((document) => {
    const data = {
      deviceName: document.data().deviceName,
      deviceTag: document.data().deviceTag,
      minimumDuration: document.data().minimumDuration,
      maximumDuration: document.data().maximumDuration,
    };
    allDevices.push(data);
  });
  return allDevices;
}

// Read all current reservations for a user
// Parameter - username
async function retrieveUserCurrentRes(username) {
  const q = query(collection(db, 'Current Reservations'), where('username', '==', username));
  const querySnapshot = await getDocs(q);
  const currentRes = [];
  querySnapshot.forEach((document) => {
    const data = {
      checkInDate: document.data().checkInDate,
      checkOutDate: document.data().checkOutDate,
      deviceName: document.data().deviceName,
      deviceTag: document.data().deviceTag,
      firstName: document.data().firstName,
      lastName: document.data().lastName,
      reservationID: document.data().reservationID,
      status: document.data().status,
      username: document.data().username,
    };
    currentRes.push(data);
  });
  return currentRes;
}

// Read all current reservations for a user that are checked out
// Parameter - username
async function retrieveUserCheckedOutItems(username) {
  const q = query(collection(db, 'Current Reservations'), where('username', '==', username), where('status', '==', 'Checked Out'));
  const querySnapshot = await getDocs(q);
  const currentRes = [];
  querySnapshot.forEach((document) => {
    const data = {
      pickUpDate: document.data().pickUpDate.toDate(),
      returnDate: document.data().returnDate.toDate(),
      deviceName: document.data().deviceName,
      deviceTag: document.data().deviceTag,
      firstName: document.data().firstName,
      lastName: document.data().lastName,
      maximumDuration: document.data().maximumDuration,
      minimumDuration: document.data().minimumDuration,
      reservationID: document.data().reservationID,
      status: document.data().status,
      username: document.data().username,
    };
    currentRes.push(data);
  });
  return currentRes;
}

// Read all current reservations for a user that are ready
// Parameter - username
async function retrieveUserUpcomingReservations(username) {
  const q = query(collection(db, 'Current Reservations'), where('username', '==', username), where('status', '==', 'Ready'));
  const querySnapshot = await getDocs(q);
  const currentRes = [];
  querySnapshot.forEach((document) => {
    const data = {
      pickUpDate: document.data().pickUpDate.toDate(),
      returnDate: document.data().returnDate.toDate(),
      deviceName: document.data().deviceName,
      deviceTag: document.data().deviceTag,
      firstName: document.data().firstName,
      lastName: document.data().lastName,
      maximumDuration: document.data().maximumDuration,
      minimumDuration: document.data().minimumDuration,
      reservationID: document.data().reservationID,
      status: document.data().status,
      username: document.data().username,
    };
    currentRes.push(data);
  });
  return currentRes;
}

// Read all past reservations from a user
// Parameter - username
async function retrieveUserPastRes(username) {
  const q = query(collection(db, 'Past Reservations'), where('username', '==', username));
  const querySnapshot = await getDocs(q);
  const pastRes = [];
  querySnapshot.forEach((document) => {
    const data = {
      checkInDate: document.data().checkInDate,
      checkOutDate: document.data().checkOutDate,
      deviceName: document.data().deviceName,
      deviceTag: document.data().deviceTag,
      firstName: document.data().firstName,
      lastName: document.data().lastName,
      reservationID: document.data().reservationID,
      status: document.data().status,
      username: document.data().username,
    };
    pastRes.push(data);
  });
  return pastRes;
}

// Inventory listener -- constantly checking for status changes
function inventoryStatusChanges() {
  const q = query(collection(db, 'All Devices'), where('status', '==', 'Ready'));
  const devices = [];
  const unsub = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((document) => {
      devices.push(document.data().deviceTag);
    });
  });
  return devices;
}

async function getTimeAvailability() {
  const x = 5; // minutes interval
  const availableTimes = []; // time array
  let tt = 0; // start time
  const ap = ['AM', 'PM']; // AM-PM
  // loop to increment the time and push results in array
  for (let i = 0; tt < 24 * 60; i += 1) {
    const hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    const mm = (tt % 60); // getting minutes of the hour in 0-55 format
    if (hh % 12 === 0) {
      availableTimes[i] = `${('12').slice(-2)}:${(`0${mm}`).slice(-2)}${ap[Math.floor(hh / 12)]}`;
    } else {
      availableTimes[i] = `${(`0${hh % 12}`).slice(-2)}:${(`0${mm}`).slice(-2)}${ap[Math.floor(hh / 12)]}`;
    }
    tt += x;
  }
  return availableTimes;
}

async function deleteUpcomingReservations(itemToDelete) {
  const myObj = JSON.stringify(itemToDelete);
  const myObjSplit = myObj.split('"reservationID":');
  const stringAfterResID = myObjSplit[1];
  const findResID = stringAfterResID.split(',');
  const resIDWithQuotes = findResID[0];
  const resIDSplit = resIDWithQuotes.split('"');
  const resID = resIDSplit[1];
  console.log(resID);
  await deleteDoc(doc(db, 'Current Reservations', resID));
}

export {
  getCollection,
  getAvailableReservations,
  retrieveUserCurrentRes,
  retrieveUserCheckedOutItems,
  retrieveUserUpcomingReservations,
  retrieveUserPastRes,
  inventoryStatusChanges,
  getTimeAvailability,
  deleteUpcomingReservations,
};
