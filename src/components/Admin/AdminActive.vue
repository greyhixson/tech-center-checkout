<template>
  <v-card
    class="mx-16"
  >
    <v-toolbar
      color="light gray"
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

        <v-list-item-action>
          <template>
            <v-btn
              icon
              color="grey lighten-1"
              @click="dialog = !dialog"
            >
              <v-icon>mdi-information</v-icon>
            </v-btn>
          </template>
        </v-list-item-action>

        <v-dialog
          v-model="dialog"
          max-width="500px"
          :retain-focus="false"
        >
          <v-card>
            <v-card-text>
              <v-card-title v-text="'Additional Information'" />
              <v-spacer />
              <v-card-subtitle v-text="'Device Tag: ' + device.deviceTag" />
              <v-card-subtitle v-text="'Reservation ID: ' + device.reservationID" />
              <v-card-subtitle v-text="'Status: ' + device.status" />
              <v-card-subtitle v-text="'Username: ' + device.username" />
              <v-card-subtitle v-text="'First Name: ' + device.firstName" />
              <v-card-subtitle v-text="'Last Name: ' + device.lastName" />
            </v-card-text>

            <v-card-actions>
              <v-spacer />

              <v-btn
                text
                @click="dialog = false"
              >
                Done
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
    dialog: false,
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
