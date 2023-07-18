<template>
  <div class="container">
    <div class="navbar-end">
      <a-button type="primary" href="/SettingCoverSheetAddTemplateView"
        ><Plus-Outlined />ADD</a-button
      >
    </div>
    <div class="Header-text2" style="margin-left: 6px">
      <file-search-outlined />
      Criteria
    </div>
    <br />
    <br />
    <div class="search-box">
      <input
        v-model="searchDocumentName"
        type="text"
        placeholder="Template Name"
      />

      <button @click="resetSearch">Reset</button>
    </div>
    <br />
    <div class="Header-text2" style="margin-left: 6px">
      <Table-Outlined /> Result
    </div>
    <br />
    <div class="table-container">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Template Code</th>
            <th>Template Name</th>
            <th>Lease Agr.</th>
            <th>Sales Agr.</th>
            <th>Deposit Trs.</th>
            <th>Attachment</th>
            <th>Pay. Sch.</th>
            <th>Int. Sch.</th>
            <th>Accept. Recp.</th>
            <th>Gua. Doc.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="document in paginatedDocuments"
            :key="document.templateCode"
          >
            <td>{{ document.templateCode }}</td>
            <td>{{ document.templateName }}</td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.leaseAgreementFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.salesAgreementFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.depositTransferFormFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.attachmentFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.paymentScheduleFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.interestScheduleFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.acceptanceReceiptFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(document.guaranteeDocumentsFlag)"
              />
            </td>

            <td>
              <router-link
                :to="{
                  name: 'editsettingtemplatename',
                  params: {
                    templateCode: document.templateCode,
                  },
                }"
              >
                <EditOutlined />
              </router-link>
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
import axios from "axios";
import { EditOutlined } from "@ant-design/icons-vue";
import { FileSearchOutlined, TableOutlined,PlusOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    EditOutlined,
    FileSearchOutlined,
    TableOutlined,
    PlusOutlined,
  },
  data() {
    return {
      documents: [],
      pageSize: 10,
      currentPage: 1,
      maxPaginationButtons: 5,
      searchDocumentName: "",
    };
  },
  created() {
    let apiURL = "http://ws.orix.co.th:8181/api/CoverSheet/Template";

    // let apiURL = "https://localhost:7083/api/CoverSheet/Template";
    axios
      .get(apiURL)
      .then((res) => {
        this.documents = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteDocument(no) {
      let apiURL = `http://ws.orix.co.th:8181/api/CoverSheet/Template/${no}`;
      // let apiURL = `https://localhost:7083/api/CoverSheet/Template/${no}`;
      let indexOfArrayItem = this.documents.findIndex((i) => i.no === no);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.documents.splice(indexOfArrayItem, 1);
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
    resetSearch() {
      this.searchDocumentName = "";
      this.searchCustomerSign = "";
    },
  },
  computed: {
    totalItems() {
      return this.documents.length;
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
      let filteredDocuments = this.documents;

      if (this.searchDocumentName) {
        filteredDocuments = filteredDocuments.filter((document) =>
          document.templateName
            .toLowerCase()
            .includes(this.searchDocumentName.toLowerCase())
        );
      }

      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;

      return filteredDocuments.slice(startIndex, endIndex);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
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

.pagination {
  margin-top: 2rem;
  justify-content: center;
}

.pagination-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.pagination-link {
  padding: 0.5rem 0.75rem;
  margin-right: 0.25rem;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #3273dc;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;
}

.pagination-link:hover {
  background-color: #f5f5f5;
}

.pagination-link.is-current {
  background-color: #1890ff;
  color: #fff;
  border-color: #1890ff;
}

.pagination-link.is-current.has-background-primary {
  background-color: #1890ff;
  border-color: transparent;
}

.pagination-link:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.search-box {
  margin-bottom: 1rem;
}

.search-box input {
  margin-right: 0.5rem;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-box button {
  padding: 0.25rem 0.5rem;
  border: none;
  background-color: #1890ff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
</style>
