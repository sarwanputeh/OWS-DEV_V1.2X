<template>
    <div>
    <div class="columns">
    <div class="column">
    <input
              type="text"
              class="input is-gray is-medium"
              style="width: 300px; height: auto"
              v-model="newRowData"
              @keyup.enter="fetchData"
            />
    <a-button
              type="primary"
              size="large"
              style="width: 150px; height: auto"
              @click="fetchData"
    >Save</a-button>
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
    <td class="ant-table-cell">{{ row.ContractNo }}</td>
    <td class="ant-table-cell">{{ row.CustomerName }}</td>
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
    import axios from "axios";
    import {
      TableOutlined,
      InboxOutlined,
      SaveOutlined,
    } from "@ant-design/icons-vue";
    
     
    
    export default {
      components: {
        TableOutlined,
        InboxOutlined,
        SaveOutlined,
      },
    
     
    
      setup() {
        const tableData = ref([]);
        const newRowData = ref("");
    
     
    
        const fetchData = async () => {
          try {
            const response = await axios.get("YOUR_API_URL");
            tableData.value = response.data;
          } catch (error) {
            console.error(error);
          }
        };
    
     
    
        return {
          tableData,
          newRowData,
          fetchData,
        };
      },
    };
    </script>
    
     
    
    <style scoped>
    /* Add your custom styles here */
    </style>