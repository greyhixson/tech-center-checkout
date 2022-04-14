<template>
  <v-card
    class="mx-16"
  >
    <v-toolbar
      color="light-grey"
      light
    >
      <v-toolbar-title>Reservations Log</v-toolbar-title>

      <v-spacer />
    </v-toolbar>

    <v-list
      subheader
    >
      <v-list-item
        v-for="device in devices"
        :key="device.name"
      >
        <v-list-item-avatar>
          <v-icon
            :color="getColor(device.status)"
            light
          >
            bookmark
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="device.deviceName" />
          <v-list-item-subtitle v-text="'Reservation ID: ' + device.reservationID" />
          <v-list-item-subtitle v-text="'Device Tag: ' + device.deviceTag" />
          <v-list-item-subtitle v-text="'Username: ' + device.username" />
          <v-list-item-subtitle v-text="'First Name: ' + device.firstName" />
          <v-list-item-subtitle v-text="'Last Name: ' + device.lastName" />
          <v-list-item-subtitle v-text="'Return Date: ' + device.returnDate" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { bannerStore } from '../../store';
import { getResLog } from '../../firebase/techCenterCheckout.Data';

export default {
  name: 'AdminLog',
  data: () => ({
    devices: [],
  }),

  created() {
    bannerStore.setTitle('Reservation Log');
    bannerStore.setButton('Home');
    this.getResLogFromFB();
  },
  methods: {
    async getResLogFromFB() {
      try {
        const log = await getResLog();
        this.devices = log;
      } catch (e) {
        console.log(e);
      }
    },

    getColor(status) {
      let color = '';
      if (status === 'Checked Out') color = 'red';
      else if (status === 'Ready For Pickup') color = 'orange';
      else if (status === 'Checked In') color = 'green';
      return color;
    },
  },
};
</script>
