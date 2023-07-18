<template>
  <div>
    <br/>
    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
          <home-outlined />
        </a>
      </a-breadcrumb-item>
      <a-breadcrumb-item >
       <router-link :to="{ name: 'home'}">/Received Document Verification</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <br/>
    <br/>
    <!-- <button @click="handleClickBack">Back</button> -->
    <br/>
    <div>
      <!-- Update goes here -->
      <h1>Edit Data</h1>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label for="name">ContractNo</label>
          <input type="text" class="form-control" v-model="Newdatacontractno" @input="handleInputChange" required>
        </div>
        <div class="form-group">
          <label for="name">systemCode</label>
          <input type="text" class="form-control" v-model="Newsystemcode" required>
        </div>
        <div class="form-group">
          <label for="name">customerCode</label>
          <input type="text" class="form-control" v-model="NewCustomercode" required>
        </div>
        <div class="form-group">
          <label for="name">customerName</label>
          <input type="text" class="form-control" v-model=" NewCustomerName" required>
        </div>
        <div class="form-group">
          <label for="name">documentTypeCode</label>
          <input type="text" class="form-control" v-model="NewdocumentTypecode" required>
        </div>
        <div class="form-group">
          <label for="name">customerSign</label>
          <!-- <input type="checkbox" v-model="NewCustomerSign" /> -->
          <input type="text" class="form-control" v-model="NewCustomerSign" required>
        </div>
        <div class="form-group">
          <label for="name">tolcSign</label>
          <!-- <input type="checkbox" v-model="NewTolcSign" /> -->
          <input type="text" class="form-control" v-model="NewTolcSign" required>
        </div>
        <br>
        <div class="form-group">
          <button class="button">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


import axios from 'axios';

export default {
  data() {
    return {
      document: {},
      Newdatacontractno: "",
      Newsystemcode : "",
      NewCustomercode: "",
      NewCustomerName: "",
      NewdocumentTypecode: "",
      NewCustomerSign: "",
      NewTolcSign: "",
      contractNo: '',
    };
  },
  created() {
  
    let apiURL = `http://ws.orix.co.th:8181/api/DocumentVerification?ContractNo=${this.$route.params.contractNo}&DocumentTypeCode=${this.$route.params.documentTypeCode}`;

    // let apiURL = `https://localhost:7083/api/DocumentVerification?ContractNo=${this.$route.params.contractNo}&DocumentTypeCode=${this.$route.params.documentTypeCode}`;
    axios.get(apiURL)
      .then((res) => {
        this.document = res.data[0];
        this.Newdatacontractno = this.document.contractNo;
        this.Newsystemcode = this.document.systemCode.toString();
        this.NewCustomercode = this.document.customerCode;
        this.NewCustomerName = this.document.customerName;
        this.NewdocumentTypecode = this.document.documentTypeCode;
        this.NewCustomerSign = this.document.customerSign;
        this.NewTolcSign = this.document.tolcSign;
      })
      .catch((error) => {
        console.log(error);
      });

  },

  methods: {
   
    // handleClickBack(){
    //   //ส่งค่า this.Nwedatacontractno กลับไปยัง ListComponent
    //   this.$emit('back-click',this.document.contractNo);
    // },

     
    handleUpdateForm() {
     
      
      let apiURL1 = `http://ws.orix.co.th:8181/api/DocumentVerification`;
      // let apiURL1 = `https://localhost:7083/api/DocumentVerification`;
      // this.document.createUser = 728;  // เพิ่มค่า createUser
      // this.document.modifyUser = 728;  // เพิ่มค่า modifyUser
      axios.put(apiURL1, {
          contractNo: this.Newdatacontractno,
          systemCode: this.Newsystemcode.toString(),
          customerCode: this.NewCustomercode,
          customerName: this.NewCustomerName,
          createUser : 99,
          modifyUser : 99,
          documentTypeCode: this.NewdocumentTypecode,
          customerSign: this.NewCustomerSign,
          tolcSign: this.NewTolcSign
        })
        .then((res) => {
          console.log(res);
          // this.$router.push('/view');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>

<style>
.button {
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
  transition: all 0.8s;
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}
</style>