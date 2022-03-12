<template>
  <v-container>
    <v-form
      class="pt-4"
      @submit.prevent="submit"
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
        @click="submit"
      >
        submit
      </v-btn>
    </v-form>
    <v-card
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
      class="mt-8"
    >
      <v-card-title
        class="black white--text mb-4"
      >
        Upcoming Reservation(s)
        <v-spacer />
        <v-text-field
          v-model="searchUpcoming"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>

      <v-data-table
        :headers="headersUpcoming"
        :items="inventoryUpcoming"
        :search="searchUpcoming"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            @click="cancelItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
      <template>
        <v-dialog
          v-model="dialogCancel"
          max-width="500px"
        >
          <v-card>
            <v-card-title
              class="text-h6"
            >
              Are you sure you want to cancel this reservation?
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="#600000"
                text
                @click="closeCancel"
              >
                NO
              </v-btn>
              <v-btn
                color="#600000"
                text
                @click="cancelItemConfirm"
              >
                YES
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import { retrieveUserCheckedOutItems, retrieveUserUpcomingReservations } from '../../firebase/techCenterCheckout.Data';
import bannerStore from '../../store';

export default {
  name: 'UserRes',
  data() {
    return {
      username: '',
      search: '',
      searchUpcoming: '',
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
      dialog: false,
      dialogCancel: false,
      headersUpcoming: [
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
        {
          text: 'Actions',
          value: 'actions',
          filterable: false,
        },
      ],
      inventory: [],
      inventoryUpcoming: [],
    };
  },
  created() {
    bannerStore.setTitle('Reservations');
  },
  editedIndex: -1,
  editedItem: {
    deviceName: '',
    checkInDate: '',
    checkOutDate: '',
    maximumDuration: '',
    minimumDuration: '',

  },
  defaultItem: {
    deviceName: '',
    checkInDate: '',
    checkOutDate: '',
    maximumDuration: '',
    minimumDuration: '',
  },

  methods: {
    async getFBCollection() {
      try {
        const inventory = await retrieveUserCheckedOutItems(this.username);
        this.inventory = inventory;
      } catch (e) {
        console.log(e);
      }
    },
    async getUpcomingReservations() {
      try {
        const inventoryUpcoming = await retrieveUserUpcomingReservations(this.username);
        this.inventoryUpcoming = inventoryUpcoming;
      } catch (e) {
        console.log(e);
      }
    },
    submit() {
      this.getFBCollection();
      this.getUpcomingReservations();
    },
    cancelItem(item) {
      this.editedIndex = this.inventoryUpcoming.indexOf(item);
      this.editedItem = { ...item };
      this.dialogCancel = true;
    },
    cancelItemConfirm() {
      this.inventoryUpcoming.splice(this.editedIndex, 1);
      this.closeCancel();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    closeCancel() {
      this.dialogCancel = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
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
