<!--
Lifecycle Hooks https://v2.vuejs.org/v2/guide/instance.html?redirect=true#Lifecycle-Diagram
Export and import, default vs named: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
Async/Await vs. Promises https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f
WE ARE USING VUE 2, DOCUMENTATION IS VERY DIFFERENT BETWEEN THE VERSIONS
-->

<template>
  <v-container>
    <v-card>
      <v-card-title>
        Retrieve Collection by Username
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="inventory"
        :search="search"
      />
    </v-card>
  </v-container>
</template>

<script>
import { retrieveUserCurrentRes } from '../../firebase/techCenterCheckout.Data';

export default {
  name: 'GetCollectionEx',
  // Username is passed as a 'prop' from the parent component
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Device Name',
          value: 'deviceName',
        },
        {
          text: 'Device Tag',
          value: 'deviceTag',
        },
        {
          text: 'Status',
          value: 'status',
        },
        {
          text: 'Check In',
          value: 'checkInDate',
        },
        {
          text: 'Check Out',
          value: 'checkOutDate',
        },
        {
          text: 'First Name',
          value: 'firstName',
        },
        {
          text: 'Last Name',
          value: 'lastName',
        },
        {
          text: 'Reservation ID',
          value: 'reservationID',
        },
        {
          text: 'Username',
          value: 'username',
        },
      ],
      inventory: [],
    };
  },
  created() {
    this.getFBCollection();
  },
  methods: {
    async getFBCollection() {
      try {
        // This component isn't loaded until the username is sent
        // so username should be guaranteed before the method is called
        const inventory = await retrieveUserCurrentRes(this.username);
        this.inventory = inventory;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
