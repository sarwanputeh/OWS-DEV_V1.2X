<template>
  <div>
    <div class="columns">
      <div class="column">
        <a-row>
          <a-col
            ><a-input
              size="large"
              style="width: 300px"
              v-model:value="inputValue"
          /></a-col>
        </a-row>

        <!-- <input v-model="inputValue" />

        <a-button type="primary" @click="saveData" style="width: 200px" size="lage"
          >Save</a-button
        >
        <component :is="componentToDisplay" :data="savedData"></component> -->

        <!-- {{ componentToDisplay }} -->
      </div>
      <div class="column">
        <a-col>
          <a-button
            type="primary"
            @click="saveData"
            style="width: 200px"
            :size="size"
            >Save</a-button
          >
          <component :is="componentToDisplay" :data="savedData"></component
        ></a-col>
      </div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <a-card hoverable style="width: Auto">
          <div class="Bigsize">
            {{ inputValue }}
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";
import ComponentC from "./ComponentC.vue";
import ComponentD from "./ComponentD.vue";

// เพิ่ม Component อื่นๆ ที่ต้องการใช้งานต่อไป

export default {
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
    ComponentD,
    // เพิ่ม Component อื่นๆ ที่ต้องการใช้งานต่อไป
  },
  setup() {
    const inputValue = ref("");
    const savedData = ref(null);
    const componentToDisplay = ref(); // กำหนดให้แสดง ComponentA เป็นค่าเริ่มต้น

    const saveData = () => {
      savedData.value = inputValue.value;
      // เลือก Component ที่จะแสดงตามลำดับ
      if (componentToDisplay.value === ComponentA) {
        componentToDisplay.value = ComponentB;
      } else if (componentToDisplay.value === ComponentB) {
        componentToDisplay.value = ComponentC;
      } else if (componentToDisplay.value === ComponentC) {
        componentToDisplay.value = ComponentD;
      }
      // ล้างค่าใน input
      inputValue.value = "";
    };

    return {
      inputValue,
      savedData,
      componentToDisplay,
      saveData,
      size: ref("large"),
    };
  },
};
</script>
<style >
.Bigsize {
  font-size: 100px;
}
</style>
