<template>
  <v-container
    fluid
  >
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
import bannerStore from '../../store';

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
      { text: 'Maximum Duration', value: 'maximumDuration' },
      { text: 'Actions', value: 'actions', filterable: false },
    ],
    devices: [],
    selctedIndex: -1,
    selectedItem: {
      deviceName: '',
      deviceTag: -1,
      minimumDuration: '',
      maximumDuration: '',
      status: '',
    },
  }),

  created() {
    bannerStore.setTitle('Available Reservations');
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
      this.selctedIndex = this.devices.indexOf(item);
      this.selectedItem = { ...item };
      console.log(this.selectedItem.deviceName);
    },
  },
};
</script>
