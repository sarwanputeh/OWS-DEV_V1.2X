<template>
    <div>
      <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
        <home-outlined />
        </a>
      </a-breadcrumb-item>
      
      <a-breadcrumb-item ><a href="/LADocument">CoverSheet</a></a-breadcrumb-item>
    </a-breadcrumb> 
   
     <br/>
    <div class="Header-text" style="margin-left: 5px">Setting the cover sheet template</div>
    <br/>
   
     <div class="columns">
      <div class="column">
    <!-- <div class="Header-text2" style="margin-left: 6px">TemplateName : <a-input v-model:value="value" size="large"  style="width: 200px" placeholder="TemplateName" /></div> -->
      </div>
      <div class="column">
       </div>
       <!-- <div class="column">
        <div class="navbar-end">
        <a-button type="primary" style="width: 200px" size="large"><search-outlined />Search</a-button>
      </div>
       </div> -->
   
    
    <br/>
     </div>
    
    <!-- <SettingCover/> -->
    <ListSettingCover />
  <br/><br/>
  
  <!-- <a-button type="primary" href="/SettingCoverSheet-" ><Plus-Outlined/>ADD</a-button> -->
    <!-- <a-button type="primary" href="/SettingCoverSheetAddTemplateView" ><Plus-Outlined/>ADD</a-button> -->

    </div>
</template>

<script>
/* eslint-disable */ 
  // import SettingCoversheet from '@/components/SettingCoversheet'
  import BreadcrumbSettingcoversheet from '@/components/Breadcrumb-Approval-Setting.vue'
  import {FileSearchOutlined,TableOutlined,PlusOutlined,SearchOutlined} from '@ant-design/icons-vue'
  //  import SettingCover from '@/components/SettingCover.vue'
  import ListSettingCover from '@/components/ListSettingCover.vue'
  
  export default {
  
    components: {

        // SettingCoversheet ,
        BreadcrumbSettingcoversheet,
        FileSearchOutlined,
        TableOutlined,
        PlusOutlined,
        SearchOutlined,
        ListSettingCover,
        // SettingCover
     
    }
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
