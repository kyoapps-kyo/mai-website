<template>
  <div class="w-full bg-[#202020] md:py-[100px] py-[40px]">
    <div class="lg:w-[1200px] mx-auto md:flex md:justify-between">
      <div class="hidden md:block w-[409px] sticky top-0 self-start">
        <p class="text-[32px] text-[#ffd100]">予約電話</p>
        <p class="text-[32px] text-[#ffd100] bulintext">090-9846-8392</p>
        <slot name="tag"></slot>
      </div>
      <div class="md:w-[791px] w-full">
        <slot name="mainContent"></slot>
        <slot name="mainMap">
          <p class="text-center mt-20 text-[#d6d6d6] text-[18px]">アクセス</p>
          <Map class="mt-10" />
        </slot>
      </div>
    </div>
  </div>
</template>
