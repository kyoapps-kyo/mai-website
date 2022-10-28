<template>
  <div class="py-8 md:py-20 bg-black md:min-w-[1200px] md:w-full">
    <div class="md:w-[1200px] mx-auto">
      <sectionTitle class="md:mb-10 mb-6">新着情報</sectionTitle>
      <div
        class="mx-auto w-min h-[300px] overflow-scroll px-4 md:px-6 flex flex-col gap-y-4 md:gap-y-8"
      >
        <InfoBox>
          <template slot="date">2022 - 10 - 28</template>
          <template slot="title"
            >★優しいセラピストによる癒しを提供しております★</template
          >
          <template slot="active"
            >当店はお客様にくつろげる空間と優しいセラピストによる癒しを提供しております。</template
          >
          <template slot="content"
            >お客様の気分に合わせたコースが選べるように多彩なコースをご用意致しております。毎日お忙しいビジネスマンの方へこの機会にゆっくりマッサージを受けてみませんか？施術には自信を持っていますのでぜひお越しください。</template
          >
        </InfoBox>
        <InfoBox>
          <template slot="date">2022 - 10 - 24</template>
          <template slot="title">新人レナちゃん入りました！</template>
          <template slot="active"
            >新人レナ 26歳 163cm
            Fカップ（可愛い、明るい、日本語が上手、サービスすごくいい、）</template
          >
          <template slot="content"
            >★★癒され美人★★当店新人入店です！！マッサージ技術が抜群！技術、愛情を込めて、お客様に満足させる子です♪是非、ご来店ください。ご予約電話お待ちしております！</template
          >
        </InfoBox>
        <InfoBox>
          <template slot="date">2022 - 10 - 18</template>
          <template slot="title">祝新開店『舞』お客様大感謝中！！</template>
          <template slot="active"
            >皆さんこんにちは！今回、10月にご新規来店のお客様に、心を込めたスペシャルなプレゼントを、ご用意しました。</template
          >
          <template slot="content"
            >当店はお客様にくつろげる空間と優しいセラピストによる癒しを提供しております。疲れは溜まってからでは遅いです！いろいろなタイプのセラピストが在籍しておりますので、きっとあなた好みの女性がいるはずですよ♪楽しい時間をお過ごしくださいね！</template
          >
        </InfoBox>
      </div>
    </div>
  </div>
</template>
