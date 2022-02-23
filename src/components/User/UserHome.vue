<template>
  <v-container>
    <v-card
      class="mb-8 mt-4 grey lighten-4"
      style="height: 100%;"
    >
      <v-system-bar />
      <v-toolbar
        flat
        height="65%"
      >
        <v-toolbar-side-icon
          :left="true"
        >
          <img
            class="mr-3"
            src="https://brand.uark.edu/_resources/images/shield.jpg"
            height="55px"
            width="55px"
          >
        </v-toolbar-side-icon>
        <v-toolbar-title
          class="text-h5"
        >
          View Booking Portal
        </v-toolbar-title>
        <v-btn
          depressed
          :right="true"
          :absolute="true"
          href="/#/"
        >
          Sign Out
        </v-btn>
        <v-spacer />
      </v-toolbar>
      <v-banner
        single-line
        :sticky="sticky"
        height="75%"
      />
    </v-card>
    <v-btn
      color="#E0E0E0"
      class="mb-8"
      href="/#/UserResView"
      block
      large
    >
      My Reservations
    </v-btn>
    <v-card>
      <v-toolbar
        color="black"
        dark
      >
        <v-toolbar-side-icon />

        <v-toolbar-title>Available Reservations</v-toolbar-title>
      </v-toolbar>
      <v-list three-line>
        <v-subheader :inset="inset">
          <v-icon
            large
            color="blue-grey darken-2"
            class="pr-4"
          >
            mdi-laptop
          </v-icon>
          Computer (5 hours)
        </v-subheader>
        <v-divider />
        <v-subheader :inset="inset">
          <v-icon
            large
            color="blue-grey darken-2"
            class="pr-4"
          >
            mdi-laptop
          </v-icon>
          Computer (7 days)
        </v-subheader>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'UserHome',
};
</script>
