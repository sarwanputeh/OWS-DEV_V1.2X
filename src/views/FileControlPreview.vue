<template>
    
    <div >
    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
        <home-outlined />
        </a>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
        <span>/File Control Management/</span>
      </a-breadcrumb-item> 
      <a-breadcrumb-item href="">
        <span>Preview and Print</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <br/>
    <br/>
      <div class="Header-text" style="margin-left: 5px">File Control Management : Preview and Print</div>
      <br/>
      <div class="Header-text2" style="margin-left: -5px"><Caret-Right-Outlined />Search the digital documnet</div> 
      <br/>
      <div class="Header-text2" style="margin-left: 6px">
       <file-search-outlined/>
      Criteria</div><br/>
      <br/>

      <div class="columns">
     <div class="column">
     <div class="Header-text2" style="margin-left: 6px">Contract No: <a-input v-model:value="value" size="large"  style="width: 200px" placeholder="ContractNo" /></div>
     </div>
    
      <div class="column">
       <div class="Header-text2" >
       System : 
       
         <a-space >
           <a-select
             ref="select"
             v-model:value="value1"
             size="large"
             style="width: 200px"
             @focus="focus"
             @change="handleChange"
             placeholder="System" 
           >
             <a-select-option value="ALD">ALD</a-select-option>
             <a-select-option value="FMD">FMD</a-select-option>
            
           </a-select>
         </a-space>
       </div>
       </div> 
       <div class="column">
     <div class="Header-text2" >Document: <a-input v-model:value="value" size="large"  style="width: 200px" placeholder="Document" /></div>
     </div> 
       <div
        class="column">
         <a-button type="primary"  style="width: 200px" size="large"><search-outlined />Search</a-button>
       </div> 
     </div>
     <br/>
     <div class="Header-text2"> <Table-Outlined/>Result</div> 
     <br/>
     <FileControlPreviewPrint/>
      </div>
      <br/>
  <br/>
  </template>
  <script>
  // @ is an alias to /src


  import {  ref } from 'vue';
  import {HomeOutlined,CaretRightOutlined,FileSearchOutlined,SearchOutlined,TableOutlined} from '@ant-design/icons-vue'
  import FileControlPreviewPrint from '@/components/FileControlPreviewPrint.vue'
  
  export default {
    name: 'HomeView',
    components: {
      
        
        HomeOutlined,
        CaretRightOutlined,
        FileSearchOutlined,
        SearchOutlined,
        FileControlPreviewPrint,
        TableOutlined,
     
    },
    setup() {
      return {
        size: ref('large'),
        
      };
      
    },

  }

</script>
  <style>
  .Header-text{
       font-size: 24px;
    }
    .Header-text2{
       font-size: 18px;
    }
  .Paragraph-text{
       font-size: 16px;
    }
  </style>n