
  <template>
    <div class="home">
      <!-- <ConditionSearch />
      <HelloWorld/>
      <br/> -->
      <Breadcrumbcoversheet/>
      <br/>

      <div class="Header-text" style="margin-left: 5px">Document Custody Management : Cover Sheet</div>
      <br/>
      <div class="columns">
      <div class="column">
       </div>
    
      <div class="column">
        <div class="navbar-end">   
        <a-button type="primary" :size="size" style="width: 150px">
          <a href="/SettingCoverSheet">Setting</a>
        </a-button>
        </div>
      </div>
      </div>
      <TabsDocumentName/>
      <br/>
      <div class="Paragraph-text">Template Views</div>
      <TemplateViews02/>
      <br/>
      <br/>
      <div class="Paragraph-text">File Contract</div>
      <COADocument />
      <br/>
      <br/>
   
  </div>
 
  </template>
  
  <script>
  // @ is an alias to /src

  import COADocument from '@/components/COADocument.vue'
  import TabsDocumentName from '@/components/TabsDocumentName.vue'
 import TemplateViews02 from '@/components/TemplateViews02.vue';
 import Breadcrumbcoversheet from '@/components/Breadcrumb-coversheet.vue'
 
  
  export default {
    name: 'HomeView',
    components: {
    COADocument,
    TabsDocumentName,
    TemplateViews02,
    Breadcrumbcoversheet
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