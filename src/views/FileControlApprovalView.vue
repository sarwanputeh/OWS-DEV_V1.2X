<template>
    
    <div >
    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
        <home-outlined />
        </a>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
        <span>/File Control Management</span>
      </a-breadcrumb-item> 
      <a-breadcrumb-item href="">
        <span>/Approval</span>
      </a-breadcrumb-item> 
    </a-breadcrumb>
    <br/>
    <br/>
 
      <div class="Header-text" style="margin-left: 5px">File Control Management : Approval</div>
      <br/>   
      <br/>
      <div class="columns">
        <div class="column">
            <a-button @click="countDown"  type="primary" :size="size" style="width: 200px">
            <a href="#"><check-circle-outlined />Approval</a>
        </a-button>
        </div>
        <div class="column">
            <div class="navbar-end">
            <a-button type="primary" :size="size" style="width: 200px">
            <a href="#"><Setting-Outlined/>Setting</a>
             </a-button>
            </div>
        </div>
      </div>
      </div>
      <br/>
  <br/>
  </template>
  <script>
  // @ is an alias to /src



  import {  ref } from 'vue';
  import {SettingOutlined,CheckCircleOutlined,HomeOutlined} from '@ant-design/icons-vue'
  import { Modal } from 'ant-design-vue';
  export default {
    name: 'HomeView',
    components: {
      
        SettingOutlined,
        CheckCircleOutlined,
        HomeOutlined,
      

     
    },
    setup()  {
      const countDown= () => {
      let secondsToGo = 5;
      const modal = Modal.success({
        title: '',
        content: `RPA Running Time.. ${secondsToGo}`,
      });
      const interval = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
          content: `The countdown process is complete. ${secondsToGo}`,
        });
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        modal.destroy();
      }, secondsToGo * 1000);
    }; 
      return {
        size: ref('large'),
        countDown
      };
      
    },

  }

</script>
  <style>
  .Header-text{
       font-size: 24px;
    }
    .Header-text2{
       font-size: 18px;
    }
  .Paragraph-text{
       font-size: 16px;
    }
  </style>