<template>

    <div>
      <br/>
      <a-breadcrumb>
       <a-breadcrumb-item href="/">
         <a href="/">
         <home-outlined />
         </a>
       </a-breadcrumb-item>
       <a-breadcrumb-item ><a href="/"><span> /Received Document Verification</span></a></a-breadcrumb-item>
       
     </a-breadcrumb>  
     <br/>
     <br/>
      <div>
        <!-- Update goes here -->
        <h1>Edit Data</h1>
        <form @submit.prevent="handleUpdateForm">
          <div class="form-group">
            <label for="name">ContractNo</label>
            <input type="text" class="form-control" v-model="document.contractNo" required>
          </div>
          <div class="form-group">
            <label for="name">customerName</label>
            <input type="text" class="form-control" v-model="document.customerName" required>
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
  
          <br>
         
        </form>
      </div>
    </div>
  </template>
  
  <!-- let apiURL = `https://localhost:7083/api/DocumentVerification?ContractNo=${ContractNo}&DocumentTypeCode=${DocumentTypeCode}`; -->
  <!-- https://localhost:7083/api/DocumentVerification?ContractNo=51172&DocumentTypeCode=2 -->
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        document: {}
      }
    },
    created() {
      let apiURL = `https://localhost:7083/api/DocumentVerification?ContractNo=${this.$route.params.contractNo}&DocumentTypeCode=${this.$route.params.documentTypeCode}`;
      axios.get(apiURL).then((res) => {
        this.document = res.data[0];
      }).catch(error => {
        console.log(error);
      });
    },
    methods: {
      handleUpdateForm() {
        let apiURL = `https://localhost:7083/api/DocumentVerification`;
  
        axios.put(apiURL, this.document).then((res) => {
          console.log(res);
          this.$router.push('/view');
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