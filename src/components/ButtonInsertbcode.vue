<template>
  <div>
    <Button
      :size="size"
      type="primary"
      @click="showComponentC"
      style="width: 150px"
      ><Plus-Outlined />Insert</Button
    >
    <br />
    <component v-if="showC" :is="currentComponent" />
    <br />
  </div>
</template>


<script>
import { Button } from "ant-design-vue";
import ComponentC from "./InsertResultbcode.vue";
import { ref } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    Button,
    ComponentC,
    PlusOutlined,
  },
  data() {
    return {
      showC: false,
      currentComponent: "",
      size: ref("large"),
    };
  },
  methods: {
    showComponentC() {
      this.showC = true;
      this.currentComponent = "ComponentC";
    },
  },
};
</script>
