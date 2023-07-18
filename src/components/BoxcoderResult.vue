<template>
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'No'">
          <a >{{ text }}</a>
        </template>
        <template v-if="column.dataIndex === 'edit'">
          <a href="#">{{ text }}</a>
      
        </template>
        <template v-if="column.dataIndex === 'delete'">
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
    title: 'Box Code',
    dataIndex: 'boxcode',
    key: 'boxcode',
  }, {
    title: 'Box Date',
    dataIndex: 'boxdate',
    key: 'boxdate',
    
  }, {
    title: 'Box Name',
    dataIndex: 'boxname',
    key: 'boxname',
 
  }, {
    title: 'Action',
    dataIndex: 'edit',
    key: 'edit',

  }, {
    title: 'Delete',
    dataIndex: 'delete',
    key: 'delete',

  }];
  const data = [{
       key: '0',
       No:'1', 
       boxcode:'BX2305001',
       boxdate:'4/10/2023',
       boxname:'Execution Date 02/05/2023',
       edit:'edit',
       delete:'delete'

      }
      // , {
      //  key: '1',
      //  No:'2', 
      //  boxcode:'BX2305001',
      //  boxdate:'4/10/2023',
      //  boxname:'Execution Date 02/05/2023',
      //  edit:'edit',
      //  delete:'delete'
      // }
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