<template>
  <div style="background: #1da1f2">
    <div class="card-header">
      <nav class="navbar" style="background: #1da1f2">
        <div class="Header-text">
          <h1 style="color: #fff">Operation Workflow</h1>
        </div>
      </nav>

      <nav class="navbar-end" role="navigation" aria-label="main navigation">
        <a-menu v-model:selectedKeys="current" mode="horizontal" style="background: #1da1f2">
          <a-sub-menu style="color: #fff">
            <template #title><user-outlined />Sarwan.p</template>

            <a-menu-item-group title="profile">
              <!-- <router-link to="/view-profile">View Profile</router-link>
              <router-link to="/settings">Settings</router-link>
              <router-link to="/logout">Log out</router-link> -->
            </a-menu-item-group>
          </a-sub-menu>
        </a-menu>
      </nav>
    </div>
  </div>

  <a-layout style="min-height: 100vh" >
    <a-layout-sider v-model:collapsed="collapsed" collapsible style="background: #fff">
      <br />
      <div class="logo" />

      <a-menu v-model:selectedKeys="selectedKeys" theme="white" mode="inline">
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <file-outlined />
              <span>Document Custody</span>
            </span>
          </template>
          <a-menu-item key="2">
            <router-link to="/">Receive Document</router-link>
          </a-menu-item>
          <a-sub-menu key="sub2" title="Verification Approval">
            <a-menu-item key="3"><router-link to="/VerificationApproval">Approval</router-link></a-menu-item>
            <a-menu-item key="4"><router-link to="/SettingApproval">Settings</router-link></a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub3" title="Document Custody Management">
            <a-menu-item key="5"><a href="http://ows.orix.co.th:8990" target="_blank">
              Generate Barcode</a></a-menu-item>
              

            <!-- <a-menu-item key="5"><router-link to="/GenerateBarcode">Generate Barcode</router-link></a-menu-item> -->
            <a-menu-item key="6"><router-link to="/LADocument">Cover Sheet</router-link></a-menu-item>
            <a-menu-item key="7"><router-link to="/SettingCoverSheet">Setting the Cover Sheet Template</router-link></a-menu-item>
            <a-menu-item key="8"><router-link to="/WarehouseView">Warehouse</router-link></a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub4" title="File Control Management">
            <a-menu-item key="9"><router-link to="/FileControlApprovalView">Approval</router-link></a-menu-item>
            <a-menu-item key="10"><router-link to="/FileControlPreview">Preview and Print</router-link></a-menu-item>
          </a-sub-menu>
          <a-menu-item key="11">Update To System</a-menu-item>
          <a-menu-item key="12">Scan Document</a-menu-item>
          <a-menu-item key="13">Control Document</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub5">
          <template #title>
            <span>
              <laptop-outlined />
              <span>Asset And Auction</span>
            </span>
          </template>
          <a-menu-item key="12">Input</a-menu-item>
          <a-menu-item key="13">Process</a-menu-item>
          <a-menu-item key="14">Output</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub6">
          <template #title>
            <span>
              <car-outlined />
              <span>Registration</span>
            </span>
          </template>
          <a-menu-item key="15">Input</a-menu-item>
          <a-menu-item key="16">Process</a-menu-item>
          <a-menu-item key="17">Output</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub7">
          <template #title>
            <span>
              <safety-certificate-outlined />
              <span>Insurance</span>
            </span>
          </template>
          <a-menu-item key="18">Input</a-menu-item>
          <a-menu-item key="19">Process</a-menu-item>
          <a-menu-item key="20">Output</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub8">
          <template #title>
            <span>
              <appstore-outlined />
              <span>Other</span>
            </span>
          </template>
          <a-menu-item key="21">Input</a-menu-item>
          <a-menu-item key="22">Process</a-menu-item>
          <a-menu-item key="23">Output</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <br />
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        © COPYRIGHT 2023 ALL RIGHTS RESERVED. THAI ORIX LEASING CO.,LTD.
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { LaptopOutlined, FileOutlined, CarOutlined, SafetyCertificateOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    AppstoreOutlined,
    LaptopOutlined,
    CarOutlined,
    SafetyCertificateOutlined,
    FileOutlined,
    UserOutlined
  },
  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
    };
  },
});
</script>

<style>

/* .ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content, .ant-menu-inline.ant-menu-root .ant-menu-submenu-title > .ant-menu-title-content {
     flex: auto; 
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
} */
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
.ant-layout-sider {
  background: #fff;
}
.ant-layout-header {
  background: #fff;
}
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='white'] .site-layout .site-layout-background {
  background: #fff;
}

.big-text {
  font-size: 46px;
}
.Header-text {
  margin-top: 15px;
  margin-left: 20px;
  font-size: 24px;
}
</style>