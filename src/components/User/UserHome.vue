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
        <img
          class="mr-3"
          src="https://brand.uark.edu/_resources/images/shield.jpg"
          height="55px"
          width="55px"
        >

        <v-toolbar-title
          class="text-h5"
        >
          View Booking Portal
        </v-toolbar-title>
        <v-btn
          depressed
          absolute
          right
          href="/#/"
        >
          Sign Out
        </v-btn>
        <v-spacer />
      </v-toolbar>
      <v-banner
        single-line
        height="75%"
      />
    </v-card>
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
      <v-toolbar
        color="black"
        dark
      >
        <v-toolbar-title>Available Reservations</v-toolbar-title>
      </v-toolbar>
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Apple MacBook Air
          </v-expansion-panel-header>
          <v-expansion-panel-content
            class="mt-4 mx-auto"
          >
            <v-row>
              This can be checked out for a maximum of 7 days.
            </v-row>
            <v-row>
              <v-btn
                to="/UserReviewRes"
                class="mt-2 mb-2"
              >
                Reserve
              </v-btn>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Lenovo Mouse
          </v-expansion-panel-header>
          <v-expansion-panel-content
            class="mt-4 mx-auto"
          >
            <v-row>
              This can be checked out for a maximum of 5 hours.
            </v-row>
            <v-row>
              <v-btn
                to="/UserReviewRes"
                class="mt-2 mb-2"
              >
                Reserve
              </v-btn>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'UserHome',
};
</script>
