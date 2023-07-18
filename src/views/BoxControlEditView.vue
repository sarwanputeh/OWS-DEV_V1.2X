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
    <a-breadcrumb-item href=""
      ><span><a href="/WarehouseView">Warehouse/ </a> </span></a-breadcrumb-item
    >
    <a-breadcrumb-item href=""
      ><span><a href="#">Box Control Edit</a></span></a-breadcrumb-item
    >
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
      <span class="ant-text" style="font-size: large">Box Control: Edit</span>
    </a-form-item>
    <br />
    <a-form-item label="Box Code">
      <a-input-number
        v-model:value="value3"
        prefix=""
        disabled
        style="width: auto"
      />
    </a-form-item>
    <a-form-item label="Store Date (TOLC Moving to Safety Room)">
      <a-input style="width: auto" />
    </a-form-item>
    <a-form-item label="Delivery Date(Moving to Warehouse)">
      <a-input style="width: auto" />
    </a-form-item>
    <a-form-item label="Box Reference">
      <a-input disabled style="width: auto" />
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
import { SaveOutlined, HomeOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    SaveOutlined,
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


<!--Correct for FrontEnd  <template>
  <a-form colon v-bind="formItemLayout">
    <a-form-item>
      Box Code:
      <a-input v-model="boxCode" disabled style="width: 300px" />
    </a-form-item>

    <a-form-item label="Store Date (TOLC) Moving to Safety Room">
      <a-input v-model="storeDate" style="width: 300px" />
    </a-form-item>

    <a-form-item label="Delivery Date & (Moving to Warehouse)">
      <a-input v-model="deliveryWarehouse" />
    </a-form-item>

    <a-form-item label="Box Reference">
      <a-input v-model="boxReference" disabled />
    </a-form-item>

    <a-form-item>
      <div class="navbar-end">
        <a-button type="primary" @click="saveForm" style="width: 150px">
          <Save-Outlined />
          Save
        </a-button>
      </div>
    </a-form-item>
  </a-form>
</template>

<script>
import { defineComponent } from "vue";
import { SaveOutlined } from "@ant-design/icons-vue";
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
export default defineComponent({
  components: {
    SaveOutlined,
    formItemLayout,
  },

  data() {
    return {
      boxCode: "",
      storeDate: "",
      deliveryWarehouse: "",
      boxReference: "",
    };
  },
  methods: {
    saveForm() {
      // ทำสิ่งที่คุณต้องการเมื่อกดปุ่ม Save ที่นี่
      console.log("Form saved!");
    },
  },
});
</script> -->
