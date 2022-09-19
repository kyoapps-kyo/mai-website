<template>
  <div
    class="campon py-[72px] w-full md:min-w-[1200px] bg-[#222222] box-border"
  >
    <div class="md:w-[1200px] md:mx-auto relative">
      <SectionTitle>キャンペーン情報</SectionTitle>
      <div class="md:w-[623px] w-full text-center md:mx-auto relative">
        <img
          class="hidden md:block absolute top-[-36px] left-[-172px] w-[268px] h-[286px]"
          src="~/assets/images/10month.png"
          alt=""
        />
        <p class="text-red-600 text-[42px]">新開店キャンペーン</p>
        <p class="text-[#d6d6d6] text-[24px]">70分泡コース(泡洗体コース限定)</p>
        <p class="text-[#ffd100] text-[42px]">
          <span class="text-red-600 text-[32px] line-through">11,000円</span>
          → 9,000円
        </p>
        <p class="text-[24px] text-[#ffd100]">
          12:00~18:00までにご来店の方限定！
        </p>
        <p class="text-[28px] text-[#fff]">
          今回、10月にご新規来店のお客様に、心を込めたスペシャルな<span
            class="text-red-600"
            >プレゼント</span
          >を、ご用意しました。
        </p>
        <img
          class="mx-auto md:mx-0 md:absolute md:top-[320px] md:right-[-100px] w-[100px] h-[100px]"
          src="~/assets/images/gift.png"
          alt=""
        />
        <p class="text-[24px] text-[#fff]">
          他割引サービスとの併用は不可です。
        </p>
      </div>
      <div class="h-[1px] w-full bg-[#d6d6d6] my-[47px]"></div>
      <div class="h-[298px] w-full md:w-[1042px] mx-auto">
        <p class="text-[#ffd100] md:text-[42px] text-[26px]">
          お客様応援キャンペーン
        </p>
        <div class="text-[24px] text-[#d6d6d6] md:w-max mx-auto">
          <p>
            100分泡コース・・・・・・通常<br class="md:hidden block" /><span
              class="line-through"
              >14,000円</span
            ><span
              class="text-[28px] md:text-[42px] text-[#ffd100] inline-block mx-[20px]"
              >→</span
            ><span class="text-[28px] md:text-[42px] text-red-600"
              >割引価格12,000円</span
            >
          </p>
          <p>
            130分泡コース・・・・・・通常<br class="md:hidden block" /><span
              class="line-through"
              >17,000円</span
            ><span
              class="text-[28px] md:text-[42px] text-[#ffd100] inline-block mx-[20px]"
              >→</span
            ><span class="text-[28px] md:text-[42px] text-red-600"
              >割引価格15,000円</span
            >
          </p>
        </div>
        <p class="text-center w-full text-[#ffd100] md:text-[24px] text-[18px]">
          18:00までにご来店のお客様
        </p>
      </div>
    </div>
  </div>
</template>

<style scope>
.campon p {
  margin: 28px 0;
}
.bigtext {
  text-decoration: none;
}
</style>
