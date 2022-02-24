/* eslint-disable no-unused-vars */
import {
  getDocs, onSnapshot, query, collection, where,
} from 'firebase/firestore';
import db from './techCenterCheckout.Firestore';

// Read all items from inventory
export default async function getCollection() {
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
      reservationID: doc.data().reservationID,
      status: doc.data().status,
      studentID: doc.data().studentID,
      studentName: doc.data().studentName,
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
      reservationID: doc.data().reservationID,
      status: doc.data().status,
      studentID: doc.data().studentID,
      studentName: doc.data().studentName,
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
