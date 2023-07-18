<template>
  <!--ยังไม่เชื่อมcondition-->
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
          <home-outlined />
        </a>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
        <span>/Document Custody/</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="./"
        ><span>Document Custody Management/</span></a-breadcrumb-item
      >
      <a-breadcrumb-item href="./"
        ><span>Generate Barcode</span></a-breadcrumb-item
      >
    </a-breadcrumb>

    <br />
    <br />
    <div class="Header-text" style="margin-left: 1px">Generate Barcode</div>
    <br />
    <br />

    <br />

    <br />

    <div class="Header-text2" style="margin-left: 6px">
      <file-search-outlined />
      Criteria
    </div>
    <br />

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
          <div class="Header-text2" style="margin-left: 6px">
            Lessee Name
            <a-input
              v-model:value="value"
              size="large"
              style="width: 200px"
              placeholder="LeseeName"
            />
          </div>
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
    <!-- <div class="Header-text">Receive Document Verification</div><br/> -->
    <br />
    <br />
    <div class="Header-text2" style="margin-left: -5px">
      <Table-Outlined />Result
    </div>
    <ResultGenbcode />
    <br />
    <ButtonInsertbcode />
    <br />
    <br />
  </div>
</template>
 <script>
import { SearchOutlined, TableOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, ref, toRefs } from "vue";
//  import BreadcrumbReceived from '@/components/Breadcrumb-Received.vue'
import { FileSearchOutlined } from "@ant-design/icons-vue";
// import ActivityTable from "@/components/ActivityTable.vue";
import { HomeOutlined } from "@ant-design/icons-vue";
// WarehouseView.vue
// import ComponentMain from "@/components/ComponentMain.vue";
import ResultGenbcode from "../components/ResultGenbcode.vue";
import ButtonInsertbcode from "../components/ButtonInsertbcode.vue";

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
    // ActivityTable,
    HomeOutlined,
    ResultGenbcode,
    ButtonInsertbcode,
    // ComponentMain,
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
      size: ref("large"),
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
  font-size: 18px;
}
.column-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>