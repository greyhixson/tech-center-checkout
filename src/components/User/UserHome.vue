<template>
  <v-container>
    <v-row
      class="pb-4"
      no-gutters
    >
      <h1>
        Booking Portal
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
      to="/UserRes"
    >
      My Current and Future Reservations
    </v-btn>
    <v-card>
      <v-toolbar
        color="#01579B"
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
