<template>
  <v-container
    fluid
    class="mb-4 mt-4 lighten-4 mx-auto"
  >
    <v-layout
      align-center
      justify-center
    >
      <v-card
        width="86.5%"
      >
        <v-card-title>
          <v-spacer />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="devices"
          :search="search"
          class="elevation-1"
          align="center"
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
                            v-model="editedItem.deviceName"
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
                  <div
                    id="errorMessage"
                    style="margin: auto;
                           width: 50%;
                           color: red;"
                  />
                </v-card>
              </v-dialog>
            </v-toolbar>
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
        </v-data-table>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import { getCollection } from '../../firebase/techCenterCheckout.Data';
// eslint-disable-next-line import/no-duplicates
import { deleteDevice } from '../../firebase/techCenterCheckout.Data';
import { bannerStore } from '../../store';

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
      { text: 'Name', value: 'deviceName' },
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

  created() {
    bannerStore.setTitle('All Devices');
    bannerStore.setButton('Home');
    this.getAllDevicesFromFB();
  },
  methods: {
    async getAllDevicesFromFB() {
      try {
        const inventory = await getCollection();
        this.devices = inventory;
      } catch (e) {
        console.log(e);
      }
    },
    // need async add & delete to FB collection
    async deleteFromFB(itemToDelete) {
      try {
        await deleteDevice(itemToDelete);
      } catch (e) {
        console.log(e);
      }
    },

    editItem(item) {
      this.editedIndex = this.devices.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
      const device = JSON.stringify(this.devices);
      const myObj = JSON.parse(device);
      console.log(myObj.status(item));
      const x = myObj.status;
      console.log(x);
      this.getColor(x);
    },

    deleteItem(item) {
      this.editedIndex = this.devices.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.deleteFromFB(this.devices[this.editedIndex]); // removing device from the database
      this.devices.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      const x = document.getElementById('errorMessage');
      x.style.display = 'none';
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

    getColor(status) {
      let color = '';
      if (status === 'Checked Out') color = 'red';
      else if (status === 'Ready') color = 'orange';
      else if (status === 'Checked In') color = 'green';
      return color;
    },

    deviceTagExists(editedItemTag) {
      let tagExists = false;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.devices.length; i++) {
        if (this.devices[i].deviceTag === editedItemTag) {
          tagExists = true;
        }
      }
      return tagExists;
    },

    save() {
      const deviceTagInt = parseInt(this.editedItem.deviceTag, 10);
      console.log(deviceTagInt);
      if (this.editedItem.deviceTag === '' || this.editedItem.deviceName === '' || this.editedItem.status === '') {
        const x = document.getElementById('errorMessage');
        x.style.display = 'block';
        document.getElementById('errorMessage').innerHTML = 'Please don\'t leave any field blank.';
      } else if (Number.isNaN(deviceTagInt) === true) {
        const x = document.getElementById('errorMessage');
        x.style.display = 'block';
        document.getElementById('errorMessage').innerHTML = 'Device Tag should contain numbers only.';
      } else if (this.deviceTagExists(deviceTagInt) === true) {
        const x = document.getElementById('errorMessage');
        x.style.display = 'block';
        document.getElementById('errorMessage').innerHTML = 'Device Tag is already taken.';
      } else {
        if (this.editedIndex > -1) {
          Object.assign(this.devices[this.editedIndex], this.editedItem);
        } else {
          this.devices.push(this.editedItem);
        }
        this.close();
      }
    },
  },
};
</script>
