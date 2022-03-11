<template>
  <v-container fluid>
    <v-layout
      justify-center
    >
      <v-form @submit.prevent="submit">
        <v-card
          min-width="600px"
        >
          <v-toolbar
            color="black"
            dark
          >
            <v-toolbar-title>Sign In</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="username"
              prepend-icon="person"
              color="black"
              label="Username"
              type="text"
            />

            <v-text-field
              v-model="password"
              prepend-icon="lock"
              color="black"
              label="Password"
              type="password"
            />
            <v-switch
              v-model="isAdmin"
              class="mx-auto"
              :label="isAdmin ? 'Admin Enabled' : 'Admin Disabled'"
            />
          </v-card-text>

          <v-card-actions>
            <v-btn
              class="mx-auto mb-2"
              color="E0E0E0"
              min-width="150px"
              @click="submit"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
import { bannerStore, userStore } from '../store';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      isAdmin: false,
    };
  },
  created() {
    bannerStore.setTitle('Login');
    bannerStore.setButton('Login');
  },
  methods: {
    submit() {
      userStore.setUsername(this.username);
      userStore.setPermission(this.isAdmin);
      this.redirect();
    },
    redirect() {
      if (userStore.isAdmin) {
        bannerStore.setButtonRoute('/AdminView');
        this.$router.push('/AdminView');
      } else {
        bannerStore.setButtonRoute('/UserView');
        this.$router.push('/UserView');
      }
    },
  },
};
</script>
