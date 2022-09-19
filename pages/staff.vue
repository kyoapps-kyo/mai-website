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
          class="mt-0"
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
      </div>
      <div class="mt-[10px] text-center px-4 md:px-0">
        <p class="text-[#ffd100] md:text-[18px] text-[16px]">
          ○当店はクレジットカード払、PayPay使用可です。
        </p>
        <p class="text-[#d6d6d6] md:text-[18px] text-[16px] mt-8">
          ※当店は、風俗店ではありません。お客様に対して癒しと休息を提供するお店です。
        </p>
      </div>
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
