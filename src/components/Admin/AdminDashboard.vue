<template>
  <v-container
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-hover v-slot="{ hover }">
        <v-card
          class="mt-5"
          height="500"
          width="320"
        >
          <v-card-text
            class="text-h5 font-weight-light black--text"
            style="background-color: #E0E0E0;"
          >
            RESERVATIONS
          </v-card-text>
          <span
            class="material-icons"
          >
            <v-icon
              size="320"
              style="padding: 45px 0;
                color: black;
                text-align: center;"
            >schedule</v-icon>
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
              <v-btn
                href="/#/AdminActiveRes"
                class="font-weight-light"
                style="font-size: 30px;
                           color: black;
                          width: 320px;"
              >
                Active
              </v-btn>
              <v-btn
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          text-align: left;
                          width: 320px;"
              >
                Notes
              </v-btn>
              <br>
              <v-btn
                href="/#/AdminLogRes"
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          width: 320px;"
              >
                History
              </v-btn>
              <span
                class="material-icons"
                style="justify-content: center;"
              >
                <v-icon
                  size="200"
                  style="padding: 30px 55px;
                color: black;"
                >schedule</v-icon>
              </span>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-card
          class="mt-5 ml-10"
          width="320"
          height="500"
        >
          <v-card-text
            class="text-h5 font-weight-light black--text"
            style="background-color: #E0E0E0;"
          >
            INVENTORY
          </v-card-text>
          <span
            class="material-icons"
          >
            <v-icon
              size="320"
              style="padding: 45px 0;
                color: black;
                text-align: center;"
            >plagiarism</v-icon>
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
              <v-btn
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          width: 320px;"
                href="/#/AllDevices"
              >
                All Devices
              </v-btn>
              <span
                class="material-icons"
                style="justify-content: center;"
              >
                <v-icon
                  size="200"
                  style="padding: 30px 55px;
                color: black;"
                >plagiarism</v-icon>
              </span>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-card
          class="mt-5 ml-10"
          width="320"
          height="500"
          style="font-size: 24px"
        >
          <v-card-text
            class="text-h5 font-weight-light black--text"
            style="background-color: #E0E0E0;"
          >
            MANAGE EMPLOYEES
          </v-card-text>
          <span
            class="material-icons"
          >
            <v-icon
              size="320"
              style="padding: 45px 0;
                color: black;
                text-align: center;"
            >group</v-icon>
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
              <v-btn
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          width: 320px;"
              >
                Employee List
              </v-btn>
              <v-btn
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          width: 320px;"
              >
                Modify Users
              </v-btn>
              <v-btn
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          width: 320px;"
              >
                Permissions
              </v-btn>
              <span
                class="material-icons"
                style="justify-content: center;"
              >
                <v-icon
                  size="200"
                  style="padding: 30px 55px;
                color: black;"
                >group</v-icon>
              </span>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
      <v-hover v-slot="{ hover }">
        <v-card
          class="mt-5 ml-10"
          width="320"
          height="500"
        >
          <v-card-text
            style="text-align: left;
                    font-size: 25px;
                    color: black;
              font-family: verdana;
              font-style: normal;
              background-color: #E0E0E0;"
            class="text-h5 font-weight-light black--text"
          >
            HELP
          </v-card-text>
          <span
            class="material-icons"
          >
            <v-icon
              size="320"
              style="padding: 45px 0;
                color: black;"
            >help</v-icon>
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
              <v-btn
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          width: 320px;"
              >
                FAQs
              </v-btn>
              <v-btn
                class="font-weight-light"
                style="font-size: 30px;
                          color: black;
                          width: 320px;"
              >
                Submit Request
              </v-btn>
              <span
                class="material-icons"
                style="justify-content: center;"
              >
                <v-icon
                  size="200"
                  style="padding: 30px 55px;
                color: black;"
                >help</v-icon>
              </span>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
    </v-row>
  </v-container>
</template>

<script>
import { bannerStore } from '../../store';

export default {
  name: 'AdminDashboard',
  created() {
    bannerStore.setTitle('Admin Dashboard');
    bannerStore.setButton('Sign Out');
  },
};
</script>
