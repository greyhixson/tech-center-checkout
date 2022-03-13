<template>
  <v-container
    fluid
  >
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="devices"
      :single-select="singleSelect"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <v-switch
          v-model="singleSelect"
          label="Single select"
          class="pa-3"
        />
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <v-chip
          :color="getColor(item.status)"
          text-color="black"
        >
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { bannerStore } from '../../store';
import { getAdminCurrent } from '../../firebase/techCenterCheckout.Data';

export default {
  name: 'AdminActive',
  data: () => ({
    singleSelect: false,
    selected: [],
    headers: [
      {
        text: 'Active/Upcoming Reservations (Reservation #)',
        align: 'start',
        sortable: false,
        value: 'reservationID',
      },
      { text: 'Device', value: 'deviceName' },
      { text: 'Service Tag', value: 'deviceTag' },
      { text: 'First Name', value: 'firstName' },
      { text: 'Last Name', value: 'lastName' },
      { text: 'Username', value: 'username' },
      { text: 'Check Out Date', value: 'checkOutDate' },
      { text: 'Check In Date', value: 'checkInDate' },
      { text: 'Status', value: 'status' },
    ],
    devices: [],
  }),

  created() {
    bannerStore.setTitle('Admin Reservations');
    bannerStore.setButton('Home');
    this.getCurrentResFromFB();
  },
  methods: {
    async getCurrentResFromFB() {
      try {
        const current = await getAdminCurrent();
        this.devices = current;
      } catch (e) {
        console.log(e);
      }
    },

    getColor(status) {
      let color = '';
      if (status === 'Checked Out') color = 'red';
      else if (status === 'Ready') color = 'orange';
      else if (status === 'Checked In') color = 'green';
      return color;
    },
  },
};
</script>
