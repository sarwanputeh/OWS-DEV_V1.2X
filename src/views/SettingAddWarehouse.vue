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
     <a-breadcrumb-item href=""><span><a href="/WarehouseView">Warehouse/ </a> </span></a-breadcrumb-item>
     <a-breadcrumb-item href=""><span><a href="/SettingWarehouse">Setting the Warehouse Master/</a></span></a-breadcrumb-item>
     <a-breadcrumb-item href="./"><span>Add Warehouse</span></a-breadcrumb-item>
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
       <span class="ant-text" style="font-size: large">Setting the Warehouse Master:Add warehouse</span>
     </a-form-item>
     <br/>
    <a-form-item label="Warehouse Code" >
   <a-input-number   v-model:value="value3" prefix="08" disabled style="width: auto" />
   </a-form-item>
   <a-form-item label="Warehouse Name" >
   <a-input style="width: auto" />
   </a-form-item>
   <a-form-item label="Contract Name" >
   <a-input style="width: auto" />
   </a-form-item>
   <a-form-item label="Telephone" >
   <a-input style="width: auto" />
   </a-form-item>
   <a-form-item label="Email" >
   <a-input style="width: auto" />
   </a-form-item>
   <a-form-item label="Description" >
   <a-input style="width: 85%" />
   </a-form-item>
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
