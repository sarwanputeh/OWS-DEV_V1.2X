<template>


  <div>
    <div class="columns">
    <div class="column" style="width: 600px;">
      <div class="template-selector">
        <br />
        <br /> 
        <label for="template-select">Select Template:</label>
        <div class="select is-normal">
          <select id="template-select" v-model="selectedTemplate"  >
            <option
              v-for="templateCode in templateCodes"
              :value="templateCode"
              :key="templateCode"
            >
              {{ templateCode }}
            </option>
          </select>
  
          
        </div>
       
      </div>
 

      <!-- <TemplateViews01 :templateCode="selectedTemplate" /> -->
    </div>
    <div class="column">
      <br /><br />
      <button  @click="fetchTemplateByID" class="button">search</button>
    </div>
      <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
   
  </div>
  <br />
  <h2>TemplateView</h2>
    <br />
   
    <br />
    <div class="table-container">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>templateCode</th>
            <th>TemplateName</th>
            <th>LeaseAgr.</th>
            <th>SalesAgr.</th>
            <th>DepositTrs.</th>
            <th>Attachment</th>
            <th>Pay.Sch.</th>
            <th>Int.Sch.</th>
            <th>Accept.Recp.</th>
            <th>Gua.Doc.</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="template in templateCodes3" :key="template.templateCode">
            <td>{{ template.templateCode }}</td>
            <td>{{ template.templateName }}</td>

            <!-- Checkbox columns -->
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(template.leaseAgreementFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(template.salesAgreementFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(template.depositTransferFormFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(template.attachmentFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(template.paymentScheduleFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(template.interestScheduleFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(template.acceptanceReceiptFlag)"
              />
            </td>
            <td>
              <input
                type="checkbox"
                :checked="getCheckboxStatus(template.guaranteeDocumentsFlag)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <br />
    <h2>File Contract</h2>
    <br />
    <a-transfer
      v-model:target-keys="targetKeys"
      :data-source="mockData"
      :disabled="disabled"
      :show-search="showSearch"
      :filter-option="
        (inputValue, item) => item.title.indexOf(inputValue) !== -1
      "
      :show-select-all="false"
      @change="onChange"
    >
      <template
        #children="{
          direction,
          filteredItems,
          selectedKeys,
          disabled: listDisabled,
          onItemSelectAll,
          onItemSelect,
        }"
      >
        <a-table
          :row-selection="
            getRowSelection({
              disabled: listDisabled,
              selectedKeys,
              onItemSelectAll,
              onItemSelect,
            })
          "
          :columns="direction === 'left' ? leftColumns : rightColumns"
          :data-source="filteredItems"
          size="small"
          :style="{ pointerEvents: listDisabled ? 'none' : null }"
          :custom-row="
            ({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) return;
                onItemSelect(key, !selectedKeys.includes(key));
              },
            })
          "
        />
      </template>
    </a-transfer>
    <br />
    <div class="navbar-end">
      <a-button
        @click="success"
        type="primary"
        :size="size"
        style="width: 160px"
      >
        <save-outlined />Save all to Batch
      </a-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { SaveOutlined } from "@ant-design/icons-vue";
import { useToast } from "vue-toast-notification";
// import TemplateViews01 from "./TemplateViews01.vue";

const $toast = useToast();

// เนื่องจากเปลี่ยนชื่อตัวแปร leftTableColumns เป็น leftColumns และ rightTableColumns เป็น rightColumns
// ในการ import Component และใน setup() ต้องปรับตัวแปรเหล่านี้ให้ตรงกัน
const leftColumns = [
  { dataIndex: "num", title: "Num" },
  { dataIndex: "contractNo", title: "Contract No" },
  { dataIndex: "customerCode", title: "Customer Code" },
  { dataIndex: "customerName", title: "Customer Name" },
];

const rightColumns = [
  { dataIndex: "num", title: "Num" },
  { dataIndex: "contractNo", title: "Contract No" },
  { dataIndex: "customerCode", title: "Customer Code" },
  { dataIndex: "customerName", title: "Customer Name" },
];

export default defineComponent({
  components: {
    SaveOutlined,
    useToast ,
    // TemplateViews01,
  },
  props: {
    templateCode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedTemplate: "", // เพิ่มตัวแปร selectedTemplate
      templateCode: [], // เพิ่มตัวแปร templateCodes
      templateCode2: [], // เพิ่มตัวแปร templateCodes
      templateCode3: [],
    };
  },
  setup(props) {
    const mockData = ref([]);
    const targetKeys = ref([]);
    const disabled = ref(false);
    const showSearch = ref(false);
    const leftTableColumns = ref(leftColumns);
    const rightTableColumns = ref(rightColumns);
    const selectedKeys = ref([]);
    const selectedTemplate = ref("");
    const templateCodes = ref([]);
    const templateCodes2 = ref([]);
    const templateCodes3 = ref([]);
    const paginatedDocuments = ref([]);
    // const templateCode = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://localhost:7083/api/CoverSheet/Contract"
          "http://ws.orix.co.th:8181/api/CoverSheet/Contract"
        );
        mockData.value = response.data.map((item) => ({
          ...item,
          key: item.num.toString(),
        }));

        const templateResponse = await axios.get(
          // "https://localhost:7083/api/CoverSheet/Template"
          "http://ws.orix.co.th:8181/api/CoverSheet/Template"
        );
        templateCodes.value = templateResponse.data.map(
          (template) => template.templateCode
        );
        templateCodes2.value = templateResponse.data;
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTemplateByID = async () => {
      try {
      //  let templatenumber = {selectedTemplate};
      //   console.log(templatenumber);
        //  const templatenumber = "TP230001"
     
        const templatenumber = selectedTemplate.value;
        // const templateResponseByID = await axios.get(`https://localhost:7083/api/CoverSheet/Template?templateCode=${templatenumber}`
        const templateResponseByID = await axios.get(`http://ws.orix.co.th:8181/api/CoverSheet/Template?templateCode=${templatenumber}`
   
        );
    // templateCodes3.value = templateResponseByID.data.map(
    //   (template) => template.templateCode
    // );
    templateCodes3.value = templateResponseByID.data;
  } catch (error) {
    console.error(error);
  }
    };

    const onChange = (nextTargetKeys) => {
      targetKeys.value = nextTargetKeys;
    };

    const getCheckboxStatus = (flag) => {
      return flag ? "checked" : null;
    };

    const getRowSelection = ({ disabled, onItemSelectAll, onItemSelect }) => {
      return {
        type: "checkbox",
        getCheckboxProps: (item) => ({
          disabled: disabled || item.disabled,
        }),
        onSelectAll(selected, selectedRows) {
          const keys = selectedRows.map((item) => item.key);
          selectedKeys.value = keys;
          onItemSelectAll(keys, selected);
        },
        onSelect({ key }, selected) {
          if (selected) {
            selectedKeys.value.push(key);
          } else {
            selectedKeys.value = selectedKeys.value.filter(
              (item) => item !== key
            );
          }
          onItemSelect(key, selected);
        },
        selectedRowKeys: selectedKeys.value,
      };
    };

    const success = async () => {
      if (selectedKeys.value.length > 0) {
        const payload = mockData.value
          .filter((item) => selectedKeys.value.includes(item.key))
          .map((item) => ({
            contractNo: item.contractNo,
            templateCode: selectedTemplate.value, // ใช้ props.templateCode แทน selectedTemplate.value
            templateLine: "",
            createUser: item.createUser,
          }));

        try {
          const response = await axios.post(
            
            "http://ws.orix.co.th:8181/api/CoverSheet/Contract",
            // "https://localhost:7083/api/CoverSheet/Contract",
            payload
          );
          $toast.success("Save All Batch Complete...");
          console.log("Data saved:", response.data);
          // $toast.success("Complete...");

        } catch (error) {
          console.error("Failed to save data:", error);
        }
      }
    };

    onMounted(() => {
      fetchData();
      selectedTemplate.value = props.templateCode; // กำหนดค่าเริ่มต้นให้ selectedTemplate เป็น props.templateCode
      fetchTemplateByID();
    });
    

    return {
      size: ref("large"),
      mockData,
      targetKeys,
      disabled,
      showSearch,
      leftColumns: leftTableColumns,
      rightColumns: rightTableColumns,
      onChange,
      getCheckboxStatus,
      getRowSelection,
      success,
      templateCodes,
      templateCodes2,
      templateCodes3,
      selectedTemplate,
      selectedKeys,
      paginatedDocuments,
      fetchTemplateByID,
      useToast,
    };
  },
});
</script>

<style>
.button {
  position: start;
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

</style>