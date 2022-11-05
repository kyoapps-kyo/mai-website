<template>
  <div class="bg-[#000] md:min-w-[1200px] w-full">
    <div class="lg:w-[1200px] lg:mx-auto py-[72px]">
      <SectionTitle>スタッフ情報</SectionTitle>
      <StaffCard
        name="ミキ"
        age="28"
        status="-"
        content="清楚な容姿とおしとやかな雰囲気をもったセラピストです。彼女の明るい性格は会話も弾むこと間違いなしっ！エステ経験者ならではのまじめな技術に身体をほぐれることでしょう♪ご予約お待ち致しております。"
      >
        <template slot="staffImage">
          <img src="~/assets/images/staff7.jpg" alt="" />
        </template>
      </StaffCard>
      <StaffCard
        name=" レナ"
        age="26"
        status="-"
        content="心まで癒されるような、ほんわりとした雰囲気での施術をお求めなら彼女が的確ではないでしょうか。そんな癒しの部分が目立つ彼女ですが、目を見張るほどのスタイルの持ち主でもあります。明るい性格なので必ず楽しいお時間が過ごせる事でしょう。"
      >
        <template slot="staffImage">
          <img src="~/assets/images/staff6.jpg" alt="" />
        </template>
      </StaffCard>
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
        name=" もも"
        age="29"
        status="-"
        content="リラックスして、楽しい時間を過ごしたいという方に是非おすすめのセラピストです。綺麗なルックスにバランスの取れたスタイル。とても明るい性格と熟練の施術、落ち着いた雰囲気から生まれる癒しの時間を体感ください。"
      >
        <template slot="staffImage">
          <img src="~/assets/images/staff3.jpg" alt="" />
        </template>
      </StaffCard>
      <StaffCard
        name=" ゆみ"
        age="28"
        status="-"
        content="心まで癒されるような、ほんわりとした雰囲気での施術をお求めなら彼女が的確ではないでしょうか。そんな癒しの部分が目立つ彼女ですが、目を見張るほどのスタイルの持ち主でもあります。"
      >
        <template slot="staffImage">
          <img src="~/assets/images/staff5.jpg" alt="" />
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
      <div
        class="taisai-box h-[332px] md:w-[900px] w-full box-border mx-auto mt-[56px] text-center text-[24px] text-white pt-[41px]"
      >
        <p class="text-[32px]">新型コロナウイルス対策</p>
        <p class="mt-[22px]">
          セラピストたちは毎日検温<br />
          手洗い（消毒）とうがいの徹底<br />
          ドアノブなどの徹底消毒<br />
          <span class="hidden">高性能空気清浄機の設置<br /></span>
          施術間の換気とアルコール消毒<br />
          マスクを着用して施術<br />
        </p>
      </div>
      <Slogan />
    </div>
  </div>
</template>

<style scope>
.taisai-box {
  background: url('~/assets/images/taisaibg.png') no-repeat center center /
    cover;
}
</style>
