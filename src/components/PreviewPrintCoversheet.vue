<template>
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'No'">
          <a >{{ text }}</a>
        </template>
        <template v-if="column.dataIndex === 'preview'">
          <!-- <a href="/PreviewTheDocView">{{ text }}<Eye-Outlined/></a> -->
          <a href="/PreviewTheDocView" style="margin-left: 20%;"><Eye-Outlined/></a>
        </template>
        <template v-if="column.dataIndex === 'download'">
          <!-- <a href="/PreviewTheDocView">{{ text }}<Eye-Outlined/></a> -->
          <a href="#" style="margin-left: 20%;"><download-outlined /></a>
        </template>
        
      </template>
      
    </a-table>
  </template>
  <script>
  import { defineComponent } from 'vue';
  import {EyeOutlined,DownloadOutlined} from '@ant-design/icons-vue'
  const columns = [
  {
    title: 'No',
    dataIndex: 'No',
    key: 'No',
  },  
  
  {
    title: 'BatchNo',
    dataIndex: 'batchno',
    key: 'batchno',
  }, {
    title: 'Batch Date',
    dataIndex: 'batchdate',
    key: 'bathdate',
    
  }, {
    title: 'Cover sheet',
    dataIndex: 'coversheet',
    key: 'coversheet',
 
  }, {
    title: 'Contractno',
    dataIndex: 'contractno',
    key: 'contractno',

  },
  {
    title: 'CustomerName',
    dataIndex: 'customername',
    key: 'customername',

  }, {
    title: 'Template',
    dataIndex: 'template',
    key: 'template',

  }, {
    title: 'Preview',
    dataIndex: 'preview',
    key: 'preview',

  }, {
    title: 'Download',
    dataIndex: 'download',
    key: 'download',

  }, {
    title: 'Delete',
    dataIndex: 'Delete',
    key: 'Delete',

  }];
  const data = [{
  No:'1',
  batchno:'B23001',
  batchdate:'10/05/2023',
  coversheet:'CV230001',
  contractno:'LA62287',
  customername:'บริษัท อริสต้า ไลฟ์ซายน์ (ประเทศไทย) จำกัด',
  template:'TP23001',
  preview:'Preview',
  download:'Download',
  Delete:'Delete'
  

  }, {
  No:'2',
  batchno:'B23001',
  batchdate:'10/05/2023',
  coversheet:'CV230002',
  contractno:'LA62948',
  customername:'บริษัท กลุ่มสยามบรรจุภัณฑ์ จำกัด',
  template:'TP23001',
  preview:'Preview',
  download:'Download',
  Delete:'Delete'
  } ,{
  No:'3',
  batchno:'B23001',
  batchdate:'10/05/2023',
  coversheet:'CV230003',
  contractno:'LA62808',
  customername:'บริษัท เมทเลอร์-เมทเล่อร์-โทเลโด(ประเทศไทย) จำกัด',
  template:'TP23002',
  preview:'Preview',
  download:'Download',
  Delete:'Delete'
  }];
  export default defineComponent({
    components: {
      EyeOutlined,
      DownloadOutlined
  
    },
    setup() {
      return {
        data,
        columns,
      };
    },
  });
  </script>