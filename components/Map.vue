<template>
  <div class="mx-auto w-max">
    <iframe
      class="hidden md:block"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.24561325274658!2d135.7613919354226!3d35.00846207008786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001088556159387%3A0x933c7a3bc25e554b!2z44CSNjA0LTgxMzEg5Lqs6YO95bqc5Lqs6YO95biC5Lit5Lqs5Yy66I-x5bGL55S677yT77yWIOODl-ODqeOCtuOCs-ODqeODoA!5e0!3m2!1sja!2sjp!4v1663513176413!5m2!1sja!2sjp"
      :width="width"
      :height="height"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div
      class="mt-[20px] w-max mx-auto text-[#d6d6d6] text-[18px] md:text-[24px] pb-[100px]"
    >
      <p class="underline">
        <a href="https://goo.gl/maps/9bcQ9jni6Dd6F3HF7" target="blank"
          >京都市中京区三条通東洞院東入菱屋町36
          <br class="block md:hidden" />プラザコラムビル501</a
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  width: Number,
  height: Number,
})
</script>
