<template>
  <v-container
    align="center"
  >
    <v-card
      class="mt-4"
    >
      <v-card-title
        class="black white--text mb-4"
      >
        Items Checked Out
        <v-spacer />
        <v-text-field
          v-model="searchItemsCheckedOut"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          dark
        />
      </v-card-title>

      <v-data-table
        :headers="headersItemsCheckedOut"
        :items="itemsCheckedOut"
        :search="searchItemsCheckedOut"
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
          v-model="searchUpcomingReservations"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          dark
        />
      </v-card-title>

      <v-data-table
        :headers="headersUpcomingReservations"
        :items="upcomingReservations"
        :search="searchUpcomingReservations"
        :loading="!inventoryUpcomingLoaded"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            color="black"
            @click="cancelReservation(item)"
          >
            mdi-cancel
          </v-icon>
        </template>
      </v-data-table>
      <template>
        <v-dialog
          v-model="dialogCancelReservation"
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
                @click="cancelReservationConfirm"
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
import { retrieveUserCheckedOutItems, retrieveUserUpcomingReservations, deleteUpcomingReservations } from '../../firebase/techCenterCheckout.Data';
import { bannerStore, userStore } from '../../store';

export default {
  name: 'UserRes',
  data() {
    return {
      username: '',
      searchItemsCheckedOut: '',
      searchUpcomingReservations: '',
      headersItemsCheckedOut: [
        {
          text: 'Item',
          value: 'deviceName',
        },
        {
          text: 'Pick Up Date',
          value: 'pickUpDate',
        },
        {
          text: 'Return Date',
          value: 'returnDate',
        },
        {
          text: 'Duration',
          value: 'maximumDuration',
        },
      ],
      dialog: false,
      dialogCancelReservation: false,
      headersUpcomingReservations: [
        {
          text: 'Item',
          value: 'deviceName',
        },
        {
          text: 'Pick Up Date',
          value: 'pickUpDate',
        },
        {
          text: 'Return Date',
          value: 'returnDate',
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
      itemsCheckedOut: [],
      itemToDelete: [],
      upcomingReservations: [],
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
    this.deleteReservation();
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
        const itemsCheckedOut = await retrieveUserCheckedOutItems(this.username);
        this.itemsCheckedOut = itemsCheckedOut;
        this.inventoryLoaded = true;
      } catch (e) {
        console.log(e);
      }
    },
    async getUpcomingReservations() {
      try {
        this.inventoryUpcomingLoaded = false;
        const upcomingReservations = await retrieveUserUpcomingReservations(this.username);
        this.upcomingReservations = upcomingReservations;
        this.inventoryUpcomingLoaded = true;
      } catch (e) {
        console.log(e);
      }
    },
    cancelReservation(item) {
      this.editedIndex = this.upcomingReservations.indexOf(item);
      this.editedItem = { ...item };
      this.dialogCancelReservation = true;
    },
    cancelReservationConfirm() {
      this.upcomingReservations.splice(this.editedIndex, 1);
      this.closeCancel();
      this.deleteReservation(this.editedItem);
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },
    deleteReservation(itemToDelete) {
      try {
        deleteUpcomingReservations(itemToDelete);
      } catch (e) {
        console.log(e);
      }
    },
    closeCancel() {
      this.dialogCancelReservation = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },
  },
};
</script>
