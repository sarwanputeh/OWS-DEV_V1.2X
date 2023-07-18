<!-- // Detail Result3 -->
<template>
  <a-table :columns="columns" :data-source="data">
    <a-table-column title="No" dataIndex="No" key="No"></a-table-column>
    <a-table-column
      title="Contract No"
      dataIndex="contractNo"
      key="contractNo"
    ></a-table-column>
    <a-table-column title="Sys." dataIndex="sys" key="sys"></a-table-column>
    <a-table-column
      title="Customer Code"
      dataIndex="customerCode"
      key="customerCode"
    ></a-table-column>
    <a-table-column
      title="Customer Name"
      dataIndex="customerName"
      key="customerName"
    ></a-table-column>
    <!-- <a-table-column
      title="Action"
      key="action"
      :custom-render="renderActions"
    ></a-table-column> -->
  </a-table>
  <br />
  <br />
  <div class="Header-text2" style="margin-left: -5px">
    <Caret-Right-Outlined /> Deliver and withdraw the Document Box
  </div>
  <br />
  <div class="Header-text2" style="margin-left: -5px">
    <Table-Outlined />Detail Result
  </div>
  <br />
  <ActivityDeliveryAndWithdraw />
  <a-button href="/AddActivity" type="primary" style="width: 100px" size="large"
    ><plus-outlined />Add</a-button
  >
</template>

<script>
import { defineComponent } from "vue";
import {
  TableOutlined,
  CaretRightOutlined,
  PlusOutlined,
} from "@ant-design/icons-vue";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";
import ActivityDeliveryAndWithdraw from "@/components/ActivityDeliveryAndWithdraw.vue";

const data = [
  {
    key: "1",
    No: "1",
    contractNo: "LA 65406",
    sys: "ALD",
    customerCode: "5555",
    customerName: "Company D",
  },
  {
    key: "2",
    No: "2",
    contractNo: "LA 65405",
    sys: "ALD",
    customerCode: "5555",
    customerName: "Company D",
  },
  {
    key: "3",
    No: "3",
    contractNo: "LA 65404",
    sys: "ALD",
    customerCode: "5555",
    customerName: "Company D",
  },
  {
    key: "4",
    No: "4",
    contractNo: "LA 65403",
    sys: "ALD",
    customerCode: "5555",
    customerName: "Company D",
  },
];

export default defineComponent({
  components: {
    TableOutlined,
    CaretRightOutlined,
    PlusOutlined,
    ActivityDeliveryAndWithdraw,
  },
  data() {
    return {
      data,
    };
  },
  methods: {
    handleEdit(record) {
      // Handle edit action for the record
      console.log("Edit record:", record);
    },
    handleDelete(record) {
      // Handle delete action for the record
      console.log("Delete record:", record);
    },
    renderActions(record) {
      return (
        <span>
          <a-tooltip title="Edit">
            <a-button type="primary" onClick={() => this.handleEdit(record)}>
              <EditOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="Delete">
            <a-button type="primary" onClick={() => this.handleDelete(record)}>
              <DeleteOutlined />
            </a-button>
          </a-tooltip>
        </span>
      );
    },
  },
});
</script>