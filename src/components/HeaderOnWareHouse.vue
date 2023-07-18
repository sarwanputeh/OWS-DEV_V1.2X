<!-- Header have Function when click Header result will gi detail -->
<template>
  <div>
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'No'">
          <a @click="showOtherComponents(record.No)">{{ text }}</a>
        </template>
        <template v-else-if="column.dataIndex === 'preview'">
          <a href="/Previewthedocument"><EyeOutlined /></a>
        </template>
        <template v-else-if="column.dataIndex === 'edit'">
          <a href="/BoxControlEdit"><EditOutlined /></a>
        </template>
        <template v-else-if="column.dataIndex === 'delete'">
          <a href="#"><DeleteOutlined /></a>
        </template>
      </template>
    </a-table>
    <br />
    <div class="Header-text2" style="margin-left: -5px">
      <Table-Outlined />Detail Result
    </div>
    <br />
    <ComponentB v-if="showComponentB" />
    <ComponentC v-if="showComponentC" />
    <ComponentD v-if="showComponentD" />
  </div>
</template>

<script>
import ComponentB from "./ComponentB.vue";
// eslint-disable-next-line vue/no-unused-components
import ComponentC from "./ComponentC.vue";
// eslint-disable-next-line vue/no-unused-components
import ComponentD from "./ComponentD.vue";

import { defineComponent } from "vue";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  TableOutlined,
} from "@ant-design/icons-vue";

const columns = [
  {
    title: "No",
    dataIndex: "No",
    key: "No",
  },

  {
    title: "Box Code",
    dataIndex: "boxcode",
    key: "boxcode",
  },
  {
    title: "Box Date",
    dataIndex: "boxdate",
    key: "boxdate",
  },
  {
    title: "Store Date(TOLC)",
    dataIndex: "boxdate",
    key: "boxdate",
  },
  {
    title: "Box Reference",
    dataIndex: "boxref",
    key: "boxref",
  },
  {
    title: "Warehouse Name",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Remark",
    dataIndex: "remark",
    key: "remark",
  },
  {
    title: "Preview",
    dataIndex: "preview",
    key: "preview",
  },

  {
    title: "Edit",
    dataIndex: "edit",
    key: "edit",
  },
  {
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
  },
];

const data = [
  {
    key: "1",
    No: "1",
    boxcode: "BX2305001",
    boxdate: "23/05/2023",
    boxref: "Ref 23001001",
    company: "ABC Company",
    edit: "edit",
    preview: "preview",
    delete: "delete",
  },
  {
    key: "2",
    No: "2",
    boxcode: "BX2305002",
    boxdate: "23/05/2023",
    boxref: "Ref 23001002",
    company: "ABC Company",
    edit: "edit",
    preview: "preview",
    delete: "delete",
  },
  {
    key: "3",
    No: "3",
    boxcode: "BX2305003",
    boxdate: "23/05/2023",
    boxref: "Ref 23001003",
    company: "ABC Company",
    edit: "edit",
    preview: "preview",
    delete: "delete",
  },
];

export default defineComponent({
  components: {
    EditOutlined,
    EyeOutlined,
    DeleteOutlined,
    ComponentB,
    ComponentC,
    ComponentD,
    TableOutlined,
  },
  data() {
    return {
      showComponentB: false,
      showComponentC: false,
      showComponentD: false,
    };
  },
  methods: {
    showOtherComponents(no) {
      this.showComponentB = false;
      this.showComponentC = false;
      this.showComponentD = false;

      if (no === "1") {
        this.showComponentB = true;
        // ...
      } else if (no === "2") {
        // Show Component B
        this.showComponentC = true;
      } else if (no === "3") {
        this.showComponentD = true;
        // ...
      }
    },
  },
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>
