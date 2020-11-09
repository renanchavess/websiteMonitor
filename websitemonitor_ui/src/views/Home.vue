<template>
  <div class="container">
    <div class="row">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import CreateSite from '@/components/Site/CreateSiteComponent.vue'
import ListSite from '@/components/Site/ListSiteComponent.vue'
export default {
  name: 'Home',
  components: {
    CreateSite,
    ListSite
  }
}
</script>
