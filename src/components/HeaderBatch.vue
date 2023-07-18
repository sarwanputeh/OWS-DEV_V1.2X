<template>
    <div>
    <!-- <a-input
          style="width: 300px"
          v-model="searchText"
          @keydown.enter="handleSearch"
          placeholder="Search"
        />
    <a-button type="primary" @click="handleSearch">Search</a-button> -->
    <div><br /></div>
    <a-table :columns="columns" :data-source="filteredData"></a-table>
    </div>
    </template>
    
     
    
    <script>
    /* eslint-disable */ 
    import { defineComponent, ref, onMounted, computed } from 'vue';
    import axios from 'axios';
    import { EyeOutlined, DownloadOutlined, EditOutlined,DeleteOutlined, } from '@ant-design/icons-vue';
    
     
    
    export default defineComponent({
      components: {
      
        DownloadOutlined,
        EditOutlined,
  EyeOutlined,
  DeleteOutlined,
      },
      setup() {
        const columns = [
          {
            title: 'No',
            dataIndex: 'num',
            key: 'num',
          },
          {
            title: 'BoxCode',
            dataIndex: 'boxCode',
            key: '"boxCode',
          },
          {
            title: 'BoxDate',
            dataIndex: 'createDate',
            key: 'createDate',
          },
          {
            title: 'StoreDate',
            dataIndex: 'createDate',
            key: 'createDate',
          },
          {
            title: 'DeliveryDate',
            dataIndex: 'modifyDate',
            key: 'modifyDate',
          },{
            title: 'BoxReference',
            dataIndex: 'boxReference',
            key: 'boxReference',
          },
          {
            title: 'warehouseCode',
            dataIndex: 'warehouseCode',
            key: 'warehouseCode',
          },
          {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
          },
          {
            title: 'Preview',
            dataIndex: 'preview',
            key: 'preview',
            customRender: ({ text }) => (
    <a href="/Previewthedocument" style="margin-left: 20%;">
    <EyeOutlined />
    </a>
            ),
          },
          {
            title: 'Edit',
            dataIndex: 'Edit',
            key: 'Edit',
            customRender: ({ text }) => (
    <a href="#" style="margin-left: 20%;">
    <EditOutlined />
    </a>
            ),
          },{
            title: 'Delete',
            dataIndex: 'Delete',
            key: 'Delete',
            customRender: ({ text }) => (
    <a href="#" style="margin-left: 20%;">
    <DeleteOutlined />
    </a>
            ),
          },
        ];
    
     
    
        const data = ref([]);
        const searchText = ref('');
    
     
    
        onMounted(async () => {
          try {
            const response = await axios.get('https://localhost:7083/api/Warehouse/Header');
            data.value = response.data.map((item) => ({
              num: item.num,
                 boxCode: item.boxCode.toString(),
                 createDate: item.createDate.toString(),
                 modifyDate: item.modifyDate.toString(),
                 remark: item.remark,
                 boxReference: item.boxReference,
                 warehouseCode: item.warehouseCode,
         
            }));
          } catch (error) {
            console.error(error);
          }
        });
    
     
    
        const filteredData = computed(() => {
          if (!searchText.value) {
            return data.value;
          }
    
     
    
          const keyword = searchText.value.toLowerCase();
          return data.value.filter((item) => {
            return (
              item.ContractNo.toLowerCase().includes(keyword) ||
              item.CustomerName.toLowerCase().includes(keyword)
            );
          });
        });
    
     
    
        const handleSearch = () => {
          const keyword = searchText.value.toLowerCase();
          filteredData.value = data.value.filter((item) => {
            return (
              item.BoxCode.toLowerCase().includes(keyword) 
            //   ||
            //   item.CustomerName.toLowerCase().includes(keyword)
            );
          });
        };
    
     
    
        return {
          columns,
          data,
          searchText,
          filteredData,
          handleSearch,
        };
      },
    });
    </script>