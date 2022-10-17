<template>
  <div class="mx-auto w-max">
    <iframe
      class=""
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1147.3965652109323!2d135.76107671523786!3d35.00919028949807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010926e5b97bcb%3A0x69c80ccadc4482ab!2z6Iie!5e0!3m2!1sja!2sjp!4v1666046754614!5m2!1sja!2sjp"
      :width="width"
      :height="height"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div
      class="mt-[20px] w-[220px] md:w-max mx-auto text-[#d6d6d6] text-[16px] md:text-[24px] pb-[100px]"
    >
      <p class="underline">
        <a href="https://goo.gl/maps/9bcQ9jni6Dd6F3HF7" target="blank">
          京都市中京区三条通東洞院東入菱屋町36 プラザコラムビル501
        </a>
      </p>
      <p class="mt-4 md:mt-6 leading-[20px] md:leading-[50px]">
        烏丸線「烏丸御池」出口５番　徒歩３分
      </p>
      <p class="leading-[30px] md:leading-[50px]">
        京都東西線「烏丸御池」出口５番　徒歩３分
      </p>
      <p class="leading-[30px] md:leading-[50px]">阪急京都線「烏丸」徒歩５分</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onBeforeMount } from 'vue'
const props = defineProps({
  width: Number,
  height: Number,
})
const width = ref()
const height = ref()

onBeforeMount(() => {
  let windowWidth = window.innerWidth
  console.log(windowWidth)
  console.log('typeof is ' + typeof width.value)
  if (width.value == undefined)
    if (windowWidth < 1200) {
      width.value = 320
      height.value = 320
    } else {
      width.value = 700
      height.value = 700
    }
})
</script>
