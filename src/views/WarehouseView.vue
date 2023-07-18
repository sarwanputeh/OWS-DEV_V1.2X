<template>
  <!--ยังไม่เชื่อมcondition-->
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
          <home-outlined />
        </a>
      </a-breadcrumb-item>
      <!-- <a-breadcrumb-item href="">
        <span>/Document Custody/</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="./"
        ><span>Document Custody Management/</span></a-breadcrumb-item
      > -->
      <a-breadcrumb-item href="./"><span>Warehouse</span></a-breadcrumb-item>
    </a-breadcrumb>

    <br />
    <br />
    <div class="Header-text" style="margin-left: 1px">
      Document Custody Management : Warehouse
    </div>
    <br />
    <br />
    <div class="Header-text2" style="margin-left: -5px">
      <Caret-Right-Outlined />Insert to Box Code
    </div>
    <br />
    <br />
    <div class="navbar-end">
      <a-button type="primary" size="large" style="width: 150px">
        <a href="/SettingWarehouse"><Setting-Outlined />Setting</a>
      </a-button>
    </div>
    <br />

    <div class="Header-text2" style="margin-left: 6px">
      <file-search-outlined />
      Criteria
    </div>
    <br />
    <!-- <div class="navbar-end">
    <a-checkbox-group v-model:value="value">
      <a-row>
        <a-col :span="auto">
          <a-checkbox value="A">Barcode</a-checkbox>
        </a-col>
        <a-col :span="auto">
          <a-checkbox value="B">Manual</a-checkbox>
        </a-col>
      </a-row>
    </a-checkbox-group>
  </div> -->
    <br />
    <a-card hoverable style="width: Auto">
      <div class="columns">
        <div class="column">
          <div class="Header-text2" style="margin-left: 6px">
            Contract No:
            <a-input
              v-model:value="value"
              size="large"
              style="width: 200px"
              placeholder="ContractNo"
            />
          </div>
        </div>
        <div class="column">
          <a-row>
            <a-col :span="auto">
              <a-checkbox value="A">Barcode</a-checkbox>
            </a-col>
            <a-col :span="auto">
              <a-checkbox value="B">Manual</a-checkbox>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <a-row
            ><div class="Header-text2" style="margin-left: 35px">
              System :
              <a-space>
                <a-select
                  ref="select"
                  v-model:value="value1"
                  size="large"
                  style="width: 200px"
                  @focus="focus"
                  @change="handleChange"
                  placeholder="System"
                >
                  <a-select-option value="ALD">ALD</a-select-option>
                  <a-select-option value="FMD">FMD</a-select-option>
                </a-select>
              </a-space>
            </div></a-row
          >
        </div>
        <div class="column">
          <div class="navbar-end">
            <a-button type="primary" style="width: 200px" size="large"
              ><search-outlined />Search</a-button
            >
          </div>
        </div>
      </div>
    </a-card>

    <br />
    <!-- <div class="Header-text2"><FileTextOutlined />ContractNo<ComponentA /></div> -->
    <div class="Header-text2"><FileTextOutlined />ContractNo<ComponentA /></div>
    <br />

    <!-- <div class="Header-text">Receive Document Verification</div><br/> -->
    <br />
    <br />

    <!-- <a-table :data-source="data" :columns="columns">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'ContNo'">
        <span style="color: #1890ff">ContNo</span>
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
    <template>
      <a-table :columns="columns" :data-source="data" @change="onChange" />
    </template>

    <template #bodyCell="{ text, column }">
      <template v-if="column.dataIndex === 'Action'">
        <a href="/EditWarehouseView">{{ text }}</a>
      </template>
      <span v-if="searchText && searchedColumn === column.dataIndex">
        <template v-if="column.dataIndex === 'name'"
          >{{ text.first }} {{ text.last }}</template
        >
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
  </a-table> -->

    <!-- <div>
    <a-button
      href="/Warehouseboxcode"
      type="primary"
      style="width: auto px"
      size="large"
      ><plus-outlined />Generate Box Code</a-button
    >
  </div>
  <br />
  <br />
  <div class="Header-text2" style="margin-left: -5px">
    <Caret-Right-Outlined />Delivery and withdraw the Document Box
  </div>
  <br />
  <div class="Header-text2" style="margin-left: 6px">
    <Table-Outlined /> Activity
  </div>
  <ActivityTable />
  <br />
  <a-button href="/AddActivity" type="primary" style="width: 100px" size="large"
    ><plus-outlined />Add</a-button
  >
  <br /> -->
    <div class="Header-text2" style="margin-left: -5px">
      <Caret-Right-Outlined />Box Control
    </div>
    <br />
    <div class="Header-text2" style="margin-left: 6px">
      <file-search-outlined />
      Criteria
    </div>
    <br />
    <a-card hoverable style="width: Auto">
      <div class="columns">
        <div class="column">
          <div class="Header-text2" style="margin-left: 30px">
            Box Code:
            <a-input
              v-model:value="value"
              size="large"
              style="width: 200px"
              placeholder="Box Code"
            />
          </div>
          <br />
          <div class="Header-text2" style="margin-left: 6px">
            Contract No:
            <a-input
              v-model:value="value"
              size="large"
              style="width: 200px"
              placeholder="Contract No"
            />
          </div>
        </div>
        <div class="column">
          <div class="Header-text2" style="margin-left: 30px">
            Box Name :
            <a-input
              v-model:value="value"
              size="large"
              style="width: 200px"
              placeholder="Box Name"
            />
          </div>
          <br />
          <div class="Header-text2" style="margin-left: 6px">
            Lessee Name :
            <a-input
              v-model:value="value"
              size="large"
              style="width: 200px"
              placeholder="Lessee Name"
            />
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <a-button type="primary" style="width: 200px" size="large">
          <a href="#"><Search-Outlined />Search</a>
        </a-button>
      </div>
    </a-card>
    <br />
    <div class="Header-text2" style="margin-left: -5px">
      <Table-Outlined />Header Result
    </div>
    <br />
    <HeaderBatch />
    <!-- <HeaderOnWareHouse /> -->
    <br />
    <div class="Header-text2" style="margin-left: -5px">
      <Table-Outlined />Detail Result
    </div>
    <DetailBatch />
    <br />
    <div class="Header-text2" style="margin-left: -5px">
      <Caret-Right-Outlined />Deliver and withdraw the Document Box
    </div>

    <div class="Header-text2" style="margin-left: -5px">
      <br />
      <Table-Outlined />Activity
   
    </div>
   <br />
   <ActivityWarehouse /> 
  </div>
</template>
 <script>
import {
  SearchOutlined,
  CaretRightOutlined,
  SettingOutlined,
  TableOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, reactive, ref, toRefs } from "vue";
import DetailBatch  from "@/components/DetailBatch.vue";

//  import BreadcrumbReceived from '@/components/Breadcrumb-Received.vue'
import {
  FileSearchOutlined,

  // PlusOutlined,
  FileTextOutlined,
} from "@ant-design/icons-vue";
// import ActivityTable from "@/components/ActivityTable.vue";
import { HomeOutlined } from "@ant-design/icons-vue";
// WarehouseView.vue
// import ComponentMain from "@/components/ComponentMain.vue";
import ComponentA from "@/components/ComponentA.vue";
// import ComponentAA from "@/components/ComponentAA.vue";
// import HeaderOnWareHouse from "@/components/HeaderOnWareHouse.vue";
import HeaderBatch  from "@/components/HeaderBatch.vue";
import ActivityWarehouse from "@/components/ActivityWarehouse.vue";

const data = [
  {
    key: "1",
    No: "1",
    // contractno: "LA 62287",
    // Sys: "ALD",
    // customer: "6217",
    customername: "บริษัท อริสต้า ไลฟ์ซายน์ (ประเทศไทย) จำกัด",
    storedate: "",
    boxcode: "BX2305001",
    delivery: "",
    remark: "",
    edit: "Edit",
  },
  {
    key: "2",
    No: "2",
    // contractno: "LA 62948",
    // Sys: "ALD",
    // customer: "76",
    customername: "บริษัท กลุ่มสยามบรรจุภัณฑ์ จำกัด",
    storedate: "03/04/2023",
    boxcode: "BX2305001",
    delivery: "4/10/2023",
    remark: "",
    edit: "Edit",
  },
  {
    key: "3",
    No: "3",
    // contractno: "LA 62808",
    // Sys: "ALD",
    // customer: "5459",
    customername: "บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด",
    storedate: "05/08/2023",
    boxcode: "BX2305002",
    delivery: "05/10/2023",
    remark: "",
    edit: "Edit",
  },
  {
    key: "4",
    No: "4",
    // contractno: "LA TOL23-0007",
    // Sys: "FMD",
    // customer: "C11419",
    customername: "บริษัท ฟูรูกาวา ไฟเทล (ประเทศไทย) จำกัด",
    storedate: "05/08/2023",
    boxcode: "BX2305003",
    delivery: "05/10/2023",
    remark: "",
    edit: "Edit",
  },
];
export default defineComponent({
  components: {
    SearchOutlined,
    FileSearchOutlined,
    TableOutlined,
    // PlusOutlined,
    CaretRightOutlined,
    SettingOutlined,
    // ActivityTable,
    HomeOutlined,
    // ComponentMain,
    FileTextOutlined,
    ComponentA,
    // ComponentAA,
    // HeaderOnWareHouse,
    HeaderBatch,
    DetailBatch, 
    ActivityWarehouse,
  },

  setup() {
    const state = reactive({
      searchText: "",
      searchedColumn: "",
    });
    const searchInput = ref();

    const columns = [
      {
        title: "No",
        dataIndex: "No",
        key: "No",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.No.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus();
            }, 100);
          }
        },
      },
      {
        title: "Contract No",
        dataIndex: "contractno",
        key: "contractno",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.No.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus();
            }, 100);
          }
        },
      },
      {
        title: "Sys.",
        dataIndex: "Sys",
        key: "Sys",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.Sys.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus();
            }, 100);
          }
        },
      },
      {
        title: "Customer",
        dataIndex: "customer",
        key: "customer",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.customer
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
        title: "Customer Name",
        dataIndex: "customername",
        key: "customername",
        customFilterDropdown: true,
        onFilter: (value, record) =>
          record.customername
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
      { title: "Store Date", dataIndex: "storedate", key: "storedate" },
      { title: "Box Code", dataIndex: "boxcode", key: "boxcode" },
      { title: "Delivery", dataIndex: "delivery", key: "delivery" },
      { title: "Remark", dataIndex: "remark", key: "remark" },
      {
        title: "Action",
        dataIndex: "Action",
        key: "Action",
      },
    ];
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
    };
    const handleReset = (clearFilters) => {
      clearFilters({
        confirm: true,
      });
      state.searchText = "";
    };

    return {
      data,
      columns,
      handleSearch,
      handleReset,
      searchInput,
      // value: ref([]),
      ...toRefs(state),
    };
  },
});
</script>
 <style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.Header-text {
  font-size: 24px;
}
.Header-text2 {
  font-size: 16px;
}
.column-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>