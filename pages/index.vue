<template>
  <div>
    <Banner />
    <Campon />
    <Staff />
    <Access />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/Banner.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Banner },
})
</script>
