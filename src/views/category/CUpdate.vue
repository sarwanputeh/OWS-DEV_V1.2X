<script>
/* eslint-disable */
import { updateCategory } from "@/services/category.service";
import { findOneCategory} from "@/services/category.service";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";

const router = useRouter();
const route = useRoute();
const toast = useToast();

const state = reactive({
  category: {},
});

onMounted(() => {
  state.category.categoryId = +route.params.id;
  findById(state.category.categoryId);
});

const findById = async (ContractNo) => {
  const response = await findOneCategory(id);
  // console.log(response.data);
  state.category.categoryName = response.data.categoryName;
  state.category.categoryId = response.data.categoryId;
};

const onSubmit = async () => {
  const response = await updateCategory(
    state.category.categoryId,
    state.category
  );
  if (response.status == 204) {
    toast.success("แก้ไขข้อมูลสำเร็จ");
    router.replace({ name: "c-index" });
  }
};
</script>

<template>
  <div class="col-md-4 ms-4 mt-4">
    <h3>แก้ไขข้อมูล ID: {{ state.category.categoryId }}</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="categoryName" class="form-label">ประเภทสินค้า</label>
        <input
          v-model="state.category.categoryName"
          type="text"
          class="form-control"
          id="categoryName"
        />
      </div>

      <button type="submit" class="btn btn-primary">บันทึก</button>
    </form>
  </div>
</template>
