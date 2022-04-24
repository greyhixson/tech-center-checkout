<template>
  <v-container
    fluid
  >
    <v-btn
      color="#E0E0E0"
      class="mb-8"
      href="/#/UserRes"
      block
      large
    >
      My Reservations
    </v-btn>
    <v-card>
      <v-card-title>
        <v-spacer />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="devices"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              color="#600000"
              single-line
              hide-details
              class="pr-16"
              width="800px"
            />
            <v-spacer />
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            href="/#/UserReviewRes"
            @click="selectItem(item)"
          >
            Reserve
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { getAvailableReservations } from '../../firebase/techCenterCheckout.Data';
import { bannerStore, selectionStore } from '../../store';

export default {
  name: 'UserHome',
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Device Name',
        align: 'start',
        filterable: true,
        value: 'deviceName',
      },
      { text: 'Minimum Duration', value: 'minimumDuration' },
      { text: 'Device Tag', value: 'deviceTag' },
      { text: 'Actions', value: 'actions', filterable: false },
    ],
    devices: [],
  }),

  created() {
    bannerStore.setTitle('Available Reservations');
    bannerStore.setButton('Sign Out');
    this.getAvailableResFromFB();
  },
  methods: {
    async getAvailableResFromFB() {
      try {
        const inventory = await getAvailableReservations();
        this.devices = inventory;
      } catch (e) {
        console.log(e);
      }
    },
    selectItem(item) {
      selectionStore.setDeviceTag(item.deviceTag);
      selectionStore.setDeviceName(item.deviceName);
    },
  },
};
</script>
