<template>
  <v-container>
    <v-card
      class="mb-8 mt-4 grey lighten-4"
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
          Reservation Successful
        </v-toolbar-title>
        <v-btn
          depressed
          right
          absolute
          href="/#/"
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
    <h2
      class="white--text text--darken-2"
    >
      Thank you for reserving Apple MacBook Pro.
    </h2>
    <h2
      class="white--text text--darken-2"
    >
      You can pick up your reservation on the 3rd floor in the Union.
    </h2>
    <v-btn
      color="#E0E0E0"
      class="mt-6"
      href="/#/UserRes"
    >
      My Current and Future Reservations
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'UserConfirmRes',
};
</script>
