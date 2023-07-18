

<template>
  <div class="ms-4 mt-5">
    <div v-if="state.isLoading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="state.errorMessage" class="alert alert-danger">
      {{ state.errorMessage }}
    </div>

    <RouterLink :to="{ name: 'c-create' }" class="btn btn-primary">
      เพิ่มข้อมูล
    </RouterLink>

    <!-- <h1 v-if="state.totalRecord >= 0">
      ประเภทสินค้า ทั้งหมด {{ state.totalRecord }} รายการ
    </h1> -->
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">ContractNo</th>
          <th scope="col">systemCode</th>
          <th scope="col">customerCode</th>
          <th scope="col">customerName</th>
          <th scope="col">documentTypeCode</th>
          <th scope="col">customerSign</th>
          <th scope="col">tolcSign</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in state.category" :key="item.no">
          <td>{{ item.contractNo}}</td>
          <td>{{ item.systemCode }}</td>
          <td>{{ item.customerCode }}</td>
          <td>{{ item.customerName }}</td>
          <td>{{ item.documentTypeCode }}</td>
          <td>{{ item.customerSign }}</td>
          <td>{{ item.tolcSign }}</td>
          <td>
            <RouterLink
              :to="{ name: 'c-update', params: { contractNo: item.contractNo,
            documentTypeCode: item.documentTypeCode,} }"
            >
              แก้ไข
            </RouterLink>
            |
            <a href="#" @click.prevent="onRemove(item.categoryId)">ลบ</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script >
/* eslint-disable */
import {
  findAllCategory,
  // Category,
  // removeCategory,
} from "@/services/category.service";
import { onMounted, reactive } from "vue";
// import { useRouter } from "vue-router";
// import { useToast } from "vue-toast-notification";

// const router = useRouter();
// const toast = useToast();

const state = reactive({
  category: [],
  totalRecord: 0,
  isLoading: true,
  errorMessage: "",
});

const getData = async () => {
  try {
    const response = await findAllCategory();
    // console.log(response.data);
    state.category = response.data.data;
    state.totalRecord = response.data.totalRecord;
  } catch (error) {
    // console.log(error);
    // state.errorMessage = "ไม่สามารถดึงข้อมูลได้ เกิดข้อผิดพลาดจาก Server";
    state.errorMessage = JSON.stringify(error);
  } finally {
    state.isLoading = false;
  }
};

// const onRemove = async (id: number) => {
//   const isConfirm = window.confirm("แน่ใจว่าต้องการลบข้อมูลนี้");
//   if (isConfirm) {
//     const response = await removeCategory(id);
//     if (response.status == 204) {
//       // alert("ลบข้อมูลสำเร็จ");
//       toast.success("ลบข้อมูลสำเร็จ", {
//         dismissible: true,
//         duration: 3000,
//       });
//       setTimeout(() => router.go(0), 2000); // reload page
//       // router.push("/dashboard");
//     }
//   }
// };

onMounted(() => {
  getData();
});
</script>
