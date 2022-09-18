<template>
  <LeftRightMainContent>
    <MenuBox slot="mainContent" />
  </LeftRightMainContent>
</template>
<script lang="ts">
import Vue from 'vue'
import LeftRightMainContent from '~/components/LeftRightMainContent.vue'

export default Vue.extend({
  name: 'MenuPage',
  components: { LeftRightMainContent },
})
</script>
