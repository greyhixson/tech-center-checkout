<template>
  <v-container
    fluid
  >
    <v-card
      class="mb-16 grey lighten-4"
      style="height: 100%;"
    >
      <v-system-bar />
      <v-toolbar
        flat
        height="65%"
      >
        <v-toolbar-side-icon
          :left="true"
        >
          <img
            class="mr-3"
            src="https://brand.uark.edu/_resources/images/shield.jpg"
            height="55px"
            width="55px"
          >
        </v-toolbar-side-icon>
        <v-toolbar-title
          class="text-h5"
        >
          Welcome,
          <a
            href="/#/Profile"
            class="text-decoration-none red--text text--darken-4"
          >
            Admin
          </a>
        </v-toolbar-title>
        <v-btn
          depressed
          :right="true"
          :absolute="true"
        >
          Sign Out
        </v-btn>
        <v-spacer />
      </v-toolbar>
      <v-banner
        single-line
        :sticky="sticky"
        height="75%"
      />
    </v-card>
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
    </v-data-table>
  </v-container>
</template>

<script>
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
      devices: [
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
};
</script>
