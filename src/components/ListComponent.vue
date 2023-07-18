<template>
  <div class="container">
    <div class="Header-text2" style="margin-left: 6px">
      <file-search-outlined />
      Criteria
    </div>
    <br />
    <!-- <ConditionSearch /> -->

    <div class="filter-container">
      <div class="filter-item">
        <!-- <label for="contractNoFilter">Contract No:</label> -->
        <input
          class="input is-info"
          type="text"
          id="contractNoFilter"
          placeholder="Contract No:"
          v-model="contractNoFilter"
        
        />
      </div>
      <div class="filter-item">
        <!-- <label for="documentNameFilter">Document Name:</label> -->
        <input
          class="input is-info"
          type="text"
          id="documentNameFilter"
          placeholder="Document Name:"
          v-model="documentNameFilter"
        />
      </div>
      <div class="filter-item">
        <div class="select is-normal">
          <!-- <label for="systemCodeFilter">System Code:</label><br/> -->
          <select id="systemCodeFilter" v-model="systemCodeFilter" >
            <option value="">All</option>
            <option value="ALD">ALD</option>
            <option value="FMD">FMD</option>
          </select>
        </div>
      </div>
      <div class="filter-item">
        <div class="select is-normal">
          <!-- <label for="systemCodeFilter">System Code:</label><br/> -->
          <select id="systemCodeFilter2" v-model="systemCodeFilter2" >
            <option value="">ALL</option>
            <option value="1">Complete</option>
            <option value="0">Incomptete</option>
            
          </select>
        </div>
      </div>
    </div>
    <div class="Header-text2" style="margin-left: 6px">
      <table-outlined />
      Results
    </div>
    <br />

    <div class="table-container">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Contract No</th>
            <th>Sys.</th>
            <th>Customer Code</th>
            <th>Customer Name</th>
            <th>Doc Code</th>
            <th>Document Name</th>
            <!-- <th>Complete Status</th> -->
            <th>Customer Sign</th>
            <th>TOLC Sign</th>
            <th>Actions</th>
            <th>  Confirm</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="document in paginatedDocuments" :key="document.no">
            <td>{{ document.no }}</td>
            <td>{{ document.contractNo }}</td>
            <td>{{ document.systemName }}</td>
            <td>{{ document.customerCode }}</td>
            <td>{{ document.customerName }}</td>
            <td>{{ document.documentTypeCode }}</td>
            <td>{{ document.documentTypeName }}</td>
            <!-- <td>{{ document.documentStatusCode }}</td> -->
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.customerSign)"
                
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.tolcSign)"
                
              />
            </td>
            <!-- <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.tolcSign)"
                disabled
              />
            </td> -->
            <td>
              <router-link
                :to="{
                  name: 'edit',
                  params: {
                    contractNo: document.contractNo,
                    documentTypeCode: document.documentTypeCode,
                  },
                }"
              >
                <EditOutlined />
              </router-link>
            </td>
          
            <td>
        
              <!-- 03-07-2023 สิ่งที่ถูกคือ เช็ค V-if document.confirm === 1 เพื่อแสดงปุ่มconfirm จากการเช็คว่า TOLC,CustomerSign ตรงกับ Master && documnet.statusCode = 0 เพื่อแสดงปุ่มกด Confirm  -->
              <div  v-if="document.confirm === 1 && document.statusCode == 0|| document.statusCode == null">
              <button  class="button"
                
                @click="confirmDocument(document)"
              >
                Confirm
              </button> 
               </div>
              
              <div  v-else>

  
              </div>
           
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav class="pagination is-centered">
      <ul class="pagination-list">
        <li>
          <button
            @click="changePage(currentPage - 1)"
            class="pagination-link"
            :disabled="currentPage === 1"
          >
            Prev
          </button>
        </li>
        <li v-for="page in paginationRange" :key="page">
          <button 
            @click="changePage(page)"
            class="pagination-link"
            :class="{ 'is-current': page === currentPage }"
          >
            {{ page }}
          </button>
        </li>
        <li>
          <button
            @click="changePage(currentPage + 1)"
            class="pagination-link"
            :disabled="currentPage === totalPages"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

// import TemplateViews01 from "./TemplateViews01.vue";



import mitt from 'mitt';

/* eslint-disable */ 
import axios from "axios";
import { EditOutlined } from "@ant-design/icons-vue";
import { FileSearchOutlined, TableOutlined } from "@ant-design/icons-vue";
import { useToast } from "vue-toast-notification";
export default {
  
  components: {
    EditOutlined,
    FileSearchOutlined,
    TableOutlined,
    useToast
  
  },
  data() {
    return {
      documents: [],
      filteredDocuments: [],
      pageSize: 10,
      currentPage: 1,
      maxPaginationButtons: 5,
      documentNameFilter: "",
      systemCodeFilter: "",
      systemCodeFilter2:"",
      contractNoFilter: "",
      contractNo: '',
      filteredContractNo: '',
     
    };
  },
  created() {
    this.fetchDocuments();
    this.eventBus = mitt();
    this.eventBus.on('filter-contract', this.handleFilterContract);
  },
  beforeUnmount() {
    this.eventBus.all.clear(); // เพิ่มบรรทัดนี้เพื่อล้างตัวแปร eventBus ก่อนที่ ListComponent จะถูกทำลาย
  },
  watch: {
    documentNameFilter: "applyFilters",
    systemCodeFilter: "applyFilters",
    contractNoFilter: "applyFilters",
    systemCodeFilter2: "applyFilters",
  },
  methods: {
    
    fetchDocuments() {
      // let apiURL = "https://localhost:7083/api/DocumentVerification";
      let apiURL = "http://ws.orix.co.th:8181/api/DocumentVerification";
      axios
        .get(apiURL)
        .then((res) => {
          this.documents = res.data;
          this.applyFilters();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    refreshData(){
      const $toast = useToast();

      // let apiURL = "https://localhost:7083/api/DocumentVerification";
      let apiURL = "http://ws.orix.co.th:8181/api/DocumentVerification";
      
      axios
        .get(apiURL)
        .then((res) => {
          this.documents = res.data;
          $toast.success("Complete...");
          this.applyFiltersRefresh();
          // this.applyFilters();
          this.changePage(this.currentPage);
          // this.currentPage = Math.min(this.currentPage, this.totalPages); // ตรวจสอบว่าหน้าปัจจุบันเกินหน้าทั้งหมดหรือไม่

        })
        .catch((error) => {
          console.log(error);
        });
    },


    handleFilterContract(contractNo) {
      this.filteredContractNo = contractNo;
    },
  
    confirmDocument(document) {
    const payload = {
      contractNo: document.contractNo,
      systemCode: document.systemCode.toString(),
      customerCode: document.customerCode,
      customerName: document.customerName,
      createUser: 99,
      modifyUser: 99,
     documentTypeCode: document.documentTypeCode,
     customerSign: document.customerSign,
     tolcSign: document.tolcSign,

   
     
    };
   
    axios
      // .put('https://localhost:7083/api/DocumentVerification/Confirm', payload)
      .put('http://ws.orix.co.th:8181/api/DocumentVerification/Confirm', payload)

      .then(response => {
        console.log('Confirmation response:', response.data);
        // window.alert('Confirm Data Complete...');
        // window.location.reload(false);
        // ทำตามการดำเนินการหลังจากการยืนยันเอกสาร
        this.refreshData();
      })
      .catch(error => {
        console.log('Confirmation error:', error);
        // จัดการข้อผิดพลาดในการยืนยันเอกสาร
      });

      
  },mounted() {
    this.$on('back-click',this.handleClickBack);
  },

    deleteDocument(no) {
      let apiURL = `http://ws.orix.co.th:8181/api/DocumentVerification/${no}`;
      let indexOfArrayItem = this.documents.findIndex((i) => i.no === no);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.documents.splice(indexOfArrayItem, 1);
            this.applyFilters();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    getCheckboxStatus(value) {
      return value === 1;
    },
    applyFilters() {
      const $toast = useToast();

      this.filteredDocuments = this.documents.filter((document) => {
        // const documentStatusCodeMatch =
        //   document.documentStatusCode === this.documentStatusCodeFilter 
        //    || this.documentStatusCodeFilter === "";
        //   //    document.documentStatusCode === this.documentStatusCodeFilter ||
             
        //   // this.documentStatusCodeFilter === "";
        
        const systemCodeMatch2 =
          document.documentStatusCode.toString() === this.systemCodeFilter2.toString()
          // this.documentStatusCodeFilter
          || this.systemCodeFilter2 === "";
          // console.log("APi " + document.documentStatusCode + "Input " + this.documentStatusCodeFilter)
        // console.log("APi " && document.documentStatusCode &&  "Input" && this.documentStatusCodeFilter )
        const documentNameMatch =
          document.documentTypeName
            .toLowerCase()
            .includes(this.documentNameFilter.toLowerCase()) ||
          this.documentNameFilter.trim() === "";
        const systemCodeMatch =
          // document.systemCode === this.systemCodeFilter ||
          // this.systemCodeFilter === "";
             document.systemName === this.systemCodeFilter ||
             
          this.systemCodeFilter === "";
        const contractNoMatch =
          document.contractNo
            .toLowerCase()
            .includes(this.contractNoFilter.toLowerCase()) ||
          this.contractNoFilter.trim() === "";

        return documentNameMatch && systemCodeMatch && contractNoMatch && systemCodeMatch2;
      });

      this.currentPage = 1;
    },
    applyFiltersRefresh() {
     
      this.filteredDocuments = this.documents.filter((document) => {
        // const documentStatusCodeMatch =
        //   document.documentStatusCode === this.documentStatusCodeFilter 
        //    || this.documentStatusCodeFilter === "";
        //   //    document.documentStatusCode === this.documentStatusCodeFilter ||
             
        //   // this.documentStatusCodeFilter === "";
        
        const systemCodeMatch2 =
          document.documentStatusCode.toString() === this.systemCodeFilter2.toString()
          // this.documentStatusCodeFilter
          || this.systemCodeFilter2 === "";
          // console.log("APi " + document.documentStatusCode + "Input " + this.documentStatusCodeFilter)
        // console.log("APi " && document.documentStatusCode &&  "Input" && this.documentStatusCodeFilter )
        const documentNameMatch =
          document.documentTypeName
            .toLowerCase()
            .includes(this.documentNameFilter.toLowerCase()) ||
          this.documentNameFilter.trim() === "";
        const systemCodeMatch =
          // document.systemCode === this.systemCodeFilter ||
          // this.systemCodeFilter === "";
             document.systemName === this.systemCodeFilter ||
             
          this.systemCodeFilter === "";
        const contractNoMatch =
          document.contractNo
            .toLowerCase()
            .includes(this.contractNoFilter.toLowerCase()) ||
          this.contractNoFilter.trim() === "";

        return documentNameMatch && systemCodeMatch && contractNoMatch && systemCodeMatch2;
      // this.filteredDocuments = this.documents.filter((document) => {
      //   const documentNameMatch =
      //     document.documentTypeName
      //       .toLowerCase()
      //       .includes(this.documentNameFilter.toLowerCase()) ||
      //     this.documentNameFilter.trim() === "";
      //   const systemCodeMatch =
      //     document.systemName === this.systemCodeFilter ||
      //     this.systemCodeFilter === "";
      //   const contractNoMatch =
      //     document.contractNo
      //       .toLowerCase()
      //       .includes(this.contractNoFilter.toLowerCase()) ||
      //     this.contractNoFilter.trim() === "";

      //   return documentNameMatch && systemCodeMatch && contractNoMatch ;
      });
      this.changePage(this.currentPage);
      // this.currentPage = 1;
    },
  },
  computed: {
    totalItems() {
      return this.filteredDocuments.length;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.pageSize);
    },
    paginationRange() {
      const start = Math.max(
        1,
        this.currentPage - Math.floor(this.maxPaginationButtons / 2)
      );
      const end = Math.min(
        start + this.maxPaginationButtons - 1,
        this.totalPages
      );

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
    paginatedDocuments() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;

      return this.filteredDocuments.slice(startIndex, endIndex);
    },
  },
};
</script>

<style scoped>

.button {
  position: relative;
  background-color: #1890FF;
  border: none;
  font-size: 16px;
  color: #FFFFFF;
  padding: 20px;
  height: 20px;
  width: 90px;
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
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.filter-container {
  display: flex;
  margin-bottom: 20px;
}

.filter-item {
  margin-right: 10px;
}

.table-container {
  overflow-x: auto;
}
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

.table th {
  background-color: #f5f5f5;
  font-weight: 500;
}

th {
  background-color: #f2f2f2;
}

.pagination {
  margin-top: 20px;
}

.pagination-list {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.pagination-link {
  padding: 10px 15px;
  margin: 0 5px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;
}

.checkbox{
  background-color: #1890ff;
}
.pagination-link.is-current {
  background-color: #1890ff;
}
</style>
