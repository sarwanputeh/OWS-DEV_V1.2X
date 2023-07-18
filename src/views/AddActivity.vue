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
    <a-breadcrumb-item href="./"
      ><span>Document Custody Management/</span></a-breadcrumb-item
    >
    <a-breadcrumb-item
      ><span><a href="/WarehouseView">Warehouse/</a></span></a-breadcrumb-item
    >
    <a-breadcrumb-item href="./"><span>AddAcivity</span></a-breadcrumb-item>
  </a-breadcrumb>
  <br /><br />
  <a-form
    :model="formState"
    name="validate_other"
    v-bind="formItemLayout"
    @finishFailed="onFinishFailed"
    @finish="onFinish"
  >
    <br />
    <a-form-item label="">
      <!-- <div class="Header-tex">Setting for document type:Add document type</div> -->
      <span class="ant-text" style="font-size: large"
        >Document Custody Management : Activity</span
      >
    </a-form-item>
    <br />

    <a-form-item label="Activity ID">
      <!-- <a-input-number   v-model:value="value3" prefix="08" disabled style="width: auto" /> -->
      <a-input-number
        v-model:value="value3"
        prefix=""
        disabled
        style="width: auto"
      />
    </a-form-item>

    <a-form-item
      name="select"
      label="State"
      :wrapper-col="{ span: 12 }"
      has-feedback
      :rules="[{ required: true, message: 'Please select State!' }]"
    >
      <a-select
        v-model:value="formState.select"
        placeholder="Please select State"
      >
        <a-select-option value="State1">State1</a-select-option>
        <a-select-option value="State2">State2</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item
      placeholder="Please select Date"
      label="Activity Date"
      :wrapper-col="{ span: 12 }"
    >
      <a-space direction="vertical">
        <a-date-picker @change="onChange">
          <template #suffixIcon>
            <Calendar-Outlined />
            <!-- <SmileOutlined /> -->
          </template>
        </a-date-picker>

        <!-- <a-date-picker suffix-icon="ab" @change="onChange" />
    <a-date-picker suffix-icon="ab" placeholder="Select month" picker="month" @change="onChange" />
    <a-range-picker suffix-icon="ab" @change="onRangeChange" />
    <a-date-picker suffix-icon="ab" placeholder="Select week" picker="week" @change="onChange" /> -->
      </a-space>
    </a-form-item>

    <a-form-item label="Description">
      <a-input style="width: 85%" />
    </a-form-item>
    <a-form-item label="Request by">
      <a-input style="width: auto" />
    </a-form-item>
    <a-form-item label="Department">
      <a-input style="width: auto" />
    </a-form-item>
    <!--    
      <a-form-item has-feedback label="Document Folder" name="doc2">
      <a-input v-model:value="formState.doc2" type="text" autocomplete="off" />
     </a-form-item> -->
    <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <a-button type="primary" html-type="submit"
        ><save-outlined />Save</a-button
      >
    </a-form-item>
  </a-form>
</template>
  <script>
import { defineComponent, reactive } from "vue";
import {
  SaveOutlined,
  CalendarOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    SaveOutlined,
    CalendarOutlined,
    HomeOutlined,
  },
  setup() {
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
      doc: "",
      checkPass: "",
      age: undefined,
    });
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
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
.Header-text {
  font-size: 24px;
}
.Header-text2 {
  font-size: 18px;
}
</style>
