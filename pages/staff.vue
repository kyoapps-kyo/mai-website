<template>
  <LeftRightMainContent>
    <template slot="tag">
      <p class="text-center text-white text-[22px] mt-6">
        女の子全員20、30代保証
      </p>
    </template>
    <template slot="mainContent">
      <div>
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
      </div>
      <Slogan />
    </template>
  </LeftRightMainContent>
</template>
<script lang="ts">
import Vue from 'vue'
import LeftRightMainContent from '~/components/LeftRightMainContent.vue'

export default Vue.extend({
  name: 'StaffPage',
  components: { LeftRightMainContent },
})
</script>
