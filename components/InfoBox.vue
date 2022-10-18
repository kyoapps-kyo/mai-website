<template>
  <div class="md:w-[700px] w-[340px] py-4 px-6 border card">
    <p class="text-red-500 mb-4">NEWS</p>
    <p class="text-gray-300"><slot name="date"></slot></p>
    <p class="text-red-400"><slot name="title"></slot></p>
    <p class="text-yellow-300"><slot name="active"></slot></p>
    <p class="text-gray-200"><slot name="content"></slot></p>
  </div>
</template>

<style scoped>
.card {
  border: 3px solid;

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
</style>
