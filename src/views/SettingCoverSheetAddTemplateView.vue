<template>
  <a-breadcrumb>
  <a-breadcrumb-item href="/">
  <a href="/">
  <home-outlined />
  </a>
  </a-breadcrumb-item>
  <!-- <a-breadcrumb-item>
  <a href="./">
  <span>/Received Document Verification</span>
  </a>
  </a-breadcrumb-item> -->
  <a-breadcrumb-item>
  <a href="/SettingCoverSheet">
  <span>/Setting</span>
  </a>
  </a-breadcrumb-item>
  </a-breadcrumb>
  <br />
  
  <div class="column"></div>
  <a-form-item label="">
  <span class="ant-text" style="font-size: large">Setting the cover sheet template: Add template</span>
  </a-form-item>
  <br />
  <form @submit.prevent="submitForm">
  <!-- <div>
  <label for="templateCode">templateCode:</label>
  <input  class="input is-gray is-small" style="width:300px" type="text" id="templateCode" v-model="templateCode" name="templateCode" required/>
  </div> -->

  <!-- //ต่อบ่าย -->
  <!-- <div class="field is-grouped">
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Find a repository">
  </p>
  <p class="control">
    <a class="button is-info">
      Search
    </a>
  </p>
</div>
   -->
  <br />
  <div>
  <label for="templateName">templateName:</label>
  <input  class="input is-gray is-small" style="width:300px" type="text" id="templateName" v-model="templateName" name="templateName" required/>
  </div>
  <br />
  <div>
  <label for="leaseAgreementFlag">leaseAgreementFlag:</label>
  <input type="checkbox" id="leaseAgreementFlag" v-model="leaseAgreementFlag" />
  </div>
  <br />
  <div>
  <label for="salesAgreementFlag">salesAgreementFlag:</label>
  <input type="checkbox" id="salesAgreementFlag" v-model="salesAgreementFlag" />
  </div>
  <br />
  <div>
  <label for="depositTransferFormFlag">depositTransferFormFlag:</label>
  <input type="checkbox" id="depositTransferFormFlag" v-model="depositTransferFormFlag" />
  </div>
  <br />
  <div>
  <label for="attachmentFlag">attachmentFlag:</label>
  <input type="checkbox" id="attachmentFlag" v-model="attachmentFlag" />
  </div>
  <br />
  <div>
  <label for="paymentScheduleFlag">paymentScheduleFlag:</label>
  <input type="checkbox" id="paymentScheduleFlag" v-model="paymentScheduleFlag" />
  </div>
  <br />
  <div>
  <label for="interestScheduleFlag">interestScheduleFlag:</label>
  <input type="checkbox" id="interestScheduleFlag" v-model="interestScheduleFlag" />
  </div>
  <br />
  <div>
  <label for="acceptanceReceiptFlag">acceptanceReceiptFlag:</label>
  <input type="checkbox" id="acceptanceReceiptFlag" v-model="acceptanceReceiptFlag" />
  </div>
  <br />
  <div>
  <label for="guaranteeDocumentsFlag">guaranteeDocumentsFlag:</label>
  <input type="checkbox" id="guaranteeDocumentsFlag" v-model="guaranteeDocumentsFlag" />
  </div>
  <br />
  <div>
  <label for="numberOfGuarantee">numberOfGuarantee: </label>
  <input class="input is-gray is-small" type="numberOfGuarantee" id="numberOfGuarantee" v-model="numberOfGuarantee" style="width: 300px;" />
  </div>
  <br />
  <div>
  <label for="downPaymentTransferFormFlag">downPaymentTransferFormFlag:</label>
  <input type="checkbox" id="downPaymentTransferFormFlag" v-model="downPaymentTransferFormFlag" />
  </div>
  <br />

  <div>
  <label for="paymentMethodNoteFlag">paymentMethodNoteFlag:</label>
  <input type="checkbox" id="paymentMethodNoteFlag" v-model="paymentMethodNoteFlag" />
  </div>
  <br />
  <div>
  <label for="addendumNoteFlag">addendumNoteFlag:</label>
  <input type="checkbox" id="addendumNoteFlag" v-model="addendumNoteFlag" />
  </div>
  <br />
  <div>
  <label for="otherDocumentFlag">otherDocumentFlag:</label>
  <input type="checkbox" id="otherDocumentFlag" v-model="otherDocumentFlag" />
  </div>
  <br />
 
  <div>
  <label for="otherDocumentName1">otherDocumentName1:</label>
  <input  class="input is-gray is-small" style="width:300px" type="text" id="otherDocumentName1" v-model="otherDocumentName1" name="otherDocumentName1" />
  </div>
  <br />
  <div>
  <label for="otherDocumentName2">otherDocumentName2:</label>
  <input  class="input is-gray is-small" style="width:300px" type="text" id="otherDocumentName2" v-model="otherDocumentName2" name="otherDocumentName2" />
  </div>
  <br />
  <div>
  <label for="otherDocumentName3">otherDocumentName3:</label>
  <input  class="input is-gray is-small" style="width:300px" type="text" id="otherDocumentName3" v-model="otherDocumentName3" name="otherDocumentName3" />
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
      useToast,
      // 'a-input': Input,
      // 'a-form-item': Form.Item,
    },
    data() {
      return {
        templateName: '',
        leaseAgreementFlag: false,
        salesAgreementFlag: false,
        depositTransferFormFlag: false,
        attachmentFlag: false,
        paymentScheduleFlag: false,
        interestScheduleFlag: false,
        acceptanceReceiptFlag: false,
        guaranteeDocumentsFlag: false,
        numberOfGuarantee: '',
        downPaymentTransferFormFlag: false,
        paymentMethodNoteFlag: false,
        addendumNoteFlag: false,
        otherDocumentFlag: false,
        otherDocumentName1: '',
        otherDocumentName2: '',
        otherDocumentName3: '',

        // CustomerSign: false,

        // TOLCSign: false,
        // FolderName: '',

        //For user
        // createUser: 99,
        // modifyUser: 99,

        //DevTest Use 
        createUser: '',
        modifyUser: '',

      };
    },

  

    methods: {
     
      submitForm() {
      
        // const customerSignValue = this.CustomerSign ? 1 : 0;
        // const TOLCSignValue = this.TOLCSign ? 1 : 0;
        const leaseAgreementFlagValue = this.leaseAgreementFlag ? 1 : 0; 
        const salesAgreementFlagValue = this.salesAgreementFlag ? 1 : 0;
        const depositTransferFormFlagValue = this.depositTransferFormFlag ? 1 : 0;
        const attachmentFlagValue =this.attachmentFlag ? 1 : 0;
        const paymentScheduleFlagValue = this.paymentScheduleFlag ? 1 : 0;
        const interestScheduleFlagValue = this.interestScheduleFlag ? 1 : 0;
        const acceptanceReceiptFlagValue = this.acceptanceReceiptFlag ? 1 : 0;
        const guaranteeDocumentsFlagValue = this.guaranteeDocumentsFlag ? 1 : 0;
        const downPaymentTransferFormFlagValue = this.downPaymentTransferFormFlag ? 1 : 0;
        const paymentMethodNoteFlagValue = this.paymentMethodNoteFlag ? 1 : 0;
        const addendumNoteFlagValue =this.addendumNoteFlag ? 1 : 0;
        const otherDocumentFlagValue = this.otherDocumentFlag ? 1 : 0;
        const formData = {
          templateName: this.templateName,
          numberOfGuarantee: this.numberOfGuarantee,
          otherDocumentName1: this.otherDocumentName1,
          otherDocumentName2: this.otherDocumentName2,
          otherDocumentName3: this.otherDocumentName3,
          leaseAgreementFlag: leaseAgreementFlagValue,
          salesAgreementFlag: salesAgreementFlagValue,
          depositTransferFormFlag: depositTransferFormFlagValue,  
          attachmentFlag: attachmentFlagValue, 
          paymentScheduleFlag: paymentScheduleFlagValue,
          interestScheduleFlag: interestScheduleFlagValue,
          acceptanceReceiptFlag: acceptanceReceiptFlagValue,
          guaranteeDocumentsFlag: guaranteeDocumentsFlagValue, 
          downPaymentTransferFormFlag: downPaymentTransferFormFlagValue,
          paymentMethodNoteFlag: paymentMethodNoteFlagValue, 
          addendumNoteFlag: addendumNoteFlagValue,
          otherDocumentFlag: otherDocumentFlagValue, 
          createUser: 7,
          modifyUser: 7,


          // leaseAgreementFlag: customerSignValue,
          // TOLCSign: TOLCSignValue,
          // FolderName: this.FolderName,
          // createUser: this.createUser,
        };
  
        const $toast = useToast();
  
        axios
        .post('http://ws.orix.co.th:8181/api/CoverSheet/Template', formData)

          // .post('https://localhost:7083/api/CoverSheet/Template', formData)
          .then(response => {
            $toast.success("Save Data Complete");
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
            $toast.error("กรุณาป้อนข้อมูลให้ถูกต้อง");
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
  
  