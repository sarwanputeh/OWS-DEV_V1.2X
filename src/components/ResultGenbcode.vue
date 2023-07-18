<template>
  <br />
  <a-table :row-selection="rowSelection" :columns="columns" :data-source="data">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'contarctno'">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";
const columns = [
  {
    title: "No",
    dataIndex: "no",
  },
  {
    title: "ContractNo",
    dataIndex: "contarctno",
  },
  {
    title: "Customer Name",
    dataIndex: "customername",
  },
];
const data = [
  {
    key: "1",
    no: "",
    contarctno: "LA 62287",
    customername: "บริษัท อริสต้า ไลฟ์ซายน์(ประเทศไทย)จำกัด",
  },
  {
    key: "2",
    no: "",
    contarctno: "LA 62948",
    customername: "บริษัท กลุ่มสยามบรรจุภัณฑ์ จำกัด",
  },
  {
    key: "3",
    no: "",
    contarctno: "LA 62908",
    customername: "บริษัท เมทเล่อร์-โทเลโด(ประเทศไทย) จำกัด",
  },
  //   {
  //     key: "",
  //     no: "Disabled User",
  //     contarctno: 99,
  //     customername: "Sidney No. 1 Lake Park",
  //   },
];
export default defineComponent({
  setup() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      //   getCheckboxProps: (record) => ({
      //     disabled: record.contarctno === "Disabled",
      //     // Column configuration not to be checked
      //     contarctno: record.contarctno,
      //   }),
    };
    return {
      data,
      columns,
      rowSelection,
      size: ref("large"),
    };
  },
});
</script>