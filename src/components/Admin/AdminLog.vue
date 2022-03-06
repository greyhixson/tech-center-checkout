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
        >
        <img
          class="mr-3"
          src="https://brand.uark.edu/_resources/images/shield.jpg"
          height="55px"
          width="55px"
          alt="University of Arkansas Logo"
          left
        >
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
          right
          absolute
        >
          Sign Out
        </v-btn>
        <v-spacer />
      </v-toolbar>
      <v-banner
        single-line
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
export default {
  name: 'AdminLog',
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Reservation Log (Reservation #)',
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
          reservationID: 'AD1234',
          deviceName: 'Lenovo Mouse',
          deviceTag: 1234,
          firstName: 'Jerry',
          lastName: 'Doe',
          username: 'jdoe4',
          checkOutDate: new Date('2021-12-12T19:10:00Z'),
          checkInDate: new Date('2021-12-13T21:30:00Z'),
          status: 'Checked In',
        },
        {
          reservationID: 'XT8796',
          deviceName: 'Sony Camera',
          deviceTag: 9999,
          firstName: 'Jack',
          lastName: 'Doe',
          username: 'jdoe5',
          checkOutDate: new Date('2022-01-11T00:30:00Z'),
          checkInDate: new Date('2022-01-12T18:00:00Z'),
          status: 'Checked In',
        },
        {
          reservationID: 'QW3258',
          deviceName: 'Dell Laptop',
          deviceTag: 9090,
          firstName: 'John',
          lastName: 'Doe',
          username: 'jdoe3',
          checkOutDate: new Date('2021-02-13T21:00:00Z'),
          checkInDate: new Date('2021-02-13T22:00:00Z'),
          status: 'Checked In',
        },
      ],
    };
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
