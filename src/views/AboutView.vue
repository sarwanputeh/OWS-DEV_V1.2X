<template>
  <div class="home">
    <ConditionSearch />
    <HelloWorld/>
    

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ConditionSearch  from '@/components/ConditionSearch.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ConditionSearch 
   
  }
}
</script>
