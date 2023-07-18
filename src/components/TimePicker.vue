<template>
    <a-form
      :model="formState"
      name="time_related_controls"
      v-bind="formItemLayout"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >

      <a-form-item name="time-picker" label="Daily frequency occurs once at" v-bind="config" >
        <a-time-picker v-model:value="formState['time-picker']" format="HH:mm:ss" value-format="HH:mm:ss" />
      </a-form-item>
      <a-form-item
        :wrapper-col="{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }"
      >
    
        <!-- <a-button type="primary" html-type="submit">Submit</a-button> -->
      </a-form-item>

      
    </a-form>
    
  </template>
  <script>
  import { defineComponent, reactive } from 'vue';
  
  export default defineComponent({
    setup() {
      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 20,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      const config = {
        rules: [{
          type: 'string',
          required: true,
          message: 'Please select time!',
        }],
      };
      const rangeConfig = {
        rules: [{
          type: 'array',
          required: true,
          message: 'Please select time!',
        }],
      };
      const formState = reactive({});
      const onFinish = values => {
        console.log('Success:', values, formState);
      };
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      return {
        formState,
        onFinish,
        onFinishFailed,
        formItemLayout,
        config,
        rangeConfig,
        
      };
    },
  });
  </script>