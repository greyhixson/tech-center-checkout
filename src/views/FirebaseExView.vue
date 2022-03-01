<template>
  <v-container>
    <get-collection-ex />
    <v-form>
      <v-text-field
        v-model="username"
        label="Enter a user name:"
        placeholder="gahixson"
        solo
        width="50px"
      />
      <v-btn
        class="mr-4"
        type="submit"
        @click="usernameSubmit=true"
      >
        submit
      </v-btn>
    </v-form>
    <!-- Concept: Conditional rendering: https://v2.vuejs.org/v2/guide/conditional.html
                  Props: https://v2.vuejs.org/v2/guide/components-props.html?redirect=true-->
    <retrieve-user-ex
      v-if="usernameSubmit && username"
      :username="username"
    />
  </v-container>
</template>

<script>
import RetrieveUserEx from '../components/Example/RetrieveUserEx.vue';
import GetCollectionEx from '../components/Example/GetCollectionEx.vue';

export default {
  name: 'FirebaseExView',
  components: {
    RetrieveUserEx,
    GetCollectionEx,
  },
  // Just so you know, this is a terrible and janky way to reset the form so don't use this
  data() {
    return {
      username: '',
      usernameSubmit: false,
    };
  },
  watch: {
    username() {
      if (this.username === '') {
        this.usernameSubmit = false;
      }
    },
  },
};

</script>
