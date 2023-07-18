import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import edit2 from "@/components/EditComponentSettingDoc.vue";
import ListComponentSettingDoc from "@/components/ListComponentSettingDoc.vue";
import EditSettingTemplateName from "@/components/EditSettingTemplateName.vue";
import  ListSettingCover from "@/components/ListSettingCover.vue";
import ReportPrint from "@/components/ReportPrint.vue"
// import ListComponent from "@/components/ListComponent.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/VerificationApproval',
    name: 'VerificationApproval',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VerifiApprovalView.vue')
  },
  {
    path: '/LADocument',
    name: 'LADocument',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LADocumentView.vue')
  },
  {
    path: '/COADocument',
    name: 'COADocument',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/COADocumentView.vue')
  }
  ,
  {
    path: '/SettingApproval',
    name: 'SettingApproval',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingApprovalView.vue')
  },
  {

    path: '/SettingCoverSheet',
    name: 'SettingCoverSheet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingCoverSheetView.vue')
  },
  {

    path: '/SettingCoverSheet-',
    name: 'SettingCoverSheet-',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingCoverSheetView2.vue')
  },{

    path: '/SettingDocumentTypeView',
    name: 'SettingDocumentTypeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingDocumentTypeView.vue')
  },{

    path: '/SettingAddDocTypeView',
    name: 'SettingAddDocTypeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingAddDocTypeView.vue')
  },{

    path: '/SettingCoverSheetAddTemplateView',
    name: 'SettingCoverSheetAddTemplateView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingCoverSheetAddTemplateView.vue')
  },{

    path: '/PreviewTheDocView',
    name: 'PreviewTheDocView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreviewTheDocView.vue')
  },{

    path: '/WarehouseView',
    name: 'WarehouseView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WarehouseView.vue')
  },{

    path: '/WarehouseView-',
    name: 'WarehouseView-',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WarehouseView2.vue')
  },{

    path: '/Warehouseboxcode',
    name: 'Warehouseboxcode',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Warehouseboxcode.vue')
  },{

    path: '/AddActivity',
    name: 'AddActivity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddActivity.vue')
  },{

    path: '/SettingWarehouse',
    name: 'SettingWarehouse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingWarehouse.vue')
  },{

    path: '/SettingAddWarehouse',
    name: 'SettingAddWarehouse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingAddWarehouse.vue')
  },{

    path: '/EditWarehouseView',
    name: 'EditWarehouseView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditWarehouseView.vue')
  },{

    path: '/FileControlApprovalView',
    name: 'FileControlApprovalView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FileControlApprovalView.vue')
  },{
    path: '/FileControlPreview',
    name: 'FileControlPreview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FileControlPreview.vue')
  },
  {
    path: '/EditCoverSheetTemplate',
    name: 'EditCoverSheetTemplate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditCoverSheetTemplate.vue')
  },
  {
    path: '/BoxControlEdit',
    name: 'BoxControlEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BoxControlEditView.vue')
  }
  ,
  {
    path: '/Previewthedocument',
    name: 'Previewthedocument',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreviewthedocWarehouse.vue')
  },
  // {
  //   path: '/GenerateBarCodeView',
  //   name: 'GenerateBarCodeView',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/GenerateBarCodeView.vue')
  // },
  {
    path: '/PrintbcodeView',
    name: 'PrintbcodeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PrintbcodeView.vue')
  },{
    path: '/SettingDocumentType',
    name: 'SettingDocumentType',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingDocumentTypeCurrent.vue')
  },
  {

    path: '/GenerateBarcode',
    name: 'GenerateBarcode',
    component: () => import(/* webpackChunkName: "about" */ '../views/GenerateBarcode.vue')
    
  },
  // {

  //   path: '/ReportView',
  //   name: 'ReportView',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ReportView.vue')
    
  // },
 
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/viewsetting",
    name: "viewsetting",
    component: ListComponentSettingDoc,
  },
  {
    path: "/viewsettingtemplate",
    name: "viewsettingtemplate",
    component: ListSettingCover,
  },


  {
    // path: "/edit/:ContractNo/:DocumentTypeCode",
    path: '/:contractNo/:documentTypeCode',
    // path: '/edit/:id/:contractNo/:documentTypeCode',
    name: 'edit',
    component: EditComponent
  }, 
   {
    
    path: '/:systemCode/:documentTypeCode:/:documentTypeName',
    // path: '/edit/:id/:contractNo/:documentTypeCode',
    name: 'editsettingdoc',
    component: edit2
  },
  {
   // path: 'https://localhost:7083/api/CoverSheet/Template',
    path: '/:templateCode',
    // path: '/edit/:id/:contractNo/:documentTypeCode',
    name: 'editsettingtemplatename',
    component: EditSettingTemplateName
  },
 
  {
   
    path: '/:contractNo/:coverSheetCode/:batchCode/:templateCode',
    name: 'ReportPrint',
    component: ReportPrint
  },
   

]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export default router




