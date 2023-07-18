<template>
   
    <div class="columns" >
   <div class="column" >
        <a-space >
          <a-select
            ref="select"
            v-model:value="value1"
            size="large"
            style="width: 200px"
            @focus="focus"
            @change="handleChange"
            placeholder="Complete" 
          >
            <a-select-option value="Complete">Complete</a-select-option>
            <a-select-option value="UnComplete">UnComplete</a-select-option>
          </a-select>
        </a-space>
     </div>
     <div class="column" >
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
            <a-select-option value="Complete">ALD</a-select-option>
            <a-select-option value="UnComplete">FMD</a-select-option>
          </a-select>
        </a-space>
    </div>
   
    <div class="column">
      <div class="global-search-wrapper" >
          <a-auto-complete
            v-model:value="value"
            class="global-search"
            size="large"
            style="width: 200px"
            option-label-prop="title"
            @select="onSelect"
            @search="handleSearch"
          >
            <template #dataSource>
              <a-select-option v-for="item in dataSource" :key="item.category" :title="item.category">
                Found {{ item.query }} on
                <a
                  :href="`https://s.taobao.com/search?q=${item.query}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ item.category }}
                </a>
                <span class="global-search-item-count">{{ item.count }} results</span>
              </a-select-option>
            </template>
            <a-input v-model:value="value" size="large" placeholder="ContractNo"  style="width:200px"/>
          </a-auto-complete>
          </div>
    </div>
      <div class="column">
        <a-space >
          <a-select
            ref="select"
            v-model:value="value1"
            size="large"
            style="width: 200px"
            @focus="focus"
            @change="handleChange"
            placeholder="DocumentName" 
          >
            <a-select-option value="LADocument">LA Document</a-select-option>
            <a-select-option value="COADocument">COA Document</a-select-option>
            <a-select-option value="KYCDocument">KYC Document</a-select-option>
            <a-select-option value="COADocument">Other Document</a-select-option>
          </a-select>
        </a-space>
      </div>
      <div class="column">
 
      <a-button type="primary"  style="width: 200px" size="large">Search</a-button>

    <br />
    </div>
    </div>
    <div class="column">
     
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
  .Header-text2{
     font-size: 18px;
  }
  </style>