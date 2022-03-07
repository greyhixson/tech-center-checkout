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
        <template>
          <v-dialog
            v-model="dialogDelete"
            max-width="500px"
          >
            <v-card>
              <v-card-title class="text-h5">
                Are you sure you want to delete this item?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="#600000"
                  text
                  @click="closeDelete"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="#600000"
                  text
                  @click="deleteItemConfirm"
                >
                  OK
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
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
      dialog: false,
      dialogDelete: false,
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
  devices: [],
  editedIndex: -1,
  editedItem: {
    deviceTag: '',
    name: '',
    status: '',
  },
  defaultItem: {
    deviceTag: '',
    name: '',
    status: '',
  },
  dialog: false, // DO I NEED THIS
  dialogDelete: false, // DO I NEED THIS

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
    deleteItem(item) {
      console.log('in delete Item');
      this.editedIndex = this.devices.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.devices.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

  },
};
</script>
