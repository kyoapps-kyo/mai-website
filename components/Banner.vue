<template>
  <div>
    <div class="banner md:h-[720px] md:min-w-[1200px]">
      <div
        class="h-[300px] md:h-[720px] w-full lg:w-[1200px] md:mx-auto relative"
      >
        <div
          class="absolute top-1/2 md:mt-[-174px] mt-[-220px] h-[440px] md:h-[348px] md:w-[984px] w-full md:left-1/2 md:ml-[-492px] md:bg-opacity-[0.5] md:bg-black"
        >
          <img
            class="absolute md:right-[86px] md:w-[200px] md:h-[301px] w-[100px] h-[150px] md:top-1/2 md:mt-[-150px] top-[20px] right-1/2 mr-[-50px] hidden md:block"
            src="~/assets/images/word.png"
            alt=""
          />
          <div
            class="md:h-[260px] md:w-[594px] flex flex-col justify-center items-center md:items-stretch md:justify-between md:mt-[34px] md:ml-[78px] w-full h-full font-bold"
          >
            <p
              class="goldtext md:w-[432px] md:h-[70px] leading-[70px] text-[36px] md:text-[48px]"
            >
              烏丸御池で新開店！
            </p>
            <p
              class="goldtext md:w-[480px] md:h-[70px] leading-[70px] text-[36px] md:text-[48px] md:ml-[70px]"
            >
              高級リラクゼーション
            </p>
            <p
              class="goldtext md:w-[480px] md:h-[70px] leading-[70px] md:text-[26px] text-[32px] md:ml-[70px]"
            >
              <span class="hidden md:inline">予約電話</span
              ><span class="bulintext md:ml-[30px] md:text-[42px] text-[36px]"
                >090-6677-1888</span
              >
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

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.bulintext {
  display: inline-block;
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
