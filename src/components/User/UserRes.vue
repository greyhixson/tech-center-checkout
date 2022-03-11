<template>
  <v-container>
    <v-form
      class="pt-4"
      @submit.prevent="submit"
    >
      <v-text-field
        v-model="username"
        label="Enter your username"
        placeholder="Username"
        solo
        width="50px"
      />
      <v-btn
        class="mr-4 mb-8"
        type="submit"
        @click="submit"
      >
        submit
      </v-btn>
    </v-form>
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
      />
    </v-card>
  </v-container>
</template>

<script>
import { retrieveUserCheckedOutItems, retrieveUserUpcomingReservations } from '../../firebase/techCenterCheckout.Data';
import { bannerStore } from '../../store';

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
    };
  },
  created() {
    bannerStore.setTitle('Reservations');
  },
  methods: {
    async getFBCollection() {
      try {
        const inventory = await retrieveUserCheckedOutItems(this.username);
        this.inventory = inventory;
      } catch (e) {
        console.log(e);
      }
    },
    async getUpcomingReservations() {
      try {
        const inventoryUpcoming = await retrieveUserUpcomingReservations(this.username);
        this.inventoryUpcoming = inventoryUpcoming;
      } catch (e) {
        console.log(e);
      }
    },
    submit() {
      this.getFBCollection();
      this.getUpcomingReservations();
    },
  },
};
</script>
