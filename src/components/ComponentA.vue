<template>
  <div>
    <div class="columns">
      <div class="column">
        <input
          type="text"
          class="input is-gray is-medium"
          style="width: 300px; height: auto"
          v-model="newRowData"
          @keyup.enter="addRow"
        />

        <a-button
          type="primary"
          size="large"
          style="width: 150px; height: auto"
          @click="addRow"
          >Save</a-button
        >
        <br />
        <br />
        <row>
          <div class="Header-text2" style="margin-left: 6px">
            <Table-Outlined /> Result
          </div>

          <table class="ant-table">
            <thead>
              <tr>
                <th class="ant-table-header">No</th>
                <th class="ant-table-header">ContractNo</th>
                <th class="ant-table-header">CustomerName</th>
                <th class="ant-table-header">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in tableData" :key="index">
                <td class="ant-table-cell">{{ row.No }}</td>
                <td class="ant-table-cell">{{ row.column1 }}</td>
                <td class="ant-table-cell">{{ row.column2 }}</td>
                <td class="ant-table-cell">{{ row.FullDate }}</td>
              </tr>
            </tbody>
          </table>
        </row>
      </div>

      <div class="column">
        <a-card hoverable style="width: Auto">
          <div class="Bigsize">
            {{ newRowData }}
          </div>
        </a-card>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <row>
          <div class="Header-text2" style="margin-left: 6px">
            <inbox-outlined />Box Reference
          </div>
        </row>
        <row>
          <a-input style="width: 300px; height: auto"></a-input>
        </row>
      </div>
      <div class="column"></div>
    </div>
    <div class="navbar-end">
      <a-button type="primary" :size="size" style="width: 150px"
        ><save-outlined />Save to Box</a-button
      >
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import {
  TableOutlined,
  InboxOutlined,
  SaveOutlined,
} from "@ant-design/icons-vue";
// import { Components } from 'ant-design-vue/lib/date-picker/generatePicker';

export default {
  components: {
    TableOutlined,
    InboxOutlined,
    SaveOutlined,
  },

  setup() {
    // ประกาศตัวแปรที่เป็น reactive
    const tableData = ref([]);
    const newRowData = ref("");

    // ข้อมูลตัวอย่างสำหรับตาราง
    const companies = [
      "Thai Cane Paper Public Company Limited (Kanchanaburi)",
      "Insee Ecocycle Co., Ltd.",
      "Insee Ecocycle Co., Ltd.",
      "SCG Ceramics PCL",
      "Company C",
      "Company D",
      "Company D",
      "Company D",
      "Company D",
      "Company D",
    ];
    const No = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const FullDate = [
      "2023-06-02",
      "2023-06-02",
      "2023-06-08",
      "2023-06-08",
      "2023-06-08",
      "2023-06-08",
      "2023-06-08",
      "2023-06-08",
      "2023-06-08",
      "2023-06-08",
    ];

    // ตัวแปรสำหรับเก็บ index ของข้อมูลที่ใช้ในตาราง
    let companyIndex = 0;
    let NoIndex = 0;
    let FullDateIndex = 0;

    // ฟังก์ชันที่เรียกเมื่อคลิกป
    const addRow = () => {
      // สร้างแถวใหม่
      const newRow = {
        No: No[NoIndex],
        column1: newRowData.value,
        column2: companies[companyIndex],
        FullDate: FullDate[FullDateIndex],
      };

      // เพิ่มแถวใหม่ลงใน tableData
      tableData.value.push(newRow);

      // เพิ่ม index ของข้อมูลในตาราง
      companyIndex++;
      if (companyIndex >= companies.length) {
        companyIndex = 0;
      }
      NoIndex++;
      if (NoIndex >= No.length) {
        NoIndex = 0;
      }
      FullDateIndex++;
      if (FullDateIndex >= No.length) {
        FullDateIndex = 0;
      }

      // รีเซ็ตค่าใน input field
      newRowData.value = "";
    };

    return {
      tableData,
      newRowData,
      addRow,
      size: ref("large"),
    };
  },
};
</script>
<style scoped>
/* Import Bulma CSS */
@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");

/* Add custom styles */
.columns {
  margin-top: 20px;
}

.column {
  padding: 10px;
}
.ant-table {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-collapse: collapse;
}

.ant-table thead th {
  background-color: #f2f2f2;
  border: 1px solid#f5f5f5;
  padding: 8px;
  text-align: left;
}

.ant-table tbody td {
  border: 1px solid#f0efef;
  padding: 8px;
  text-align: left;
}

.ant-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.ant-table tbody tr:hover {
  background-color: #f5f5f5;
}

input[type="text"] {
  margin-right: 10px;
  padding: 5px;
}

.Bigsize {
  font-size: 100px;
}
</style>
