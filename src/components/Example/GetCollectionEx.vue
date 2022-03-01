<!--
Lifecycle Hooks https://v2.vuejs.org/v2/guide/instance.html?redirect=true#Lifecycle-Diagram
Export and import, default vs named: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
Async/Await vs. Promises https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f
WE ARE USING VUE 2, DOCUMENTATION IS VERY DIFFERENT BETWEEN THE VERSIONS
-->

<template>
  <v-container>
    <v-card>
      <v-card-title>
        Get Collection
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="inventory"
        :search="search"
      />
    </v-card>
  </v-container>
</template>

<script>
// big difference between { getCollection } and getCollection
import { getCollection } from '../../firebase/techCenterCheckout.Data';

export default {
  name: 'GetCollectionEx',
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Device Name',
          value: 'deviceName',
        },
        {
          text: 'Device Tag',
          value: 'deviceTag',
        },
        {
          text: 'Status',
          value: 'status',
        },
      ],
      inventory: [],
    };
  },
  created() {
    this.getFBCollection();
  },
  methods: {
    // async very important
    async getFBCollection() {
      try {
        const inventory = await getCollection();
        this.inventory = inventory;
      } catch (e) {
        // Maybe not a bad idea to log error messages in the DB
        console.log(e);
      }
    },
  },
};
</script>
