<template>
   
   <p>TemplateCode:{{tempplaeCode}}</p>
  <div class="columns" >
      <div class="column">
      <div class="Header-text2">Choose the template </div></div>
     
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
    <div class="navbar-end">   
        <a-button type="primary" :size="size" style="width: 150px">
        
          <a href="#"><Eye-Outlined/>Preview</a>
        </a-button>
        </div>
    <br/>
  <div class="Header-text2" style="margin-left: 6px">
   <Table-Outlined/>TemplateView</div>
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
  
   
  
  <script >
     /* eslint-disable */
  
  import { Table, Select } from 'ant-design-vue';
  import axios from 'axios';
  import {TableOutlined} from '@ant-design/icons-vue';


  
  export default {
    props: {
      templateCode: {
        type: String,
        required: true
      }
  },
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
            title: 'TemplateCode',
            dataIndex: 'templateCode',
            key: 'templateCode',
          },
          {
            title: 'TemplateName',
            dataIndex: 'templateName',
            key: 'templateName',
          },{
            title: 'LeaseAgr.',
            dataIndex: 'leaseAgreementFlag',
            key: 'leaseAgreementFlag',
          },{
            title: 'SalesAgr.',
            dataIndex: 'salesAgreementFlag',
            key: 'salesAgreementFlag',
          },{
            title: 'DepositTrs.',
            dataIndex: 'depositTransferFormFlag',
            key: 'depositTransferFormFlag',
          },{
            title: 'Attachment',
            dataIndex: 'attachmentFlag',
            key: 'attachmentFlag',
          },{
            title: 'Pay.Sch.',
            dataIndex: 'paymentScheduleFlag',
            key: 'paymentScheduleFlag',
          },{
            title: 'Int.Sch.',
            dataIndex: 'interestScheduleFlag',
            key: 'interestScheduleFlag',
          },{
            title: 'Accept.Recp.',
            dataIndex: 'acceptanceReceiptFlag',
            key: 'acceptanceReceiptFlag',
          },{
            title: 'Gua.Doc.',
            dataIndex: 'guaranteeDocumentsFlag',
            key: 'guaranteeDocumentsFlag',
          },
        ],
        options: [],
      };
    },
    methods: {
      search() {
        this.filteredTableData = this.tableData.filter(item => {
          return item.templateCode.includes(this.searchTerm) ||
                 item.templateName.includes(this.searchTerm);
        });
      },
      fetchOptions() {
        axios.get('https://localhost:7083/api/CoverSheet/Template')
          .then(response => {
            this.options = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      fetchData() {
        axios.get('https://localhost:7083/api/CoverSheet/Template')
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
  <a-input-search v-model:value="searchTerm" @search="search" placeholder="ค้นหา"></a-input-search>
  <a-table :columns="columns" :data-source="filteredTableData"></a-table>
  </div>
  </template>
  
   
  
  <script>
  /* eslint-disable */ 
  import { Table, Input } from 'ant-design-vue';
  import axios from 'axios';
  
   
  
  export default {
    components: {
      Table,
      Input,
    },
    data() {
      return {
        searchTerm: '',
        tableData: [],
        filteredTableData: [],
        columns: [
          {
            title: 'DocumentTypeName',
            dataIndex: 'DocumentTypeName',
            key: 'DocumentTypeName',
          },
          {
            title: 'CustomerName',
            dataIndex: 'CustomerName',
            key: 'CustomerName',
          },
        ],
      };
    },
    methods: {
      search() {
        this.filteredTableData = this.tableData.filter(item => {
          return item.DocumentTypeName.includes(this.searchTerm) ||
                 item.CustomerName.includes(this.searchTerm);
        });
      },
      fetchData() {
        axios.get('https://localhost:7086/DocumentVerification')
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
      this.fetchData();
    },
  };
  </script> -->