<template>
  <v-container
    fluid
  >
    <v-card
      class="mb-16 grey lighten-4"
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
          All Devices
        </v-toolbar-title>
        <v-btn
          depressed
          right
          absolute
          to="/AdminView"
        >
          <v-icon
            size="50"
            style="padding: 0;
                color: black;"
          >
            home
          </v-icon>
        </v-btn>
        <v-spacer />
      </v-toolbar>
      <v-banner
        single-line
        height="75%"
      />
    </v-card>
    <v-card>
      <v-card-title>
        <v-spacer />
        <!-- <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        /> -->
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="devices"
        :search="search"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              color="#600000"
              single-line
              hide-details
              class="pr-16"
              width="800px"
            />
            <v-spacer />
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="black"
                  dark
                  class="mb-2 mr-15"
                  v-bind="attrs"
                  v-on="on"
                >
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.deviceTag"
                          label="Device Tag"
                          color="black"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Name"
                          color="black"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.status"
                          label="Status"
                          color="black"
                        />
                      </v-col>
                      <!-- <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.carbs"
                          label="Carbs (g)"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.protein"
                          label="Protein (g)"
                        />
                      </v-col> -->
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="#600000"
                    text
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="#600000"
                    text
                    @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
            color="#600000"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <!-- <v-card
      class="mb-16 grey lighten-4"
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
          All Devices
        </v-toolbar-title>
        <v-btn
          depressed
          right
          absolute
          to="/AdminView"
        >
          <v-icon
            size="50"
            style="padding: 0;
                color: black;"
          >
            home
          </v-icon>
        </v-btn>
        <v-spacer />
      </v-toolbar>
      <v-banner
        single-line
        height="75%"
      />
    </v-card> -->
    <!-- <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          class="pr-16"
        />
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="black"
            dark
            class="text-center"
            v-bind="attrs"
            v-on="on"
          >
            New Item
          </v-btn>
        </template>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Testing</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="devices"
      >
        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            :color="getColor(item.status)"
            text-color="black"
          >
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="getColor(item.actions)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="getColor(item.actions)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card> -->
  </v-container>
</template>

<script>
export default {
  name: 'AllDevices',
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Device Tag',
        align: 'start',
        filterable: true,
        value: 'deviceTag',
      },
      { text: 'Name', value: 'name' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', filterable: false },
    ],
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
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },

  // watch: {
  //   dialog(val) {
  //     val || this.close();
  //   },
  //   dialogDelete(val) {
  //     val || this.closeDelete();
  //   },
  // },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.devices = [
        {
          deviceTag: 1001,
          name: 'Lenovo Mouse',
          status: 'Ready',
        },
        {
          deviceTag: 9999,
          name: 'Sony Camera',
          status: 'Ready',
        },
        {
          deviceTag: 1234,
          name: 'Lenovo Mouse',
          status: 'Checked Out',
        },
        {
          deviceTag: 12345,
          name: 'Sony Camera',
          status: 'Ready',
        },
        {
          deviceTag: 8888,
          name: 'Sony Camera',
          status: 'Checked In',
        },
        {
          deviceTag: 9090,
          name: 'Dell Laptop',
          status: 'Ready',
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.devices.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },

    deleteItem(item) {
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.devices[this.editedIndex], this.editedItem);
      } else {
        this.devices.push(this.editedItem);
      }
      this.close();
    },
  },
  //   data() {
  //     return {
  //       search: '',
  //       dialog: false,
  //       headers: [
  //         {
  //           text: 'Device Tag',
  //           align: 'start',
  //           filterable: true,
  //           value: 'deviceTag',
  //         },
  //         { text: 'Name', value: 'name' },
  //         { text: 'Status', value: 'status' },
  //         { text: 'Actions', value: 'actions', filterable: false },
  //       ],
  //       devices: [
  //         {
  //           deviceTag: 1001,
  //           name: 'Lenovo Mouse',
  //           status: 'Ready',
  //         },
  //         {
  //           deviceTag: 9999,
  //           name: 'Sony Camera',
  //           status: 'Ready',
  //         },
  //         {
  //           deviceTag: 1234,
  //           name: 'Lenovo Mouse',
  //           status: 'Checked Out',
  //         },
  //         {
  //           deviceTag: 12345,
  //           name: 'Sony Camera',
  //           status: 'Ready',
  //         },
  //         {
  //           deviceTag: 8888,
  //           name: 'Sony Camera',
  //           status: 'Checked In',
  //         },
  //         {
  //           deviceTag: 9090,
  //           name: 'Dell Laptop',
  //           status: 'Ready',
  //         },
  //       ],
  //     };
  //   },
  //   computed: {
  //     formTitle() {
  //       return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
  //     },
  //   },
  //   methods: {
  //     getColor(status) {
  //       let color = '';
  //       if (status === 'Checked Out') color = 'red';
  //       else if (status === 'Ready') color = 'orange';
  //       else if (status === 'Checked In') color = 'green';
  //       return color;
  //     },
  //     close() {
  //       this.dialog = false;
  //       this.$nextTick(() => {
  //         this.editedItem = { ...this.defaultItem };
  //         this.editedIndex = -1;
  //       });
  //     },

  //     closeDelete() {
  //       this.dialogDelete = false;
  //       this.$nextTick(() => {
  //         this.editedItem = { ...this.defaultItem };
  //         this.editedIndex = -1;
  //       });
  //     },

//     save() {
//       if (this.editedIndex > -1) {
//         Object.assign(this.desserts[this.editedIndex], this.editedItem);
//       } else {
//         this.desserts.push(this.editedItem);
//       }
//       this.close();
//     },
//     editItem(item) {
//       this.editedIndex = this.desserts.indexOf(item);
//       this.editedItem = { ...item };
//       this.dialog = true;
//     },
//   },
};
</script>
