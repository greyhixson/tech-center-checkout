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
    </v-card>
    <get-collection-ex />
    <v-form>
      <v-text-field
        v-model="username"
        label="Enter a user name:"
        placeholder="gahixson"
        solo
        width="50px"
      />
      <v-btn
        class="mr-4"
        type="submit"
        @click="usernameSubmit=true"
      >
        submit
      </v-btn>
    </v-form>
    <!-- Concept: Conditional rendering: https://v2.vuejs.org/v2/guide/conditional.html
                  Props: https://v2.vuejs.org/v2/guide/components-props.html?redirect=true-->
    <retrieve-user-ex
      v-if="usernameSubmit && username"
      :username="username"
    />

    <v-card
      class="mt-8"
    >
      <v-card-title>
        Retrieve Collection by Username
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
  </v-container>
</template>

<script>
import { retrieveUserCurrentRes } from '../../firebase/techCenterCheckout.Data';

export default {
  name: 'UserRes',
  // Username is passed as a 'prop' from the parent component
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      usernamecheck: '',
      usernameSubmit: false,
      dialog: false,
      search: '',
      headers: [
        {
          text: 'Device Name',
          value: 'deviceName',
        },
        {
          text: 'Device Tag',
          value: 'deviceTag',
        },
        {
          text: 'Status',
          value: 'status',
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
          text: 'First Name',
          value: 'firstName',
        },
        {
          text: 'Last Name',
          value: 'lastName',
        },
        {
          text: 'Reservation ID',
          value: 'reservationID',
        },
        {
          text: 'Username',
          value: 'username',
        },
      ],
      inventory: [],
    };
  },
  watch: {
    username() {
      if (this.username === '') {
        this.usernameSubmit = false;
      }
    },
  },
  created() {
    this.getFBCollection();
  },
  methods: {
    async getFBCollection() {
      try {
        // This component isn't loaded until the username is sent
        // so username should be guaranteed before the method is called
        const inventory = await retrieveUserCurrentRes(this.username);
        this.inventory = inventory;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
