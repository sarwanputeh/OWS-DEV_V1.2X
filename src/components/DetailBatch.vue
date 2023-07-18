<template>
    <div>
   
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
            title: 'contractNo',
            dataIndex: 'contractNo',
            key: '"contractNo',
          },
          {
            title: 'systemCode',
            dataIndex: 'systemCode',
            key: 'systemCode',
          },
          {
            title: 'customerCode',
            dataIndex: 'customerCode',
            key: 'customerCode',
          },
          {
            title: 'customerName',
            dataIndex: 'customerName',
            key: 'customerName',
          },
          
        ];
    
     
    
        const data = ref([]);
        const searchText = ref('');
    
     
    
        onMounted(async () => {
          try {
            const response = await axios.get('https://localhost:7083/api/Warehouse/Result?boxCode=BX230003');
            data.value = response.data.map((item) => ({
              num: item.num,
              contractNo: item.contractNo.toString(),
              systemCode: item.systemCode.toString(),
              customerCode: item.customerCode.toString(),
              customerName: item.customerName,
              boxCode: item.boxCode,
              boxName: item.boxName,
         
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