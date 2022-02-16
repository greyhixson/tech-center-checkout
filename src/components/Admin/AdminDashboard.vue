<template>
  <v-container>
    <v-card
      elevation="6"
      outlined
      max-width="500"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        />
      </template>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AdminDashboard',
};
</script>
