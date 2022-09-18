<template>
  <div class="bg-[#000]">
    <div class="lg:w-[1200px] lg:mx-auto py-[72px]">
      <SectionTitle>スタッフ情報</SectionTitle>
      <StaffCard />
      <div
        class="staff-info w-[900px] h-[303px] border-4 border-[#ffd100] mx-auto mt-[120px] relative"
      >
        <img
          class="w-[226px] h-[226px] absolute top-[-80px] left-[-100px] opacity-80"
          src="~/assets/images/rose2.png"
          alt=""
        />
        <img
          class="w-[200px] h-[200px] absolute bottom-[-70px] right-[-100px] opacity-80"
          src="~/assets/images/rose2.png"
          alt=""
        />
        <div
          class="absolute top-1/2 left-1/2 mt-[-105px] ml-[-156px] w-[312px] h-[210px] text-center text-[#d6d6d6] text-[24px] leading-[34.75px]"
        >
          20代、30代美女専門店！<br />
          極上の癒し体験保証！<br />
          追加料金一切なし！<br />
          時間短縮なし！<br />
          仕事中の携帯弄り一切なし！<br />
          お客様を騙す行為一切なし！<br />
        </div>
      </div>
      <div class="mt-[56px] text-center">
        <p class="text-[#ffd100] text-[18px]">
          ○当店はクレジットカード払、PayPay使用可です。
        </p>
        <p class="text-[#d6d6d6] text-[18px] mt-8">
          ※当店は、風俗店ではありません。お客様に対して癒しと休息を提供するお店です。
        </p>
      </div>
      <div
        class="taisai-box h-[332px] w-[900px] box-border mx-auto mt-[56px] text-center text-[24px] text-white pt-[41px]"
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
