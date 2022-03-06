<template>
  <v-card
    class="mb-8 mt-4 grey lighten-4 mx-auto"
    width="85%"
  >
    <v-system-bar />
    <v-toolbar
      flat
      height="65%"
    >
      <img
        class="mr-3"
        src="https://brand.uark.edu/_resources/images/shield.jpg"
        height="55px"
        width="55px"
      >
      <v-toolbar-title
        class="text-h5"
      >
        {{ store.bannerTitle }}
      </v-toolbar-title>
      <v-btn
        depressed
        right
        absolute
        to="/"
      >
        Home
        <v-icon
          size="30"
          style="padding: 0;
                color: #00264D;"
        >
          home
        </v-icon>
      </v-btn>
      <v-spacer />
    </v-toolbar>
    <v-banner
      single-line
      height="75%"
    />
  </v-card>
</template>

<script>
import store from '../store';

export default {
  name: 'Banner',
  data() {
    return {
      store,
    };
  },
};
</script>
