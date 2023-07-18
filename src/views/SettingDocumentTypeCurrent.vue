<template>
  
    <!--ยังไม่เชื่อมcondition-->
     <br />
     <a-breadcrumb>
       <a-breadcrumb-item href="/">
         <a href="/">
         <home-outlined />
         </a>
       </a-breadcrumb-item>
       <a-breadcrumb-item ><a href="./"><span> /Received Document Verification</span></a></a-breadcrumb-item>
       
     </a-breadcrumb>  
     <br/>
     <br/>
     <div class="Header-text">Setting for document type: Add document type</div>
     <br/>  
     
    <ListComponentSettingDoc />
    

   </template>
 
 <script>

 
   /* eslint-disable */
   
   import { defineComponent } from 'vue'; 
 //  import BreadcrumbReceived from '@/components/Breadcrumb-Received.vue'
  import {FileSearchOutlined,TableOutlined,PlusOutlined} from '@ant-design/icons-vue'
  import { HomeOutlined } from '@ant-design/icons-vue';
  import ListComponentSettingDoc from '@/components/ListComponentSettingDoc.vue'
  

   export default defineComponent({
     components: {
     
       FileSearchOutlined,
     TableOutlined,
     PlusOutlined,
     HomeOutlined,
     ListComponentSettingDoc
       
     },
    });
   </script>
   <style scoped>
   .highlight {
     background-color: rgb(255, 192, 105);
     padding: 0px;
   }
   
   .Header-text{
      font-size: 24px;
   }
   .Header-text2{
      font-size: 18px;
   }
   </style>