<template>
  <v-container>
    <v-card
      class="mb-8"
    >
      <v-toolbar
        color="black"
        dark
      >
        <v-toolbar-title>Items Checked Out</v-toolbar-title>
      </v-toolbar>
      <v-list three-line>
        <v-col>
          <v-row>
            <v-subheader>
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
            <v-subheader>
              Return Date: 2/22/2022 at 2:00 PM
            </v-subheader>
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader>
              Duration: 5 hours
            </v-subheader>
          </v-row>
        </v-col>
        <v-divider />
        <v-col>
          <v-row>
            <v-subheader>
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
            <v-subheader>
              Return Date: 2/24/2022 at 12:00 PM
            </v-subheader>
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader>
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
        <v-toolbar-title>Upcoming Reservation(s)</v-toolbar-title>
      </v-toolbar>
      <v-list three-line>
        <v-col>
          <v-row>
            <v-subheader>
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
            <v-subheader>
              Return Date: 2/22/2022 at 2:00 PM
            </v-subheader>
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader>
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
            <v-subheader>
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
            <v-subheader>
              Return Date: 2/24/2022 at 12:00 PM
            </v-subheader>
          </v-row>
          <v-row
            class="ml-10"
          >
            <v-subheader>
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
