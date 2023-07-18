<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item
        ><a href="/LADocument"><span>CoverSheet</span></a></a-breadcrumb-item
      >
    </a-breadcrumb>
    <br />
    <br />
    <div id="app">
      <br />
      <button  class="button"  @click="downloadPDF">Export PDF</button>
      <br />

      <!-- <h1>Vue 3 Generate PDF from HTML and Download It</h1> -->
      <div class="container mt-2">
        <div id="pdf-content">
          <div
            class="detail"
            :style="{ marginTop: '15%', fontSize: '12px', marginLeft: '15%' }"
          >
            <div class="detail1">
              <label style="width: 120px">วันที่จัดส่ง / Date</label>
              <label
                ><strong>{{ document.batchDate }}</strong></label
              >
            </div>
            <div class="detail2" style="margin-top: 7px">
              <label style="width: 100px">ชื่อลูกค้า / Lessee</label>
              <label style="width: 300px"
                ><strong
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                    document.customerName
                  }}</strong
                ></label
              >
            </div>
            <div class="detail2" style="margin-top: 7px">
              <label style="width: 100px">ที่อยู่ลูกค้า / Address</label>
              <label style="width: 300px"
                ><strong
                  >&nbsp;&nbsp;&nbsp;&nbsp;{{ document.tax_Address }}</strong
                ></label
              >
            </div>
          </div>

          <!-- <hr /> -->
          <div
            id="element-pdfreport"
            :style="{ marginTop: '60px', fontSize: '14px' }"
          >
            <div class="Header">
              {{ document.template }}
              <div
                class="header-text-center"
                :style="{
                  marginTop: '60px',
                  fontSize: '14px',
                  marginLeft: '30%',
                }"
              >
                ใบรายการเอกสารสัญญาเช่า/สัญญาเช่าซื้อ
              </div>
              <div
                class="detail"
                :style="{
                  marginTop: '30px',
                  fontSize: '12px',
                  marginLeft: '15%',
                }"
              >
                <div class="detail1">
                  <label style="width: 120px">วันที่จัดส่ง / Date</label>
                  <label
                    ><strong>{{ document.batchDate }}</strong></label
                  >
                </div>
                <div class="detail2" style="margin-top: 7px">
                  <label style="width: 100px">ชื่อลูกค้า / Lessee</label>
                  <label style="width: 300px"
                    ><strong
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                        document.customerName
                      }}</strong
                    ></label
                  >
                  <label style="width: 170px">เลขที่สัญญา / Contract No</label>
                  <label
                    ><strong>{{ document.contractNo }}</strong></label
                  >
                </div>
              </div>
              <div
                class="footer"
                :style="{
                  marginTop: '30px',
                  fontSize: '12px',
                  marginLeft: '15%',
                }"
              >
                <div>
                  บริษัทฯ ขอจัดส่งเอกสารที่ท่านได้ทำสัญญาเช่า / สัญญาเช่าซื้อ
                  โดยมีรายการเอกสารดังนี้.-
                </div>
                <div style="margin-top: 8px">
                  Enclosed Please find attached documents for Leasing Agreement
                  or Hire Purchase Agreement as follows.-
                </div>
              </div>

              <!-- Header code... -->
            </div>
            <div
              class="checkbox"
              :style="{
                marginTop: '45px',
                fontSize: '12px',
                marginLeft: '15%',
              }"
            >
              <div class="checkboxrow1">
                <table>
                  <tr>
                    <td>
                      <div>
                        <span v-if="data_check.leaseAgreementFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.leaseAgreementFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <label
                          for="checkbox"
                          :style="{ marginleft: '10px', width: '350px' }"
                          >สัญญาเช่า/เช่าซื้อ (Lease Agreement/<br/>Hire Purchase
                          Agreement)</label
                        >
                      </div>
                      <!-- <input
                  type="checkbox"
                  v-model="data_check.leaseAgreementFlag"
                /> -->

                      <!-- Show icon when data_check.leaseAgreementFlag is true -->
                    </td>
                    <td></td>
                    <td>
                      <div>
                        &nbsp;
                        &nbsp;
                        <span v-if="data_check.acceptanceReceiptFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.acceptanceReceiptFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>

                        <label
                          for="checkbox2"
                          style="margin-right: 0px; width: 400px"
                          >ใบรับทรัพย์สิน (Acceptance Receipt)</label
                        >
                      </div>
                      <!-- Show icon when data_check.acceptanceReceiptFlag is true -->

                      <!-- <input
                type="checkbox"
                :checked="getCheckboxStatus(data_check.acceptanceReceiptFlag)"
              />
              <label for="checkbox2" style="marginleft: 10px; width: 400px"
                >ใบรับทรัพย์สิน (Acceptance Receipt)</label
              >  -->
                    </td>
                  </tr>
                </table>
              </div>

              <div class="checkboxrow2" style="margintop: 6px">
                <table>
                  <tr>
                    <td>
                      <div>
                        <!-- <input
                  type="checkbox"
                  :checked="getCheckboxStatus(data_check.salesAgreementFlag)"
                />

                <label for="checkbox3" style="marginleft: 10px; width: 350px"
                  >สัญญาซื้อขาย (Sales Agreement)</label
                > -->
                        <!-- {{ data_check.salesAgreementFlag }} -->
                        <span v-if="data_check.salesAgreementFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.salesAgreementFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <label
                          for="checkbox"
                          :style="{ marginleft: '10px', width: '350px' }"
                          >สัญญาซื้อขาย (Sales Agreement)</label
                        >
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div>
                        &nbsp;
                        &nbsp;
                        <!-- <input
                  type="checkbox"
                  :checked="
                    getCheckboxStatus(data_check.guaranteeDocumentsFlag)
                  "
                />
                <label for="checkbox4" style="marginleft: 10px; width: 250px"
                  >หนังสือค้ำประกัน (Guarantee Documents)</label
                > -->
                        <!-- {{ data_check.guaranteeDocumentsFlag }} -->
                        <!-- Show icon when data_check.guaranteeDocumentsFlag is true -->

                        <span
                          v-if="data_check.guaranteeDocumentsFlag"
                          style="marginleft: 10%; width: 250px"
                        >
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.guaranteeDocumentsFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <label
                          for="checkbox2"
                          style="marginleft: 10px; width: 400px"
                          >หนังสือค้ำประกัน (Guarantee Documents)</label
                        >
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="checkboxrow3" style="margintop: 6px">
                <table>
                  <tr>
                    <td>
                      <div>
                        <!-- <input
                  type="checkbox"
                  :checked="
                    getCheckboxStatus(data_check.depositTransferFormFlag)
                  "
                />
                <label for="checkbox5" style="marginleft: 10px; width: 350px"
                  >คำขอเช่า (Deposit Transfer Form)</label
                > -->
                        <span v-if="data_check.depositTransferFormFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.salesAgreementFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <label
                          for="checkbox"
                          :style="{ marginleft: '10px', width: '350px' }"
                          >คำขอเช่า (Deposit Transfer Form)</label
                        >
                      </div>
                    </td>
                    <td></td>
                    <td>

                      <div>
                        &nbsp;
                        &nbsp;
                        
                        <!-- <input
                  type="checkbox"
                  :checked="
                    getCheckboxStatus(data_check.downPaymentTransferFormFlag)
                  "
                />
                <label for="checkbox6" style="marginleft: 10px; width: 250px"
                  >คำขอเช่าซื้อ (Down Payment Transfer Form)</label
                > -->
                        <!-- {{ data_check.downPaymentTransferFormFlag }} -->
                        <span v-if="data_check.downPaymentTransferFormFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.salesAgreementFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <label
                          for="checkbox"
                          :style="{ marginleft: '10px', width: '350px' }"
                          >คำขอเช่าซื้อ (Down Payment Transfer Form)</label
                        >
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="checkboxrow4" style="margintop: 6px">
                <table>
                  <tr>
                    <td>
                      <div>
                        <!-- <input
                  type="checkbox"
                  :checked="getCheckboxStatus(data_check.attachmentFlag)"
                />
                <label for="checkbox7" style="marginleft: 10px; width: 350px"
                  >เอกสารแนบ (Attachment)</label
                > -->
                        <span v-if="data_check.attachmentFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.salesAgreementFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <label
                          for="checkbox"
                          :style="{ marginleft: '10px', width: '350px' }"
                          >เอกสารแนบ (Attachment)&nbsp;&nbsp;</label
                        >
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div>
                        &nbsp;
                        &nbsp;
                        <span v-if="data_check.paymentMethodNoteFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.salesAgreementFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>

                        <label
                          for="checkbox"
                          :style="{ marginleft: '10px', width: '350px' }"
                          >          บันทึกข้อตกลงวิธีการชำระราคาทรัพย์สิน</label
                        >

                        <!-- <input
                  type="checkbox"
                  :checked="getCheckboxStatus(data_check.paymentMethodNoteFlag)"
                />
                <label for="checkbox8" style="marginleft: 10px; width: 250px"
                  >บันทึกข้อตกลงวิธีการชำระราคาทรัพย์สิน</label
                > -->
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="checkboxrow5" style="margintop: 6px">
                <table>
                  <tr>
                    <td>
                      <div>
                        <!-- <input
                  type="checkbox"
                  :checked="getCheckboxStatus(data_check.paymentScheduleFlag)"
                />
                <label for="checkbox9" style="marginleft: 10px; width: 350px"
                  >ตารางการชำระเงิน (Payment Schedule)</label
                > -->
                        <span v-if="data_check.paymentScheduleFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.salesAgreementFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <label
                          for="checkbox"
                          :style="{ marginleft: '10px', width: '350px' }"
                          >ตารางการชำระเงิน (Payment Schedule)</label
                        >
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div>
                        &nbsp;
                        &nbsp;
                        <!-- <input
                  type="checkbox"
                  :checked="getCheckboxStatus(data_check.addendumNoteFlag)"
                />
                <label for="checkbox10" style="marginleft: 10px; width: 250px"
                  >บันทึกข้อตกลงต่อท้ายสัญญาเช่า</label
                > -->
                        <!-- {{data_check.addendumNoteFlag  }} -->

                        <span v-if="data_check.addendumNoteFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.salesAgreementFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <label
                          for="checkbox"
                          :style="{ marginleft: '10px', width: '350px' }"
                          >บันทึกข้อตกลงต่อท้ายสัญญาเช่า</label
                        >
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="checkboxrow6" style="margintop: 6px">
                <table>
                  <tr>
                    <td>
                      <div>
                        <!-- <input
                  type="checkbox"
                  :checked="getCheckboxStatus(data_check.interestScheduleFlag)"
                />
                <label for="checkbox11" style="marginleft: 10px; width: 350px"
                  >ตารางการตัดบัญชี (Interest Schedule)</label
                > -->
                        <span v-if="data_check.interestScheduleFlag">
                          <CheckSquareOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <!-- Show icon when data_check.salesAgreementFlag is false -->
                        <span v-else>
                          <BorderOutlined :style="{ fontSize: '12px' }" />
                        </span>
                        <label
                          for="checkbox"
                          :style="{ marginleft: '10px', width: '350px' }"
                          >ตารางการตัดบัญชี (Interest Schedule)</label
                        >
                      </div>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </div>
              <div
                class="checkboxrow7"
                style="marginleft: 40px; margintop: 30px"
              >
                <div class="checkboxother">
                  <!-- <input
                    type="checkbox"
                    :checked="getCheckboxStatus(data_check.otherDocumentFlag)"
                  />

                  <input type="checkbox" id="checkbox12" disabled="true" /> -->

                  <!-- <label for="checkbox12" style="marginleft: 25px"
                    >เอกสารอื่น ๆ (Other)</label
                  > -->
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="checkboxotherdetail" :style="{ marginLeft: '20%' }">
              <span v-if="data_check.otherDocumentFlag">
                <CheckSquareOutlined :style="{ fontSize: '12px' }" />
              </span>
              <!-- Show icon when data_check.salesAgreementFlag is false -->
              <span v-else>
                <BorderOutlined :style="{ fontSize: '12px' }" />
              </span>
              <label style="margintop: 4px">เอกสารอื่นๆ(other)</label>
              <div class="checkboxotherdetail1" style="margintop: 4px">
                <label
                  ><strong
                    >A:&nbsp;&nbsp;{{ data_check.otherDocumentName1 }}</strong
                  ></label
                >
              </div>
              <div class="checkboxotherdetail2" style="margintop: 4px">
                <label
                  ><strong
                    >B:&nbsp;&nbsp;{{ data_check.otherDocumentName2 }}</strong
                  ></label
                >
              </div>
              <div class="checkboxotherdetail3" style="margintop: 4px">
                <label
                  ><strong
                    >C:&nbsp;&nbsp;{{ data_check.otherDocumentName3 }}</strong
                  ></label
                >
              </div>
              <div class="checkboxotherdetail4" style="margintop: 4px">
                <label
                  ><strong>D:&nbsp;&nbsp;{{ data_check.D }}</strong></label
                >
              </div>
            </div>
            <div class="Footer">
              <div
                class="footer"
                :style="{
                  marginTop: '20px',
                  fontSize: '12px',
                  marginLeft: '15%',
                }"
              >
                <div class="footer1_1">
                  <label :style="{ marginLeft: '70px' }"
                    ><strong
                      >ดังนั้นขอให้ท่านตรวจสอบเอกสารตามรายการข้างต้นให้ครบถ้วน
                      หากได้รับไม่ถูกต้องหรือไม่ครบถ้วน</strong
                    ></label
                  >
                </div>
                <div class="footer1_2">
                  <label :style="{ marginLeft: '30px', marginTop: '7px' }"
                    ><strong
                      >กรุณาแจ้งกลับภายใน 15 วัน
                      นับจากวันที่มีการระบุไว้ในเอกสารฉบับนี้ มิฉะนั้นบริษัทฯ
                      จะไม่รับผิดชอบใด ๆ ทั้งสิ้น</strong
                    ></label
                  >
                </div>
                <div class="footer1_1">
                  <label :style="{ marginLeft: '70px', marginTop: '15px' }"
                    >Please check above documents for correctness and
                    completeness. If there are any mistake,Please notify
                    us</label
                  >
                </div>
                <div class="footer1_2">
                  <label :style="{ marginLeft: '30px', marginTop: '7px' }"
                    >within 15 days from this letter dated.</label
                  >
                </div>
              </div>
            </div>
            <div class="Contact">
              <div
                class="contract"
                :style="{
                  marginTop: '80px',
                  fontSize: '12px',
                  marginLeft: '15%',
                }"
              >
                <div class="contract1">
                  <label style="width: 70px">ติดต่อ</label>
                  <label style="width: 150px">{{ PICContact }}</label>
                </div>
                <div class="contract2" style="margin-top: 7px">
                  <label style="width: 70px">โทร</label>
                  <label style="width: 300px">{{ PICTel }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import { CheckSquareOutlined, BorderOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    CheckSquareOutlined,
    BorderOutlined,
  },
  methods: {
    // ฟังก์ชัน async สำหรับดึงข้อมูลเอกสารจาก API
    async fetchDocumentData() {
      const apiURL = `https://localhost:7083/api/CoverSheet/Print/?ContractNo=${this.$route.params.contractNo}&batchCode=${this.$route.params.batchCode}&coverSheetCode=${this.$route.params.coverSheetCode}&templateCode=${this.$route.params.templateCode}`;

      try {
        const response = await axios.get(apiURL);
        this.document = response.data[0];
      } catch (error) {
        console.log(error);
      }
    },

    // ฟังก์ชันตรวจสอบสถานะของ Checkbox
    getCheckboxStatus(value) {
      return value === 1;
    },

    // ฟังก์ชันสำหรับแสดง Checkbox ในหน้าต่าง
    async showCheckbox() {
      const apiURL = `https://localhost:7083/api/CoverSheet/Template?templateCode=${this.$route.params.templateCode}`;
      this.data_check.leaseAgreementFlag =
        this.data_check.leaseAgreementFlag === 1;
      this.data_check.salesAgreementFlag =
        this.data_check.salesAgreementFlag === 1;
      this.document.depositTransferFormFlag =
        this.document.depositTransferFormFlag === 1;
      this.document.attachmentFlag = this.document.attachmentFlag === 1;

      axios
        .get(apiURL)
        .then((response) => {
          this.data_check = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // ฟังก์ชันสำหรับดาวน์โหลด PDF
    async downloadPDF() {
      // รอให้ fetchDocumentData เสร็จสิ้นและอัปเดต object data_check
      await this.fetchDocumentData();
      await this.showCheckbox();

      // ดึงเนื้อหา HTML ที่ต้องการแปลงเป็น PDF
      const htmlContent = document.getElementById("pdf-content").outerHTML;

      // สร้าง iFrame ซ่อนเพื่อโหลด HTML content และพิมพ์เอกสารเป็น PDF
      const iFrame = document.createElement("iframe");
      iFrame.style.display = "none";
      document.body.appendChild(iFrame);

      // โหลด HTML content เข้าไปใน iFrame และพิมพ์เป็น PDF
      const pdfBlob = await new Promise((resolve) => {
        iFrame.onload = () => {
          const iFrameWindow = iFrame.contentWindow;
          iFrameWindow.print();
          iFrameWindow.addEventListener(
            "afterprint",
            () => {
              // เมื่อกล่องสัญญาณการพิมพ์ถูกปิด ให้เรียก Blob ของ PDF และ resolve Promise
              const pdfBlob = iFrameWindow.Blob;
              resolve(pdfBlob);
              document.body.removeChild(iFrame);
            },
            { once: true }
          );
        };
        iFrame.srcdoc = htmlContent;
      });

      // สร้างลิงก์ดาวน์โหลด PDF และเริ่มต้นดาวน์โหลด
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(pdfBlob);
      downloadLink.download = "my-pdf-document.pdf";
      downloadLink.onclick = () => downloadLink.remove();
      document.body.appendChild(downloadLink);
      downloadLink.click();
    },
  },

  data() {
    return {
      document: {},
      data_check: {},
    };
  },

  mounted() {
    this.fetchDocumentData();
    this.showCheckbox();
  },
};
</script>

<style>
table {
  table-layout: fixed;
  width: auto;
  /* border: 1px solid red;
} */
}
td {
  /* border: 1px solid blue; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
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
