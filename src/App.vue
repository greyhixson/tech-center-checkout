<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-main>
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
