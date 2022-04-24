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
          :allowed-dates="disablePickup"
          @input="menu = false"
        />
      </v-menu>
      <date-picker
        v-model="value1"
        type="datetime"
        format="M/D/YYYY h:mm A"
        :default-value="new Date()"
        :disabled-date="disablePickup"
        :time-picker-options="{
          start: '08:00',
          step: '00:15',
          end: '22:00',
          format: 'h:mm A'
        }"
        @input="onPickupChange()"
      />
      <date-picker
        v-model="value2"
        type="datetime"
        format="M/D/YYYY h:mm A"
        :default-value="new Date()"
        :disabled-date="disablePickup"
        :time-picker-options="{
          start: '08:00',
          step: '00:15',
          end: '22:00',
          format: 'h:mm A'
        }"
        @input="onReturnChange()"
      />
    </v-card>
    <v-btn
      class="mt-6 ml-2"
      @click="addReservation()"
    >
      Submit
    </v-btn>
  </v-container>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {
  createReservation, getDeviceAvailabilityInfo, getSelectedDeviceInfo,
  getUserInfo,
} from '../../firebase/techCenterCheckout.Data';
import { bannerStore, selectionStore, userStore } from '../../store';

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
    disablePickup(date) {
      const returnDate = new Date(this.returnArr[0]);
      returnDate.setDate(returnDate.getDate() - 1);
      return date > this.pickUpArr[0] && date < returnDate;
    },
    async getDeviceAvailability() {
      try {
        const deviceAvailability = await getDeviceAvailabilityInfo(selectionStore.deviceTag);
        [this.pickUpArr, this.returnArr] = deviceAvailability;
        for (let i = 0; i < this.pickUpArr.length; i += 1) {
          const currentDate = new Date(this.pickUpArr[i]);
          while (currentDate <= this.returnArr[i]) {
            this.disabledDates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
          }
        }
        console.log(this.disabledDates);
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
        this.reservationDetails.firstName = userInfo.firstName;
        this.reservationDetails.lastName = userInfo.lastName;
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
    onPickupChange() {
      console.log(this.value1);
      const date = Date.parse(this.value1);
      this.reservationDetails.pickUpDate = date / 1000;
    },
    onReturnChange() {
      console.log(this.value2);
      const date = Date.parse(this.value2);
      this.resrvationDetails.returnDate = date / 1000;
    },
  },
};
</script>
