<template>
  <div>
    <a-transfer
      v-model:target-keys="targetKeys"
      :data-source="mockData"
      :disabled="disabled"
      :show-search="showSearch"
      :filter-option="(inputValue, item) => item.title.indexOf(inputValue) !== -1"
      :show-select-all="false"
      @change="onChange"
    >
      <template
        #children="{
          direction,
          filteredItems,
          selectedKeys,
          disabled: listDisabled,
          onItemSelectAll,
          onItemSelect,
        }"
      >
        <a-table
          :row-selection="
            getRowSelection({
              disabled: listDisabled,
              selectedKeys,
              onItemSelectAll,
              onItemSelect,
            })
          "
          :columns="direction === 'left' ? leftColumns : rightColumns"
          :data-source="filteredItems"
          size="small"
          :style="{ pointerEvents: listDisabled ? 'none' : null }"
          :custom-row="
            ({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) return;
                onItemSelect(key, !selectedKeys.includes(key));
              },
            })
          "
        />
      </template>
    </a-transfer>
    <!-- <a-switch
      v-model:checked="disabled"
      un-checked-children="disabled"
      checked-children="disabled"
      style="margin-top: 16px"
    />-->
    <!-- <a-switch
      v-model:checked="showSearch"
      un-checked-children="showSearch"
      checked-children="showSearch"
      style="margin-top: 16px"
    />  -->
  </div>
  <br/>
  <div class="navbar-end">   
    <!-- <a-button @click="success">Save all to Batch</a-button> -->
        <a-button  @click="success" type="primary" :size="size" style="width: 160px"><Save-Outlined/>Save all to Batch </a-button>
        </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { SaveOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
const mockData = [{
    key: '1',
    ContNo: 'LA62287',
    Sys:'ALD',
    CustomerCode: '',
    Customername:'บริษัท อริสต้า ไลฟ์ซายน์(ประเทศไทย)จำกัด',
    DocCode:'1',
    DocumentName: 'LA Document',
  
   
  }, {
    key: '2',
    ContNo: 'LA62948',
    Sys:'ALD',
    CustomerCode: '',
    Customername:'บริษัท กลุ่มสยามบรรจุภัณฑ์ จำกัด',
    DocCode:'3',
    DocumentName: 'LA Document',
  },
  {
    key: '3',
    ContNo: 'LA62808',
    Sys:'ALD',
    CustomerCode: '',
    Customername:'บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด',
    DocCode:'4',
    DocumentName: 'LA Document',
  }];
//   for (let i = 0; i < 10; i++) {
//   mockData.push({
//     key: i.toString(),
//     ContNo: i,
  
//     // description: `description of content${i + 1}`,
//     disabled: i % 4 === 0,
//   });
// }
const originTargetKeys = mockData.filter(item => +item.key % 3 > 2).map(item => item.key); //logic defual number item right table
const leftTableColumns = [{
  dataIndex: 'key',
  title: 'key',
}, {
  dataIndex: 'ContNo',
  title: 'ContNo',
}, {
  dataIndex: 'Sys',
  title: 'Sys.',
}
, {
  dataIndex: 'CustomerCode',
  title: 'CustomerCode',
}, {
  dataIndex: 'Customername',
  title: 'Customername',
},{
  dataIndex:'DocCode',
  title:'DocCode',
},{
  dataIndex:'DocumentName',
  title:'DocumentName',
}

];
const rightTableColumns = [{
  dataIndex: 'key',
  title: 'key',
},{
  dataIndex:'ContNo',
  title:'ContNo',
}];


export default defineComponent({
  components: {
        SaveOutlined,
  
    },
  setup() {
    
    const targetKeys = ref(originTargetKeys);
    const disabled = ref(false);
    const showSearch = ref(true);
    const leftColumns = ref(leftTableColumns);
    const rightColumns = ref(rightTableColumns);
    const onChange = nextTargetKeys => {
      console.log('nextTargetKeys', nextTargetKeys);
    };
    const success = () => {
      message.success('Save Complete', 10);
    };
    const getRowSelection = ({
      disabled,
      selectedKeys,
      onItemSelectAll,
      onItemSelect,
    }) => {
      return {
       
        getCheckboxProps: item => ({
          disabled: disabled || item.disabled,
        }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows.filter(item => !item.disabled).map(({
            key,
          }) => key);
          onItemSelectAll(treeSelectedKeys, selected);
        },
        onSelect({
          key,
        }, selected) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: selectedKeys,
      };
    };
    return {
      size: ref('large'),
      mockData,
      targetKeys,
      disabled,
      showSearch,
      leftColumns,
      rightColumns,
      onChange,
      getRowSelection,
      success,
    };
  },
});
</script>
