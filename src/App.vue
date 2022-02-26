<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-main>
      <v-btn to="/UserAvailableResView">
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
  computed: {
    theme() {
      return (this.$vuetify.theme.light) ? 'dark' : 'light';
    },
  },
};
</script>
