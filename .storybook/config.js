import { configure } from "@storybook/vue";

import "bootstrap-italia/dist/css/bootstrap-italia.css";
import "bootstrap-italia/dist/css/italia-icon-font.css";

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";

// Install Vue plugins.
Vue.use(BootstrapVue);
Vue.use(Vuex);

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
