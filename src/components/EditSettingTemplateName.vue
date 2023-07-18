<template>
  <div>
    <br />
    <a-breadcrumb>
      <a-breadcrumb-item>
        <a href="/">
          <home-outlined />
        </a>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <a href="/SettingCoverSheet"><span>/Setting</span></a>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <br />
    <br />
    <div>
      <!-- Update goes here -->
      <h1>Setting the cover sheet template</h1>
      <br />
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label for="templateCode">templateCode</label>
          <input
            type="text"
            class="form-control"
            v-model="document.templateCode"
            required
          />
        </div>
        <div class="form-group">
          <label for="templateName">templateName</label>
          <input
            type="text"
            class="form-control"
            v-model="document.templateName"
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="leaseAgreementFlag">leaseAgreementFlag</label>
          <input type="checkbox" v-model="document.leaseAgreementFlag" />
        </div>
        <br />
        <div class="form-group">
          <label for="salesAgreementFlag">salesAgreementFlag</label>
          <input type="checkbox" v-model="document.salesAgreementFlag" />
        </div>
        <br />
        <div class="form-group">
          <label for="depositTransferFormFlag">depositTransferFormFlag</label>
          <input type="checkbox" v-model="document.depositTransferFormFlag" />
        </div>
        <br />
        <div class="form-group">
          <label for="attachmentFlag">attachmentFlag</label>
          <input type="checkbox" v-model="document.attachmentFlag" />
        </div>
        <br />
        <div class="form-group">
          <label for="paymentScheduleFlag">paymentScheduleFlag</label>
          <input type="checkbox" v-model="document.paymentScheduleFlag" />
        </div>
        <br />
        <div class="form-group">
          <label for="interestScheduleFlag">interestScheduleFlag</label>
          <input type="checkbox" v-model="document.interestScheduleFlag" />
        </div>
        <br />
        <div class="form-group">
          <label for="acceptanceReceiptFlag">acceptanceReceiptFlag</label>
          <input type="checkbox" v-model="document.acceptanceReceiptFlag" />
        </div>
        <br />
        <div class="form-group">
          <label for="guaranteeDocumentsFlag">guaranteeDocumentsFlag</label>
          <input type="checkbox" v-model="document.guaranteeDocumentsFlag" />
        </div>
        <br />
        <div class="form-group">
          <button class="button">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { HomeOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    HomeOutlined,
  },
  data() {
    return {
      document: {},
    };
  },
  created() {
    let apiURL = `http://ws.orix.co.th:8181/api/CoverSheet/Template?templateCode=${this.$route.params.templateCode}`;
    // let apiURL = `https://localhost:7083/api/CoverSheet/Template?templateCode=${this.$route.params.templateCode}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.document = this.convertFlags(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleUpdateForm() {
      if (this.document.leaseAgreementFlag === true) {
        this.document.leaseAgreementFlag = 1;
      } else {
        this.document.leaseAgreementFlag = 0;
      }

      // ตรวจสอบและแปลงค่า salesAgreementFlag
      if (this.document.salesAgreementFlag === true) {
        this.document.salesAgreementFlag = 1;
      } else {
        this.document.salesAgreementFlag = 0;
      }
      if (this.document.depositTransferFormFlag === true) {
        this.document.depositTransferFormFlag = 1;
      } else {
        this.document.depositTransferFormFlag = 0;
      }
      if (this.document.attachmentFlag === true) {
        this.document.attachmentFlag = 1;
      } else {
        this.document.attachmentFlag = 0;
      }
      if (this.document.paymentScheduleFlag === true) {
        this.document.paymentScheduleFlag = 1;
      } else {
        this.document.paymentScheduleFlag = 0;
      }
      if (this.document.interestScheduleFlag === true) {
        this.document.interestScheduleFlag = 1;
      } else {
        this.document.interestScheduleFlag = 0;
      }
      if (this.document.acceptanceReceiptFlag === true) {
        this.document.acceptanceReceiptFlag = 1;
      } else {
        this.document.acceptanceReceiptFlag = 0;
      }
      if (this.document.guaranteeDocumentsFlag === true) {
        this.document.guaranteeDocumentsFlag = 1;
      } else {
        this.document.guaranteeDocumentsFlag = 0;
      }


      let apiURL = `http://ws.orix.co.th:8181/api/CoverSheet/Template?templateCode=${this.$route.params.templateCode}`;
      // let apiURL = `https://localhost:7083/api/CoverSheet/Template?templateCode=${this.$route.params.templateCode}`;
      axios
        .put(apiURL, this.document)
        .then((res) => {
          console.log(res);
          // this.$router.push('/viewsetting');
          window.location.reload()
        })
        .catch((error) => {
          console.log(error);
        });

       
    },
    convertFlags(data) {
      // Convert flag values to boolean
      data.leaseAgreementFlag = data.leaseAgreementFlag === 1;
      data.salesAgreementFlag = data.salesAgreementFlag === 1;
      data.depositTransferFormFlag = data.depositTransferFormFlag === 1;
      data.attachmentFlag = data.attachmentFlag === 1;
      data.paymentScheduleFlag = data.paymentScheduleFlag === 1;
      data.interestScheduleFlag = data.interestScheduleFlag === 1;
      data.acceptanceReceiptFlag = data.acceptanceReceiptFlag === 1;
      data.guaranteeDocumentsFlag = data.guaranteeDocumentsFlag === 1;

      // Convert remaining flags

      return data;
    },
  },
};
</script>

<style>
.button {
  position: relative;
  background-color: #1890ff;
  border: none;
  font-size: 16px;
  color: #ffffff;
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
