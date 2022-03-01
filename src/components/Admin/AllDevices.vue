<template>
  <v-container
    fluid
  >
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
