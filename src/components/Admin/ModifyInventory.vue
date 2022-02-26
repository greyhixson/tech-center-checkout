<template>
  <v-container
    fluid
  >
    <v-card
      class="mb-16 grey lighten-4"
      style="height: 100%;"
    >
      <v-system-bar />
      <v-toolbar
        flat
        height="65%"
      >
        <img
          class="mr-3"
          src="https://brand.uark.edu/_resources/images/shield.jpg"
          height="55px"
          width="55px"
        >
        <v-toolbar-title
          class="text-h5"
        >
          Modify Inventory
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
        height="75%"
      />
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ModifyInventory',
};
</script>
