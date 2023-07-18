<template>
    <a-breadcrumb>
        <a href="/">
        <home-outlined />
        </a>
      <a-breadcrumb-item ><span><a href="./">/Received Document Verification </a></span></a-breadcrumb-item>
    </a-breadcrumb>
<br/>
  </template>
  <script>
  import { defineComponent } from 'vue';
  import { HomeOutlined } from '@ant-design/icons-vue';
  export default defineComponent({
    components: {
      HomeOutlined,
   
    },
  });
  </script>