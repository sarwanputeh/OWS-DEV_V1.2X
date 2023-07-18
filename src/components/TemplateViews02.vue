<template>
    <div>
      <a-table :columns="columns" :data-source="dataSource" :pagination="false" row-key="key">
        <!-- เพิ่มคอลัมน์ Checkbox -->
        <template #checkbox="scope">
          <a-checkbox v-model="scope.record.checked" @change="handleCheckboxChange(scope.record)" />
        </template>
      </a-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        columns: [
          {
            title: 'Template Code',
            dataIndex: 'code',
            key: 'code',
          },
          {
            title: 'Template Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Lease Agr.',
            dataIndex: 'LeaseAgr',
            key: 'LeaseAgr',
          },
          {
            title: 'Sales Agr.',
            dataIndex: 'SalesAgr',
            key: 'SalesAgr',
          },
          {
            title: ' Deposit Trs.',
            dataIndex: 'DepositTrs',
            key: ' DepositTrs',
          },
          {
            title: 'Attachment',
            dataIndex: 'Attachment',
            key: 'Attachment',
          },
          {
            title: 'Pay.Sch.',
            dataIndex:'pay',
            key: 'pay',
          },
          {
            title: 'Int. Sch.',
            dataIndex: 'Int',
            key: 'Int',
          },
          {
            title: 'Accept. Recp.',
            dataIndex: 'Accept',
            key: 'Accept',
          },
          {
            title: 'Gua. Doc.',
            dataIndex: 'Gua',
            key: 'Gua',
          },
          
        ],
        dataSource: [
          {
            key: '2',
            code: 'TP23002',
            name: 'Template02',
            LeaseAgr:'Yes',
            SalesAgr:'Yes',
            DepositTrs:'Yes',
            Attachment:'Yes',
            pay:'Yes',
            Int:'Yes',
            Accept:'Yes',
            Gua:'Yes'
          },
        ],
      };
    },
    methods: {
      handleCheckboxChange(record) {
        console.log('Checkbox changed for record:', record);
      },
    },
  };
  </script>
  