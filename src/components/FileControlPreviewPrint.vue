<template>
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'No'">
          <a >{{ text }}</a>
        </template>
        <template v-if="column.dataIndex === 'preview'">
          <a href="#">{{ text }}</a>  
        </template>
        <template v-if="column.dataIndex === 'download'">
          <a href="#">{{ text }}</a>
      
        </template>
        <template v-if="column.dataIndex === 'Action'">
          <a href="#">{{ text }}</a>
      
        </template>
      </template>
      
    </a-table>
  </template>
  <script>
  import { defineComponent } from 'vue';
  const columns = [
  {
    title: 'No',
    dataIndex: 'No',
    key: 'No',
  },  
  
  {
    title: 'Transaction ID',
    dataIndex: 'transactionid',
    key: 'transactionid',
  }, {
    title: 'Contract No',
    dataIndex: 'contractno',
    key: 'contractno',
    
  }, {
    title: 'Sys',
    dataIndex: 'Sys',
    key: 'Sys',
 
  }, {
    title: 'DocumentName',
    dataIndex: 'documentname',
    key: 'documentname',

  },
   {
    title: 'File Name',
    dataIndex: 'filename',
    key: 'filename',

  }, {
    title: 'Preview',
    dataIndex: 'preview',
    key: 'preview',

  }, {
    title: 'Download',
    dataIndex: 'download',
    key: 'download',

  }, {
    title: 'Action',
    dataIndex: 'Action',
    key: 'edit',

  }];
  const data = [{
  No:'1',
  transactionid:'TR2300001',
  contractno:'LA 62287',
  Sys:'ALD',
  documentname:'LA Document',
  filename:'ALD_LA62287_LAx',
  Description:'',
  preview:'preview',
  download:'download',
  Action:'edit',
  

  },{
  No:'2',
  transactionid:'TR2300002',
  contractno:'LA 62287',
  Sys:'ALD',
  documentname:'COA Document',
  filename:'ALD_LA62287_COAx',
  Description:'',
  preview:'preview',
  download:'download',
  Action:'edit',
  },{
  No:'3',
  transactionid:'TR2300003',
  contractno:'LA 62287',
  Sys:'ALD',
  documentname:'Other Document',
  filename:'ALD_LA62287_OTHx',
  Description:'',
  preview:'preview',
  download:'download',
  Action:'edit',
  }
  ];
  export default defineComponent({
    setup() {
      return {
        data,
        columns,
      };
    },
  });
  </script>