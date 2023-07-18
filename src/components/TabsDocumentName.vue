

<!-- <template>
  <a-button type="primary">Hello World! <smile-outlined /></a-button>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
 -->


 <!--10052023-->
 <!-- <template>
    <br />
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <div class="Paragraph-text" style="margin-block-end:20px ;">Please Select DocumentName</div>
        <div class="card">
      
          <footer class="card-footer">
            <a href="/LADocument" class="card-footer-item">LA Document</a>
            <a href="#" class="card-footer-item">Ledger Document</a>
            <a href="/COADocument" class="card-footer-item">COA Document</a>
            <a href="#" class="card-footer-item">KYC Document</a>
            <a href="#" class="card-footer-item">Other Documents</a>
          </footer>
        </div>
       
      </div>
    </div>
  </template> -->
  <template>
   
  
    <div class="Header-text"></div><br/>
    <div class="columns" >
      <div class="column">
      <div class="Header-text2">Choose the template </div></div>
      <div class="column">
        
        <a-space >
          <a-select
            ref="select"
            v-model:value="value1"
            size="large"
            style="width: 200px"
            @focus="focus"
            @change="handleChange"
            placeholder="Template" 
          >
            <a-select-option value="Template01"> <a href="/LADocument">Template01</a></a-select-option>
            <!-- <a-select-option value="Template02"><a href="/COADocument">Template02</a></a-select-option>
            <a-select-option value="Template03">Template03</a-select-option>
            <a-select-option value="Template04">Template04</a-select-option> -->
          </a-select>
        </a-space>
      </div>
      <div class="column">
      </div>
      <div class="column">
      </div>
      <div class="column">
      </div>
      <div class="column">
      </div>
  </div>
 
    
    <br/>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      const value = ref('');
      const dataSource = ref(['LA62287','LA62948','LA62808','LA TOL23-H0421','LA TOL23-0007','LA TOL23-0059']);
      const onSelect = value => {
        console.log('onSelect', value);
      };
      const getRandomInt = (max, min = 0) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const searchResult = query => {
        return new Array(getRandomInt(5))
          .join('.')
          .split('.')
          .map((item, idx) => ({
            query,
            category: `${query}${idx}`,
            count: getRandomInt(200, 100),
          }));
      };
      const handleSearch = val => {
        dataSource.value = val ? searchResult(val) : [];
      };
      return {
        value,
        dataSource,
        onSelect,
        handleSearch,
      };
    },
  });
  </script>
  <style>
  .global-search-wrapper {
    padding-right: 50px;
    margin-left: 10px;
  }
  
  .global-search {
    width: 100%;
  }
  
  .global-search.ant-select-auto-complete .ant-select-selection--single {
    margin-right: -46px;
  }
  
  .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input:not(:last-child) {
    padding-right: 50px;
  }
  
  .global-search.ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .global-search-item {
    display: flex;
  }
  
  .global-search-item-desc {
    flex: auto;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .global-search-item-count {
    flex: none;
  }
  .Header-text{
     font-size: 24px;
  }
  
  </style>
  <!-- <style>
    .Paragraph-text{
    font-size: 14px;
 }
  </style>

   -->
