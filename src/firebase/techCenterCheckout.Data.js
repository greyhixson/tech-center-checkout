/* eslint-disable no-unused-vars */
import {
  getDocs, onSnapshot, query, collection, where, Timestamp,
} from 'firebase/firestore';
import db from './techCenterCheckout.Firestore';

const options = {
  hour: 'numeric',
  minute: 'numeric',
};

// Read all items from inventory
async function getCollection() {
  const allDevices = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'All Devices'));
    querySnapshot.forEach((doc) => {
      const data = {
        deviceName: doc.data().deviceName,
        deviceTag: doc.data().deviceTag,
        status: doc.data().status,
      };
      allDevices.push(data);
    });
  } catch (e) {
    console.log(`Exception in getCollection: ${e.message}`);
  }
  return allDevices;
}

// Read all items from upcoming (current) reservations
async function getAdminCurrent() {
  const adminCurrent = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'Current Reservations'));
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
  } catch (e) {
    console.log(`Exception in getAdminCurrent: ${e.message}`);
  }
  return adminCurrent;
}

// Read all items from past reservations (reservations log)
async function getResLog() {
  const resLog = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'Past Reservations'));
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
  } catch (e) {
    console.log(`Exception in getDocs: ${e.message}`);
  }
  return resLog;
}

async function getAvailableReservations() {
  const allDevices = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'All Devices'));
    querySnapshot.forEach((doc) => {
      const data = {
        deviceName: doc.data().deviceName,
        deviceTag: doc.data().deviceTag,
        minimumDuration: doc.data().minimumDuration,
        maximumDuration: doc.data().maximumDuration,
      };
      allDevices.push(data);
    });
  } catch (e) {
    console.log(`Exception in getAvailableReservations: ${e.message}`);
  }
  return allDevices;
}

// Read all current reservations for a user
// Parameter - username
async function retrieveUserCurrentRes(username) {
  const currentRes = [];
  try {
    const q = query(collection(db, 'Current Reservations'), where('username', '==', username));
    const querySnapshot = await getDocs(q);
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
  } catch (e) {
    console.log(`Exception in retrieveUserCurrentRes: ${e.message}`);
  }
  return currentRes;
}

// Read all current reservations for a user that are checked out
// Parameter - username
async function retrieveUserCheckedOutItems(username) {
  const currentRes = [];
  try {
    const q = query(collection(db, 'Current Reservations'), where('username', '==', username), where('status', '==', 'Checked Out'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = {
        pickUpDate: doc.data().pickUpDate.toDate().toLocaleDateString('en-US', options),
        returnDate: doc.data().returnDate.toDate().toLocaleDateString('en-US', options),
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
  } catch (e) {
    console.log(`Exception in retrieveUserCheckedOutItems: ${e.message}`);
  }
  return currentRes;
}

// Read all current reservations for a user that are ready
// Parameter - username
async function retrieveUserUpcomingReservations(username) {
  const currentRes = [];
  try {
    const q = query(collection(db, 'Current Reservations'), where('username', '==', username), where('status', '==', 'Ready'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = {
        pickUpDate: doc.data().pickUpDate.toDate().toLocaleDateString('en-US'),
        returnDate: doc.data().returnDate.toDate().toLocaleDateString('en-US'),
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
  } catch (e) {
    console.log(`Exception in retrieveUserUpcomingReservations: ${e.message}`);
  }
  return currentRes;
}

// Read all past reservations from a user
// Parameter - username
async function retrieveUserPastRes(username) {
  const pastRes = [];
  try {
    const q = query(collection(db, 'Past Reservations'), where('username', '==', username));
    const querySnapshot = await getDocs(q);
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
  } catch (e) {
    console.log(`Exception in retrieveUserPastRes: ${e.message}`);
  }
  return pastRes;
}

// Inventory listener -- constantly checking for status changes
function inventoryStatusChanges() {
  const devices = [];
  try {
    const q = query(collection(db, 'All Devices'), where('status', '==', 'Ready'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        devices.push(doc.data().deviceTag);
      });
    });
  } catch (e) {
    console.log(`Exception in inventoryStatusChanges: ${e.message}`);
  }
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
