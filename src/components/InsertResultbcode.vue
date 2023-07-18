<template>
  <br />

  <Table :columns="columns" :data-source="data">
    <template #action="{ record }">
      <a href="" @click="deleteItem(record)"><DeleteOutlined /></a>
    </template>
  </Table>

  <br />
  <div class="column">
    <a-button type="primary" :size="size" href="/PrintbcodeView"
      ><barcode-outlined />Generate Bardoe Batch</a-button
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Table } from "ant-design-vue";
import { DeleteOutlined, BarcodeOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

export default defineComponent({
  components: {
    Table,
    DeleteOutlined,
    BarcodeOutlined,
  },
  data() {
    return {
      size: ref("large"),
      columns: [
        {
          title: "No",
          dataIndex: "no",
        },
        {
          title: "ContractNo",
          dataIndex: "contractNo",
        },
        {
          title: "Customer Name",
          dataIndex: "customerName",
        },
        {
          title: "Action",
          dataIndex: "action",
          slots: { customRender: "action" },
        },
      ],
      data: [
        {
          key: "1",
          no: "1",
          contractNo: "LA 62287",
          customerName: "บริษัท อริสต้า ไลฟ์ซายน์(ประเทศไทย)จำกัด",
        },
        {
          key: "2",
          no: "2",
          contractNo: "LA 62948",
          customerName: "บริษัท กลุ่มสยามบรรจุภัณฑ์ จำกัด",
        },
        {
          key: "3",
          no: "3",
          contractNo: "LA 62908",
          customerName: "บริษัท เมทเล่อร์-โทเลโด(ประเทศไทย) จำกัด",
        },
      ],
    };
  },
  methods: {
    deleteItem(record) {
      // ดำเนินการลบรายการที่เลือกตาม record
      console.log("Delete item:", record);
    },
  },
});
</script>
