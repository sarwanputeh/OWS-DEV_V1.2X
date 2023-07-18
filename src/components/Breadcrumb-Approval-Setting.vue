<template>
    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
        <home-outlined />
        </a>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
  
        <span>/Document Custody/</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="./"><span>Verification Approval/</span></a-breadcrumb-item>
      <a-breadcrumb-item href="./"><span>Setting</span></a-breadcrumb-item>
    </a-breadcrumb>
    <br/> 
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