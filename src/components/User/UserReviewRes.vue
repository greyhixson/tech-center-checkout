<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8">
        <v-card>
          <v-toolbar
            class="black white--text mb-4"
          >
            <v-toolbar-title>
              {{ selectionStore.deviceName }}
            </v-toolbar-title>
          </v-toolbar>
          <v-form class="ml-4">
            <v-col>
              <h2> Checkout Date </h2>
              <date-picker
                v-model="value1"
                style="min-width: 300px;"
                type="datetime"
                format="M/D/YYYY h:mm A"
                :disabled-date="disablePickup"
                :default-value="new Date()"
                :time-picker-options="{
                  start: '08:00',
                  step: '00:15',
                  end: '22:00',
                  format: 'h:mm A'
                }"
                @input="onPickupChange()"
              />
            </v-col>
            <v-col>
              <h2> Return Date </h2>
              <date-picker
                v-model="value2"
                style="min-width: 300px;"
                type="datetime"
                format="M/D/YYYY h:mm A"
                :default-value="new Date()"
                :disabled-date="disableReturn"
                :time-picker-options="{
                  start: '08:00',
                  step: '00:15',
                  end: '22:00',
                  format: 'h:mm A'
                }"
                @input="onReturnChange()"
              />
            </v-col>
          </v-form>
          <v-btn
            class="mb-8 ml-8 mt-4"
            href="/#/UserConfirmRes"
            @click="addReservation()"
          >
            Submit Reservation
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {
  createReservation,
  getDeviceAvailabilityInfo,
  getSelectedDeviceInfo,
  getUserInfo,
} from '@/firebase/techCenterCheckout.Data';
import { bannerStore, selectionStore, userStore } from '@/store';

export default {
  name: 'UserReviewRes',
  components: { DatePicker },
  data: () => ({
    selectionStore,
    selectedTime: '',
    selectedDuration: '',
    menu: false,
    value1: '',
    value2: '',
    deviceAvailability: [],
    pickUpArr: [],
    returnArr: [],
    disabledDates: [],
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
    this.getReservationDetails();
    this.getDeviceAvailability();
  },
  methods: {
    disableReturn(date) {
      const maxDate = new Date(this.value1);
      const pastDate = new Date(this.value1);
      maxDate.setDate(maxDate.getDate() + 7);
      pastDate.setDate(pastDate.getDate());
      return date > maxDate || date < pastDate;
    },
    disablePickup(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
    async getDeviceAvailability() {
      try {
        // eslint-disable-next-line max-len
        [this.pickUpArr, this.returnArr] = await getDeviceAvailabilityInfo(selectionStore.deviceTag);
        for (let i = 0; i < this.pickUpArr.length; i += 1) {
          const currentDate = new Date(this.pickUpArr[i]);
          while (currentDate <= this.returnArr[i]) {
            this.disabledDates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
          }
        }
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
      } catch (e) {
        console.log(e);
      }
      try {
        const userInfo = await getUserInfo(userStore.username);
        this.reservationDetails.firstName = userInfo[0].firstName;
        this.reservationDetails.lastName = userInfo[0].lastName;
        console.log(userInfo);
      } catch (e) {
        console.log(e);
      }
    },
    async addReservation() {
      try {
        // eslint-disable-next-line max-len
        this.reservationDetails.reservationID = this.reservationDetails.firstName.slice(0, 1) + this.reservationDetails.lastName.slice(0, 1) + Math.random().toString().slice(2, 4);
        await createReservation(this.reservationDetails);
      } catch (e) {
        console.log(e);
      }
    },
    onPickupChange() {
      this.reservationDetails.pickUpDate = this.value1;
    },
    onReturnChange() {
      this.reservationDetails.returnDate = this.value2;
    },
  },
};
</script>
