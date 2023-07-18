<template>
<a-breadcrumb>
<a-breadcrumb-item href="/">
<a href="/">
<home-outlined />
</a>
</a-breadcrumb-item>
<a-breadcrumb-item>
<a href="./">
<span>/Received Document Verification</span>
</a>
</a-breadcrumb-item>
<a-breadcrumb-item>
<a href="/SettingDocumentType">
<span>/Setting</span>
</a>
</a-breadcrumb-item>
</a-breadcrumb>
<br />

<div class="column"></div>
<a-form-item label="">
<span class="ant-text" style="font-size: large">Setting for document type : Add document type</span>
</a-form-item>
<br />
<form @submit.prevent="submitForm">
<div>
<!-- <a-form-item label="DocumentTypeName">
<a-input type="text" id="DocumentTypeName" v-model="DocumentTypeName" name="DocumentTypeName" required />
</a-form-item> -->


<label for="DocumentTypeName">DocumentTypeName:</label><br/>
<input  class="input is-gray is-small" style="width:300px" type="text" id="DocumentTypeName" v-model="DocumentTypeName" name="DocumentTypeName" required/>
</div>
<br />
<div>
  <!-- <div class="columns">
    <div class="column"> -->
      <label for="SystemName">systemCode:</label><br/>
    <!-- </div>
    <div class="column">
       -->
      <!-- <label for="SystemName">SystemName:</label> -->
      <div class="select" >
    <select class="select is-gray" style="width: 200px;" id="systemCode" v-model="systemCode" required>
    <option value="1">ALD</option>
    <option value="2">FMD</option>
    </select>
    </div>
  
</div>
<br />
<div>
<label for="CustomerSign">CustomerSign:</label>
<input type="checkbox" id="CustomerSign" v-model="CustomerSign" />
</div>
<br />
<div>
<label for="TOLCSign">TOLCSign:</label>
<input type="checkbox" id="TOLCSign" v-model="TOLCSign" />
</div>
<br />
<div>
<label for="FolderName">FolderName:</label><br/>
<input class="input is-gray is-small" style="width:300px" type="text" id="FolderName" v-model="FolderName" required />
</div>
<br />
<button class="button" type="submit">Save</button>
<!-- <button  type="submit">Save</button> -->
</form>
</template>

 

<script>
/* eslint-disable */
import axios from 'axios';
import { HomeOutlined } from "@ant-design/icons-vue";

import { useToast } from "vue-toast-notification";
// import { Input, Form } from 'ant-design-vue';
// eslint-disable-next-line 
 

export default {
  components: {
    HomeOutlined,
    useToast
    // 'a-input': Input,
    // 'a-form-item': Form.Item,
  },
  data() {
    return {
      DocumentTypeName: '',
      systemCode: '',
      CustomerSign: false,
      TOLCSign: false,
      FolderName: '',
      createUser: '1',
    };
  },
  methods: {
    submitForm() {

      const customerSignValue = this.CustomerSign ? 1 : 0;
      const TOLCSignValue = this.TOLCSign ? 1 : 0;
      const formData = {
        DocumentTypeName: this.DocumentTypeName,
        systemCode: this.systemCode,
        CustomerSign: customerSignValue,
        TOLCSign: TOLCSignValue,
        FolderName: this.FolderName,
        createUser: this.createUser,
      };

       const $toast = useToast();

      axios
      .post('http://ws.orix.co.th:8181/api/DocumentCustodySetting', formData)
        // .post('https://localhost:7083/api/DocumentCustodySetting', formData)
        .then(response => {
          $toast.success("Save  Complete...");
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.input, .select select, .textarea {
    background-color: #fff;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
}



.button{
  position: relative;
  background-color: #1890FF;
  border: none;
  font-size: 16px;
  color: #FFFFFF;
  padding: 20px;
  width: 150px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.button:after {
  content: "";
  background: #f1f1f1;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

</style>

<!-- <template>
  <form @submit.prevent="submitForm">
  <div>
  <label for="DocumentTypeName">DocumentTypeName:</label>
  <input type="text" id="DocumentTypeName" v-model="DocumentTypeName" required>
  </div>
  <div>
  <label for="SystemName">SystemName:</label>
  <select id="SystemName" v-model="SystemName" required>
  <option value="ALD">ALD</option>
  <option value="FMD">FMD</option>
  </select>
  </div>
  <div>
  <label for="CustomerSign">CustomerSign:</label>
  <input type="checkbox" id="CustomerSign" v-model="CustomerSign">
  </div>
  <div>
  <label for="TOLCSign">TOLCSign:</label>
  <input type="checkbox" id="TOLCSign" v-model="TOLCSign">
  </div>
  <div>
  <label for="FolderName">FolderName:</label>
  <input type="text" id="FolderName" v-model="FolderName" required>
  </div>
  <button type="submit">ส่ง</button>
  </form>
  </template>
  
   
  
  <script>
  import axios from 'axios';
  
   /* eslint-disable */
  
  export default {
    data() {
      return {
        DocumentTypeName: '',
        SystemName: '',
        CustomerSign: false,
        TOLCSign: false,
        FolderName: '',
        createUser:'1',
      };
    },
    methods: {
      submitForm() {
        const customerSignValue = this.CustomerSign ? 1 : 0;
        const TOLCSignValue = this.TOLCSign ? 1 : 0;
   
  
        const formData = {
          DocumentTypeName: this.DocumentTypeName,
          SystemName: this.SystemName,
          CustomerSign: customerSignValue,
          TOLCSign: TOLCSignValue,
          FolderName: this.FolderName,
        };
  
   
  
        axios
          .post('https://localhost:7086/DocumentCustodySetting', formData)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
 -->
