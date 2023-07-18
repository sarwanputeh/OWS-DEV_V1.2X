<template>
  <div>
    <a-table :columns="columns" :data-source="dataSource" row-key="key">
      <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'edit'">
          <a href="/EditCoverSheetTemplate">{{ text }}</a>
        </template>
        </template>
      <!-- <template #customRender="{ text, record }"> -->
        <template #customRender="{ record }">
          
        <!-- <a-popconfirm
          title="Are you sure you want to delete this task?"
          :visible="record.visible"
          ok-text="Yes"
          cancel-text="No"
          @visibleChange="handleVisibleChange(record)"
          @confirm="confirm(record)"
          @cancel="cancel(record)"
        > -->
          <!-- <a href="#">Delete a task</a> -->
        <!-- </a-popconfirm>
      -->
        <!-- Whether directly execute: -->
        <a-checkbox v-model:checked="record.condition" />
      </template>
    </a-table>
  </div>
</template>
<script>

import { message } from 'ant-design-vue';
import {  defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const columns = [
      {
        title: 'Template Code',
        dataIndex: 'tcode',
        key: 'tcode',
       
      },
      {
        title: 'Template Name',
        dataIndex: 'templatename',
        key: 'templatename',
      
      },
      {
        title: 'Lease Agr.',
        dataIndex: 'LeaseAgr',
        key: 'LeaseAgr',
        slots: { customRender: 'customRender' },
      },
      {
        title: 'Sales Agr.',
        dataIndex: 'SalesAgr',
        key: 'SalesAgr',
        slots: { customRender: 'customRender' },
      },
      {
        title: 'Deposit Trs.',
        dataIndex: 'DepositTrs',
        key: 'DepositTrs.',
        slots: { customRender: 'customRender' },
      },
      {
        title: 'Attachment',
        dataIndex: 'Attachment',
        key: 'Attachment',
        slots: { customRender: 'customRender' },
      },
      {
        title: 'Pay. Sch.',
        dataIndex: 'PaySch',
        key: 'PaySch',
        slots: { customRender: 'customRender' },
      },
      {
        title: 'Int. Sch.',
        dataIndex: 'IntSch',
        key: 'Int.Sch.',
        slots: { customRender: 'customRender' },
      },
      {
        title: 'Accept. Recp.',
        dataIndex: 'AcceptRecp',
        key: 'AcceptRecp',
        slots: { customRender: 'customRender' },
      },{
        title: 'Action',
        dataIndex: 'edit',
        key: 'edit',
      }
    ];

    const dataSource = [
      {
        key: '1',
        tcode: 'TP23001',
        visible: false,
        condition: true,
        templatename: 'Template 01',
        LeaseAgr: '1',
        SalesAgr:'1',
        DepositTrs: '1',
        Attachment: '1',
        PaySch: '1',
        IntSch: '1',
        AcceptRecp: '1',
       edit:'edit'
      },
      // Add more objects for additional rows
    ];

    const confirm = (record) => {
      record.visible = false;
      message.success('Next step.');
    };

    const cancel = (record) => {
      record.visible = false;
      message.error('Click on cancel.');
    };

    const handleVisibleChange = (record, bool) => {
      if (!bool) {
        record.visible = false;
        return;
      }

      // Determining condition before showing the popconfirm.
      console.log(record.condition);
      if (record.condition) {
        confirm(record); // next step
      } else {
        record.visible = true;
      }
    };

    return {
      columns,
      dataSource,
      confirm,
      cancel,
      handleVisibleChange,
    };
},
});
</script>