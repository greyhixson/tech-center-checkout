<template>
  <v-container
    fluid
  >
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="devices"
      :single-select="singleSelect"
      item-key="reservationID"
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
import store from '../../store';

export default {
  name: 'AdminActive',
  data() {
    return {
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
      devices: [ // data entered manually, will be replaced with functions calling from database
        {
          reservationID: 'XT3456',
          deviceName: 'Sony Camera',
          deviceTag: 8888,
          firstName: 'Janet',
          lastName: 'Doe',
          username: 'jdoe1',
          checkOutDate: new Date('2022-02-11T00:30:00Z'),
          checkInDate: new Date('2022-02-12T18:00:00Z'),
          status: 'Checked In',
        },
        {
          reservationID: 'AD1234',
          deviceName: 'Lenovo Mouse',
          deviceTag: 1234,
          firstName: 'Jane',
          lastName: 'Doe',
          username: 'jdoe2',
          checkOutDate: new Date('2022-02-12T19:10:00Z'),
          checkInDate: new Date('2022-02-13T21:30:00Z'),
          status: 'Checked Out',
        },
        {
          reservationID: 'QW3248',
          deviceName: 'Dell Laptop',
          deviceTag: 9090,
          firstName: 'John',
          lastName: 'Doe',
          username: 'jdoe3',
          checkOutDate: new Date('2022-02-13T21:00:00Z'),
          checkInDate: new Date('2022-02-13T22:00:00Z'),
          status: 'Ready',
        },
      ],
    };
  },
  created() {
    store.setBanner('Admin Reservations');
  },
  methods: {
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
