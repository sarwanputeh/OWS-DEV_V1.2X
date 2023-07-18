<template>
    <div>
        <br/>
      <a-breadcrumb>
       <a-breadcrumb-item >
         <a href="/">
         <home-outlined />
         </a>
       </a-breadcrumb-item>
       <a-breadcrumb-item ><a href="/SettingDocumentType"><span> /Setting</span></a></a-breadcrumb-item>
       
     </a-breadcrumb>  
     <br/>
     <br/>
      <div>
        <!-- Update goes here -->
        <h1>Setting for document type: Edit document type</h1>
        <br>
        <form @submit.prevent="handleUpdateForm">
          <div class="form-group">
            <label for="name">Document No</label>
            <input type="text" class="form-control" v-model="document.documentTypeCode" required>
          </div>
          <div class="form-group">
            <label for="name">DocumentName</label>
            <input type="text" class="form-control" v-model="document.documentTypeName" required>
          </div>
          <div class="form-group">
            <label for="name">systemCode</label>
            <input type="text" class="form-control" v-model="document.systemCode" required>
          </div>
          <div class="form-group">
            <label for="name">customerSign</label>
            <input type="text" class="form-control" v-model="document.customerSign" required>
          </div>
          <div class="form-group">
            <label for="name">tolcSign</label>
            <input type="text" class="form-control" v-model="document.tolcSign" required>
          </div>
  
          <div class="form-group">
            <label for="name">folder</label>
            <input type="text" class="form-control" v-model="document.folderName" required>
          </div>
          <br>
          <div class="form-group">
            <button class="button">Save</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <!-- let apiURL = `https://localhost:7083/api/DocumentVerification?ContractNo=${ContractNo}&DocumentTypeCode=${DocumentTypeCode}`; -->
  <!-- https://localhost:7083/api/DocumentVerification?ContractNo=51172&DocumentTypeCode=2 -->
  <script>
  /* eslint-disable */
  import axios from 'axios';
  import { HomeOutlined } from '@ant-design/icons-vue'
  import { useToast } from "vue-toast-notification";
  export default {
    components:{
        HomeOutlined,
        useToast 
    },
    
    data() {
      return {
        document:{}
      }
    },
    created() {
      let apiURL = `http://ws.orix.co.th:8181/api/DocumentCustodySetting?systemCode=${this.$route.params.systemCode}&documentTypeCode=${this.$route.params.documentTypeCode}&DocumentTypeName=${this.$route.params.documentTypeName}`;
      // let apiURL = `https://localhost:7083/api/DocumentCustodySetting?systemCode=${this.$route.params.systemCode}&documentTypeCode=${this.$route.params.documentTypeCode}&DocumentTypeName=${this.$route.params.documentTypeName}`;
      // let apiURL = `https://localhost:7083/api/DocumentCustodySetting?DocumentTypeCode=${this.$route.params.documentTypeCode}`;
      axios.get(apiURL).then((res) => {
        this.document = res.data[0];
      }).catch(error => {
        console.log(error);
      });
    },
    
    methods: {
      
      handleUpdateForm() {
        const $toast = useToast();
        let apiURL = `http://ws.orix.co.th:8181/api/DocumentCustodySetting?SystemCode=${this.$route.params.systemCode}&documentTypeCode=${this.$route.params.documentTypeCode}&DocumentTypeName=${this.$route.params.documentTypeName}`;

        // let apiURL = `https://localhost:7083/api/DocumentCustodySetting?SystemCode=${this.$route.params.systemCode}&documentTypeCode=${this.$route.params.documentTypeCode}&DocumentTypeName=${this.$route.params.documentTypeName}`;

        // let apiURL = `https://localhost:7083/api/DocumentCustodySetting?DocumentTypeCode=${this.$route.params.documentTypeCode}`;
  
        axios.put(apiURL, this.document).then((res) => {
          $toast.success("Save Complete...");
          console.log(res);
          
      // this.$router.push('/viewsetting');
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
  </script>

  <style>


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