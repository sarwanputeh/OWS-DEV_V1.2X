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
     <a-breadcrumb-item href="./"><span>Document Custody Management/</span></a-breadcrumb-item>
     <a-breadcrumb-item ><span><a href="/WarehouseView-">Warehouse/ </a> </span></a-breadcrumb-item>
     <a-breadcrumb-item ><span><a href="">Edit/</a></span></a-breadcrumb-item>
   </a-breadcrumb>
   <br/><br/>
   <a-form
     :model="formState"
     name="validate_other"
     v-bind="formItemLayout"
     @finishFailed="onFinishFailed"
     @finish="onFinish"
   >
   <br/>
     <a-form-item label="" >
       <!-- <div class="Header-tex">Setting for document type:Add document type</div> -->
       <span class="ant-text" style="font-size: large">Warehouse Management: Edit</span>
     </a-form-item>
     <br/>
    <a-form-item label="Contract No" >
      <a-input  prefix="LA 62287" disabled  style="width: auto" />
   <!-- <a-input-number   v-model:value="value3" prefix="08" disabled style="width: auto" /> -->
   </a-form-item>
   <a-form-item label="Customer Name" >
   <a-input  prefix="บริษัท อริสต้า ไลฟ์ซายน์(ประเทศไทย) จำกัด" disabled  style="width: auto" />
   </a-form-item>
   <a-form-item label="Box Code" >
   <a-input prefix="BX2305001" disabled  style="width: auto" />
   </a-form-item>
  <a-form-item label="Store Date(Safe Room)" >
   <a-space direction="vertical" :size="12">
    <a-date-picker v-model:value="value1" />
  </a-space>
</a-form-item>
<a-form-item label="Delivery(To Warehouse)" >
   <a-space direction="vertical" :size="12">
    <a-date-picker v-model:value="value1" />
  </a-space>
</a-form-item>
   <!-- <a-form-item label="Store Date(Safe Room)" >
   <a-input style="width: auto" />
   </a-form-item>
   <a-form-item label="Delivery(To Warehouse)" >
   <a-input style="width: auto" />
   </a-form-item> -->

     <!--    
     <a-form-item has-feedback label="Document Folder" name="doc2">
     <a-input v-model:value="formState.doc2" type="text" autocomplete="off" />
    </a-form-item> -->
         <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
       <a-button type="primary" html-type="submit"><save-outlined />Save</a-button>
     </a-form-item>
   </a-form>
 </template>
 <script>
 
 import { defineComponent, reactive } from 'vue';
import { SaveOutlined,HomeOutlined} from '@ant-design/icons-vue';
 export default defineComponent({
   components: {
       SaveOutlined,
       HomeOutlined,
 
   },
   setup() 
   {
     const onChange = (date, dateString) => {
     console.log(date, dateString);
   };
   const onRangeChange = (date, dateString) => {
     console.log(date, dateString);
   }; 
     const formItemLayout = {
       labelCol: {
         span: 6,
       },
       wrapperCol: {
         span: 14,
       },
     };
     const formState = reactive({
       doc: '',
      checkPass: '',
      age: undefined,
     });
     const onFinish = values => {
       console.log('Success:', values);
     };
     const onFinishFailed = errorInfo => {
       console.log('Failed:', errorInfo);
     };
     return {
       formState,
       onFinish,
       onFinishFailed,
       formItemLayout,
       onChange,
       onRangeChange,
      
     };
   },
 });
 </script>
 <style>
  .Header-text{
    font-size: 24px;
 }
 .Header-text2{
    font-size: 18px;
 }

 </style>
