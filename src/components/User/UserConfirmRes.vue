<template>
  <v-container>
    <h2
      class="white--text text--darken-2"
    >
      Thank you for reserving {{ selectionStore.deviceName }}.
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
import { bannerStore, selectionStore } from '@/store';

export default {
  name: 'UserConfirmRes',
  data: () => ({
    selectionStore,
  }),
  created() {
    bannerStore.setTitle('Reservation Confirmed');
    bannerStore.setButton('Home');
  },
};
</script>
