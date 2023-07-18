<template>
   
  <!-- <div class="Header-text">Receive Document Verification</div><br/> -->
  <a-table :data-source="data" :columns="columns">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'ContNo'">
        <span style="color: #1890ff">ContNo</span>
      </template>
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
    <template>
    <a-table :columns="columns" :data-source="data" @change="onChange" />
    
  </template>
  <template #checkbox="{ record }">
    <a-checkbox v-model="record.checked" @change="handleCheckboxChange(record)" />
  </template>
    <template #bodyCell="{ text, column }">
      <span v-if="searchText && searchedColumn === column.dataIndex">
        <template v-if="column.dataIndex === 'name'">{{ text.first }} {{ text.last }}</template>
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
  </a-table>

</template>
<script>
import { SearchOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, toRefs } from 'vue'; 


const data = [{
  key: '1',
  ContNo: 'LA62287',
  Sys:'ALD',
  CustomerCode: '6217',
  customername:'บริษัท อริสต้า ไลฟ์ซายน์(ประเทศไทย)จำกัด',
  doccode:'1',
  DocumentName: 'LA Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm',
  checked: false
 
  
}, {
  key: '2',
  ContNo: 'LA62287',
  Sys:'ALD',
  CustomerCode: '6217',
  customername:'บริษัท อริสต้า ไลฟ์ซายน์(ประเทศไทย)จำกัด',
  doccode:'3',
  DocumentName: 'COA Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm',
  checked: false
 
  
}, {
  key: '3',
  ContNo: 'LA62287',
  Sys:'ALD',
  CustomerCode: '6217',
  customername:'บริษัท อริสต้า ไลฟ์ซายน์(ประเทศไทย)จำกัด',
  doccode:'4',
  DocumentName: 'KYC Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
  
}, {
  key: '4',
  ContNo: 'LA62287',
  Sys:'ALD',
  CustomerCode: '6217',
  customername:'บริษัท อริสต้า ไลฟ์ซายน์(ประเทศไทย)จำกัด',
  doccode:'5',
  DocumentName:'Other Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
  
},
{
  key: '5',
  ContNo: 'LA62948',
  Sys:'ALD',
  CustomerCode: '76',
  customername:'บริษัท กลุ่มสยามบรรจุภัณฑ์ จำกัด',
  doccode:'1',
  DocumentName:'LA Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '6',
  ContNo: 'LA62948',
  Sys:'ALD',
  CustomerCode: '76',
  customername:'บริษัท กลุ่มสยามบรรจุภัณฑ์ จำกัด',
  doccode:'3',
  DocumentName:'COA Dosucment',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '7',
  ContNo: 'LA62948',
  Sys:'ALD',
  CustomerCode: '76',
  customername:'บริษัท กลุ่มสยามบรรจุภัณฑ์ จำกัด',
  doccode:'4',
  DocumentName:'KYC Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},{
  key: '8',
  ContNo: 'LA62948',
  Sys:'ALD',
  CustomerCode: '76',
  customername:'บริษัท กลุ่มสยามบรรจุภัณฑ์ จำกัด',
  doccode:'5',
  DocumentName:'Other Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '9',
  ContNo: 'LA62808',
  Sys:'ALD',
  CustomerCode: '5459',
  customername:'บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด',
  doccode:'1',
  DocumentName:'LA Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  { key: '10',
  ContNo: 'LA62808',
  Sys:'ALD',
  CustomerCode: '5459',
  customername:'บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด',
  doccode:'3',
  DocumentName:'COA Dosucment',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  { key: '11',
  ContNo: 'LA62808',
  Sys:'ALD',
  CustomerCode: '5459',
  customername:'บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด',
  doccode:'4',
  DocumentName:'KYC Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},{
  key: '12',
  ContNo: 'LA62808',
  Sys:'ALD',
  CustomerCode: '5459',
  customername:'บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด',
  doccode:'5',
  DocumentName:'Other Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '13',
  ContNo: 'LA62808',
  Sys:'ALD',
  CustomerCode: '5459',
  customername:'บริษัท เมทเล่อร์-โทเลโด (ประเทศไทย) จำกัด',
  doccode:'5',
  DocumentName:'Other Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '14',
  ContNo: 'LA TOL23-H0421',
  Sys:'FMD',
  CustomerCode: 'C12513',
  customername:'นางวาสนา แดงปรก',
  doccode:'2',
  DocumentName:'LA Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '15',
  ContNo: 'LA TOL23-H0421',
  Sys:'FMD',
  CustomerCode: 'C12513',
  customername:'นางวาสนา แดงปรก',
  doccode:'6',
  DocumentName:'Other Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '16',
  ContNo: 'LA TOL23-0007',
  Sys:'FMD',
  CustomerCode: 'C11419',
  customername:'บริษัท ฟูรูกาวา ไฟเทล (ประเทศไทย) จำกัด',
  doccode:'2',
  DocumentName:'LA Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'Yes',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '17',
  ContNo: 'LA TOL23-0007',
  Sys:'FMD',
  CustomerCode: 'C11419',
  customername:'บริษัท ฟูรูกาวา ไฟเทล (ประเทศไทย) จำกัด',
  doccode:'6',
  DocumentName:'Other Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'No',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '18',
  ContNo: 'LA TOL23-0059',
  Sys:'FMD',
  CustomerCode: 'C11038',
  customername:'บริษัท เอช ดี เค (ประเทศไทย) จำกัด',
  doccode:'2',
  DocumentName:'LA Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'No',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
},
  {
  key: '19',
  ContNo: 'LA TOL23-0059',
  Sys:'FMD',
  CustomerCode: 'C11038',
  customername:'บริษัท เอช ดี เค (ประเทศไทย) จำกัด',
  doccode:'6',
  DocumentName:'Other Document',
  Customersign: '-',
  TOLCsign: '-',
  // status:'No',
  // Percentage:'0%',
  Action:'Edit',
  confirm:'confirm'
 
}
];
export default defineComponent({
  components: {
    SearchOutlined,
  },
  setup() {
    const state = reactive({
      searchText: '',
      searchedColumn: '',
    });
    const searchInput = ref();
   
    const columns = [{
      title: 'ContractNo',
      dataIndex: 'ContNo',
      key: 'ContNo',
      customFilterDropdown: true,
      onFilter: (value, record) => record.ContNo.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => {
            searchInput.value.focus();
          }, 100);
        }
      },
   
    },
     {
      title: 'Sys.',
      dataIndex: 'Sys',
      key: 'Sys',
      customFilterDropdown: true,
      onFilter: (value, record) => record.Sys.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => {
            searchInput.value.focus();
          }, 100);
        }
      },
    },{title: 'Customer Code',
      dataIndex: 'CustomerCode',
      key: 'CustomerCode',
      customFilterDropdown: true,
      onFilter: (value, record) => record.CustomerCode.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => {
            searchInput.value.focus();
          }, 100);
        }
      },
    },
    
     {
      title: 'CustomerName',
      dataIndex: 'customername',
      key: 'customername',
      customFilterDropdown: true,
      onFilter: (value, record) => record.customername.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => {
            searchInput.value.focus();
          }, 100);
        }
      },
    },
    {
      title: 'Doc Code',
      dataIndex: 'doccode',
      key: 'doccode',
      customFilterDropdown: true,
      onFilter: (value, record) => record.doccode.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => {
            searchInput.value.focus();
          }, 100);
        }
      },
    },
    {title: 'DocumentName',
      dataIndex: 'DocumentName',
      
      key: 'DocumentName',
      customFilterDropdown: true,
      onFilter: (value, record) => record.DocumentName.toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => {
            searchInput.value.focus();
          }, 100);
        }
      },
//     },{
// title: 'DocumentName',
// dataIndex: 'DocumentName',
// filters: [{
//   text: 'LA Document',
//   value: 'LA Document',
// }, {
//   text: 'COA Dosucment',
//   value: 'COA Dosucmentt',
// }],
// // filters2: (value, record) => record.DocumentName.toString().toLowerCase().includes(value.toLowerCase()),
// width: '20%',
},
    {title: 'Customer sign',
      dataIndex: 'checkbox',
      slots: { customRender: 'checkbox' },
      // key: 'Customersign',
    },
    {title: 'TOLC sign',
    dataIndex: 'checkbox',
      slots: { customRender: 'checkbox' },
    },
    // {title: 'Percentage',
    //   dataIndex: 'Percentage',
    //   key: 'Percentage',
    // },
    {title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
    },
    {title: 'Confirm',
      dataIndex: 'confirm',
      key: 'confirm',
    },
   

    // ,
    // {title: 'confirm',
    //   dataIndex: 'confirm',
    //   key: 'confirm',
    // }
  ]
    ;
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
    };
    const handleReset = clearFilters => {
      clearFilters({
        confirm: true,
      });
      state.searchText = '';
    };
     const handleCheckboxChange = (record) => {
     record.checked = !record.checked;
    };

    return {
      data,
      columns,
      handleSearch,
      handleReset,
      searchInput,
      handleCheckboxChange,
      
      ...toRefs(state),
      
    };
  },
});
</script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.Header-text{
   font-size: 24px;
}
</style>
























<!-- <script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>-->
