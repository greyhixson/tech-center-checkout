/* eslint-disable vue/valid-template-root */
/* eslint-disable vue/valid-template-root */
<template>
  <v-card
    class="grey lighten-4"
    max-width="2500"
    style="height: 100%;"
    fluid
  >
    <v-system-bar />
    <v-toolbar
      flat
      height="75%"
    >
      <v-toolbar-title>
        Welcome,
        <a
          href="/#/Profile"
          class="text-decoration-none"
        >
          Admin
        </a>
      </v-toolbar-title>
      <v-btn
        depressed
        :right="true"
        :absolute="true"
      >
        Sign Out
      </v-btn>
      <v-spacer />
    </v-toolbar>
    <v-banner
      single-line
      :sticky="sticky"
      height="75%"
    />
  </v-card>
</template>

<script>
export default {
  name: 'AdminDashboard',
};
</script>
