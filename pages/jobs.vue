<template>
  <LeftRightMainContent>
    <template slot="mainContent">
      <div class="w-[791px] pl-20 box-border">
        <p class="text-center text-[32px] text-[#ffd100]">求人情報</p>
        <p class="text-[24px] text-[#ffd100] mt-[32px]">
          只今、「舞」では女性エスティシャンを急募しております。<br />
          -高収入・高待遇・店内環境良好-
        </p>
        <p class="jobs-info">
          資格：<br />
          20歳〜30歳位　※未経験者可<br />
          経験者100、住込み希望者、初心者も大歓迎！
        </p>
        <p class="jobs-info">
          給与：<br />
          歩合制、日払い可、面接時に詳しく説明致します。
        </p>
        <p class="jobs-info">
          勤務時間：<br />
          シフト制、早番・遅番有り／一日4時間以上働ける方
        </p>
        <p class="jobs-info">
          勤務地：<br />
          京都市中京区三条通東洞院東入菱屋町36 プラザコラムビル
        </p>
        <p class="jobs-info">
          応募：<br />
          面接は随時行っておりますので、まずはお電話にてお気軽にお問い合わせ下さい。
        </p>
        <p class="text-[24px] text-[#ffd100] mt-[32px]">
          問合せ電話：<br />
          090-9846-8392
        </p>
      </div>
    </template>
  </LeftRightMainContent>
</template>
<script lang="ts">
import Vue from 'vue'
import LeftRightMainContent from '~/components/LeftRightMainContent.vue'

export default Vue.extend({
  name: 'JobsPage',
  components: { LeftRightMainContent },
})
</script>

<style scope>
.jobs-info {
  margin: 24px 0;
  font-size: 24px;
  color: #d6d6d6;
  line-height: 50px;
}
</style>
