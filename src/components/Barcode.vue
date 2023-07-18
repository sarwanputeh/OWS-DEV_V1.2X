<script>
import { reactive, ref } from "vue";
import BarcodeGenerator from "./BarcodeGenerator.vue";
import html2pdf from "html2pdf.js";
import { useToast } from "vue-toast-notification";

const $toast = useToast();

export default {
  name: "PageIndex",
  components: {
    BarcodeGenerator,
  },
  methods: {
    exportToPDF() {
      html2pdf()
        .from(document.getElementById("element-to-convert"))
        .toPdf()
        .get("pdf")
        .then(function (pdf) {
          window.open(pdf.output("bloburl"), "_blank");
        });
      html2pdf(document.getElementById("element-to-convert"), {
        margin: [1, 1, 1, 1],
        jsPDF: { unit: "in", format: "a6", orientation: "portrait" },
        mode: { mode: ["aviod-all", "css", "legacy"] },
        filename: "barcode" + Date.now() + ".pdf",
        compressPDF: true,
      });
    
    },
    
    exportToPDFA4() {
      html2pdf()
        .from(document.getElementById("element-to-convert"))
        .toPdf()
        .get("pdf")
        .then(function (pdf) {
          window.open(pdf.output("bloburl"), "_blank");
        });
      html2pdf(document.getElementById("element-to-convert"), {
        margin: [1, 1, 1, 1],
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        mode: { mode: ["aviod-all", "css", "legacy"] },
        filename: "barcode" + Date.now() + ".pdf",
        compressPDF: true,
      });
     
    },
  },
  setup() {
    const newData = ref("");

    const myBarcode = reactive({
      dataBarcode: [
        // {
        //   barcodeText: String,
        // },
      ],
    });

    function addBarcode() {
      // Check the input data is entered anything.
      if (newData.value.length === 0) {
        $toast.info("Please input the keyword to generate the barcode");
        return;
      }

      // Use try..catch to handle the error message
      try {
        // Split the data with keyword (",")
        const myKeyword = newData.value.split(",");
        // Loop until end of array
        for (let item = 0; item < myKeyword.length; item++) {
          // Check the data with keyword ("..")
          if (myKeyword[item].indexOf("..") > 0) {
            const myKey = myKeyword[item].split("..");
            let myStart = Number(myKey[0]);
            let myEnd = Number(myKey[1]);
            // Check Keyword
            if (myStart > myEnd) {
              $toast.info(
                "Cannot generate barcode because of invalid ordering number."
              );
              return;
            }
            // Loop for updating data set to array
            while (myStart <= myEnd) {
              myBarcode.dataBarcode.push(myStart);
              myStart = myStart + 1;
            }
          } else {
            // Update date to array
            myBarcode.dataBarcode.push(myKeyword[item]);
          }
        }
        $toast.success("Successful generate barcode");
      } catch (error) {
        $toast.error(error);
        console.log(error);
      } finally {
        newData.value = "";
      }
    }

    return {
      newData,
      myBarcode,
      addBarcode,
    };
  },
};
</script>

<template>
 
  <div class="container">
    <header>
      <div>
        <h1>
        
          Generate Barcode
        </h1>
        <hr class="border border-primary border-3 opacity-75" />
        <div>
         
          <Label>Criteria</Label>
          <hr />
        </div>
        <div>
          <form>
            <div class="row g-2 align-items-center">
              <div class="col-auto">
                <label>Input the keyword for generating the barcode </label>
              </div>
              <div class="col-auto input-group mb-1">
                <input
                  class="form-control"
                  v-model="newData"
                  placeholder="Please input the key text"
                  type="text"
                />
                <span v-if="newData.length !== 0">
                  <button @click="addBarcode" class="btn btn-outline-secondary">
                   
                    Insert
                  </button>
                </span>
                <span v-else>
                  <button
                    @click="addBarcode"
                    class="btn btn-outline-secondary disabled"
                  >
                   
                    Insert
                  </button>
                </span>
              </div>
              <div class="col-auto">
                <span class="form-text">
                  *** Support both alphabet, numeric and special character.
                </span>
              </div>
            </div>
            <div v-if="myBarcode.dataBarcode.length === 0">
              <select
                v-model="selected"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected disabled value="">
                  Open this select menu
                </option>
                <option value="1">A4 (General Printer)</option>
                <option value="2">A6 (Barcode Printer)</option>
              </select>
              <div v-if="selected === '1'">
                <button
                  @click="exportToPDFA4"
                  class="btn btn-outline-secondary disabled"
                >
               
                  <span class="form-text">Export to PDF</span>
                </button>
              </div>
              <div v-else>
                <button
                  @click="exportToPDF"
                  class="btn btn-outline-secondary disabled"
                >
              
                  <span class="form-text">Export to PDF</span>
                </button>
              </div>
            </div>
            <div v-else>
              <select
                v-model="selected"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected disabled value="">
                  Open this select menu
                </option>
                <option value="1">A4 (General Printer)</option>
                <option value="2">A6 (Barcode Printer)</option>
              </select>
              <div v-if="selected === '1'">
                <button
                  @click="exportToPDFA4"
                  class="btn btn-outline-secondary"
                >
                
                  <span class="form-text">Export to PDF</span>
                </button>
              </div>
              <div v-else>
                <button @click="exportToPDF" class="btn btn-outline-secondary">
               
                  <span class="form-text">Export to PDF</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
    <main>
      <div class="row mt-1">
        <div>
         
          <Label>Result</Label>
          <hr />
        </div>
        <div>Barcode</div>
      </div>
      <div id="element-to-convert">
        <div v-if="selected === '1'" class="row">
          <div
            class="col-md-6 mt-2 mb-2"
            v-for="item in myBarcode.dataBarcode"
            v-bind:key="item.id"
            style="page-break-inside: avoid"
          >
            <div class="item-container" style="margin-bottom: 45px">
              <BarcodeGenerator
                :value="[item]"
                :format="'CODE128'"
                :lineColor="'black'"
                :width="2"
                :height="50"
                :elementTag="'img'"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <div
            v-for="item in myBarcode.dataBarcode"
            v-bind:key="item.id"
            class="mt-2 mb-2"
            style="page-break-inside: avoid"
          >
            <div style="margin-bottom: 45px">
              <BarcodeGenerator
                :value="[item]"
                :format="'CODE128'"
                :lineColor="'black'"
                :width="2"
                :height="50"
                :elementTag="'img'"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
#element-to-convert {
  margin-top: 35px;
  text-align: center;
}
</style>
