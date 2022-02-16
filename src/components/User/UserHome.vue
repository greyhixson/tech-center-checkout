<template>
  <v-container>
    <v-row>
      <h1>
        View Booking Portal
      </h1>
      <v-spacer />
      <v-btn
        color="#BDBDBD"
      >
        Sign Out
      </v-btn>
    </v-row>
    <v-btn
      color="#E0E0E0"
    >
      My Current and Future Reservations
    </v-btn>
    <v-card>
      <v-toolbar
        color="#01579B"
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
            padding-right
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
