
  <template>
   
  
    <div class="Header-text"></div><br/>
    <div class="column">
    <div class="Header-text2" style="margin-left: 6px">Contract  No : <a-input v-model:value="value" size="large"  style="width: 200px" placeholder="Contract No" /></div>
    <br/>
    <div class="Header-text2" style="margin-left: 6px">Lessee Name : <a-input v-model:value="value" size="large"  style="width: 200px" placeholder="Lessee Name" /></div>    
  </div>
  <!-- <div class="navbar-end">   
        <a-button type="primary" :size="size" style="width: 150px">
       
          <a href="#"><Search-Outlined/>Search</a>
        </a-button>
        </div> -->

    
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
