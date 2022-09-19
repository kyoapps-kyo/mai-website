<template>
  <div class="bg-[#000] md:min-w-[1200px] w-full">
    <div class="lg:w-[1200px] lg:mx-auto py-[72px]">
      <SectionTitle>スタッフ情報</SectionTitle>
      <StaffCard
        name=" ゆゆ"
        age="28"
        status="-"
        content="見事なボディースタイルに色艶のある美人セラピストです。経験も長くマッサージはすごく上手です。とくにお客様一人一人に合わせた強弱のバランスが抜群ですよ。指名のお客様も多く疲れてる方、癒やしの欲しい方、どちらのお客様にもオススメです！"
      >
        <template slot="staffImage">
          <img src="~/assets/images/staff1.jpg" alt="" />
        </template>
      </StaffCard>
      <StaffCard
        name=" リリ"
        age="26"
        status="-"
        content="穏やかな性格に明るく社交的な品のある整った美形セラピストです！ニッコリと笑った笑顔がとってもキュートです! 時に可愛く…時に大人っぽく…若さの中に大人の色気を感じるセラピストさん！"
      >
        <template slot="staffImage">
          <img src="~/assets/images/staff2.jpg" alt="" />
        </template>
      </StaffCard>
      <StaffCard
        name=" ななみ"
        age="27"
        status="-"
        content="とてもいい意味で容姿も距離感も身近に感じられる「彼女にしたい系」の可愛らしいセラピストさん。気遣い上手で接客もとっても好評です！ 素直で明るい彼女となら、優しい癒しのお時間を過ごせることでしょう♪"
      >
        <template slot="staffImage">
          <img src="~/assets/images/staff3.jpg" alt="" />
        </template>
      </StaffCard>
      <div
        class="staff-info md:w-[900px] w-full h-[303px] border-4 border-[#ffd100] mx-auto mt-[120px] relative"
      >
        <img
          class="md:w-[226px] md:h-[226px] w-[80px] h-[80px] absolute md:top-[-80px] md:left-[-100px] opacity-80"
          src="~/assets/images/rose2.png"
          alt=""
        />
        <img
          class="md:w-[200px] md:h-[200px] w-[60px] absolute md:bottom-[-70px] bottom-0 right-0 md:right-[-100px] opacity-80"
          src="~/assets/images/rose2.png"
          alt=""
        />
        <div
          class="absolute top-1/2 md:left-1/2 mt-[-105px] md:ml-[-156px] w-full md:w-[312px] h-[210px] text-center text-[#d6d6d6] text-[24px] leading-[34.75px]"
        >
          20代、30代美女専門店！<br />
          極上の癒し体験保証！<br />
          追加料金一切なし！<br />
          時間短縮なし！<br />
          仕事中の携帯弄り一切なし！<br />
          お客様を騙す行為一切なし！<br />
        </div>
      </div>
      <div class="mt-[56px] text-center px-4 md:px-0">
        <p class="text-[#ffd100] md:text-[18px] text-[16px]">
          ○当店はクレジットカード払、PayPay使用可です。
        </p>
        <p class="text-[#d6d6d6] md:text-[18px] text-[16px] mt-8">
          ※当店は、風俗店ではありません。お客様に対して癒しと休息を提供するお店です。
        </p>
      </div>
      <div
        class="taisai-box h-[332px] md:w-[900px] w-full box-border mx-auto mt-[56px] text-center text-[24px] text-white pt-[41px]"
      >
        <p class="text-[32px]">新型コロナウイルス対策</p>
        <p class="mt-[22px]">
          セラピストたちは毎日検温<br />
          手洗い（消毒）とうがいの徹底<br />
          ドアノブなどの徹底消毒<br />
          高性能空気清浄機の設置<br />
          施術間の換気とアルコール消毒<br />
        </p>
      </div>
    </div>
  </div>
</template>

<style scope>
.taisai-box {
  background: url('~/assets/images/taisaibg.png') no-repeat center center /
    cover;
}
</style>
