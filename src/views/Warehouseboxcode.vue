<template>
  <div class="home">
    <!-- <ConditionSearch />
      <HelloWorld/>
      <br/> -->
    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a href="/">
          <home-outlined />
        </a>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="">
        <span>/Document Custody/</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item href="./"
        ><span>Document Custody Management/</span></a-breadcrumb-item
      >
      <a-breadcrumb-item href="./"><span>Warehouse/</span></a-breadcrumb-item>
      <a-breadcrumb-item href="./"><span>Box Code</span></a-breadcrumb-item>
    </a-breadcrumb>
    <br />
    <br />
    <div class="Header-text" style="margin-left: 5px">
      Warehouse Management:Box Code
    </div>
    <br />
    <div class="column">
      <div class="Header-text2" style="margin-left: -5px">
        <Caret-Right-Outlined />Insert to Box code
      </div>
    </div>
    <ConditionBoxCode />
    <div class="navbar-end">
      <a-button type="primary" :size="size" style="width: 150px">
        <a href="#"><Search-Outlined />Search</a>
      </a-button>
    </div>

    <br />
    <div class="columns">
      <div class="column">
        <div class="Paragraph-text">Source Contract</div>
      </div>
      <div class="column">
        <div class="Paragraph-text" style="margin-left: 10px">
          Destination Contract
        </div>
      </div>
    </div>
    <!-- <TemplateA /> -->
    <TransferTable />
    <br />
    <br />
    <div class="Header-text2" style="margin-left: -5px">
      <Caret-Right-Outlined />Warehouse Control
    </div>
    <br />
    <div class="Header-text2"><FileSearch-Outlined />Criteria</div>
    <br />
    <div class="column">
      <div class="Header-text2" style="margin-left: 6px">
        Box Code:
        <a-input
          v-model:value="value"
          size="large"
          style="width: 200px"
          placeholder="Box Code"
        />
      </div>
      <br />
      <div class="Header-text2" style="margin-left: 6px">
        Contract No:
        <a-input
          v-model:value="value"
          size="large"
          style="width: 200px"
          placeholder="Contract No"
        />
      </div>
    </div>
    <div class="column">
      <div class="Header-text2" style="margin-left: 6px">
        Box Name :
        <a-input
          v-model:value="value"
          size="large"
          style="width: 200px"
          placeholder="Box Name"
        />
      </div>
      <br />
      <div class="Header-text2" style="margin-left: 6px">
        Lessee Name :
        <a-input
          v-model:value="value"
          size="large"
          style="width: 200px"
          placeholder="Lessee Name"
        />
      </div>
    </div>
    <br />

    <div class="navbar-end">
      <a-button type="primary" :size="size" style="width: 150px">
        <a href="#"><Search-Outlined />Search</a>
      </a-button>
    </div>
  </div>
  <div class="Header-text2"><Table-Outlined />Header Result</div>
  <BoxcoderResult />
  <br />
  <div class="Header-text2"><Table-Outlined />Detail Result</div>
  <BoxcoderDetailResult />
  <!-- <PreviewPrintCoversheet /> -->
</template>
  
  <script>
// @ is an alias to /src

// import TemplateA from '@/components/TemplateA.vue'
import {
  CaretRightOutlined,
  SearchOutlined,
  FileSearchOutlined,
  HomeOutlined,
  TableOutlined,
} from "@ant-design/icons-vue";
import TransferTable from "@/components/TransferTable.vue";
// import PreviewPrintCoversheet from '@/components/PreviewPrintCoversheet.vue'
import { ref } from "vue";
import ConditionBoxCode from "@/components/ConditionBoxCode.vue";
import BoxcoderResult from "@/components/BoxcoderResult.vue";
import BoxcoderDetailResult from "@/components/BoxcoderDetailResult.vue";

export default {
  name: "HomeView",
  components: {
    // TemplateA,

    FileSearchOutlined,
    ConditionBoxCode,
    CaretRightOutlined,
    SearchOutlined,
    // PreviewPrintCoversheet,
    BoxcoderResult,
    HomeOutlined,
    TransferTable,
    TableOutlined,
    BoxcoderDetailResult,
  },
  setup() {
    return {
      size: ref("large"),
    };
  },
};
</script>
  <style>
.Header-text {
  font-size: 24px;
}
.Header-text2 {
  font-size: 18px;
}
.Paragraph-text {
  font-size: 16px;
}
</style>