<template>
  <v-container>
    <v-card
      class="mt-4"
    >
      <v-card-title
        class="black white--text mb-4"
      >
        Items Checked Out
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
        :loading="!inventoryLoaded"
      />
    </v-card>
    <v-card
      class="mt-8"
    >
      <v-card-title
        class="black white--text mb-4"
      >
        Upcoming Reservation(s)
        <v-spacer />
        <v-text-field
          v-model="searchUpcoming"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="inventoryUpcoming"
        :search="searchUpcoming"
        :loading="!inventoryUpcomingLoaded"
      />
    </v-card>
  </v-container>
</template>

<script>
import { retrieveUserCheckedOutItems, retrieveUserUpcomingReservations } from '../../firebase/techCenterCheckout.Data';
import { bannerStore, userStore } from '../../store';

export default {
  name: 'UserRes',
  data() {
    return {
      username: '',
      search: '',
      searchUpcoming: '',
      headers: [
        {
          text: 'Item',
          value: 'deviceName',
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
          text: 'Duration',
          value: 'maximumDuration',
        },
      ],
      inventory: [],
      inventoryUpcoming: [],
      inventoryLoaded: false,
      inventoryUpcomingLoaded: false,
    };
  },
  created() {
    bannerStore.setTitle('Reservations');
    bannerStore.setButton('Home');

    this.username = userStore.username;
    this.getFBCollection();
    this.getUpcomingReservations();
  },
  methods: {
    async getFBCollection() {
      try {
        this.inventoryLoaded = false;
        const inventory = await retrieveUserCheckedOutItems(this.username);
        this.inventory = inventory;
        this.inventoryLoaded = true;
      } catch (e) {
        console.log(e);
      }
    },
    async getUpcomingReservations() {
      try {
        this.inventoryUpcomingLoaded = false;
        const inventoryUpcoming = await retrieveUserUpcomingReservations(this.username);
        this.inventoryUpcoming = inventoryUpcoming;
        this.inventoryUpcomingLoaded = true;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
