<template>
  <ul
    class="flex w-[357px] md:w-[480px] h-[48px] justify-between items-center text-[#d6d6d6] text-center md:text-[14px] text-[10px] font-bold"
  >
    <li class="w-[70px] md:w-[90px] h-[24px] leading-[24px]">
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li class="w-[70px] md:w-[90px] h-[24px] leading-[24px]">
      <NuxtLink to="menu">メニュー</NuxtLink>
    </li>
    <li class="w-[70px] md:w-[90px] h-[24px] leading-[24px]">
      <NuxtLink to="staff">スタッフ</NuxtLink>
    </li>
    <li class="w-[70px] md:w-[90px] h-[24px] leading-[24px]">
      <NuxtLink to="access">アクセス</NuxtLink>
    </li>
    <li class="ml-[14px] h-[24px] leading-[24px]">
      <NuxtLink to="jobs">求人情報</NuxtLink>
    </li>
  </ul>
</template>
<style scope>
ul > li {
  border-right: 2px solid #d6d6d6;
}

ul > li:last-child {
  border-right: none;
}
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #fff700;
}
</style>
