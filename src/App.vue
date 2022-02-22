<template>
  <v-app>
    <v-main>
      <v-btn to="/UserView">
        User View
      </v-btn>
      <v-btn to="/AdminView">
        Admin View
      </v-btn>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
