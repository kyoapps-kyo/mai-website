<template>
  <LeftRightMainContent>
    <Map slot="mainContent" />
    <template slot="mainMap">
      <div class="hidden"></div>
    </template>
  </LeftRightMainContent>
</template>
<script lang="ts">
import Vue from 'vue'
import LeftRightMainContent from '~/components/LeftRightMainContent.vue'

export default Vue.extend({
  name: 'AccessPage',
  components: { LeftRightMainContent },
})
</script>
