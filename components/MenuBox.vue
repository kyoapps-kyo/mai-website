<template>
  <div class="menu-box box-border md:w-[791px] md:h-[1169px] text-white">
    <h2 class="md:text-[36px] text-[24px] text-center my-[64px]">メニュー</h2>
    <div class="menu-text-box">
      <p>お試しコース</p>
      <p>
        30分<span class="hidden md:inline">・・・・・・・・・・・</span
        >・・・・3,000円
      </p>
    </div>
    <div class="line"></div>
    <div class="menu-text-box px-4 md:px-0">
      <p>オイルコース</p>
      <p>
        60分<span class="hidden md:inline">・・・・・・・・・・・</span
        >・・・・8,000円
      </p>
      <p>
        90分<span class="hidden md:inline">・・・・・・・・・・・</span
        >・・・・11,000円
      </p>
      <p>
        120分<span class="hidden md:inline">・・・・・・・・・・・</span
        >・・・14,000円
      </p>
    </div>
    <div class="line"></div>
    <div class="menu-text-box">
      <p>泡泡洗体コース</p>
      <p>
        70分<span class="hidden md:inline">・・・・・・・・・・・</span
        >・・・・11,000円
      </p>
      <p>
        100分<span class="hidden md:inline">・・・・・・・・・・・</span
        >・・・14,000円
      </p>
      <p>
        130分<span class="hidden md:inline">・・・・・・・・・・・</span
        >・・・17,000円
      </p>
    </div>
  </div>
</template>
<style scope>
.menu-box {
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
  background: url('~/assets/images/rose4.png') no-repeat bottom 100px right 60px /
      444px 444px,
    url('~/assets/images/rose2.png') no-repeat top 100px left 60px / 200px 200px;
  --tw-bg-opacity: 0.6;
}

.line {
  margin: 40px auto;
  width: 176px;
  height: 4px;
  background: linear-gradient(
    105.5deg,
    #ffffff 0%,
    #ffb800 22.91%,
    #ffffff 52.13%,
    #ffb800 80.3%,
    #ffffff 100%
  );
}
.menu-text-box {
  text-align: justify;
  width: max-content;
  margin: 0 auto;
}
.menu-text-box p {
  width: 100%;
  margin-top: 40px;
  font-size: 24px;
  text-align: justify;
}
</style>
