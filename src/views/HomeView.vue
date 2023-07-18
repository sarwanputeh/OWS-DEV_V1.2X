<template>

  <div class="home">
   
    <BreadcrumbReceived/>
    <br />
    <div class="Header-text" style="margin-left: 1px;">Received Document Verification</div>
    <!-- <ConditionSearch />
    <HelloWorld/>
    <br/> -->
    <br/>   
    
    <div class="navbar-end" style="margin-right: 50px;"> <a-button  href="/SettingDocumentType" type="primary"  size="large"  style="width: 100px">
      <setting-outlined />Setting</a-button> </div> 

    <br/>  <br/>
   
    <br/>
   
    <!-- <HelloWorld/> -->
    <!-- <TbReceivedDocument/> -->
 <ListComponent />
    <br/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import TbReceivedDocument from '@/components/TbReceivedDocument.vue'

/* eslint-disable */

import ConditionSearch  from '@/components/ConditionSearch.vue'
import BreadcrumbReceived from '@/components/Breadcrumb-Received.vue'
import {FileSearchOutlined,TableOutlined,SettingOutlined } from '@ant-design/icons-vue'
import { List } from 'ant-design-vue'
import  ListComponent from '@/components/ListComponent.vue' 


// import { LaptopOutlined,FileOutlined,CarOutlined,SafetyCertificateOutlined,AppstoreOutlined,UserOutlined } from '@ant-design/icons-vue';


export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    ConditionSearch,
    BreadcrumbReceived,
    FileSearchOutlined,
    TableOutlined,
    SettingOutlined,
    // TbReceivedDocument,
    // List,
    ListComponent
}
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