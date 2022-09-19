<template>
  <div
    class="card md:w-[791px] md:h-[474px] box-border mx-4 md:mx-auto my-24 relative p-4 md:p-0 overflow-hidden"
  >
    <div
      class="staff-img md:w-[256px] md:h-[336px] w-[200px] h-[260px] bg-gray-100 md:mt-[47px] mt-[20px] md:ml-[49px] md:mr-[20px] mx-auto md:mx-0 md:float-left"
    >
      <slot name="staffImage"></slot>
    </div>
    <div
      class="text-box mt-[47px] py-2 md:pr-20 text-[16px] text-[#d6d6d6] md:float-right md:w-[400px] z-10"
    >
      <p class="flex justify-between">
        <span>名前: {{ name }}</span
        ><span>年齢: {{ age }}</span>
      </p>
      <p class="w-full text-right text-green-500">状態: {{ status }}</p>
      <p class="mt-[42px]">お店から一言：</p>
      <p class="mt-[10px]">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: String,
  age: String,
  status: String,
  content: String,
})
</script>

<style scope>
.card {
  border: 10px solid;

  border-image: linear-gradient(
      105.5deg,
      #ffffff 0%,
      #ffb800 22.91%,
      #ffffff 52.13%,
      #ffb800 80.3%,
      #ffffff 100%
    )
    1;
}
.text-box {
  background: url('~/assets/images/rose4.png') no-repeat center center / contain;
}
</style>
