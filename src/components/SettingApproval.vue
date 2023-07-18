<template>
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      
     
      <a-form-item label="Set the schedule for approval" required>
        <a-checkbox-group v-model:value="modelRef.type">
          <a-checkbox value="1" name="type">Manual</a-checkbox>
          <a-checkbox value="2" name="type">Automatic</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      
      <a-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }" v-bind="errorInfos">
       
        <!-- <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button> -->
      </a-form-item>
    </a-form>
    <div class="left-time"><TimePicker /></div>
    <a-form :label-col="labelCol2" :wrapper-col="wrapperCol">
    <a-form-item label="Recur Every" required >
        <a-checkbox-group v-model:value="modelRef.type">
          <a-checkbox value="3" name="type">Monday</a-checkbox><br/>
          <a-checkbox value="4" name="type">Tuesday</a-checkbox><br/>
          <a-checkbox value="5" name="type">Wednesday</a-checkbox><br/>
          <a-checkbox value="6" name="type">Thursday</a-checkbox><br/>
          <a-checkbox value="7" name="type">Friday</a-checkbox><br/>
          <a-checkbox value="8" name="type">Saturday</a-checkbox><br/>
          <a-checkbox value="9" name="type">Sunday</a-checkbox><br/>
          <br/>
          <br/>
          <a-button type="primary" ><Save-Outlined/>Save Setting</a-button>
        </a-checkbox-group>
      </a-form-item>
      
    </a-form>
    <!-- <a-form :label-col="labelCol3" :wrapper-col="wrapperCol">
    <a-button type="primary" >Setting</a-button>
  </a-form> -->
  </template>
  <script>
  import { reactive, toRaw, computed, defineComponent } from 'vue';
  import { toArray } from 'lodash-es';
  import { Form } from 'ant-design-vue';
  import TimePicker from '@/components/TimePicker.vue';
  import {SaveOutlined } from '@ant-design/icons-vue'

  const useForm = Form.useForm;
  export default defineComponent({
  components: { TimePicker,SaveOutlined 
  
  },
    setup() {
      const modelRef = reactive({
        name: '',
        region: undefined,
        type: [],
      });
      const rulesRef = reactive({
      
        // region: [{
        //   required: true,
        //   message: 'Please select Automatic',
        // }],
       
      });
      const {
        resetFields,
        validate,
        validateInfos,
        mergeValidateInfo,
      } = useForm(modelRef, rulesRef);
      const onSubmit = () => {
        validate().then(() => {
          console.log(toRaw(modelRef));
        }).catch(err => {
          console.log('error', err);
        });
      };
      const errorInfos = computed(() => {
        return mergeValidateInfo(toArray(validateInfos));
      });
      return {
        labelCol: {
          span: 5,
        },
        labelCol2: {
          span: 20,
        },
        labelCol3: {
          span: 20,
        },
        wrapperCol: {
          span: 14,
        },
        validateInfos,
        resetFields,
        modelRef,
        onSubmit,
        errorInfos,
       
      };
    },
  });
  </script>
  <style scoped>
  .error-infos :deep(.ant-form-explain) {
    white-space: pre-line;
  }
 
  </style>