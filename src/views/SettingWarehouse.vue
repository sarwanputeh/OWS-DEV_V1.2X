<template>
    <!--ยังไม่เชื่อมcondition-->

    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
        <home-outlined />
        </a>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
  
        <span>/Document Custody/</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="./"><span>Document Custody Management/</span></a-breadcrumb-item>
      <a-breadcrumb-item ><span><a href="/WarehouseView">Warehouse/ </a></span></a-breadcrumb-item>
      <a-breadcrumb-item href="./"><span>Setting</span></a-breadcrumb-item>
    </a-breadcrumb>

     <br />
     <br />
     <div class="Header-text" style="margin-left: 1px;">Setting the Warehouse Master</div>
     <br/>  
     <br />
    
     <!-- <div class="navbar-end">   
        <a-button type="primary"   size="large" style="width: 150px">
          <a href="#"><Setting-Outlined/>Setting</a>
        </a-button>
    </div> -->
  
    
   <div class="Header-text2" style="margin-left: 6px">
       <file-search-outlined/>
      Criteria</div><br/>
      <div class="columns">
     <div class="column">
     <div class="Header-text2" style="margin-left: 6px">Warehouse Name: <a-input v-model:value="value" size="large"  style="width: 200px" placeholder="Please Search..." /></div>
    
    </div>
    
    <div class="column">
       </div> 
       <div class="column">
       </div> 
       <div
        class="column">
         <a-button type="primary"  style="width: 200px" size="large"><search-outlined />Search</a-button>
       </div>  
     </div>
     <br/>
     <br />
     <!-- <div class="Header-text">Receive Document Verification</div><br/> -->
     <div class="Header-text2" style="margin-left: 6px"> <Table-Outlined /> Result</div>
    
     <a-table :data-source="data" :columns="columns">
       <template #headerCell="{ column }">
         <template v-if="column.key === 'No'">
           <span style="color: #1890ff">No</span>
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
  
     <a-button  href="/SettingAddWarehouse" type="primary"  style="width: 100px" size="large"><plus-outlined />Add</a-button>
     <br/>
   </template>
   <script>
   import { SearchOutlined} from '@ant-design/icons-vue';
   import { defineComponent, reactive, ref, toRefs } from 'vue'; 
 //  import BreadcrumbReceived from '@/components/Breadcrumb-Received.vue'
  import {FileSearchOutlined,TableOutlined,PlusOutlined} from '@ant-design/icons-vue'
  import { HomeOutlined } from '@ant-design/icons-vue';


   
   const data = [{
     key: '1',
     No:'1',
     whcode:'LA 62287',
     warehousename:'LA, COA, KYC, Others',
     Action:'Edit',
   }
  
   ];
   export default defineComponent({
     components: {
       SearchOutlined,
       FileSearchOutlined,
     TableOutlined,
     PlusOutlined,
     HomeOutlined,
       
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
         title: 'WH Code',
         dataIndex: 'whcode',
         key: 'whcode',
         customFilterDropdown: true,
         onFilter: (value, record) => record.whcode.toString().toLowerCase().includes(value.toLowerCase()),
         onFilterDropdownVisibleChange: visible => {
           if (visible) {
             setTimeout(() => {
               searchInput.value.focus();
             }, 100);
           }
         },
       },
       {title: 'Warehouse Name',
         dataIndex: 'warehousename',
         key: 'warehousename',
         customFilterDropdown: true,
         onFilter: (value, record) => record.warehousename.toString().toLowerCase().includes(value.toLowerCase()),
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
      {
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