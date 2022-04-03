/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import {
  getDocs, onSnapshot, query, collection, where, deleteDoc, updateDoc, setDoc, doc as docFire,
} from 'firebase/firestore';
import db from './techCenterCheckout.Firestore';

const dateOptions = { hour: 'numeric', minute: 'numeric' };

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
    console.log(`Exception in "getCollection": ${e}`);
  }
  return allDevices;
}

// Read all items from upcoming (current) reservations
async function getAdminCurrent() {
  const adminCurrent = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'Current Reservations'));
    querySnapshot.forEach((doc) => {
      const data = {
        returnDate: doc.data().returnDate.toDate().toLocaleDateString('en-US', dateOptions),
        pickUpDate: doc.data().pickUpDate.toDate().toLocaleDateString('en-US', dateOptions),
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
    console.log(`Exception in "getAdminCurrent": ${e}`);
  }
  return adminCurrent;
}

// Read all items from past reservations (reservations log)
async function getResLog() {
  const resLog = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'Past Reservations'));
    querySnapshot.forEach((doc) => {
      const data = {
        returnDate: doc.data().returnDate.toDate().toLocaleDateString('en-US', dateOptions),
        pickUpDate: doc.data().pickUpDate.toDate().toLocaleDateString('en-US', dateOptions),
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
    console.log(`Exception in "getResLog": ${e}`);
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
    console.log(`Exception in "getAvailableReservations": ${e}`);
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
        returnDate: doc.data().returnDate.toDate().toLocaleDateString('en-US', dateOptions),
        pickUpDate: doc.data().pickUpDate.toDate().toLocaleDateString('en-US', dateOptions),
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
    console.log(`Exception in "retrieveUserCurrentRes": ${e}`);
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
        returnDate: doc.data().returnDate.toDate().toLocaleDateString('en-US', dateOptions),
        pickUpDate: doc.data().pickUpDate.toDate().toLocaleDateString('en-US', dateOptions),
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
    console.log(`Exception in "retrieveUserCheckedOutItems": ${e}`);
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
        pickUpDate: doc.data().pickUpDate.toDate().toLocaleDateString('en-US', dateOptions),
        returnDate: doc.data().returnDate.toDate().toLocaleDateString('en-US', dateOptions),
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
    console.log(`Exception in "retrieveUserUpcomingReservations": ${e}`);
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
        pickUpDate: doc.data().pickUpDate.toDate().toLocaleDateString('en-US', dateOptions),
        returnDate: doc.data().returnDate.toDate().toLocaleDateString('en-US', dateOptions),
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
    console.log(`Exception in "retrieveUserPastRes": ${e}`);
  }
  return pastRes;
}

// Inventory listener -- constantly checking for status changes
function inventoryStatusChanges() {
  const devices = [];
  try {
    const q = query(collection(db, 'All Devices'), where('status', '==', 'Ready'));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        devices.push(doc.data().deviceTag);
      });
    });
  } catch (e) {
    console.log(`Exception in "inventoryStatusChanges": ${e}`);
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

async function deleteUpcomingReservations(itemToDelete) {
  const myObj = JSON.stringify(itemToDelete);
  const myObjSplit = myObj.split('"reservationID":');
  const stringAfterResID = myObjSplit[1];
  const findResID = stringAfterResID.split(',');
  const resIDWithQuotes = findResID[0];
  const resIDSplit = resIDWithQuotes.split('"');
  const resID = resIDSplit[1];
  await deleteDoc(docFire(db, 'Current Reservations', resID));
}

async function updateDeviceStatus(itemToUpdateStatus) {
  let finalDeviceTag = -1;
  const myObj = JSON.stringify(itemToUpdateStatus);
  const myObjSplit = myObj.split('"deviceTag":');
  const partOfString = myObjSplit[1];
  const objCommaSplit1 = partOfString.split(',')[0];
  if (objCommaSplit1.includes('"')) {
    const objQuoteSplit1 = partOfString.split('"');
    finalDeviceTag = objQuoteSplit1[1];
  } else {
    finalDeviceTag = objCommaSplit1;
  }

  const deviceStatus = 'Checked In';

  await updateDoc(docFire(db, 'All Devices', finalDeviceTag), {
    deviceTag: finalDeviceTag,
    status: deviceStatus,
  });

  // await deleteDoc(docFire(db, 'Current Reservations', resID));
}

async function deleteDevice(itemToDelete) {
  let finalDeviceTag = -1;
  const myObj = JSON.stringify(itemToDelete);
  const myObjSplit = myObj.split('"deviceTag":');
  const partOfString = myObjSplit[1];
  const objCommaSplit1 = partOfString.split(',')[0];
  if (objCommaSplit1.includes('"')) {
    const objQuoteSplit1 = partOfString.split('"');
    finalDeviceTag = objQuoteSplit1[1];
  } else {
    finalDeviceTag = objCommaSplit1;
  }
  await deleteDoc(docFire(db, 'All Devices', finalDeviceTag));
}

async function updateDevice(itemToUpdate) {
  let finalDeviceTag = -1;
  const myObj = JSON.stringify(itemToUpdate);
  const myObj2 = JSON.stringify(itemToUpdate);
  const myObj3 = JSON.stringify(itemToUpdate);
  const myObjSplit = myObj.split('"deviceTag":');
  const partOfString = myObjSplit[1];
  const objCommaSplit1 = partOfString.split(',')[0];
  if (objCommaSplit1.includes('"')) {
    const objQuoteSplit1 = partOfString.split('"');
    finalDeviceTag = objQuoteSplit1[1];
  } else {
    finalDeviceTag = objCommaSplit1;
  }
  const myObj2Split = myObj2.split('"deviceName":');
  const partOfString2 = myObj2Split[1];
  const objQuoteSplit = partOfString2.split('"');
  const finalDeviceName = objQuoteSplit[1];

  const myObj3Split = myObj3.split('"status":');
  const partOfString3 = myObj3Split[1];
  const objQuoteSplit3 = partOfString3.split('"');
  const finalDeviceStatus = objQuoteSplit3[1];
  // eslint-disable-next-line quote-props
  await updateDoc(docFire(db, 'All Devices', finalDeviceTag), {
    deviceTag: finalDeviceTag,
    deviceName: finalDeviceName,
    status: finalDeviceStatus,
  });
}

async function addDevice(itemToAdd) {
  let finalDeviceTag = -1;
  const myObj = JSON.stringify(itemToAdd);
  const myObj2 = JSON.stringify(itemToAdd);
  const myObj3 = JSON.stringify(itemToAdd);
  const myObjSplit = myObj.split('"deviceTag":');
  const partOfString = myObjSplit[1];
  const objCommaSplit1 = partOfString.split(',')[0];
  if (objCommaSplit1.includes('"')) {
    const objQuoteSplit1 = partOfString.split('"');
    finalDeviceTag = objQuoteSplit1[1];
  } else {
    finalDeviceTag = objCommaSplit1;
  }

  const myObj2Split = myObj2.split('"deviceName":');
  const partOfString2 = myObj2Split[1];
  const objQuoteSplit = partOfString2.split('"');
  const finalDeviceName = objQuoteSplit[1];

  const myObj3Split = myObj3.split('"status":');
  const partOfString3 = myObj3Split[1];
  const objQuoteSplit3 = partOfString3.split('"');
  const finalDeviceStatus = objQuoteSplit3[1];
  // eslint-disable-next-line quote-props
  // eslint-disable-next-line prefer-template
  await setDoc(docFire(db, 'All Devices/' + finalDeviceTag), {
    deviceTag: finalDeviceTag,
    deviceName: finalDeviceName,
    status: finalDeviceStatus,
  });
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
  deleteUpcomingReservations,
  updateDeviceStatus,
  deleteDevice,
  updateDevice,
  addDevice,
};
