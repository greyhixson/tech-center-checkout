<template>
  <v-card
    class="mb-8 mt-4 lighten-4 mx-auto"
    width="85%"
  >
    <v-toolbar
      height="80%"
    >
      <v-img
        class="mr-3"
        src="https://brand.uark.edu/_resources/images/shield.jpg"
        max-height="65px"
        max-width="65px"
      />
      <v-toolbar-title
        class="text-h4 ml-5"
      >
        {{ bannerStore.title }}
      </v-toolbar-title>
      <v-btn
        right
        absolute
        color="blue-grey"
        class="ma-2 white--text"
        :to="bannerStore.buttonRoute"
      >
        {{ bannerStore.buttonName }}
        <v-icon
          size="25"
          class="pl-2"
          style="color: white"
        >
          {{ bannerStore.buttonIcon }}
        </v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
import bannerStore from '../store';

export default {
  name: 'Banner',
  data() {
    return {
      bannerStore,
    };
  },
};
</script>
