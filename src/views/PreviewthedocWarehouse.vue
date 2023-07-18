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
      ><a href="#"><span>Warehouse/</span></a></a-breadcrumb-item
    >
    <a-breadcrumb-item href="./"
      ><span>Preview The Document</span></a-breadcrumb-item
    >
  </a-breadcrumb>

  <!-- <ConditionSearch />
      <HelloWorld/>
      <br/> -->

  <br />

  <div class="Header-text" style="margin-left: 5px">Preview the document</div>

  <br />

  <br />

  <div class="nav-end">
    <div class="columns">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column">
        <a href=""><download-outlined />Download</a>
      </div>
      <div class="column">
        <a href=""><printer-outlined />Print</a>
      </div>
    </div>
  </div>

  <a-card
    ><div class="Header-text2" style="margin-left: 5px">Preview</div></a-card
  >

  <br />
  <br />
  <br />
  <div class="column-center">
    <a-card hoverable style="width: 800px">
      <template #cover>
        <img
          style="border: 1px solid black"
          alt="example"
          src="https://res.cloudinary.com/doa5zgrsq/image/upload/c_limit,h_1009,w_809/v1685300396/Preview_pmuio6.jpg"
        />
      </template>
      <a-card-meta title=""> </a-card-meta>
    </a-card>
  </div>
  <br />

  <a-image
    :width="200"
    style="border: 1px solid black"
    :preview="{
      visible,
      onVisibleChange: setVisible,
    }"
    src="https://res.cloudinary.com/doa5zgrsq/image/upload/v1685081279/Preview_pmuio6.jpg"
  />

  <!-- <a-button type="primary" @click="() => setvisible(true)">Select2</a-button>

    <a-image
      :width="200"
      :style="{ display: 'none' }"
      :preview="{
        setvisibletwo,
        onVisibleChange: setVisible,
      }"
      src="https://plus.unsplash.com/premium_photo-1673283242704-12fcc9c05f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    /> -->
</template>
  
  <script>
// @ is an alias to /src

//   import {  ref } from 'vue';
//   import {FileSearchOutlined,TableOutlined,SettingOutlined,CaretRightOutlined,EyeOutlined,SearchOutlined} from '@ant-design/icons-vue'
import { defineComponent, ref } from "vue";
import { DownloadOutlined, PrinterOutlined } from "@ant-design/icons-vue";
import { HomeOutlined } from "@ant-design/icons-vue";

const columns = [
  {
    title: "No",
    dataIndex: "No",
    key: "No",
  },

  {
    title: "Document description",
    dataIndex: "documentdes",
    key: "documentdes",
  },
  {
    title: "Action",
    dataIndex: "select",
    key: "select",
  },
];
const data = [
  {
    No: "1",
    documentdes: "เอกสารนำส่งให้ลูกค้า",
    select: "select",
  },
  {
    No: "2",
    documentdes: "เอกสารนำส่งให้ Marketing",
    select: "select",
  },
  {
    No: "3",
    documentdes: "เอกสารนำเก็บเข้าห้อง",
    select: "select",
  },
];

export default defineComponent({
  components: {
    DownloadOutlined,
    PrinterOutlined,
    HomeOutlined,
  },
  setup() {
    const visible = ref(false);

    const setVisible = (value) => {
      visible.value = value;
    };

    return {
      visible,
      setVisible,

      data,
      columns,
    };
  },
});

// export default defineComponent({
//   setup() {
//     return {
//       data,
//       columns,
//     };
//   },
// });
</script>


  <style>
.Header-text {
  font-size: 24px;
}
.Header-text2 {
  font-size: 18px;
}
.Paragraph-text {
  font-size: 16px;
}
.column-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
