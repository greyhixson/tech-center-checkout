/* eslint-disable no-unused-vars */
import {
  getDocs, onSnapshot, query, collection, where,
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

export default function getTimeAvailability() {
  const x = 5; // minutes interval
  const times = []; // time array
  let tt = 0; // start time
  const ap = ['AM', 'PM']; // AM-PM
  // loop to increment the time and push results in array
  for (let i = 0; tt < 24 * 60; i += 1) {
    const hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    const mm = (tt % 60); // getting minutes of the hour in 0-55 format
    times[i] = `${(`0${hh % 12}`).slice(-2)}:${(`0${mm}`).slice(-2)}${ap[Math.floor(hh / 12)]}`;
    tt += x;
  }
  return times;
}

export {
  getCollection,
  retrieveUserCurrentRes,
  retrieveUserPastRes,
  inventoryStatusChanges,
  getTimeAvailability,
};
