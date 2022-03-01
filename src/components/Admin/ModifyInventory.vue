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
          Modify Inventory
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
                color: #00264D;"
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
    <v-row>
      <v-hover v-slot="{ hover }">
        <v-card
          class="mt-5 ml-16 mr-16 justify-center"
          width="630"
          height="500"
        >
          <v-card-text
            class="text-h5 font-weight-light black--text"
            style="background-color: #E0E0E0;"
          >
            Add Device
          </v-card-text>
          <span
            class="material-icons"
          >
            <v-icon
              size="320"
              style="padding: 45px 145px;
                color: #00264D;
                text-align: center;"
            >add_circle</v-icon>
          </span>
          <v-expand-transition>
            <div
              v-if="hover"
              class="transition-fast-in-fast-out v-card--reveal text-h2"
              style="height: 436px;
                  background: white;
                  align-items: center;
                  bottom: 0;
                  justify-content: center;
                  position: absolute;
                  font-size: 12px;"
            >
              <br>
              <v-text-field
                id="deviceTag"
                label="Device Tag"
                filled
                clearable
                color="red darken-4"
              />
              <v-text-field
                id="deviceName"
                label="Device Name"
                filled
                clearable
                color="red darken-4"
              />
              <v-btn
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          width: 630px;"
                @click.stop="addDialog = true, getTextFields()"
              >
                Submit
              </v-btn>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-card
          class="mt-5 ml-16 mr-16 justify-center"
          width="630"
          height="500"
        >
          <v-card-text
            class="text-h5 font-weight-light black--text"
            style="background-color: #E0E0E0;"
          >
            Remove Device
          </v-card-text>
          <span
            class="material-icons"
          >
            <v-icon
              size="320"
              style="padding: 45px 145px;
                color: #00264D;
                text-align: center;"
            >remove_circle</v-icon>
          </span>
          <v-expand-transition>
            <div
              v-if="hover"
              class="transition-fast-in-fast-out v-card--reveal text-h2"
              style="height: 436px;
                  background: white;
                  align-items: center;
                  bottom: 0;
                  justify-content: center;
                  position: absolute;
                  font-size: 12px;"
            >
              <br>
              <v-text-field
                id="deviceTag"
                label="Device Tag"
                filled
                clearable
                color="red darken-4"
              />
              <v-text-field
                id="deviceName"
                label="Device Name"
                filled
                clearable
                color="red darken-4"
              />
              <v-btn
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          width: 630px;"
                @click.stop="removeDialog = true, getTextFields()"
              >
                Submit
              </v-btn>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
      <v-dialog
        v-model="removeDialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="text-h5">
            Are you sure you want to remove this device?
          </v-card-title>

          <v-card-text
            id="textToChange"
          />
          <a
            id="revealInfo"
            class="pl-6"
            @click="updateText(), revealData(), hideLink()"
          >
            View Information Provided
          </a>

          <v-card-actions>
            <v-spacer />

            <v-btn
              color="red darken-4"
              depressed
              outlined
              @click="yesDialog = true, removeDialog = false, hideData(), revealLink()"
            >
              YES
            </v-btn>

            <v-btn
              color="black"
              text
              @click="removeDialog = false, hideData(), revealLink()"
            >
              NO
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="yesDialog"
        max-width="350"
        max-height="500"
      >
        <v-card>
          <v-card-title class="text-h5">
            Form Submitted
          </v-card-title>

          <v-card-text>
            Changes in the inventory will be reflected soon.
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-btn
              color="red darken-4"
              depressed
              outlined
              @click="yesDialog = false"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="addDialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="text-h5">
            Are you sure you want to add this device?
          </v-card-title>

          <v-card-text
            id="textToChange"
          />
          <a
            id="revealInfo"
            class="pl-6"
            @click.stop="updateText(), revealData(), hideLink()"
          >
            View Information Provided
          </a>

          <v-card-actions>
            <v-spacer />

            <v-btn
              color="red darken-4"
              depressed
              outlined
              @click="yesDialog = true, addDialog = false, hideData(), revealLink()"
            >
              YES
            </v-btn>

            <v-btn
              color="black"
              text
              @click="addDialog = false, hideData(), revealLink()"
            >
              NO
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let deviceTag = '';
let deviceName = '';

export default {
  name: 'ModifyInventory',
  data() {
    return {
      removeDialog: false,
      yesDialog: false,
      addDialog: false,
    };
  },
  methods: {
    getTextFields() {
      const name = document.getElementById('deviceName').value;
      const tag = document.getElementById('deviceTag').value;
      deviceTag = tag;
      deviceName = name;
    },
    updateText() {
      // eslint-disable-next-line prefer-template
      document.getElementById('textToChange').innerHTML = ['Device Tag: ', deviceTag].join('') + '<br>' + ['Device Name: ', deviceName].join('');
    },
    revealLink() {
      const x = document.getElementById('revealInfo');
      x.style.display = 'block';
    },
    revealData() {
      const x = document.getElementById('textToChange');
      x.style.display = 'block';
    },
    hideLink() {
      const x = document.getElementById('revealInfo');
      x.style.display = 'none';
    },
    hideData() {
      const x = document.getElementById('textToChange');
      x.style.display = 'none';
    },
  },
};
</script>
