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
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="E0E0E0"
              type="submit"
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
    };
  },
  created() {
    bannerStore.setTitle('Login');
  },
  methods: {
    submit() {
      console.log(this.username);
      userStore.setUsername(this.username);

      console.log(userStore.username);
    },
  },
};
</script>
