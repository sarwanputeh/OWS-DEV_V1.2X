<template>
  <div class="columns" >
      <div class="column">
      <div class="Header-text2">Search  All </div></div>
      <div class="column">
        
        <a-space >
          <a-input-search v-model:value="searchTerm" @search="search" placeholder="ค้นหา" style="width:300px"></a-input-search>
        </a-space>
      </div>
      <div class="column">
      </div>
      <div class="column">
      </div>
      <div class="column">
      </div>
      <div class="column">
      </div>
      </div>
  <div>
    <!-- <div class="navbar-end">   
        <a-button type="primary" :size="size" style="width: 150px">
        
          <a href="#"><Eye-Outlined/>Preview</a>
        </a-button>
        </div> -->
    <br/>
  <!-- <div class="Header-text2" style="margin-left: 6px">
   <Table-Outlined/>TemplateView</div> -->
<br/>
  <a-table :columns="columns" :data-source="filteredTableData"></a-table>
  <!-- <a-select v-model:value="searchTerm" @change="search" placeholder="ค้นหา" style="width: 200px;">
  <a-select-option v-for="option in options" :key="option.value" :value="option.value" >{{ option.label }}</a-select-option>
  </a-select> -->
  <!-- <select v-model="selectedOption" @change="search">
     <option value="">ทั้งหมด</option> 
     <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option> </select> -->
  <!-- <a-table :columns="columns" :data-source="filteredTableData"></a-table> -->
   
</div>
  </template>
  
   
  
  <script>
     /* eslint-disable */
  
  import { Table, Select } from 'ant-design-vue';
  import axios from 'axios';
  import {TableOutlined} from '@ant-design/icons-vue';


  
  export default {
    components: {
      Table,
      Select,
      TableOutlined
    },
    data() {
      return {
        searchTerm: '',
        tableData: [],
        filteredTableData: [],
        columns: [
        {
          title: 'BatchCode',
          dataIndex: 'batchCode',
          key: 'batchCode',
        },
        {
          title: 'BatchDate',
          dataIndex: 'batchDate',
          key: 'batchDate',
        },
        {
          title: 'CoverSheetCode',
          dataIndex: 'coverSheetCode',
          key: 'coverSheetCode',
        },
        {
          title: 'ContractNo',
          dataIndex: 'contractNo',
          key: 'contractNo',
        },
        {
          title: 'CustomerName',
          dataIndex: 'customerName',
          key: 'customerName',
        },
        {
          title: 'TemplateCode',
          dataIndex: 'templateCode',
          key: 'templateCode',
        },
        ],
        options: [],
      };
    },
    methods: {
      search() {
        this.filteredTableData = this.tableData.filter(item => {
          return item.templateCode.includes(this.searchTerm) ||
                 item.customerName.includes(this.searchTerm)
                 ||item.batchCode.includes(this.searchTerm)
                 ||item.batchDate.includes(this.searchTerm)
                 ||item.contractNo.includes(this.searchTerm)
                 ||item.coverSheetCode.includes(this.searchTerm)
        });
      },
      fetchOptions() {
        axios.get('https://localhost:7083/api/CoverSheet/Print')
          .then(response => {
            this.options = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      fetchData() {
        axios.get('https://localhost:7083/api/CoverSheet/Print')
          .then(response => {
            this.tableData = response.data;
            this.filteredTableData = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
   
    created() {
      this.fetchOptions();
      this.fetchData();
    },
  };
  </script>

<!-- <template>
    <div>
    <a-input
          style="width: 300px"
          v-model="searchText"
          @keydown.enter="handleSearch"
          placeholder="Search"
        />
    <a-button type="primary" @click="handleSearch()">Search</a-button>
    <div><br /></div>
    <a-table :columns="columns" :data-source="filteredData"></a-table>
    </div>
    </template>
    
     
    
    <script>
    /* eslint-disable */ 
    import { defineComponent, ref, onMounted, computed } from 'vue';
    import axios from 'axios';
    import { EyeOutlined, DownloadOutlined } from '@ant-design/icons-vue';
    
     
    
    export default defineComponent({
      components: {
        EyeOutlined,
        DownloadOutlined,
      },
      setup() {
        const columns = [
          {
            title: 'BatchCode',
            dataIndex: 'batchCode',
            key: 'batchCode',
          },
          {
            title: 'BatchDate',
            dataIndex: 'batchDate',
            key: 'batchDate',
          },
          {
            title: 'CoverSheetCode',
            dataIndex: 'coverSheetCode',
            key: 'coverSheetCode',
          },
          {
            title: 'ContractNo',
            dataIndex: 'contractNo',
            key: 'contractNo',
          },
          {
            title: 'CustomerName',
            dataIndex: 'customerName',
            key: 'customerName',
          },
          {
            title: 'TemplateCode',
            dataIndex: 'templateCode',
            key: 'templateCode',
          },
          {
            title: 'Preview',
            dataIndex: 'preview',
            key: 'preview',
            customRender: ({ text }) => (
    <a href="/PreviewTheDocView" style="margin-left: 20%;">
    <EyeOutlined />
    </a>
            ),
          },
          {
            title: 'Download',
            dataIndex: 'download',
            key: 'download',
            customRender: ({ text }) => (
    <a href="#" style="margin-left: 20%;">
    <DownloadOutlined />
    </a>
            ),
          },
        ];
    
     
    
        const data = ref([]);
        const searchText = ref('');
    
     
    
        onMounted(async () => {
          try {
            const response = await axios.get('https://localhost:7083/api/CoverSheet/Print');
            data.value = response.data.map((item) => ({
              batchCode: item.batchCode,
              batchDate: item.batchDate,
              coverSheetCode: item.coverSheetCode,
              contractNo: item.contractNo.toString(),
              customerName: item.customerName,
              templateCode: item.templateCode.toString(),
            }));
          } catch (error) {
            console.error(error);
          }
        });
    
     
    
        const filteredData = computed(() => {
          if (!searchText.value) {
            return data.value;
          }
    
     
    
          const keyword = searchText.value.toLowerCase();
          return data.value.filter((item) => {
            return (
              item.contractNo.toLowerCase().includes(keyword) ||
              item.customerName.toLowerCase().includes(keyword)
            );
          });
        });
    
     
    
        const handleSearch = () => {
          const keyword = searchText.value.toLowerCase();
          filteredData.value = data.value.filter((item) => {
            return (
              item.contractNo.toLowerCase().includes(keyword) ||
              item.customerName.toLowerCase().includes(keyword)
            );
          });
        };
    
     
    
        return {
          columns,
          data,
          searchText,
          filteredData,
          handleSearch,
        };
      },
    });
    </script> -->