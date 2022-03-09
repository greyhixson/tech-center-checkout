<template>
  <v-container fluid>
    <v-layout
      align-center
      justify-center
    >
      <v-form>
        <v-flex>
          <v-card>
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
        </v-flex>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
import bannerStore from '../../store';

export default {
  name: 'LoginHome',
  created() {
    bannerStore.setTitle('Login Page');
  },
};
</script>
