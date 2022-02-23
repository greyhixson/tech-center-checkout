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
          My Reservations
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
    <v-card
      class="mb-8"
    >
      <v-toolbar
        color="black"
        dark
      >
        <v-toolbar-side-icon />

        <v-toolbar-title>Items Checked Out</v-toolbar-title>
      </v-toolbar>
      <v-list three-line>
        <v-col>
          <v-row>
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
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader :inset="inset">
              Return Date: 2/22/2022
            </v-subheader>
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader :inset="inset">
              Duration: 5 hours
            </v-subheader>
          </v-row>
        </v-col>
        <v-divider />
        <v-col>
          <v-row>
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
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader :inset="inset">
              Return Date: 2/24/2022
            </v-subheader>
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader :inset="inset">
              Duration: 7 days
            </v-subheader>
          </v-row>
        </v-col>
      </v-list>
    </v-card>

    <v-card>
      <v-toolbar
        color="black"
        dark
      >
        <v-toolbar-side-icon />

        <v-toolbar-title>Upcoming Reservation(s)</v-toolbar-title>
      </v-toolbar>
      <v-list three-line>
        <v-col>
          <v-row>
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
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader :inset="inset">
              Return Date: 2/22/2022
            </v-subheader>
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader :inset="inset">
              Duration: 5 hours
            </v-subheader>
          </v-row>
        </v-col>
        <v-btn
          class="ml-14 mb-5"
        >
          Cancel Reservation
        </v-btn>
        <v-divider />
        <v-col>
          <v-row>
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
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader :inset="inset">
              Return Date: 2/24/2022
            </v-subheader>
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader :inset="inset">
              Duration: 7 days
            </v-subheader>
          </v-row>
        </v-col>
        <v-btn
          class="ml-14 mb-3"
        >
          Cancel Reservation
        </v-btn>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'UserRes',
};
</script>
