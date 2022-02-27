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
          All Devices
        </v-toolbar-title>
        <v-btn
          depressed
          right
          absolute
          to="/AdminView"
        >
          <v-icon
            size="50"
            style="padding: 0;
                color: #00264D;"
          >
            home
          </v-icon>
        </v-btn>
        <v-spacer />
      </v-toolbar>
      <v-banner
        single-line
        height="75%"
      />
    </v-card>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="devices"
      >
        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            :color="getColor(item.status)"
            text-color="black"
          >
            {{ item.status }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AllDevices',
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Device Tag',
          align: 'start',
          filterable: true,
          value: 'deviceTag',
        },
        { text: 'Name', value: 'name' },
        { text: 'Status', value: 'status' },
      ],
      devices: [
        {
          deviceTag: 1001,
          name: 'Lenovo Mouse',
          status: 'Ready',
        },
        {
          deviceTag: 9999,
          name: 'Sony Camera',
          status: 'Ready',
        },
        {
          deviceTag: 1234,
          name: 'Lenovo Mouse',
          status: 'Checked Out',
        },
        {
          deviceTag: 12345,
          name: 'Sony Camera',
          status: 'Ready',
        },
        {
          deviceTag: 8888,
          name: 'Sony Camera',
          status: 'Checked In',
        },
        {
          deviceTag: 9090,
          name: 'Dell Laptop',
          status: 'Ready',
        },
      ],
    };
  },
  methods: {
    getColor(status) {
      let color = '';
      if (status === 'Checked Out') color = 'red';
      else if (status === 'Ready') color = 'orange';
      else if (status === 'Checked In') color = 'green';
      return color;
    },
  },
};

</script>
