<template>
  <v-container>
    <v-card>
      <v-toolbar
        color="black"
        dark
      >
        <v-toolbar-title>Apple MacBook Air</v-toolbar-title>
      </v-toolbar>
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-date-picker
          v-model="date"
          @input="menu2 = false"
        />
      </v-menu>
      <v-select
        :items="items"
        label="Time"
        prepend-icon="mdi-clock"
      />
      <v-select
        :items="items"
        label="Duration"
        prepend-icon="mdi-timer"
      />
    </v-card>
    <v-btn
      href="/#/UserConfirmRes"
      class="mt-6 ml-2"
    >
      Submit
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'UserReviewRes',
  data: () => ({
    menu2: false,
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    date: new Date(Date.now()).toISOString().substr(0, 10),
  }),
};
</script>
