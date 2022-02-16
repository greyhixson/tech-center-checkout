<template>
  <v-container>
    <v-row
      class="pb-4"
      no-gutters
    >
      <h1>
        View Booking Portal
      </h1>
      <v-spacer />
      <v-btn
        color="#BDBDBD"
        class="justify-end"
      >
        Sign Out
      </v-btn>
    </v-row>
    <v-btn
      color="#E0E0E0"
      class="mb-4"
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
