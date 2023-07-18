<template>
    <div class="home">
      
      <!-- <ConditionSearch />
      <HelloWorld/>
      <br/> -->
      <Breadcrumbcoversheet/>
      <br/>
      <div class="Header-text" style="margin-left: 5px">Document Custody Management : Cover Sheet</div>
      <br/>
      
      <div class="column">
        <div class="Header-text2" style="margin-left: -5px"><Caret-Right-Outlined />Choose Template </div>

        <div class="navbar-end">   
        <a-button type="primary" size="size" style="width: 150px">
          <a href="/SettingCoverSheet"><Setting-Outlined/>Setting</a>
        </a-button>
        </div>
      </div>
      <div class="Header-text2" style="margin-left: 6px">
      <file-search-outlined />Criteria</div>
      
     
    <!-- <TabsDocumentName/> -->
 

  
      <div>
    </div>
    <!-- <div class="Header-text2" style="margin-left: 6px">
      <Table-Outlined/>TemplateView</div> -->
   
    
      <!-- <TemplateViews01 /> -->
    
   
     
      <!-- <TemplateA /> -->
      <BasketCompo />
      <br/>
      <br/>
      <div class="Header-text2" style="margin-left: -5px"><Caret-Right-Outlined />Preview and Print cover sheet</div>
      <br/>
      <!-- <div class="column">
    <div class="Header-text2" style="margin-left: 6px">Contract  No : <a-input v-model:value="value" size="large"  style="width: 200px" placeholder="Contract No" /></div>
    <br/>
    <div class="Header-text2" style="margin-left: 6px">Lessee Name : <a-input v-model:value="value" size="large"  style="width: 200px" placeholder="Lessee Name" /></div>    
  </div> -->
  <br/>

  <!-- <div class="navbar-end">   
        <a-button type="primary" :size="size" style="width: 150px">
       
          <a href="#"><Search-Outlined/>Search</a>
        </a-button>
        </div> -->

    </div>
  <!-- <div class="Header-text2">Result</div> -->
  <!-- <CoversheetBatch /> -->
  <!-- <ListPrintPreview /> -->
  <ListPrintPreview_v2 />
  <!-- <PreviewPrintCoversheet /> -->
  </template>
  
  <script>
  // @ is an alias to /src
/* eslint-disable */
  import ListPrintPreview_v2 from '@/components/ListPrintPreview_v2.vue'
  // import ListPrintPreview from '@/components/ListPrintPreview.vue'
  import BasketCompo from '@/components/BasketCompo.vue'
  // import TabsDocumentName from '@/components/TabsDocumentName.vue'
  // import TemplateViews01 from '@/components/TemplateViews01.vue';
  import Breadcrumbcoversheet from '@/components/Breadcrumb-coversheet.vue'
  // import PreviewPrintCoversheet from '@/components/PreviewPrintCoversheet.vue'
  import {  ref } from 'vue';
  import {FileSearchOutlined,TableOutlined,SettingOutlined,CaretRightOutlined,EyeOutlined,SearchOutlined} from '@ant-design/icons-vue'
  import CoversheetBatch from '@/components/CoversheetBatch.vue'

  export default {
    name: 'HomeView',
    components: {
   
      // TemplateA,
      BasketCompo,
      // TabsDocumentName,
      // TemplateViews01,
      Breadcrumbcoversheet,
      FileSearchOutlined,
      TableOutlined,
      SettingOutlined,
      CaretRightOutlined,
      EyeOutlined, 
      SearchOutlined,
      // ListPrintPreview,
      ListPrintPreview_v2
      // PreviewPrintCoversheet,
      // CoversheetBatch,
    

     
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
  </style>



