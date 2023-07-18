<template>
    <div class="VerifiApproval">
      <Breadcrumb-Approval/>
      <!-- <ApprovalSetting/> -->
      
      <VerificationApproval/>
      
  
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VerificationApproval from '@/components/VerificationApproval.vue'
  // import ApprovalSetting from '@/components/ApprovalSetting.vue'
  import BreadcrumbApproval from '@/components/Breadcrumb-Approval.vue'



  export default {
    name: 'HomeView',
    components: {
   
      VerificationApproval,
      // ApprovalSetting,
      BreadcrumbApproval,
      
     
    }
  }
  </script>
  