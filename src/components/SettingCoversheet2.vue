<template>
    <div>
      <a-table :columns="columns" :data-source="dataSource" :pagination="false" row-key="key">
        <!-- เพิ่มคอลัมน์ Checkbox -->
        <template #checkbox="{ record }">
          <a-checkbox v-model="record.checked" @change="handleCheckboxChange(record)" />
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
            title: 'LeaseAgr',
            key: 'checkbox',
            align: 'center',
            width: '20px',
            slots: { customRender: 'checkbox' }, // ใช้ชื่อ customRender แทน checkbox
          },
          {
          title: 'SalesAgr.',
          dataIndex: 'SalesAgr',
          key: 'checkbox',
            align: 'center',
            width: '50px',
            slots: { customRender: 'checkbox' }, // ใช้ชื่อ customRender แทน checkbox
        },
        {
          title: ' DepositTrs.',
          dataIndex: 'DepositTrs',
          key: 'checkbox',
            align: 'center',
            width: '50px',
            slots: { customRender: 'checkbox' }, // ใช้ชื่อ customRender แทน checkbox
        },
        {
          title: 'Attachment',
          dataIndex: 'Attachment',
          key: 'checkbox',
            align: 'center',
            width: '50px',
            slots: { customRender: 'checkbox' }, // ใช้ชื่อ customRender แทน checkbox
        },
        {
          title: 'Pay.Sch.',
          dataIndex:'pay',
          key: 'checkbox',
            align: 'center',
            width: '50px',
            slots: { customRender: 'checkbox' }, // ใช้ชื่อ customRender แทน checkbox
        },
        {
          title: 'Int.Sch.',
          dataIndex: 'Int',
          key: 'checkbox',
            align: 'center',
            width: '50px',
            slots: { customRender: 'checkbox' }, // ใช้ชื่อ customRender แทน checkbox
        },
        {
          title: 'Accept.Recp.',
          dataIndex: 'Accept',
          key: 'checkbox',
            align: 'center',
            width: '50px',
            slots: { customRender: 'checkbox' }, // ใช้ชื่อ customRender แทน checkbox
        },
        {
          title: 'Gua.Doc.',
          dataIndex: 'Gua',
          key: 'checkbox',
            align: 'center',
            width: '50px',
            slots: { customRender: 'checkbox' }, // ใช้ชื่อ customRender แทน checkbox
        }
        ],
        dataSource: [
          {
            key: '1',
            code: 'TP23001',
            name: 'Template01',
            checked: true, // เปลี่ยนค่าเริ่มต้นให้เป็น true
          },
          {
            key: '2',
            code: 'TP23002',
            name: 'Template02',
            checked: true, // เปลี่ยนค่าเริ่มต้นให้เป็น true
          },
          // เพิ่มข้อมูลอื่นๆ ตามต้องการ
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
  