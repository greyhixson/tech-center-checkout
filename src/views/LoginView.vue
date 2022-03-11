<template>
  <v-container fluid>
    <v-layout
      justify-center
    >
      <v-form>
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
              prepend-icon="person"
              color="black"
              name="username"
              label="Username"
              type="text"
            />
            <v-text-field
              prepend-icon="lock"
              color="black"
              name="passwrod"
              label="Password"
              type="password"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="E0E0E0"
              to="/"
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
import bannerStore from '../store';

export default {
  name: 'LoginView',
  created() {
    bannerStore.setTitle('Login');
  },
};
</script>
