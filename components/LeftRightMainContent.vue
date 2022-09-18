<template>
  <div class="w-full bg-[#202020] py-[100px]">
    <div class="lg:w-[1200px] mx-auto flex justify-between">
      <div class="w-[409px] sticky top-0 self-start">
        <p class="text-[32px] text-[#ffd100]">予約電話</p>
        <p class="text-[32px] text-[#ffd100] bulintext">090-9846-8392</p>
        <slot name="tag"></slot>
      </div>
      <div class="w-[791px]">
        <slot name="mainContent"></slot>
      </div>
    </div>
  </div>
</template>
