<template>
  
   <!--ยังไม่เชื่อมcondition-->
    <br />
    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
        <home-outlined />
        </a>
      </a-breadcrumb-item>
      <a-breadcrumb-item ><a href="./"><span>/Received Document Verification</span></a></a-breadcrumb-item>
      
    </a-breadcrumb>  
    <br/>


    <div class="Header-text" style="margin-left: 1px;">Setting for document type</div>
    <br/>  
    <br/>     
    <br/>  
    <div class="Header-text2" style="margin-left: 6px">
      <file-search-outlined/>
     Criteria</div><br/>
     <div class="columns">
    <div class="column">
    <div class="Header-text2" style="margin-left: 6px">DocumentName : <a-input v-model:value="value" size="large"  style="width: 200px" placeholder="DocumentName" /></div>
    </div>
     <div class="column">
      <div class="Header-text2" >
      System : 
      
        <a-space >
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
      </div>
      </div>  
      <div class="column">
        <a-button type="primary"  style="width: 200px" size="large"><search-outlined />Search</a-button>
      </div>  
      
    </div>
    <br/>
    <br />
    <!-- <div class="Header-text">Receive Document Verification</div><br/> -->
    <div class="Header-text2" style="margin-left: 6px"> <Table-Outlined /> Result</div>
   
    <a-table :data-source="data" :columns="columns">
    <template #headerCell="{ column }">
    <template v-if="column.key === 'DocumentTypeName'">
    <span style="color: #1890ff">DocumentTypeName</span>
    </template>
    </template>
    <template
          #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
    >
    <div style="padding: 8px">
    <a-input
              ref="searchInput"
              :placeholder="`Search ${column.dataIndex}`"
              :value="selectedKeys[0]"
              style="width: 188px; margin-bottom: 8px; display: block"
              @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
           
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
    <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
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
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))">
    <mark v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                :key="i"
                class="highlight" >
                {{ fragment }}</mark>
    <template v-else>{{ fragment }}</template>
    </template>
    </span>
    </template>
    <template #loading>
    <a-spin />
    </template>
    </a-table>
   
     
    <a-button  href="/SettingAddDocTypeView" type="primary"  style="width: 100px" size="large"><plus-outlined />Add</a-button>
  </template>
  <script>
  import axios from 'axios';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { defineComponent, ref, toRefs } from 'vue'; 
//  import BreadcrumbReceived from '@/components/Breadcrumb-Received.vue'
 import {FileSearchOutlined,TableOutlined,PlusOutlined} from '@ant-design/icons-vue'
 import { HomeOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    components: {
      SearchOutlined,
      FileSearchOutlined,
    TableOutlined,
    PlusOutlined,
    HomeOutlined 
      
    },
    setup() {
        const state = ref({
          searchText: '',
          searchedColumn: '',
          data: [],
          loading: false,
        });
      const searchInput = ref();
     
      const columns = [{
        title: 'DocumentTypeName',
        dataIndex: 'documentTypeName',
        key: 'documentTypeName',
        customFilterDropdown: true,
        onFilter: (value, record) => record.documentTypeName.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus();
            }, 100);
          }
        },
      },
       {
        title: 'SystemName',
        dataIndex: 'systemCode',
        key: 'systemCode',
        customFilterDropdown: true,
        onFilter: (value, record) => record.systemCode.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus();
            }, 100);
          }
        },
      },
      // {title: 'CustomerSign',
      //   dataIndex: 'checkbox',
      //   slots: { customRender: 'checkbox' },
      // //  key: 'CustomerSign',
      // },
      {title:'CustomerSign',
        dataIndex:'customerSign',
        key:'customerSign'
      },
      
      {title:'TOLCSign',
       dataIndex:'tolcSign',
       key:'tolcSign'},
      {title: 'folder',
        dataIndex: 'folder',       
        key: 'folder',
        customFilterDropdown: true,
        onFilter: (value, record) => record.folder.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              searchInput.value.focus();
            }, 100);
          }
        },

      },

      // {title: 'Customer sign',
      //   dataIndex: 'checkbox',
      //   slots: { customRender: 'checkbox' },
      //   // key: 'Customersign',
      // },
      // {title: 'TOLC sign',
      // dataIndex: 'checkbox',
      //   slots: { customRender: 'checkbox' },
      // },
      // {title: 'Folder',
      //   dataIndex: 'folder',
      //   key: 'folder',
      // },
      {title: 'Action',
        dataIndex: 'Action',
        key: 'Action',
      },
      
    ];

    const fetchData = async () => {
          state.value.loading = true;
          try {
            const response = await axios.get('https://localhost:7083/api/DocumentCustodySetting'); // เปลี่ยน URL เป็น URL ของ API ที่ต้องการเรียกใช้งาน
            state.value.data = response.data;
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            state.value.loading = false;
          }
        };
    
     
    
        const handleSearch = (selectedKeys, confirm, dataIndex) => {
          confirm();
          state.value.searchText = selectedKeys[0];
          state.value.searchedColumn = dataIndex;
        };
    
     
    
        const handleReset = clearFilters => {
          clearFilters({ confirm: true });
          state.value.searchText = '';
        };
    
     
    
        fetchData();

   
 
       const handleCheckboxChange = (record) => {
       record.checked = !record.checked;
      };
  
      return {
        ...toRefs(state.value),
        // data,
        columns,
        handleSearch,
        handleReset,
        searchInput,
        handleCheckboxChange,
      

        
     
        
      };
    },
  });
  </script>
  <style scoped>
  .highlight {
    background-color: rgb(255, 192, 105);
    padding: 0px;
  }
  
  .Header-text{
     font-size: 24px;
  }
  .Header-text2{
     font-size: 18px;
  }
  </style>