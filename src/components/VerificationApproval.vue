<template>
  <div>
    <div class="Header-text">Verification Approval</div>
    <br />
    <br />
    <div class="columns">
      <div class="column">
        <div class="navbar-start">
          <a-button
            type="primary"
            :size="size"
            style="width: 150px"
            @click="handleApprove"
            >Approve</a-button
          >
          <!-- <a-button  @click="success"  type="primary" :size="size" style="width: 150px">
          
          Approval</a-button> -->
        </div>
      </div>

      <div class="column">
        <div class="navbar-end">
          <a-button type="primary" :size="size" style="width: 150px">
            <a href="/SettingApproval">
              <Setting-Outlined />
              Setting</a
            >
          </a-button>
        </div>
      </div>
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
/* eslint-disable */
import { SearchOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, toRefs } from "vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";


export default defineComponent({
  components: {
    SearchOutlined,
    useToast 
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
        title: "ContractNo",
        dataIndex: "contractNo",
        key: "ContractNo",
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
        title: "SystemName",
        dataIndex: "systemName",
        key: "systemName",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.systemName
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
        title: "CustomerCode",
        dataIndex: "customerCode",
        key: "customerCode",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.customerCode
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
        title: "CustomerName",
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
        title: "DocumentTypeCode",
        dataIndex: "documentTypeCode",
        key: "documentTypeCode",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.documentTypeCode
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
        title: "DocumentName",
        dataIndex: "documentTypeName",
        key: "documentTypeName",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.documentTypeName
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
        title: "CustomerSign",
        dataIndex: "customerSign",
        key: "customerSign",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.MasterTOLCSign.toString()
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
        title: "TOLCSign",
        dataIndex: "tolcSign",
        key: "tolcSign",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.MasterTOLCSign.toString()
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
        title: "Percent",
        dataIndex: "Percent",
        key: "Percent",
      },
    ];

    const fetchData = async () => {
      state.value.loading = true;
      try {
        const response = await axios.get(
          "http://ws.orix.co.th:8181/api/VerificationApproval"
          // "https://localhost:7083/api/VerificationApproval"
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
     
      const $toast = useToast();
     
      try {
        const payload = {
          approverUser: 99,
        };
        const response = await axios.put(
          "http://ws.orix.co.th:8181/api/VerificationApproval/Approval",
          // "https://localhost:7083/api/VerificationApproval/Approval",
          payload
        ); // Change URL to your API endpoint
        // Handle the response if needed
        $toast.success("Complete...");
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
      useToast
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
