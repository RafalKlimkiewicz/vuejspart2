require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

import Vue from 'vue';
import MyComponent from "./App.vue"

new Vue({
  el: "#app",
  components: { "custom": MyComponent },
  template: `
    <div class="text-center">
      <h1 class="bg-primary text-white p-3">
        To jest główny plik main.js
      </h1>
      <custom />
    </div>
    `,
});