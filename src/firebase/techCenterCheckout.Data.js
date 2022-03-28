/* eslint-disable no-unused-vars */
import {
  getDocs, onSnapshot, query, collection, where, Timestamp,
} from 'firebase/firestore';
import db from './techCenterCheckout.Firestore';

// Read all items from inventory
async function getCollection() {
  const querySnapshot = await getDocs(collection(db, 'All Devices'));
  const allDevices = [];
  querySnapshot.forEach((doc) => {
    const data = {
      deviceName: doc.data().deviceName,
      deviceTag: doc.data().deviceTag,
      status: doc.data().status,
    };
    allDevices.push(data);
  });
  return allDevices;
}

// Read all items from upcoming (current) reservations
async function getAdminCurrent() {
  const querySnapshot = await getDocs(collection(db, 'Current Reservations'));
  const adminCurrent = [];
  const newTime = new Timestamp();
  querySnapshot.forEach((doc) => {
    const data = {
      returnDate: new Date(newTime.toDate(doc.data().returnDate)),
      pickUpDate: new Date(newTime.toDate(doc.data().pickUpDate)),
      deviceName: doc.data().deviceName,
      deviceTag: doc.data().deviceTag,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      reservationID: doc.data().reservationID,
      status: doc.data().status,
      username: doc.data().username,
      maximumDuration: doc.data().maximumDuration,
      minimumDuration: doc.data().minimumDuration,
    };
    adminCurrent.push(data);
  });
  return adminCurrent;
}

// Read all items from past reservations (reservations log)
async function getResLog() {
  const querySnapshot = await getDocs(collection(db, 'Past Reservations'));
  const resLog = [];
  const newTime = new Timestamp();
  querySnapshot.forEach((doc) => {
    const data = {
      returnDate: new Date(newTime.toDate(doc.data().returnDate)),
      pickUpDate: new Date(newTime.toDate(doc.data().pickUpDate)),
      deviceName: doc.data().deviceName,
      deviceTag: doc.data().deviceTag,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      reservationID: doc.data().reservationID,
      status: doc.data().status,
      username: doc.data().username,
    };
    resLog.push(data);
  });
  return resLog;
  
async function getAvailableReservations() {
  const querySnapshot = await getDocs(collection(db, 'All Devices'));
  const allDevices = [];
  querySnapshot.forEach((doc) => {
    const data = {
      deviceName: doc.data().deviceName,
      deviceTag: doc.data().deviceTag,
      minimumDuration: doc.data().minimumDuration,
      maximumDuration: doc.data().maximumDuration,
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
  querySnapshot.forEach((doc) => {
    const data = {
      checkInDate: doc.data().checkInDate,
      checkOutDate: doc.data().checkOutDate,
      deviceName: doc.data().deviceName,
      deviceTag: doc.data().deviceTag,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      reservationID: doc.data().reservationID,
      status: doc.data().status,
      username: doc.data().username,
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
  querySnapshot.forEach((doc) => {
    const data = {
      checkInDate: doc.data().checkInDate.toDate(),
      checkOutDate: doc.data().checkOutDate.toDate(),
      deviceName: doc.data().deviceName,
      deviceTag: doc.data().deviceTag,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      maximumDuration: doc.data().maximumDuration,
      minimumDuration: doc.data().minimumDuration,
      reservationID: doc.data().reservationID,
      status: doc.data().status,
      username: doc.data().username,
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
  querySnapshot.forEach((doc) => {
    const data = {
      checkInDate: doc.data().checkInDate.toDate(),
      checkOutDate: doc.data().checkOutDate.toDate(),
      deviceName: doc.data().deviceName,
      deviceTag: doc.data().deviceTag,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      maximumDuration: doc.data().maximumDuration,
      minimumDuration: doc.data().minimumDuration,
      reservationID: doc.data().reservationID,
      status: doc.data().status,
      username: doc.data().username,
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
  querySnapshot.forEach((doc) => {
    const data = {
      checkInDate: doc.data().checkInDate,
      checkOutDate: doc.data().checkOutDate,
      deviceName: doc.data().deviceName,
      deviceTag: doc.data().deviceTag,
      firstName: doc.data().firstName,
      lastName: doc.data().lastName,
      reservationID: doc.data().reservationID,
      status: doc.data().status,
      username: doc.data().username,
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
    querySnapshot.forEach((doc) => {
      devices.push(doc.data().deviceTag);
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

export {
  getCollection,
  getAdminCurrent,
  getResLog,
  getAvailableReservations,
  retrieveUserCurrentRes,
  retrieveUserCheckedOutItems,
  retrieveUserUpcomingReservations,
  retrieveUserPastRes,
  inventoryStatusChanges,
  getTimeAvailability,
};
