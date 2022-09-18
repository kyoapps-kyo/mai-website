<template>
  <div>
    <div class="banner h-[720px] w-full">
      <div class="h-[720px] lg:w-[1200px] mx-auto relative">
        <div
          class="absolute top-1/2 mt-[-174px] h-[348px] w-[984px] left-1/2 ml-[-492px] bg-opacity-[0.5] bg-black"
        >
          <img
            class="absolute right-[86px] w-[200px] h-[301px] top-1/2 mt-[-150px]"
            src="~/assets/images/word.png"
            alt=""
          />
          <div
            class="h-[260px] w-[594px] flex flex-col justify-between mt-[34px] ml-[78px]"
          >
            <p class="goldtext w-[432px] h-[70px] leading-[70px] text-[48px]">
              烏丸御池で新開店！
            </p>
            <p
              class="goldtext w-[480px] h-[70px] leading-[70px] text-[48px] ml-[70px]"
            >
              高級リラクゼーション
            </p>
            <p
              class="goldtext w-[480px] h-[70px] leading-[70px] text-[32px] ml-[70px]"
            >
              予約電話<span class="bulintext">090-9846-8392</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
.banner {
  background: url('~/assets/images/banner1.jpg') no-repeat center center / cover;
  background-attachment: fixed;
}

.goldtext {
  background: linear-gradient(
    91.2deg,
    #ffd100 3.49%,
    #ffffff 35.47%,
    #ffd100 99.59%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.bulintext {
  display: inline-block;
  margin-left: 30px;
  font-size: 42px;
  animation: bulin 1s linear infinite alternate;
}

@keyframes bulin {
  from {
    text-shadow: 2px 2px 4px rgb(255, 0, 60);
  }
  to {
    text-shadow: 2px 2px 4px rgb(234, 255, 0);
  }
}
</style>
