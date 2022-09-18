<template>
  <LeftRightMainContent>
    <template slot="tag">
      <p class="text-center text-white text-[22px] mt-6">
        女の子全員20、30代保証
      </p>
    </template>
    <template slot="mainContent">
      <div>
        <StaffCard class="mt-0" />
        <StaffCard />
        <StaffCard />
      </div>
    </template>
  </LeftRightMainContent>
</template>
<script lang="ts">
import Vue from 'vue'
import LeftRightMainContent from '~/components/LeftRightMainContent.vue'

export default Vue.extend({
  name: 'StaffPage',
  components: { LeftRightMainContent },
})
</script>
