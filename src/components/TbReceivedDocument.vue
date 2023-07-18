
<template>
  <a-table :data-source="data" :columns="columns">
  <template #headerCell="{ column }">
  <template v-if="column.key === 'ContractNo'">
  <span style="color: #1890ff">ContractNo</span>
  </template>
  <!-- <template v-else-if="column.dataIndex === 'Edit'">
        <a href="">edit</a>
      </template> -->
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
  
  </template>
  
   
  
  <script>
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { defineComponent, ref, toRefs } from 'vue';
  import axios from 'axios';

   
  
  export default defineComponent({
    components: {
      SearchOutlined,
    },
    setup() {
      const state = ref({
        searchText: '',
        searchedColumn: '',
        data: [],
        loading: false,
      });
  
   
  
      const searchInput = ref();
  

  
      const columns = [
        {
          title: 'ContractNo',
          dataIndex: 'ContractNo',
          key: 'ContractNo',
          customFilterDropdown: true,
          onFilter: (value, record) => record.ContractNo.toString().toLowerCase().includes(value.toLowerCase()),
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
          dataIndex: 'SystemName',
          key: 'SystemName',
          customFilterDropdown: true,
          onFilter: (value, record) => record.SystemName.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },
        {
          title: 'CustomerCode',
          dataIndex: 'CustomerCode',
          key: 'CustomerCode',
          customFilterDropdown: true,
          onFilter: (value, record) => record.SystemCode.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },{
          title: 'CustomerName',
          dataIndex: 'CustomerName',
          key: 'CustomerName',
          customFilterDropdown: true,
          onFilter: (value, record) => record.CustomerName.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },{
          title: 'DocumentTypeCode',
          dataIndex: 'DocumentTypeCode',
          key: 'DocumentTypeCode',
          customFilterDropdown: true,
          onFilter: (value, record) => record.DocumentTypeCode.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },{
          title: 'DocumentName',
          dataIndex: 'DocumentTypeName',
          key: 'DocumentTypeName',
          customFilterDropdown: true,
          onFilter: (value, record) => record.DocumentTypeName.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },{
          title: 'CustomerSign',
          dataIndex: 'CustomerSign',
          key: 'CustomerSign',
          customFilterDropdown: true,
          onFilter: (value, record) => record.MasterTOLCSign.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },{
          title: 'TOLCSign',
          dataIndex: 'TOLCSign',
          key: 'TOLCSign',
          customFilterDropdown: true,
          onFilter: (value, record) => record.MasterTOLCSign.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                searchInput.value.focus();
              }, 100);
            }
          },
        },
        {
          title:'Action',
          dataIndex:'Edit',
          key: 'Edit',
        }
        // ,{
        //   title: 'CompleteDate',
        //   dataIndex: 'CompleteDate',
        //   key: 'CompleteDate',
        //   customFilterDropdown: true,
        //   onFilter: (value, record) => record.MasterTOLCSign.toString().toLowerCase().includes(value.toLowerCase()),
        //   onFilterDropdownVisibleChange: visible => {
        //     if (visible) {
        //       setTimeout(() => {
        //         searchInput.value.focus();
        //       }, 100);
        //     }
        //   },
        // }
        // ,{
        //   title: 'StatusCode',
        //   dataIndex: 'StatusCode',
        //   key: 'StatusCode',
        //   customFilterDropdown: true,
        //   onFilter: (value, record) => record.MasterTOLCSign.toString().toLowerCase().includes(value.toLowerCase()),
        //   onFilterDropdownVisibleChange: visible => {
        //     if (visible) {
        //       setTimeout(() => {
        //         searchInput.value.focus();
        //       }, 100);
        //     }
        //   },
        // },{
        //   title: 'StatusName',
        //   dataIndex: 'StatusName',
        //   key: 'StatusName',
        //   customFilterDropdown: true,
        //   onFilter: (value, record) => record.MasterTOLCSign.toString().toLowerCase().includes(value.toLowerCase()),
        //   onFilterDropdownVisibleChange: visible => {
        //     if (visible) {
        //       setTimeout(() => {
        //         searchInput.value.focus();
        //       }, 100);
        //     }
        //   },
        // },{
        //   title: 'ApproveDate',
        //   dataIndex: 'ApproveDate',
        //   key: 'ApproveDate',
        //   customFilterDropdown: true,
        //   onFilter: (value, record) => record.MasterTOLCSign.toString().toLowerCase().includes(value.toLowerCase()),
        //   onFilterDropdownVisibleChange: visible => {
        //     if (visible) {
        //       setTimeout(() => {
        //         searchInput.value.focus();
        //       }, 100);
        //     }
        //   },
        // },{
        //   title: 'ApproveUser',
        //   dataIndex: 'ApproveUser',
        //   key: 'ApproveUser',
        //   customFilterDropdown: true,
        //   onFilter: (value, record) => record.MasterTOLCSign.toString().toLowerCase().includes(value.toLowerCase()),
        //   onFilterDropdownVisibleChange: visible => {
        //     if (visible) {
        //       setTimeout(() => {
        //         searchInput.value.focus();
        //       }, 100);
        //     }
        //   },
        // },
      ];
  
   
  
      const fetchData = async () => {
        state.value.loading = true;
        try {
          const response = await axios.get('http://localhost:5175/DocumentVerification'); // เปลี่ยน URL เป็น URL ของ API ที่ต้องการเรียกใช้งาน
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
  
   
  
      return {
        ...toRefs(state.value),
        columns,
        handleSearch,
        handleReset,
        searchInput,
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