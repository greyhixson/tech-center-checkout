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
          My Reservations
        </v-toolbar-title>
        <v-btn
          depressed
          right
          absolute
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
    <!--v-card
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
        <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              v-bind="attrs"
              class="ml-14 mb-5"
              v-on="on"
            >
              Cancel Reservation
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h6">
              Are you sure you want to cancel your reservation?
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn
                text
                @click="dialog = false"
              >
                No
              </v-btn>
              <v-btn
                text
                @click="dialog = false"
              >
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
        <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              v-bind="attrs"
              class="ml-14 mb-5"
              v-on="on"
            >
              Cancel Reservation
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h6">
              Are you sure you want to cancel your reservation?
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn
                text
                @click="dialog = false"
              >
                No
              </v-btn>
              <v-btn
                text
                @click="dialog = false"
              >
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list>
    </v-card -->
    <get-collection-ex />
    <v-form
      class="pt-4"
    >
      <v-text-field
        v-model="username"
        label="Enter your username"
        placeholder="Username"
        solo
        width="50px"
      />
      <v-btn
        class="mr-4 mb-8"
        type="submit"
        @click="usernameSubmit=true"
      >
        submit
      </v-btn>
    </v-form>
    <!-- Concept: Conditional rendering: https://v2.vuejs.org/v2/guide/conditional.html
                  Props: https://v2.vuejs.org/v2/guide/components-props.html?redirect=true-->
    <v-card
      v-if="usernameSubmit && username"
      class="mt-4"
    >
      <v-card-title
        class="black white--text mb-4"
      >
        Items Checked Out
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="inventory"
        :search="search"
      />
    </v-card>
    <v-card
      v-if="usernameSubmit && username"
      class="mt-8"
    >
      <v-card-title
        class="black white--text mb-4"
      >
        Upcoming Reservation(s)
        <v-spacer />
        <v-text-field
          v-model="searchfuture"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="inventoryFuture"
        :searchfuture="searchfuture"
      />
    </v-card>
    <v-card
      v-if="username === '' && resetUserSubmit()"
    >
      <!--v-card-title>
        Please enter your username to view your items checked out and upcoming reservations.
      </v-card-title-->
    </v-card>
  </v-container>
</template>

<script>
import { retrieveUserCheckedOutItems, retrieveUserUpcomingReservations } from '../../firebase/techCenterCheckout.Data';

export default {
  name: 'UserRes',
  data() {
    return {
      username: '',
      usernameSubmit: false,
      dialog: false,
      search: '',
      searchfuture: '',
      headers: [
        {
          text: 'Item',
          value: 'deviceName',
        },
        {
          text: 'Check In',
          value: 'checkInDate',
        },
        {
          text: 'Check Out',
          value: 'checkOutDate',
        },
        {
          text: 'Duration',
          value: 'maximumDuration',
        },
      ],
      inventory: [],
      inventoryFuture: [],
    };
  },
  /* watch: {
    usernameSubmit() {
      if (this.usernameSubmit === true) {
        this.getFBCollection();
        console.log('first IF');
      }
      if (this.usernameSubmit === false) {
        console.log('userSubmit is false');
      }
    },
    usernameEmpty() {
      console.log('Second Function');
      // if user false user submit to false
      if (this.username === '') {
        this.resetUserSubmit();
        console.log('In IF');
      }
    },
  }, */
  watch: {
    usernameSubmit() {
      if (this.usernameSubmit === true) {
        this.getFBCollection();
        this.getUpcomingReservations();
        console.log('first IF');
      }
    },
  },

  methods: {
    async getFBCollection() {
      try {
        // This component isn't loaded until the username is sent
        // so username should be guaranteed before the method is called
        const inventory = await retrieveUserCheckedOutItems(this.username);
        this.inventory = inventory;
      } catch (e) {
        console.log(e);
      }
    },
    async getUpcomingReservations() {
      try {
        // This component isn't loaded until the username is sent
        // so username should be guaranteed before the method is called
        const inventoryFuture = await retrieveUserUpcomingReservations(this.username);
        this.inventoryFuture = inventoryFuture;
      } catch (e) {
        console.log(e);
      }
    },
    async resetUserSubmit() {
      try {
        this.usernameSubmit = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
