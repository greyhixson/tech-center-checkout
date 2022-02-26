<template>
  <v-container>
    <v-row
      class="pb-4"
      no-gutters
    >
      <h1>
        Reservation Successful
      </h1>
      <v-spacer />
      <v-btn
        color="#BDBDBD"
        class="justify-end"
      >
        Sign Out
      </v-btn>
    </v-row>
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
      to="/UserResView"
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
