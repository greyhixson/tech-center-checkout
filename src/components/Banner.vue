<template>
  <v-card
    class="mb-4 mt-4 lighten-4 mx-auto"
    width="85%"
  >
    <v-toolbar
      height="90%"
    >
      <v-img
        class="mr-3"
        src="https://brand.uark.edu/_resources/images/shield.jpg"
        max-height="65px"
        max-width="65px"
      />
      <v-toolbar-title
        class="font-weight-light text-h4 ml-5"
      >
        {{ bannerStore.title }}
      </v-toolbar-title>
      <v-btn
        v-if="bannerStore.buttonIcon || bannerStore.buttonName"
        right
        absolute
        plain
        rounded
        x-large
        :to="bannerStore.buttonRoute"
      >
        {{ bannerStore.buttonName }}
        <v-icon
          size="45"
          class="pl-2"
        >
          {{ bannerStore.buttonIcon }}
        </v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
import { bannerStore } from '../store';

export default {
  name: 'Banner',
  data() {
    return {
      bannerStore,
    };
  },
};
</script>
