<template>
  <a-table :columns="columns" :data-source="data">
    <a-table-column title="No" dataIndex="No" key="No"></a-table-column>
    <a-table-column
      title="State"
      dataIndex="state"
      key="state"
    ></a-table-column>
    <a-table-column title="Date" dataIndex="Date" key="Date"></a-table-column>
    <a-table-column
      title="Box Code"
      dataIndex="BoxCode"
      key="BoxCode"
    ></a-table-column>
    <a-table-column
      title="Description"
      dataIndex="Description"
      key="Description"
    ></a-table-column>
    <a-table-column
      title="Request By"
      dataIndex="RequestBy"
      key="RequestBy"
    ></a-table-column>
    <a-table-column
      title="Department"
      dataIndex="Department"
      key="Department"
    ></a-table-column>
    <a-table-column
      title="Action"
      key="action"
      :custom-render="renderActions"
    ></a-table-column>
  </a-table>
</template>

<script>
import { defineComponent } from "vue";
import { EditOutlined } from "@ant-design/icons-vue";

const data = [
  {
    key: "1",
    No: "1",
    state: "Out",
    Date: "5/25/2023",
    BoxCode: "BX2305001",
    Description: "delivery to warehouse.",
    RequestBy: "Mr. A",
    Department: "CMD",
    Action: "Edit",
  },
  {
    key: "2",
    No: "2",
    state: "In",
    Date: "5/24/2023",
    BoxCode: "BX2305001",
    Description: "marketing request the original KYC document.",
    RequestBy: "Mr. B",
    Department: "AUTO2",
    Action: "Edit",
  },
  {
    key: "3",
    No: "3",
    state: "Out",
    Date: "5/23/2023",
    BoxCode: "BX2305001",
    Description: "delivery to warehouse.",
    RequestBy: "Mr. A",
    Department: "CMD",
    Action: "Edit",
  },
];

export default defineComponent({
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
    renderActions(_, record) {
      return (
        <span>
          <a-tooltip title="Edit">
            <a-button type="link" onClick={() => this.handleEdit(record)}>
              <EditOutlined />
            </a-button>
          </a-tooltip>
        </span>
      );
    },
  },
});
</script>
