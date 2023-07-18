<template>
    <div>
   
      <br />
      <h1>Test </h1>
      <br />
      <div class="columns">
        
  
      </div>
  
      <!-- <a-button type="primary" @click="handleApprove">Approve</a-button> -->
      <a-table :data-source="data" :columns="columns">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'ContractNo'">
            <span style="color: #1890ff">ContractNo</span>
          </template>
        </template>
        <template
          #customFilterDropdown="{
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            column,
          }"
        >
          <div style="padding: 8px">
            <a-input
              ref="searchInput"
              :placeholder="`Search ${column.dataIndex}`"
              :value="selectedKeys[0]"
              style="width: 188px; margin-bottom: 8px; display: block"
              @change="
                (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
              "
              @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
            />
            <a-button
              type="primary"
              size="small"
              style="width: 90px; margin-right: 8px"
              @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
            >
              <template #icon><SearchOutlined /></template>
              Search
            </a-button>
            <a-button
              size="small"
              style="width: 90px"
              @click="handleReset(clearFilters)"
            >
              Reset
            </a-button>
          </div>
        </template>
        <template #customFilterIcon="{ filtered }">
          <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
        </template>
        <template #bodyCell="{ text, column }">
          <span v-if="searchText && searchedColumn === column.dataIndex">
            <template
              v-for="(fragment, i) in text
                .toString()
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
            >
              <mark
                v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                :key="i"
                class="highlight"
              >
                {{ fragment }}
              </mark>
              <template v-else>{{ fragment }}</template>
            </template>
          </span>
        </template>
        <template #loading>
          <a-spin />
        </template>
      </a-table>
    </div>
  </template>
  
  <script>
  import { SearchOutlined } from "@ant-design/icons-vue";
  import { defineComponent, ref, toRefs } from "vue";
  import axios from "axios";
  
  export default defineComponent({
    components: {
      SearchOutlined,
    },
    setup() {
      const state = ref({
        searchText: "",
        searchedColumn: "",
        data: [],
        loading: false,
      });
  
      const searchInput = ref();
  
      const columns = [
        {
          title: "batchCode",
          dataIndex: "batchCode",
          key: "batchCode",
          customFilterDropdown: true,
          onFilter: (value, record) =>
            record.batchCode
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },
        {
          title: "batchDate",
          dataIndex: "batchDate",
          key: "batchDate",
          customFilterDropdown: true,
          onFilter: (value, record) =>
            record.batchDate
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },
        {
          title: "coverSheetCode",
          dataIndex: "coverSheetCode",
          key: "coverSheetCode",
          customFilterDropdown: true,
          onFilter: (value, record) =>
            record.coverSheetCode
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },
        {
          title: "contractNo",
          dataIndex: "contractNo",
          key: "contractNo",
          customFilterDropdown: true,
          onFilter: (value, record) =>
            record.contractNo
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },
        {
          title: "customerName",
          dataIndex: "customerName",
          key: "customerName",
          customFilterDropdown: true,
          onFilter: (value, record) =>
            record.customerName
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },
        {
          title: "templateCode",
          dataIndex: "templateCode",
          key: "templateCode",
          customFilterDropdown: true,
          onFilter: (value, record) =>
            record.templateCode
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },
        
      ];
  
      const fetchData = async () => {
        state.value.loading = true;
        try {
          const response = await axios.get(
            // "https://localhost:7083/api/CoverSheet/Print"
            "http://ws.orix.co.th:8181/api/CoverSheet/Print"

          ); // เปลี่ยน URL เป็น URL ของ API ที่ต้องการเรียกใช้งาน
          state.value.data = response.data;
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          state.value.loading = false;
        }
      };
  
      const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        state.value.searchText = selectedKeys[0];
        state.value.searchedColumn = dataIndex;
      };
  
      const handleReset = (clearFilters) => {
        clearFilters({ confirm: true });
        state.value.searchText = "";
      };
  
      const handleApprove = async () => {
        try {
          const payload = {
            approverUser: 99,
          };
          const response = await axios.put(
            "http://ws.orix.co.th:8181/api/CoverSheet/Print",

            // "https://localhost:7083/api/CoverSheet/Print",
            payload
          ); // Change URL to your API endpoint
          // Handle the response if needed
          console.log("Approval response:", response);
        } catch (error) {
          console.error("Error approving:", error);
        }
      };
  
      fetchData();
  
      return {
        size: ref("large"),
        ...toRefs(state.value),
        columns,
        handleSearch,
        handleReset,
        searchInput,
        handleApprove,
      };
    },
  });
  </script>
  
  <style scoped>
  .highlight {
    background-color: rgb(255, 192, 105);
    padding: 0px;
  }
  </style>
  