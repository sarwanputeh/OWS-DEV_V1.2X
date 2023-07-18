<template>
    <div class="container">
      <div class="table-container">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Box Code</th>
              <th>Box Date</th>
              <th>Store Date (TOLC)</th>
              <th>Delivery Date (WH)</th>
              <th>Box Reference</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="document in paginatedDocuments" :key="document.num">
              <td>{{ document.num }}</td>
              <td>{{ document.boxCode}}</td>
              <td>{{ document.boxDate }}</td>
              <td>{{ document.storeDate }}</td>
              <td>{{ document.deliveryDate}}</td>
              <td>{{ document.boxReference}}</td>
              <td>{{ document.remark}}</td>
              <td>
                <router-link
                  :to="{
                    name: 'headerbatch',
                    params: {
                        boxCode: document.boxCode,
                    
                    },
                  }"
               
                >
                Detail
                </router-link>
                
              </td>
              <td>
                <router-link
                  :to="{
                    name: 'editheaderbatch',
                    params: {
                        boxCode: document.boxCode,
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
  import {EditOutlined  } from '@ant-design/icons-vue'
  
  export default {
    components:{
      EditOutlined,
    },
    data() {
      return {
        documents: [],
        pageSize: 10,
        currentPage: 1,
        maxPaginationButtons: 5,
      };
    },
    created() {
      let apiURL = "https://localhost:7083/api/Warehouse/Header";
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
      deleteDocument(num) {
        let apiURL = `https://localhost:7083/api/Warehouse/Header/${num}`;
        let indexOfArrayItem = this.documents.findIndex((i) => i.num === num);
  
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
        const end = Math.min(start + this.maxPaginationButtons - 1, this.totalPages);
  
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      },
      paginatedDocuments() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
  
        return this.documents.slice(startIndex, endIndex);
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
    color: #1890FF;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s, border-color 0.3s;
  }
  
  .pagination-link:hover {
    background-color: #f5f5f5;
  }
  
  .pagination-link.is-current {
    background-color: #1890FF;
    color: #fff;
    border-color: #1890FF;
  }
  
  .pagination-link.is-current.has-background-primary {
    background-color: #1890FF;
    border-color: transparent;
  }
  
  .pagination-link:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  
  