<template>
    <h1>Contract No:</h1><a-input v-model:value="value" placeholder="Please Input Contrsct No" />
    <h1>Leassee Name:</h1><a-input v-model:value="value" placeholder="Please Input Lessee Name" />
    <br/> <br/>
    <div class="navbar-end">
    <a-button type="primary">Preview</a-button>
    </div>
    <br/>
  </template>
  <script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      const value = ref('');
      return {
        value,
      };
    },
  });
  </script>