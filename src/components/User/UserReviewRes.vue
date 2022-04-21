<template>
  <v-container>
    <v-card>
      <v-toolbar
        class="black white--text mb-4"
      >
        <v-toolbar-title>
          {{ selectionStore.deviceName }}
        </v-toolbar-title>
      </v-toolbar>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="selectedDate"
            label="Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-date-picker
          v-model="selectedDate"
          @input="menu = false"
        />
      </v-menu>
      <v-select
        v-model="selectedDuration"
        :items="duration"
        label="Duration"
        prepend-icon="mdi-timer"
      />
    </v-card>
    <v-btn
      href="/#/UserConfirmRes"
      class="mt-6 ml-2"
    >
      Submit
    </v-btn>
  </v-container>
</template>

<script>
// import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import {
  getTimeAvailability, getDeviceAvailabilityInfo, getSelectedDeviceInfo,
  getUserInfo, createReservation,
} from '../../firebase/techCenterCheckout.Data';
import { bannerStore, selectionStore, userStore } from '../../store';

export default {
  name: 'UserReviewRes',
  // components: { VueCtkDateTimePicker },
  data: () => ({
    selectionStore,
    selectedTime: '',
    selectedDuration: '',
    menu: false,
    times: [],
    deviceAvailability: [],
    duration: ['1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'],
    selectedDate: new Date(Date.now()).toISOString().substr(0, 10),
    reservationDetails: {
      deviceName: '',
      deviceTag: -1,
      firstName: '',
      lastName: '',
      maximumDuration: '',
      minimumDuration: '',
      pickUpDate: '',
      reservationID: '',
      returnDate: '',
      status: '',
      username: '',
    },
  }),
  created() {
    bannerStore.setTitle('Review Reservation');
    bannerStore.setButton('Home');
    this.reservationDetails.username = userStore.username;
    this.reservationDetails.deviceName = selectionStore.deviceName;
    this.reservationDetails.deviceTag = selectionStore.deviceTag;
    this.getAvailablTimeFromData();
    this.getReservationDetails();
  },
  methods: {
    async getDeviceAvailability() {
      try {
        const deviceAvailability = await getDeviceAvailabilityInfo(selectionStore.deviceTag);
        this.deviceAvailability = deviceAvailability;
        console.log(deviceAvailability);
      } catch (e) {
        console.log(e);
      }
    },
    async getReservationDetails() {
      try {
        const deviceInfo = await getSelectedDeviceInfo(selectionStore.deviceTag);
        this.reservationDetails.maximumDuration = deviceInfo.maximumDuration;
        this.reservationDetails.minimumDuration = deviceInfo.minimumDuration;
        this.reservationDetails.status = deviceInfo.status;
        console.log(deviceInfo);
      } catch (e) {
        console.log(e);
      }
      try {
        const userInfo = await getUserInfo(userStore.username);
        this.reservationDetails.firstName = userInfo.firstName;
        this.reservationDetails.lastName = userInfo.lastName;
        console.log(userInfo);
      } catch (e) {
        console.log(e);
      }
    },
    async addReservation() {
      try {
        // eslint-disable-next-line max-len
        this.reservationDetails.reservationID = this.reservationDetails.firstName.substr(0, 1) + this.reservationDetails.lastName.substr(0, 1) + Math.random().toString().substr(2, 4);
        await createReservation(this.reservationDetails);
      } catch (e) {
        console.log(e);
      }
    },
    async getAvailablTimeFromData() {
      try {
        const availableTimes = await getTimeAvailability();
        this.times = availableTimes;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
