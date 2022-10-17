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
          name="ココ"
          age="24"
          status="-"
          content="とてもいい意味で容姿も距離感も身近に感じられる「彼女にしたい系」の可愛らしいセラピストさん。気遣い上手で接客もとっても好評です！ 素直で明るい彼女となら、優しい癒しのお時間を過ごせることでしょう♪"
        >
          <template slot="staffImage">
            <img src="~/assets/images/staff4.jpg" alt="" />
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
