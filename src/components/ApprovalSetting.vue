<template>
  
 <div class="Header-text">Verification Approval</div>
 <br/>
 <br/>    
<div class="columns">
    <div class="column">
        <div class="navbar-start">   
        <a-button  @click="success"  type="primary" :size="size" style="width: 150px">
          
          Approval</a-button>
        </div>
    </div>
    
    <div class="column">
        <div class="navbar-end">   
        <a-button type="primary" :size="size" style="width: 150px">
          <a href="/SettingApproval">
           <Setting-Outlined/>
            Setting</a>
          </a-button>
        </div>
    </div>
</div>
    <br />
  </template>
  <script>
//   import { DownloadOutlined } from '@ant-design/icons-vue';

  import { defineComponent, ref } from 'vue';
  import {SettingOutlined } from '@ant-design/icons-vue'
  import { message } from 'ant-design-vue';

  export default defineComponent({
    components: {
    //   DownloadOutlined,
    SettingOutlined,

   
    },
    setup(){
  const success = () => {
      // message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
      message.success('Approval Complete...');

    };
      return {
        size: ref('large'),
        success,
      };
    },
  });
  </script>