<template>
    <!--ยังไม่เชื่อมcondition-->
    
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

       <template #bodyCell="{ text, column }">
        <template v-if="column.dataIndex === 'Action'">
          <a href="/PreviewTheDocView">{{ text }}</a>
      
        </template>
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
   import { SearchOutlined} from '@ant-design/icons-vue';
   import { defineComponent, reactive, ref, toRefs } from 'vue'; 
 //  import BreadcrumbReceived from '@/components/Breadcrumb-Received.vue'
 
   
   
   const data = [{
     key: '1',
     No:'1',
     state:'Out',
     date:'10/05/2023',
     boxcode:'BX2305001',
     description:'นำเข้าส่งเข้า Warehouse',
     requestby:'Mr.A',
     department:'CMD',
     Action:'Edit',
   },{
    key: '2',
    No:'2',
    state:'In',
    date:'03/05/2023',
    boxcode:'BX2305001',
    description:'Marketing request ขอเอกสาร KYC ตัวจริง',
    requestby:'Mr.B',
    department:'AUTO2',
    Action:'Edit',
   },{
    key: '3',
     No:'3',
     state:'Out',
     date:'10/05/2023',
     boxcode:'BX2305001',
     description:'นำเข้าส่งเข้า Warehouse',
     requestby:'Mr.A',
     department:'CMD',
     Action:'Edit',
   },
  
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
         title: 'No',
         dataIndex: 'No',
         key: 'No',
         customFilterDropdown: true,
         onFilter: (value, record) => record.No.toString().toLowerCase().includes(value.toLowerCase()),
         onFilterDropdownVisibleChange: visible => {
           if (visible) {
             setTimeout(() => {
               searchInput.value.focus();
             }, 100);
           }
         },
       },{
         title: 'State',
         dataIndex: 'state',
         key: 'state',
         customFilterDropdown: true,
         onFilter: (value, record) => record.state.toString().toLowerCase().includes(value.toLowerCase()),
         onFilterDropdownVisibleChange: visible => {
           if (visible) {
             setTimeout(() => {
               searchInput.value.focus();
             }, 100);
           }
         },
       },
        {
         title: 'Box Code',
         dataIndex: 'boxcode',
         key: 'boxcode',
         customFilterDropdown: true,
         onFilter: (value, record) => record.boxcode.toString().toLowerCase().includes(value.toLowerCase()),
         onFilterDropdownVisibleChange: visible => {
           if (visible) {
             setTimeout(() => {
               searchInput.value.focus();
             }, 100);
           }
         },
       },
       {title: 'Description',
         dataIndex: 'description',
         key: 'description',
         customFilterDropdown: true,
         onFilter: (value, record) => record.description.toString().toLowerCase().includes(value.toLowerCase()),
         onFilterDropdownVisibleChange: visible => {
           if (visible) {
             setTimeout(() => {
               searchInput.value.focus();
             }, 100);
           }
         },
 
   },
       {title: 'Request By',
         dataIndex: 'requestby',
         key: 'requestby',
         customFilterDropdown: true,
         onFilter: (value, record) => record.requestby.toString().toLowerCase().includes(value.toLowerCase()),
         onFilterDropdownVisibleChange: visible => {
           if (visible) {
             setTimeout(() => {
               searchInput.value.focus();
             }, 100);
           }
         },
 
   }
      ,{
        title:'Action',
        dataIndex: 'Action',
         key: 'Action',
       }
       
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
      
   
       return {
         data,
         columns,
         handleSearch,
         handleReset,
         searchInput,
       
       
 
         
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
   .Header-text2{
      font-size: 18px;
   }
   </style>