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
     <a-breadcrumb-item ><span><a hreft="/SettingCoverSheet">Setting the Cover sheet/</a></span></a-breadcrumb-item>
     <a-breadcrumb-item href=""><span>Edit template</span></a-breadcrumb-item>
   </a-breadcrumb>
   <br/>
   <br/>
   <a-form
     :model="formState"
     name="validate_other"
     v-bind="formItemLayout"
     @finishFailed="onFinishFailed"
     @finish="onFinish"
   >
     <a-form-item label="" >
       <!-- <div class="Header-tex">Setting for document type:Add document type</div> -->
       <span class="ant-text" style="font-size: large">Setting the cover sheet template: Add template</span>
     </a-form-item>
 
  
     <a-form-item>
    
   </a-form-item>
 
   <a-form-item has-feedback label="Template Code" name="doc" >
     <a-input  prefix="TP23001" disabled style="width:200px" v-model:value="formState.doc" type="text" autocomplete="off" />
   </a-form-item>
   <a-form-item has-feedback label="Template Name" name="doc" >
     <a-input prefix="Template 01"  disabled  style="width:200px" v-model:value="formState.doc" type="text" autocomplete="off" />
   </a-form-item>
     
  
 
 
     <a-form-item name="switch1" label="Lease Agreement">
       <a-switch v-model:checked="formState.switch1" />
     </a-form-item>
     <a-form-item name="switch2" label="Sales Agreement">
       <a-switch v-model:checked="formState.switch2" />
     </a-form-item>
     <a-form-item name="switch3" label="Deposit Transfer Form">
       <a-switch v-model:checked="formState.switch3" />
     </a-form-item>
     <a-form-item name="switch4" label="Attachment">
       <a-switch v-model:checked="formState.switch4" />
     </a-form-item>
     <a-form-item name="switch5" label="Payment Schedule">
       <a-switch v-model:checked="formState.switch5" />
     </a-form-item>
     <a-form-item name="switch6" label="Interest Schedule">
       <a-switch v-model:checked="formState.switch6" />
     </a-form-item>
     <a-form-item name="switch7" label="Acceptance Receipt">
       <a-switch v-model:checked="formState.switch7" />
     </a-form-item>
     <!-- <div class="columns"> -->
       <!-- <div class="column"> -->
     <a-form-item name="switch8" label="Guarantee Document">
       <a-switch v-model:checked="formState.switch8" />
     </a-form-item>
   <!-- </div> -->
   <!-- <div class="column"> -->
     <a-form-item has-feedback label="Number of guarantee" name="doc2">
     <a-input v-model:value="formState.doc2" type="text" style="width:200px" autocomplete="off" />
    </a-form-item>
   <!-- </div> -->
   <!-- <div class="column"> </div> -->
  
  <!-- </div> -->
  <a-form-item name="switch9" label="Down Payment Transfer">
       <a-switch v-model:checked="formState.switch9" />
     </a-form-item>
     <a-form-item name="switch10" label="Agreement Note">
       <a-switch v-model:checked="formState.switch10" />
     </a-form-item>
     <div class="columns" >
      <div class="column" >
     <a-form-item name="switch11" label="Others">
       <a-switch v-model:checked="formState.switch11" />
     </a-form-item>
     <a-form-item has-feedback label="No1" name="doc2">
     <a-input v-model:value="formState.doc2" type="text" style="width:200px" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="No2" name="doc2">
     <a-input v-model:value="formState.doc2" type="text" style="width:200px" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="No3" name="doc2">
     <a-input v-model:value="formState.doc2" type="text" style="width:200px" autocomplete="off" />
    </a-form-item>
  </div>
  </div>
     <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
       <a-button type="primary" html-type="submit"><save-outlined />Save</a-button>
     </a-form-item>
     
   </a-form>
 </template>
 <script>
 
 import { defineComponent, reactive } from 'vue';
import { SaveOutlined } from '@ant-design/icons-vue';
import { HomeOutlined } from '@ant-design/icons-vue';
 export default defineComponent({
   components: {
       SaveOutlined,
       HomeOutlined 
 
   },
   setup() {
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
