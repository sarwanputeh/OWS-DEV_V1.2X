<template>
    <div >
      <BreadcrumbApprovalSetting/>
      <br/>
      <div class="Header-text" style="margin-left: 5px">Setting the Verification Approval</div>
      <br/>
      <div class="Paragraph-text" style="margin-left: 5px" >
        <Setting-Outlined/>
        Setting</div>
      
      <SettingApproval/>
      <br/>
      <br/>

      <!-- <a-button type="primary" @click.prevent="onSubmit">Setting</a-button> -->
     
      <br/>
      <br/>
  
    </div>
  </template>
  
  <script>
  // @ is an alias to /src


  import SettingApproval from '@/components/SettingApproval.vue'
  import BreadcrumbApprovalSetting from '@/components/Breadcrumb-Approval-Setting.vue'
  import {SettingOutlined } from '@ant-design/icons-vue'

 

  export default {
  
    components: {

        SettingApproval,
        BreadcrumbApprovalSetting,
        SettingOutlined,
     
     
    }
  }
  </script>
  <style>
  .Header-text{
       font-size: 24px;
    }
  .Paragraph-text{
       font-size: 16px;
    }
  </style>