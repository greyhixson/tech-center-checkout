<template>
  <v-card
    max-width="1075"
    class="mx-auto"
  >
    <v-toolbar
      color="light-grey"
      light
    >
      <v-toolbar-title>Upcoming Reservations</v-toolbar-title>

      <v-spacer />
    </v-toolbar>

    <v-list
      subheader
      three-line
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
            schedule
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="device.deviceName" />

          <v-list-item-subtitle v-text="'Pick Up Date: ' + device.pickUpDate" />

          <v-list-item-subtitle v-text="'Return Date: ' + device.returnDate" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { bannerStore } from '../../store';
import { getAdminCurrent } from '../../firebase/techCenterCheckout.Data';

export default {
  name: 'AdminActive',
  data: () => ({
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
      else if (status === 'Ready For Pickup') color = 'orange';
      else if (status === 'Checked In') color = 'green';
      return color;
    },
  },
};
</script>
