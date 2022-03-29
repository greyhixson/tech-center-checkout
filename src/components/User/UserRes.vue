<template>
  <v-container>
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
        :loading="!inventoryLoaded"
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
        :loading="!inventoryUpcomingLoaded"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            color="black"
            @click="cancelItem(item)"
          >
            mdi-cancel
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
import { bannerStore, userStore } from '../../store';

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
          value: 'returnDate',
        },
        {
          text: 'Check Out',
          value: 'pickUpDate',
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
          value: 'returnDate',
        },
        {
          text: 'Check Out',
          value: 'pickUpDate',
        },
        {
          text: 'Duration',
          value: 'maximumDuration',
        },
        {
          text: 'Cancel Reservation',
          value: 'actions',
          filterable: false,
          align: 'center',
        },
      ],
      inventory: [],
      inventoryUpcoming: [],
      inventoryLoaded: false,
      inventoryUpcomingLoaded: false,
    };
  },
  created() {
    bannerStore.setTitle('Reservations');
    bannerStore.setButton('Home');

    this.username = userStore.username;
    this.getFBCollection();
    this.getUpcomingReservations();
  },
  editedIndex: -1,
  editedItem: {
    deviceName: '',
    pickUpDate: '',
    returnDate: '',
    maximumDuration: '',
    minimumDuration: '',

  },
  defaultItem: {
    deviceName: '',
    pickUpDate: '',
    returnDate: '',
    maximumDuration: '',
    minimumDuration: '',
  },

  methods: {
    async getFBCollection() {
      try {
        this.inventoryLoaded = false;
        const inventory = await retrieveUserCheckedOutItems(this.username);
        this.inventory = inventory;
        this.inventoryLoaded = true;
      } catch (e) {
        console.log(e);
      }
    },
    async getUpcomingReservations() {
      try {
        this.inventoryUpcomingLoaded = false;
        const inventoryUpcoming = await retrieveUserUpcomingReservations(this.username);
        this.inventoryUpcoming = inventoryUpcoming;
        this.inventoryUpcomingLoaded = true;
      } catch (e) {
        console.log(e);
      }
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
  },
};
</script>
