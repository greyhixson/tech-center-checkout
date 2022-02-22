/* eslint-disable import/no-extraneous-dependencies */
// https://vuetifyjs.com/en/features/icon-fonts/#material-icons: follow instructions to download material icon package

import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: '#600000',
      },
    },
    icons: {
      iconfont: 'md',
    },
  },
});
