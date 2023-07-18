<template>
    <div>
      <BreadcrumbSettingcoversheet />
     <br/>
     
    <div class="Header-text" style="margin-left: 5px">Setting the cover sheet template</div>
    <br/><br/>
  <settingCoversheet2/>
  <br/><br/>
  <a-button type="primary" >ADD</a-button>

    </div>
</template>

<script>
  import SettingCoversheet2 from '@/components/SettingCoversheet2'
  import BreadcrumbSettingcoversheet from '@/components/Breadcrumb-Approval-Setting.vue'

  export default {
  
    components: {

        SettingCoversheet2 ,
        BreadcrumbSettingcoversheet
     
    }
  }


 </script>
<style>
.Header-text{
     font-size: 24px;
  }
.Paragraph-text{
     font-size: 16px;
  }
</style>