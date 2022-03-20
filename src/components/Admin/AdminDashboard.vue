<template>
  <v-container
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-card
        class="mt-5"
        height="500"
        width="320"
        href="/#/AdminActiveRes"
      >
        <v-card-text
          class="text-h5 font-weight-light black--text"
          style="background-color: #E0E0E0;"
        >
          ACTIVE RESERVATIONS
        </v-card-text>
        <span
          class="material-icons"
        >
          <v-icon
            size="320"
            style="padding: 45px 0;
                color: black;
                text-align: center;"
          >schedule</v-icon>
        </span>
      </v-card>
      <v-card
        class="mt-5 ml-10"
        height="500"
        width="320"
      >
        <v-card-text
          class="text-h5 font-weight-light black--text"
          style="background-color: #E0E0E0;"
        >
          RESERVATION LOG
        </v-card-text>
        <span
          class="material-icons"
        >
          <v-icon
            size="320"
            style="padding: 45px 0;
                color: black;
                text-align: center;"
          >list_alt</v-icon>
        </span>
      </v-card>
      <v-card
        class="mt-5 ml-10"
        width="320"
        height="500"
        href="/#/AllDevices"
      >
        <v-card-text
          class="text-h5 font-weight-light black--text"
          style="background-color: #E0E0E0;"
        >
          INVENTORY
        </v-card-text>
        <span
          class="material-icons"
        >
          <v-icon
            size="320"
            style="padding: 45px 0;
                color: black;
                text-align: center;"
          >plagiarism</v-icon>
        </span>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { bannerStore } from '../../store';

export default {
  name: 'AdminDashboard',
  created() {
    bannerStore.setTitle('Admin Dashboard');
    bannerStore.setButton('Sign Out');
  },
};
</script>
