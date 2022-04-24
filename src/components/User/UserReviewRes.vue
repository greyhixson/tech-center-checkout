<template>
  <v-container>
    <v-card>
      <v-toolbar
        class="black white--text mb-4"
      >
        <v-toolbar-title>
          {{ selectionStore.deviceName }}
        </v-toolbar-title>
      </v-toolbar>
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-date-picker
          v-model="date"
          @input="menu2 = false"
        />
      </v-menu>
      <v-select
        :items="times"
        label="Time"
        prepend-icon="mdi-clock"
      />
      <v-select
        :items="duration"
        label="Duration"
        prepend-icon="mdi-timer"
      />
    </v-card>
    <v-btn
      href="/#/UserConfirmRes"
      class="mt-6 ml-2"
    >
      Submit
    </v-btn>
  </v-container>
</template>

<script>
import { getTimeAvailability } from '../../firebase/techCenterCheckout.Data';
import { bannerStore, selectionStore } from '../../store';

export default {
  name: 'UserReviewRes',
  data: () => ({
    selectionStore,
    menu2: false,
    times: [],
    duration: ['1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'],
    date: new Date(Date.now()).toISOString().substr(0, 10),
  }),
  created() {
    bannerStore.setTitle('Review Reservation');
    bannerStore.setButton('Home');
    this.getAvailablTimeFromData();
  },
  methods: {
    async getAvailablTimeFromData() {
      try {
        const availableTimes = await getTimeAvailability();
        this.times = availableTimes;
      } catch (e) {
        console.log(e);
      }
    },

  },
};
</script>
