// stylist_test ------------------------------------------------------------
// 이미지 폴더 내의 모든 PNG 파일 가져오기
// const testStylistContext = require.context("./stylist_test", false, /\.png$/);
// const testStylistReviewContext = require.context(
//   "./stylist_test/review_images",
//   false,
//   /\.png$/,
// );
// const testStylistPersonalContext = require.context(
//   "./stylist_test/personal_images",
//   false,
//   /\.png$/,
// );
// // context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
// const testStylistPngFiles = testStylistContext.keys();
// const testStylistReviewPngFiles = testStylistReviewContext.keys();
// const testStylistPersonalPngFiles = testStylistPersonalContext.keys();
// // pngFiles 배열을 사용하여 각 이미지를 import
// const testStylistImages = testStylistPngFiles.map(testStylistContext);
// const testStylistReviewImages = testStylistReviewPngFiles.map(
//   testStylistReviewContext,
// );
// const testStylistPersonalImages = testStylistPersonalPngFiles.map(
//   testStylistPersonalContext,
// );
// -------------------------------------------------------------------------

// stylist_test ------------------------------------------------------------
// 이미지 폴더 내의 모든 PNG 파일 가져오기
const suyeongStylistContext = require.context(
  "./stylist_suyeong",
  false,
  /\.png$/,
);
const suyeongStylistReviewContext = require.context(
  "./stylist_suyeong/review_images",
  false,
  /\.png$/,
);
const suyeongStylistPersonalContext = require.context(
  "./stylist_suyeong/personal_images",
  false,
  /\.png$/,
);
const suyeongStylistContentContext = require.context(
  "./stylist_suyeong/content_images",
  false,
  /\.png$/,
);
// context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
const suyeongStylistPngFiles = suyeongStylistContext.keys();
const suyeongStylistReviewPngFiles = suyeongStylistReviewContext.keys();
const suyeongStylistPersonalPngFiles = suyeongStylistPersonalContext.keys();
const suyeongStylistContentPngFiles = suyeongStylistContentContext.keys();

// pngFiles 배열을 사용하여 각 이미지를 import
const suyeongStylistImages = suyeongStylistPngFiles.map(suyeongStylistContext);
const suyeongStylistReviewImages = suyeongStylistReviewPngFiles.map(
  suyeongStylistReviewContext,
);
const suyeongStylistPersonalImages = suyeongStylistPersonalPngFiles.map(
  suyeongStylistPersonalContext,
);
const suyeongStylistContentImages = suyeongStylistContentPngFiles.map(
  suyeongStylistContentContext,
);
// -------------------------------------------------------------------------

// stylist_test ------------------------------------------------------------
// 이미지 폴더 내의 모든 PNG 파일 가져오기
const jenfloxStylistContext = require.context(
  "./stylist_jenflox",
  false,
  /\.png$/,
);
const jenfloxStylistReviewContext = require.context(
  "./stylist_jenflox/review_images",
  false,
  /\.png$/,
);
const jenfloxStylistPersonalContext = require.context(
  "./stylist_jenflox/personal_images",
  false,
  /\.png$/,
);
// context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
const jenfloxStylistPngFiles = jenfloxStylistContext.keys();
const jenfloxStylistReviewPngFiles = jenfloxStylistReviewContext.keys();
const jenfloxStylistPersonalPngFiles = jenfloxStylistPersonalContext.keys();
// pngFiles 배열을 사용하여 각 이미지를 import
const jenfloxStylistImages = jenfloxStylistPngFiles.map(jenfloxStylistContext);
const jenfloxStylistReviewImages = jenfloxStylistReviewPngFiles.map(
  jenfloxStylistReviewContext,
);
const jenfloxStylistPersonalImages = jenfloxStylistPersonalPngFiles.map(
  jenfloxStylistPersonalContext,
);
// -------------------------------------------------------------------------

// stylist_wooklas ------------------------------------------------------------
// 이미지 폴더 내의 모든 PNG 파일 가져오기
const wooklasStylistContext = require.context(
  "./stylist_wooklas",
  false,
  /\.png$/,
);
const wooklasStylistReviewContext = require.context(
  "./stylist_wooklas/review_images",
  false,
  /\.png$/,
);
const wooklasStylistPersonalContext = require.context(
  "./stylist_wooklas/personal_images",
  false,
  /\.png$/,
);
const wooklasStylistContentContext = require.context(
  "./stylist_wooklas/content_images",
  false,
  /\.png$/,
);

// context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
const wooklasStylistPngFiles = wooklasStylistContext.keys();
const wooklasStylistReviewPngFiles = wooklasStylistReviewContext.keys();
const wooklasStylistPersonalPngFiles = wooklasStylistPersonalContext.keys();
const wooklasStylistContentPngFiles = wooklasStylistContentContext.keys();
// pngFiles 배열을 사용하여 각 이미지를 import
const wooklasStylistImages = wooklasStylistPngFiles.map(wooklasStylistContext);
const wooklasStylistReviewImages = wooklasStylistReviewPngFiles.map(
  wooklasStylistReviewContext,
);
const wooklasStylistPersonalImages = wooklasStylistPersonalPngFiles.map(
  wooklasStylistPersonalContext,
);
const wooklasStylistContentImages = wooklasStylistContentPngFiles.map(
  wooklasStylistContentContext,
);
// -------------------------------------------------------------------------

// stylist_joskn ------------------------------------------------------------
// 이미지 폴더 내의 모든 PNG 파일 가져오기
const josknStylistContext = require.context("./stylist_joskn", false, /\.png$/);
const josknStylistReviewContext = require.context(
  "./stylist_joskn/review_images",
  false,
  /\.png$/,
);
const josknStylistPersonalContext = require.context(
  "./stylist_joskn/personal_images",
  false,
  /\.png$/,
);
// context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
const josknStylistPngFiles = josknStylistContext.keys();
const josknStylistReviewPngFiles = josknStylistReviewContext.keys();
const josknStylistPersonalPngFiles = josknStylistPersonalContext.keys();
// pngFiles 배열을 사용하여 각 이미지를 import
const josknStylistImages = josknStylistPngFiles.map(josknStylistContext);
const josknStylistReviewImages = josknStylistReviewPngFiles.map(
  josknStylistReviewContext,
);
const josknStylistPersonalImages = josknStylistPersonalPngFiles.map(
  josknStylistPersonalContext,
);
// -------------------------------------------------------------------------

// stylist_bokyeom ------------------------------------------------------------
// 이미지 폴더 내의 모든 PNG 파일 가져오기
const bokyeomStylistContext = require.context(
  "./stylist_bokyeom",
  false,
  /\.png$/,
);
const bokyeomStylistReviewContext = require.context(
  "./stylist_bokyeom/review_images",
  false,
  /\.png$/,
);
const bokyeomStylistPersonalContext = require.context(
  "./stylist_bokyeom/personal_images",
  false,
  /\.png$/,
);
const bokyeomStylistContentContext = require.context(
  "./stylist_bokyeom/content_images",
  false,
  /\.png$/,
);
// context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
const bokyeomStylistPngFiles = bokyeomStylistContext.keys();
const bokyeomStylistReviewPngFiles = bokyeomStylistReviewContext.keys();
const bokyeomStylistPersonalPngFiles = bokyeomStylistPersonalContext.keys();
const bokyeomStylistContentPngFiles = bokyeomStylistContentContext.keys();
// pngFiles 배열을 사용하여 각 이미지를 import
const bokyeomStylistImages = bokyeomStylistPngFiles.map(bokyeomStylistContext);
const bokyeomStylistReviewImages = bokyeomStylistReviewPngFiles.map(
  bokyeomStylistReviewContext,
);
const bokyeomStylistPersonalImages = bokyeomStylistPersonalPngFiles.map(
  bokyeomStylistPersonalContext,
);
const bokyeomStylistContentImages = bokyeomStylistContentPngFiles.map(
  bokyeomStylistContentContext,
);
// -------------------------------------------------------------------------

// stylist_jenny ------------------------------------------------------------
// 이미지 폴더 내의 모든 PNG 파일 가져오기
const jennyStylistContext = require.context("./stylist_jenny", false, /\.png$/);
const jennyStylistReviewContext = require.context(
  "./stylist_jenny/review_images",
  false,
  /\.png$/,
);
const jennyStylistPersonalContext = require.context(
  "./stylist_jenny/personal_images",
  false,
  /\.png$/,
);
const jennyStylistContentContext = require.context(
  "./stylist_jenny/content_images",
  false,
  /\.png$/,
);
// context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
const jennyStylistPngFiles = jennyStylistContext.keys();
const jennyStylistReviewPngFiles = jennyStylistReviewContext.keys();
const jennyStylistPersonalPngFiles = jennyStylistPersonalContext.keys();
const jennyStylistContentPngFiles = jennyStylistContentContext.keys();
// pngFiles 배열을 사용하여 각 이미지를 import
const jennyStylistImages = jennyStylistPngFiles.map(jennyStylistContext);
const jennyStylistReviewImages = jennyStylistReviewPngFiles.map(
  jennyStylistReviewContext,
);
const jennyStylistPersonalImages = jennyStylistPersonalPngFiles.map(
  jennyStylistPersonalContext,
);
const jennyStylistContentImages = jennyStylistContentPngFiles.map(
  jennyStylistContentContext,
);
// -------------------------------------------------------------------------

export const stylistDB = {
  jenfloxStylist: {
    profile: jenfloxStylistImages[0].default.src,
    thumbnail: jenfloxStylistImages[1].default.src,
    name: "현표",
    comment: "누가보아도 예쁠 절대미 : 깔끔&무난함",
    instagramId: "maison_jenflox",
    avgGrade: "5.0",
    consultingAmount: "3",
    styleTags: ["깔끔함", "무난함", "은은한 개성 한방울", "남친룩", "꾸안꾸"],
    aboutMe: [
      "온오프라인 도합 50명 이상에게 맞춤코디 제공 경험",
      "패션릴스 도합 1200만뷰 이상",
      "스트릿을 제외한 모든 남자스타일 커버 가능",
    ],
    forWho: [
      "개성의 추구보다는 누구에게나 호불호 없는 스타일로 입고 싶으신 분들",
      "기본 스타일에 개성을 한스푼 담은 깔끔하고 무난한 룩을 원하시는 분들",
      "어떻게 입어서야 할 지 감이 안오시는 대학생분들",
      "어떻게 입어서야 할 지 어려움을 겪고 계신 직장인분들",
      "패션에 이제 막 입문하셔서 아무것도 모르겠는 패린이분들",
    ],
    phillosophy: [
      "저는 여러분의 목적에 따른 니즈, 그리고 그에 대한 해소로써 스타일링을 도와드립니다.",
      "",
      "어떤 분은 자기에게 잘어울리는 스타일을 찾아서, 남의 시선과 상관없이 입고 싶으신 분이 계실 수 있고,",
      "어떤 분은 이성분들께 어필이 될 만한 외적인 요소를 업그레이드하기 위해서 스스로를 꾸미고 싶으신 분도 계실 수 있고,",
      "어떤 분은 옷을 제대로 사입고 다니신 경험이 없어서 자신에 직업에 맞는 코디들을 알맞게 갖추었으면 하시는 분들도 계실 수 있습니다.",
      "스타일링을 신청해주시는 분들의 니즈는 각각 다 다르기 때문에, 일반화 할 수 없고 각각에 목적에 맞게 맞춤화 되어야 한다고 생각하며, ",
      "저는 그에 맞게 여러분의 필요와 제가 권장드리는 사항들을 알맞게 절충시킨 내용으로 맞춤형 스타일링을 도와드립니다.",
    ],
    personalImageList: jenfloxStylistPersonalImages.map(
      (curr) => curr.default.src,
    ),
    reviewList: [
      {
        reviewer: "손**",
        date: "23.09.23",
        grade: "5.0",
        comment:
          "항상 물려받거나 사다주시는 옷만 입어왔어서, 직접 옷을 사게 되는 것은 처음이었는데 제 스펙과 외모에 맞는 옷들을 이유와 함께 하나씩 다 골라주셔서 너무 편하고 유익한 옷구매를 할 수 있었던 것 같아요. 앞으로 어떻게 발전시켜나가면 될지도 친절하게 조곤조곤 알려주셔서 좋았습니다. 원래는 옷차림에 신경을 아예 쓰지 않았었지만, 상담 이후에는 패션에 대한 관심도 많이 올라가서 알려주신 내용들을 바탕으로 옷을 더 구매하기도하고, 인스타에 올려주신 릴스나 코디 조합같은 컨텐츠들도 참고하면서 정말 많이 배우게 된 것 같습니다. 옷만 좀 바꿔입었을 뿐인데, 부모님도 좋아하시고 주변에서도 달라졌다는 말을 많이 들어서 기분이 오묘하게 좋기도 합니다.",
        imageList: [
          jenfloxStylistReviewImages[0].default.src,
          jenfloxStylistReviewImages[1].default.src,
          jenfloxStylistReviewImages[2].default.src,
        ],
      },
      {
        reviewer: "김**",
        date: "23.08.12",
        grade: "5.0",
        comment:
          "저의 외모와 체형, 예산까지 고려해서 아주 책임감있게 서비스해주셨습니다. 이것저것 사소한 질문들도 다 받아주셨고 더 궁금하거나 필요한 점은 없는지도 계속 물어봐주셔서, 극i인 저도 너무 편하게 상담할 수 있었던 것 같습니다. 허벅지가 두꺼워서 고민이었는데, 바로 해결책을 제시해주셨고 체형상의 장점인 상체 근육을 돋보이게하는 사소한 코디방법들도 계절별로 알려주셔서 정말 많이 배워가는 것 같습니다. 당시는 돈이 많이 없어서 가격대도 굉장히 낮게 책정한 편인데, 어떻게 하신건지 할인하는 제품들 중에 퀄리티가 높은 옷들 위주로 찾아주셔서 입어봤을 때도 정말 기분이 좋았습니다. 이런 서비스가 처음이라서 후회하지는 않을까 걱정했는데, 후회 절대안하고 곧 또 방문예정입니다. 정말 감사해요!!!",
        imageList: [
          jenfloxStylistReviewImages[3].default.src,
          jenfloxStylistReviewImages[4].default.src,
        ],
      },
      {
        reviewer: "이**",
        date: "23.04.16",
        grade: "5.0",
        comment:
          "진짜 그냥 골라주시는 그대로 따라 입으면 되네요… 제 오랜 고뇌를 모두 해소시켜주셨어요.. 패션에 대해 관심도 없고, 잘 입고 싶다는 욕심도 없었어서 곧 전역인데 입을 옷도 없고, 어떻게 입고 다녀야할 지도 모르겠다 정도로만 제 상태를 말씀드렸는데, 그냥 알아서 다 해주셨습니다… 힙한 걸 선호하는 지 깔끔한 걸 선호하는 지라던가 신발은 뭐가 있는 등 간단한 몇 개 질문 후에, 입문할 때는 어떤 옷이 좋고 앞으로는 어떤 옷을 사면되는 지 제 예산과 상황에 맞게 다 정해주셔서 너무 편했습니다. 또 하나라도 더 도움을 주시려고 꼼꼼하게 상담해주시는 것이 제겐 아주 인상적이었습니다. 지금은 따로 코디 서비스를 진행하지 않으셔서 운영하시는 인스타를 많이 참고하면서 최대한 따라입고 있습니다!",
        imageList: [
          jenfloxStylistReviewImages[5].default.src,
          jenfloxStylistReviewImages[6].default.src,
          jenfloxStylistReviewImages[7].default.src,
          jenfloxStylistReviewImages[8].default.src,
        ],
      },
    ],
    contentsList: [
      // {
      //   id: 0,
      //   title: "<b>후드티를 더 멋있게 입는 방법</b>",
      //   text: "박진수 스타일리스트님의 스타일링 팁",
      //   type: "image",
      //   image: jenfloxStylistImages[1].default.src,
      //   link: "",
      // },
      // {
      //   id: 1,
      //   title: "<b>잠깐</b>, 아직 스타일링을 안받아봤다면?",
      //   text: "00 님을 위한 추천 컨텐츠를 확인해보세요!",
      //   type: "image",
      //   image: jenfloxStylistImages[1].default.src,
      //   link: "",
      // },
    ],
  },
  bokyeomStylist: {
    profile: bokyeomStylistImages[0].default.src,
    thumbnail: bokyeomStylistImages[1].default.src,
    name: "보겸",
    comment: "가장 나다운 나를 찾아가는 여정",
    instagramId: "_sure_me_",
    avgGrade: "5.0",
    consultingAmount: "6",
    styleTags: ["올드머니룩", "자신감있는", "세련된", "심플모던", "고급스러움"],
    aboutMe: [
      "(현) 슈어미 대표, 슈어아이엠 공동대표",
      "국내 남성복 패션브랜드 수석디자이너",
      "퍼스널컬러 컨설턴트 1급",
      "동행쇼핑 및 퍼스널컬러 진단 다수 진행 (유투버, 국회의원, 기업대표, 기업임원 등)",
      "동(전) 패션그룹형지 디자인팀",
      "(전) LF 디자인팀",
      "(전) 세정 I&C 디자인팀",
    ],
    forWho: [
      "자신의 매력포인팅 코디를 찾고 싶었던 직장인",
      "전문성을 보여주고 싶은 전문직 종사자",
      "취업을 위해 자신감있는 면접복이 필요했던 분",
      "소개팅룩, 데이트룩 (매력 어필)",
      "좋은 이미지를 만들고 싶은 사업가",
      "신뢰감을 주고 싶은 영업직 종사자",
      "숨겨진 패션감각을 찾고 싶었던 컴퓨터프로그래밍 관련 IT 계열 종사자",
    ],
    phillosophy: [
      "패션은 자신을 잘 아는것부터 시작입니다!",
      "남이 보는 나, 스스로 생각하는 나의 차이가 클수록 패션은 어려워져요.",
      "간극을 줄이는게 중요한데,",
      "그러기위해선 자신의 있는 모습 그대로속의 매력을 찾아 멋지게 꽃피워야합니다. ",
      "당신의 자신감을 충족시킬 패션을 분명하게 제안하겠습니다!",
    ],
    personalImageList: bokyeomStylistPersonalImages.map(
      (curr) => curr.default.src,
    ),
    reviewList: [
      {
        reviewer: "김**",
        date: "23.12.23",
        grade: "5.0",
        comment:
          "패알못으로서 무난한 옷들만 구매하다가 제 스타일을 찾고 싶어서 신청했어요! 패션컨설팅을 진행하는 곳이 많지 않아서 검색을 많이 하다가 고수님 컨설팅의 좋은 리뷰들을 보고 홀린 듯이 신청했는데 결론적으로 정말 만족하고 강추합니다>.< \\n저는 단순히 체형, 퍼스널컬러에 맞는 컨설팅을 해주시는줄 알았는데 체형과 퍼스널컬러는 물론이고 대화를 통해서 제 이미지를 파악하시고 거기에 맞는 코디와 브랜드를 추천해 주시더라구요. 너무 획기적이고 좋았어요!! 특히 브랜드 추천은 자아 없이 지그재그, 무신사 상위 랭킹 옷만 사던 제게 신세계였어요,,, 평생 모르고 살 뻔했는데 너무 제 스타일의 옷이어서 당분간 지갑 조심해야 할 것 같아요 (이미 하나 지름) 그리고 내향적인 성격 때문에 초면에 대화를 잘 못하는 편인데도 고수님께서 대화를 편하게 이끌어주시는 덕분 에 시간이 후딱 가있었고 나중엔 언니라고 부르고 싶을 정도로 깊은 대화를 하고 있더라구여,,, 고민하지 마시고 신청하셨음 좋겠어요! 상담 너무 감사드리고 또 뵈어용! 새해 복 많이 받으세요~~",
        imageList: [bokyeomStylistReviewImages[0].default.src],
      },
      {
        reviewer: "남**",
        date: "23.10.25",
        grade: "5.0",
        comment:
          "오늘 퍼스널컬러, 패션컨설팅 받았습니다 일단 아주 대만족합니다. 나의 옷입을때 장점,단점을 제가 생각할때 뭔가 감은 있지만, 정확히 알지 못하였는데 퍼스널컬러 패션컨설팅을 듣고 아 이래서 내가 이 옷 입었을 때 이런 느낌이 들었구나 정확히 알려주셨습니다. 최대한 세련되며 고급스러운 분위기를 풍기는게 저의 목표였는데 생각보다 어렵지 않게 이룰 수 있을것같아서 너무 좋습니다. 오늘 여성을 만났는데 패션과 얼굴에 조화가 잘 맞아 엑소 수호 닮은거같다고해서 처음 듣는 연예인이라 누군지 몰라, 검색해보니 내가 느끼게 하고 싶었던 고급스러운 분위기라 완전 1000프로 만족합니다. 무한 경쟁시대에서 나의 최대의 외모 장점을 끌어낼수있는 무조건 들어야 되는 강의 !!",
        imageList: [bokyeomStylistReviewImages[1].default.src],
      },
      {
        reviewer: "백**",
        date: "23.10.25",
        grade: "5.0",
        comment:
          "선생님이 너무 친절하시구? 패션도 관심 많아서 이것저것 물어봤는데도 다 대답 해주시고. 완전 고민 해결입니다!! 제 스타일을 더 찾을 수 있는 기회가 됐고 다음부터 쇼핑에 바로 참고 할 수 있게끔 딱 뭐가 잘 어울리고 이건 좀 피해야한다 자세한 설명 너무 감동이었어요!~ 분위기도 좋고 너무 재밌었습니다 감사합니다!!:)",
        imageList: [],
      },
      {
        reviewer: "황**",
        date: "23.10.25",
        grade: "5.0",
        comment:
          "편안한 분위기에서 상담이 진행되었습니다! 평소에 애매해서 고민되었던 부분들을 전문적으로 알기 쉽게 설명해주셔서 궁금했던 부분이 모두 해결되었습니다! 상담 진행 전 진행 주제에 대한 개념과 이유를 범용적으로 알 수 있는 예시로 설명해주셔서 개념이 어느 정도 이해된 상태로 상담이 진행되었습니다. 덕분에 이해도도 올라간 느낌이 들었습니다! 정말 유익하고 도움되는 내용이었습니다. 정말 강력하게 추천합니다ㅠㅠ",
        imageList: [],
      },
      {
        reviewer: "하**",
        date: "23.10.25",
        grade: "5.0",
        comment:
          "패션에 대해서 알고싶었고 특히 저의 스타일에 맞춤형 옷을 입고 싶었습니다. 리뷰 및 고용횟수등 인증된 그대로 입니다. 저도 만점 만족도 드리며 전문가답게 정확하게 저의 강점을 살려주셨습니다. 온라인컨설팅도 도움되었지만 같이 동행하면서 하시는걸 강추드립니다. 이분께 진행하면 후회는 없습니다. 이상입니다.",
        imageList: [],
      },
      {
        reviewer: "황**",
        date: "23.10.25",
        grade: "5.0",
        comment:
          "처음에 만나면 대화로 시작해서 사람의 성향을 끌어내시고 그에 대한 얘기들로 시간가는줄 몰랐는데 그러는 사이 저를 아주 잘 간파하시고 그에 맞는 니즈를 충족시켜주십니다. 적당히 어느선에서 타협하지 않고 저와 쌤 모두 만족하는 코디를 끝끝내 찾았고 아주 만족스러운 결과물을 얻게 되었습니다. 후에 남겨주시는 결과물또한 차후 혼자서 옷을 고름에 있어서 좋은 가이드라인을 제시해주심으로써 패션레벨 0에서 한단계 두단계 세단계 진화할 수 있을거같습니다. 보통 초반중간마무리 중에 한곳이라도 부족한부분이 생기기마련인데 그런부분없이 만족했습니다! 이미지 변화를 시도하고 싶으신 분들께 추천드립니다!",
        imageList: [],
      },
    ],
    contentsList: [
      {
        id: 0,
        title: "<b>나만의 착붙스타일 찾기?! <나처럼 옷입기></b>",
        text: "패션은 자기의 표현이자 선택이다.",
        type: "image",
        image: bokyeomStylistContentImages[0].default.src,
        link: "",
        content: [
          {
            subTitle: "패션은 자기의 표현이자 선택이다. ",
            images: [bokyeomStylistContentImages[0].default.src],
            content:
              "패션은 자기의 표현이자 선택이다. 누군가가 옷을 어떻게 입어야 할지 모르겠다고 말한다면 거울을 보고 자기 자신부터 연구하라고 이야기 하겠다.이처럼 패션은 자신을 꾸미는 사치스러운 소비이기전,많은 유명디자이너들의 생각처럼 철학적 관점으로 보게되면 패션은 삶의 방향성, 가치관이다. 자신이 주로 생각하고 추구하는 삶의 방향성에 맞게 옷을 입게 되기 때문이다. 직업군에 따라,취향에 따라, 지역, 성별, 나이대에 따라 패션은 다르다. 이 부분을 곰곰히 생각하다보면 자신만의 생각하는 인생이 어떤것인지 느낄 수 있을 것이다",
          },
          {
            subTitle: "나를 아는 것이 우선이다.",
            images: [bokyeomStylistContentImages[1].default.src],
            content:
              "그리고 **<나만의 착붙스타일>**을 찾는다 할 때 먼저 자신에 대한 정보가 많아야한다. 내가 추구하는 이미지에 대한 정보, 나의 객관적인 분위기에 대한 정보, 나의 채형에 대한 정보, 나의 피부톤에 대한 정보, ...등등 다양한 정보가 있어야 내가 나에게 패션을 입힐 수 있는 시작점이 된다. 그리고 스타일은 '짠'하고 만들어지는건 아니다. 모든 예술도 그렇듯, **감흥 & 영감 -> 모방 -> 변형 -> 재창조**: 보고 느낀 후 그것을 유사하게 나의 방식대로 재창조하는 것! **<나만의 착붙스타일>**을 찾는 방식과도 묘하게 닮아있다. 패션은 매번 완전 새로운것을 창조해내는것이 아니라, 컬러와, 핏, 소재들이 조금씩 변화하면서 새로운 요소가 접목된다. 오래 전 스타일(레트로)이 다시 트랜드를 이끌기도 한다.",
          },
          {
            subTitle: "최대한 많은 스타일을 시도해보자.",
            images: [bokyeomStylistContentImages[2].default.src],
            content:
              "이처럼 <나만의 착붙스타일>이란? 많이 입어보고 느껴보면서 나라는 사람은 어떤 사람일지 생각해보고 그 정보와 연결된 스타일을 모방하여 입어도보며 나의 분위기와 개성, 체형에 맞는 스타일을 찾는 것! 패션은 나를 표현하는 수단이라고 하는데, 그러나 많은 사람들은 말과 행동으로 나를 표현할 수 있다고 생각한다. 그러나 패션을 통하여 나의 내면의 생각을 나타낼 수 있다. 자신감 넘치는 나 --> 당당한 분위기와 어울리는 아이템 표현 (셔츠, 구두, 시계...) 섬세하고 따뜻한 나 --> 부드러운 컬러와 소재의 스타일 표현 세련되고 시크한 나 --> 모노톤의 심플한 룩으로 표현 그렇다면 나는 어떤 매력과 분위기를 가진 사람일지 생각해보는거 어떨까? 그렇게 해서 <나만의 착붙스타일> 찾아보자!",
          },
        ],
      },
    ],
  },
  wooklasStylist: {
    profile: wooklasStylistImages[0].default.src,
    thumbnail: wooklasStylistImages[1].default.src,
    name: "현욱",
    comment: "0부터 시작하는, 이성에게 사랑받는 스타일링",
    instagramId: "wooklas",
    avgGrade: "5.0",
    consultingAmount: "6",
    styleTags: ["무채색", "미니멀", "남친룩", "소프트", "악세사리"],
    aboutMe: [
      "(전) 연 매출 5억 원 쇼핑몰 CEO",
      "20K 인스타그램 패션 인플루언서",
      "1년 차 온라인 패션 컨설턴트",
    ],
    forWho: [
      "나의 체형과 이미지에 맞는 스타일을 찾고싶은 분",
      "소개팅/데이트 전 스타일 변화가 필요하신 분",
      "요즘 트렌드에 맞는 스타일링을 원하시는 분",
    ],
    phillosophy: [
      "단지, 몰라서 손해보고 사는 남성들이 너무 많습니다.",
      "어떤 환경에서든 우리는 항상 선택에 놓이곤 하는데,",
      "상향평준화 된 시대에 우리가 선택 받기 위해서는",
      "사소한 1-2개의 디테일을 챙겨야만 하죠. ",
      "패션이 바로 정답입니다.",
      "또한, 좋은 첫 인상을 결정하는 요소가 외모가 아니라 옷차림과, 말투일 수도 있다는 사실을 알 수 있습니다.",
      "충분히 누릴 자격 있는 당신이 변할 차례입니다.",
    ],
    personalImageList: wooklasStylistPersonalImages.map(
      (curr) => curr.default.src,
    ),
    reviewList: [
      {
        reviewer: "궡**",
        date: "23.03.04",
        grade: "5.0",
        comment:
          "제가 워낙에 꾸밀줄을 몰랐어서 갑자기 스타일을 바꾸기에 겁이 났었는데 제 체형에 맞게 부담스럽지 않은 코디들로 추천해주시고 무엇보다도 저랑 잘 어울릴 수있게 고민을 많이 해주셨다는 느낌을 받아서 너무 만족했습니다. 너무 친절하게 이것저것 알려주시려고해서 상담 받는동안에도 기분이 좋았네요 :) 봄에 입을 옷들로 코디해달라고 요청드린것도 적극 반영해주시고 평소에 잘 몰랐던 브랜드들도 알게되어서 좋았습니당",
        imageList: [],
      },
      {
        reviewer: "김**",
        date: "23.03.30",
        grade: "5.0",
        comment:
          "저의 체형이 어떤지 잘 설명해 주시고 친절하게 설명해 주셔서 너무 좋았어요~! 스타일링 방법과 추천해 주신 코디들도 너무 마음이 들었어요 ㅎㅎ",
        imageList: [],
      },
      {
        reviewer: "검**",
        date: "23.05.19",
        grade: "5.0",
        comment:
          "전문가분께 객관적인 컨설팅을 받아보니 확실히 새로운 코디를 도전해볼수 있게끔 자신감이 생겼습니다 감사합니다!",
        imageList: [],
      },
      {
        reviewer: "검**",
        date: "23.05.23",
        grade: "5.0",
        comment:
          "수정 요청에도 흔쾌히 수락하시고, 제가 원하는 방향대로 코디해 주셔서 정말 좋았습니다! 컨설팅 내내 답변도 빨리 빨리 주시고, 친절하셔서 감사했어요. 믿고 맡겨보시길 추천합니다!!",
        imageList: [],
      },
      {
        reviewer: "루**",
        date: "23.11.14",
        grade: "5.0",
        comment:
          "정말 만족합니다! 제 지인이 스타일링 컨설팅 받는다면 여기 추천해줄거에요",
        imageList: [],
      },
      {
        reviewer: "유**",
        date: "24.01.16",
        grade: "5.0",
        comment:
          "정말 친절하시고 신속하게 맘에 쏙들게 패션을 분석해주셨어요. 다음에 또 이용할게요. 현생 일이 바빠서 미루다가 확인을 늦게 했네요.",
        imageList: [],
      },
    ],
    contentsList: [
      {
        id: 0,
        title: "<b>마른 남자 성공 스타일링</b>",
        text: "봉태규님 사복패션으로 보는 마른 남자 성공 스타일링",
        type: "image",
        image: wooklasStylistContentImages[1].default.src,
        link: "",
        content: [
          {
            subTitle: "멸치 탈출 이것만 시도해보세요.",
            images: [wooklasStylistContentImages[0].default.src],
            content:
              "첫번째 칼럼으로 '마른 남자 스타일링'이라는 키워드를 선택한 이유는, 제가 몇 년 전까지만 해도 183cm/60kg 마른 남자 포지션을 담당해왔기에, 이 경험을 바탕으로 많은 분들에게 도움 될 수 있는 칼럼을 남길 수 있다고 생각했습니다. 이 글을 읽는 당신은 이미 주변에서 어좁이 프레임이 씌어져 있을지도 모릅니다. 결론부터 말씀드리자면 지금부터 나오는 딱 3가지만 명심하면, 마른 남자, 어좁이, 멸치 프레임에서 벗어나실 수 있습니다.",
          },
          {
            subTitle: "첫째, 기억하세요! 세미오버핏 그리고 오버핏",
            images: [wooklasStylistContentImages[1].default.src],
            content:
              "간혹 이런 질문을 주시는 분들이 계세요. '마른 모델들은 딱 맞는 옷 많이 입던데요?' 확실히 이야기하겠습니다. 여러분은 모델도 모델지망생도 아닙니다. 마른 남성 모델들은 직업의 특성상 몸이 길어보이고 말라보여야 하기에 딱 붙는 옷을 많이 착용합니다. 하지만 일반 마른 남자들은 그럴 필요가 전혀없죠. 오히려 더 말라보일 수록 '만나고 싶지 않은 남자 1순위' 에 오를지도 모르죠. 이처럼 레귤러핏,슬림핏 같이 몸에 딱 맞는 핏의 의류들은 왜소한 남자들에게 가장 치명적인 독이 됩니다.",
          },
          {
            subTitle: "",
            images: [
              wooklasStylistContentImages[2].default.src,
              wooklasStylistContentImages[3].default.src,
            ],
            content:
              "앞서 배우 봉태규님을 예시로 들었는데, 봉태규님 최근 스타일에서 해당 사진을 제외한 대부분의 착장이 앞으로 설명해드릴 체형보완에 기반한 코디를 하고 계셨습니다. Q1. 레귤러핏과 슬림핏 금지X, 그럼 어떻게 해야될까요? 정답은 세미오버핏 그리고 오버핏입니다.",
          },
          {
            subTitle: "",
            images: [
              wooklasStylistContentImages[4].default.src,
              wooklasStylistContentImages[5].default.src,
            ],
            content:
              "레귤러핏 스타일링과 확연히 달라져 넓어진 실루엣이 보이시나요? 네. 맞습니다. 100% 정답인 스타일링을 한 착장을 보고계세요. 레귤러핏은 왜소한 신체를 적나라하게 보여주지만, 오버핏은 착용하면 왜소한 어깨부터 허리까지 완벽하게 보완해주어 마른 체형을 보완해줍니다. 이처럼 옷을 선택할 때 나에게 어떤 핏이 될 지 고려하며, 세미오버핏/오버핏 의류를 착용한다면 어좁이 체형을 완벽히 보완하여 봉태규님처럼 멋있게 남성적이며 귀여운 코디 전부 연출하실 수 있습니다.",
          },
          {
            subTitle: "둘째, 두꺼운 소재와 다양한 레이어드",
            images: [wooklasStylistContentImages[6].default.src],
            content:
              "얇은 재질의 의류를 단독으로 착용하면 첫째로 설명드린 세미오버핏/오버핏 효과를 넣어도 마른 몸이 적나라하게 들어날 수 있습니다. 그 이유는 (세미오버핏/오버핏) 체형보완 , (얇은소재 착용) 체형악화로 장단점이 서로 상충되어 결국 마른 몸매가 드러나게 됩니다. 최대한 가리고 숨겨야 하는 시점에서 소재의 얇아짐과 단독 착용은 더욱 더 몸을 드러낼 수 밖에 없습니다.",
          },
          {
            subTitle: "",
            images: [
              wooklasStylistContentImages[7].default.src,
              wooklasStylistContentImages[8].default.src,
            ],
            content:
              "따라서 마른 체형을 가진 사람은 반드시 두꺼운 소재와 레이어드를 통한 스타일링을 하셔야 합니다. 두꺼운 소재는 말 그대로 입체감 있는 의류를 선택하여 시각적으로 커보이고 넓어보이는 착시효과를 주어 우리의 마른 체형을 보완해줍니다. 레이어드는 여러겹 입을 수록 두꺼워 보이는 효과를 줄 수 있으며, 또한 시각적으로 품안에 비어있는 부분을 메워주는 덕분에 긍정적인 체형보완 효과를 낼 수 있어 마른 남자 스타일링으로 소개합니다.",
          },
          {
            subTitle: "",
            images: [
              wooklasStylistContentImages[9].default.src,
              wooklasStylistContentImages[10].default.src,
            ],
            content:
              "이처럼 두꺼운 소재와 레이어드 뿐만 아니라, 첫째 솔루션 세미오버핏 그리고 오버핏을 함께 고려하여 코디를 한다면 훨씬 더 좋은 보완 효과를 누리실 수 있습니다. 이정도만 해도 충분히 어좁이 탈출이 가능하다는 생각이 들지 않으신가요? Q2.여름에는 레이어드도 못하고 두꺼운 소재도 못 입는데 어떻게 하나요? 물론 여름에도 보완할 수 있는 좋은 방법이 있습니다. 이에 대한 자세한 칼럼은 여름이 되기전 자세히 다뤄 작성하겠습니다.",
          },
          {
            subTitle: "셋째, 어두운 색보다는 밝은 색이 답이다!",
            images: [wooklasStylistContentImages[11].default.src],
            content:
              "검정색 계열의 어두운 의류는 시각적으로 피사체를 왜소해 보이게 만드는 색깔의 특성이 있습니다. 반대로 밝은 계열의 옷은 피사체를 더욱 크고 넓어보이는 색깔의 특성을 갖고 있습니다.",
          },
          {
            subTitle: "",
            images: [wooklasStylistContentImages[12].default.src],
            content:
              "이렇게 색깔의 디테일한 선택만으로 체형보완의 효과를 낼 수 있다는 사실을 알고 계셨나요? 진정으로 어좁이를 탈출하고 싶으시다면 앞으로 어두운 계열보다는 밝은 계열의 옷으로 옷장을 채워넣으셔야겠죠? 이처럼 오늘 소개해드린 3가지 기본적인 룰을 지키고, 그 안에서 긍정적인 효과끼리 조합하여 더욱 더 좋은 체형 보완 효과를 내실 수 있습니다.",
          },
          {
            subTitle: "",
            images: [],
            content:
              "90퍼센트 이상의 마른 남자들이 위 3가지의 기본적인 룰을 어기고 인생의 대부분을 '어좁이'로 살아왔습니다. 이번 칼럼을 통해 많은 분들이 마른 남자 스타일링의 대한 이해도가 높아졌기를 바라며, 왜소한 몸을 컴플렉스로 생각하시는 분들에게 작게나마 위로와 도움이 되었기를 바랍니다. 마른 남자를 위한 스타일링 방법은 위 3가지 뿐만 아니라 응용 버전으로 더 준비되어 있습니다. 여름이 오기전에 응용 버전 칼럼으로 다시 찾아뵙도록 하겠습니다. 제 칼럼이 많은 분들께 위로와 희망이 되었기를 바라며 세상의 마른 남자들이 당당히 어깨 펴고 살아가셨길 바랍니다. 프라브와 저 정현욱의 기업/개인 가치관입니다. 감사합니다 :)",
          },
        ],
      },
      {
        id: 1,
        title: "<b>22살 키작남 대학생 스타일 코치</b>",
        text: "좋아하는 여자한테 잘 보이는 법",
        type: "image",
        image: wooklasStylistContentImages[13].default.src,
        link: "",
        content: [
          {
            subTitle: "22살 대학생 내담자님",
            images: [wooklasStylistContentImages[13].default.src],
            content:
              "안녕하세요. 프라브 대표 정현욱입니다. 저는 5년 동안 패션 일을 하면서 500여건 넘는 스타일링과 1,000여건 넘는 CS를 해 왔습니다. 그런 제가 가장 의욕이 불타는 내담은 단연코 연애와 관련된 스토리가 엮여 있을 때입니다. 다음은 22살 대학생 내담자님이 직접 작성해 주신 사연입니다. 함께 읽어볼까요?",
          },
          {
            subTitle: "",
            images: [],
            content:
              "지하철에서 항상 보는 여성분이 계시는데, 이번에  스타일링을 받아서 번호 물어보는 것에 도전하고 싶습니다!",
          },
          {
            subTitle: "",
            images: [wooklasStylistContentImages[14].default.src],
            content:
              "20대 초반에 이성 교제 경험이 중요한 것을 경험을 통해 너무 잘 아는 저이기에 이 사연에 정말 공감이 되었습니다. 꼼꼼하게 체형을 분석해서 개선점을 말씀드리고 멋진 스타일링을 만들어 드리려고 합니다 :)",
          },
          {
            subTitle:
              "22세 / 키 168 / 몸무게 62 / 슬렌더 체형 / 무채색 선호 / 어깨 넓어 보이는, 다리 길어 보이는 스타일링",
            images: [wooklasStylistContentImages[15].default.src],
            content:
              "내담자분은 직사각형 체형이셨습니다. 슬림 하게 일자로 떨어지는 직선형 체형이며 상체/하체 비율이 이상적인 체형입니다. 거기다가 슬렌더 체형이라 스타일링만 잘 해 주면 모델 핏, 못 입으면 왜소해 보여 볼품없어 보일 수 있는 체형입니다. 키가 큰 편은 아니기 때문에 다리 길이를 길어 보이게 하는 스타일링과 왜소해 보이는 체형을 커버할 수 있는 스타일링으로 진행할 예정입니다.",
          },
          {
            subTitle: "슬렌더 체형 보완",
            images: [wooklasStylistContentImages[16].default.src],
            content: "슬렌더 체형 보완 솔루션 5가지 중에 2가지만 공개합니다!",
          },
          {
            subTitle: "코디 1 - 깔끔하고 세련된 무채색 남친룩",
            images: [wooklasStylistContentImages[17].default.src],
            content:
              "무채색을 선호하는 취향을 반영해서 검정색의 바지, 구두, 벨트로 무게감을 잡고 회색 니트, 네이비 골덴 패딩으로 색감 조합을 만들었습니다. 아우터와 니트 모두 크롭한 기장감으로 다리가 길어 보이는 효과가 있습니다. 이너로 있는 회색 니트는 래글런 디테일로 어깨선 구분이 없어 어깨가 더욱 넓어 보이는 효과를 줍니다. 골덴 팬츠는 보온성 뿐만 아니라 롱한 기장감을 다리가 길어 보이는 효과를 줍니다.",
          },
          {
            subTitle: "코디 2 - 캐주얼한 감성 캠퍼스룩",
            images: [wooklasStylistContentImages[18].default.src],
            content:
              '"대학생이라면 어떤 옷이 부담스럽지 않고 센스 있게 보일 수 있을까?" 라는 고민으로 코디 구성을 했습니다. 꾸안꾸 스타일링으로 대학생이라는 신분에 맞는 무드를 연출했습니다.',
          },
          {
            subTitle: "180도 스타일 체인지 남성 전문 패션 컨설팅, 프라브",
            images: [wooklasStylistContentImages[20].default.src],
            content:
              "프라브는 나이, 직업, 라이프 스타일을 고려하여 남성들에게 맞춤형 코디와 스타일 솔루션을 제공하고 있습니다. 많은 관심 부탁드립니다. 감사합니다 :D",
          },
        ],
      },
      {
        id: 2,
        title: "<b>여자친구 절대 안생기는 새내기 대학생 패션</b>",
        text: "좋아하는 여자한테 잘 보이는 법",
        type: "image",
        image: wooklasStylistContentImages[21].default.src,
        link: "",
        content: [
          {
            subTitle: "",
            images: [wooklasStylistContentImages[22].default.src],
            content:
              "남자 패션 컨설팅 대표 정현욱 입니다. 두번째 블로그 칼럼으로 인사드려요. 시작의 계절 3월에 많은 행사가 있습니다. 그 중 대학교입학은 빠질 수 없이 중요하죠. 이번 칼럼은 '새내기 남자대학생, 여자친구 생기는 패션' 이라는 주제를 갖고 있습니다. 설레는 마음으로 직접 구매한 새 옷을 입고 학교에 갔는데, 아직 고등학생 티를 벗지 못한 패션감각이 나를 기대와는 다른 캠퍼스 라이프(아싸)로 데려갑니다. 인간관계에서 첫 인상은 극적인 변화가 없다면 끝까지 갑니다. 5분의 투자가 아쉬워서 20대의 가장 소중한 기회를 포기하지 않으셨으면 좋겠네요. 앞으로 소개되는 3단계 룰을 지킨다면, 이 칼럼은 여러분을 '많은 친구를 사귀고, 예쁜 여학우들과 함께하는 풋풋하고 달달한 캠퍼스 라이프'로 데려가줄 수 있습니다. 차분히, 꼼꼼히 칼럼의 내용들을 흡수해서 성공적인 캠퍼스 라이프를 시작하시길 소망합니다.",
          },
          {
            subTitle: "1단계, 뼈 좀 때리겠습니다. 제발 이것들만 하지마세요.",
            images: [wooklasStylistContentImages[23].default.src],
            content:
              "현재 여러분의 패션 상태 진단을 위해 3가지를 소개해드리려고 합니다. 앞으로 나오는 키워드 중 하나라도 해당한다면, 장담하건데 '옷 못 입는 사람' 입니다. 부정하지않고 받아들인다면 오늘 이 글을 통해 '옷 잘 입는 사람'으로 바뀌실 수 있습니다.",
          },
          {
            subTitle: "키워드1. 자기 체형에 안맞는 옷을 입는다.",
            images: [wooklasStylistContentImages[24].default.src],
            content:
              "어깨가 좁고 마른 체형, 전체적으로 살집이 있는 체형, 운동으로 인해 덩치가 큰 체형, 다리가 유독 짧은 체형 등.. 살아온 라이프 스타일에 따라 모든 남자들의 체형은 각자 다릅니다. 따라서, 자신의 체형의 특징과 부족한 점을 파악하고 이를 보완해줄 핏과 컬러를 선택하여 스타일링을 하는 것이 가장 기초이며 중요합니다.",
          },
          {
            subTitle: "",
            images: [],
            content:
              "살집이 있는 체형의 개그맨 조세호씨 스타일 <왼쪽 - 뚱뚱한 체형을 가려주는 오버핏 착장 / 오른쪽 - 체형을 고스란히 보여주는 레귤러핏 착장> 꽉끼는 옷으로 보는 사람에게 부담스럽고 불편함을 느끼게 하는 오른쪽 스타일과 달리 여유있는 오버핏 스타일로 보는 사람을 편하게하고 자연스러운 모습을 볼 수 있습니다. 사진만 봐도 느끼시겠지만 오른쪽처럼 입으시는게 아싸의 지름길이라는게 확 체감되지 않나요? 이렇게 별 것 아닌 사소한 핏의 차이로 보는 사람에게 편안하게 다가갈 수 있고, 반대로 불편하게 다가갈 수 도 있다는 것을 꼭 알아야합니다. 각 체형에 따라오는 보완 솔루션을 앞으로 칼럼을 통해 많이 소개해드릴 예정입니다.",
          },
          {
            subTitle: "키워드2. 이상한 프린팅이 들어간 옷, 이상한 패턴의 양말",
            images: [wooklasStylistContentImages[25].default.src],
            content:
              "혹시 옷장에 각종 동양화가 그려진 화려한 프린팅 상의와 형광색, 하트무늬, 스마일 무늬 양말이 있지 않으신가요? 심지어 그런 옷을 좋아하거나 자주 착용하시나요?",
          },
          {
            subTitle: "",
            images: [
              wooklasStylistContentImages[26].default.src,
              wooklasStylistContentImages[27].default.src,
            ],
            content:
              "예쁜 프린팅이 있는 옷, 패턴 있는 옷.. 물론 예쁜 프린팅, 부담없는 패턴이라면 물론 너무 좋습니다. 그러나 프린팅이 화려해질 수록 프린팅 안에 들어있는 색이 많아지고, 전체적인 밸런스를 맞추는 감각이 없는 상태에서 입으면 자칫 너무 과해질 우려가 분명히 있습니다. 패션에도 명백히 순서가 존재합니다. 기본템과 스몰로고를 고르는 안목으로 시작해서 차근차근 예쁜 패턴과 로고를 찾아가는 것이 좋은 방법입니다.",
          },
          {
            subTitle: "키워드3. 계획없이 유행하는 아이템 따라사기",
            images: [wooklasStylistContentImages[28].default.src],
            content:
              "요즘 유행하는 밈인 '무신사 냄새'를 아시나요? 무신사는 충분히 남성들에게 가치있고, 많은 분들께서 의류를 살 때 애용하는 플랫폼 입니다. 그러나 이런 밈으로 봤을 때 비판적인 부분이 분명 존재합니다. 이런 밈은 결국 클론룩에 대한 비판이라고 생각합니다. 클론룩이란 복제된 것 같은 룩을 의미하는데, 무신사에서 랭킹 1-10위 하는 옷은 상품성이 좋아 많은 남자들이 소비합니다. 이로인해 자연스럽게 대중교통이나 핫플에 갔을 때 무신사 옷으로 겹치는 코디들이 많이 존재하고 (유행하는 제품을 사는 사람 -> 힙하지 않다 -> 무신사 냄새난다) 라는 논리에 빠져 좋은 인상을 주지 못합니다.",
          },
          {
            subTitle: "",
            images: [wooklasStylistContentImages[29].default.src],
            content:
              "또한, 막상 유행하는 아이템을 사면 '도대체 어떤 바지랑 입어야 잘 어울리지?'라는 질문을 스스로하고 계획없이 즉흥적으로 소비한 아이템은 결국 잠옷 또는 장롱행으로 가곤 합니다. 억지로 있는 옷과 맞춰서 입으려고 하다보면 분명히 조화롭지 않은 코디가 나오게 되죠. 이렇게 첫단계로 '이것만 하지마세요'를 소개해드렸습니다. 이중에 해당하는게 있나요? 아니면 애써 외면하지는 않았나요? 여기에 해당하지 않는다면 다행이고, 만약 해당한다고 하더라도 오늘을 시점으로 바뀌면 됩니다. 아직 글을 차분히 읽고 있다면, 당신은 충분히 멋있어질 수 있습니다.",
          },
          {
            subTitle: "2단계, 호불호없고 깔끔한 옷으로 시작해보세요.",
            images: [
              wooklasStylistContentImages[30].default.src,
              wooklasStylistContentImages[31].default.src,
            ],
            content:
              "여자들이 좋아하는 남자 스타일의 대표 키워드는 깔끔함과 꾸안꾸입니다. 실제로 유튜브에 '여자들이 좋아하는 남자패션'이라는 키워드로 검색만 하면 여자들이 좋아하는 블레이져, 깔끔한 자켓, 트렌치 코트, 미니멀한 니트 등 과하지 않고 남친스러운 남친룩 기반의 깔끔한 아이템들을 선호하는 것을 볼 수 있습니다.",
          },
          {
            subTitle: "",
            images: [
              wooklasStylistContentImages[32].default.src,
              wooklasStylistContentImages[33].default.src,
            ],
            content:
              "하트시그널1에 출연하여 남심/여심 전부 흔들며 큰 화제가 된 김현우님의 사복패션에서 볼 수 있듯이 기본에 충실하여 꾸민듯 안꾸민듯한 착장을 보여주었습니다. 남자,여자 전부에게 사랑받을 수 있는 이유는 잘생김 뿐만아니라 호불호 없는 코디에도 있습니다. 이렇듯 여자들이 좋아하는 패션과 누구에게나 사랑받을 수 있는 호불호 없는 코디는 분명히 존재합니다. 이런 정답에 가까운 코디는 여러분의 인간관계와 첫 인상에 긍정적인 효과를 가져다 줍니다. 정확한 방법이 있고 따라만 하면 되는데 이 기회를 외면하실건가요?",
          },
          {
            subTitle: "3단계, 그래서 무슨 옷을 입어야 되는데?",
            images: [wooklasStylistContentImages[34].default.src],
            content:
              "이렇게까지 자세하게 설명을 드려도 초심자에게는 어떤 브랜드와 어떤 쇼핑몰을 이용해야하는지 또다른 벽에 부딪힐 수도 있습니다. 그래서 요리하고 밥상까지 차리고 떠먹여 드리겠습니다. 대학생들을 타겟으로 직접 고민하고 연구한 무신사 냄새 나지 않는 브랜드 리스트 몇 가지를 소개해드립니다. 한번 사서 오래 입을 수 있는 예쁘고,퀄리티 높은 옷을 구매해 나가는 것이 정말 중요합니다! 브랜드 분석과 연구를 통해 핏,퀄리티,가격 3박자 어우러지는 좋은 브랜드로 선정하여 소개해드리니 부디 도움이 되셨길 바랍니다 :)",
          },
          {
            subTitle: "",
            images: [wooklasStylistContentImages[35].default.src],
            content:
              "너무나도 많은 젊은 남성분들이 귀찮고 어렵다는 이유만으로 패션의 변화로 얻을 수 있는 사회적인 효과를 외면한 채 살아갑니다. 칼럼 내용처럼 단지 몇 가지의 변화만으로도 극적인 변화를 이루어 더욱 더 재미있는 캠퍼스 라이프와 사회경험을 할 수 있음을 소개해드렸습니다. 요리해서, 밥상차리고, 밥까지 떠먹여드리는데.. 이래도 귀찮고 어렵다는 핑계로 패션의 변화를 무시한 채 살아가시겠습니까? 제 칼럼이 많은 남성분들의 인생의 좋은 변화와 영향으로 다가가길 바라며, 새로이 대학에 들어가 제2의 인생을 시작하는 새내기 대학생분들을 응원하며 도움이 되었길 진심으로 소망합니다. 프라브와 저 정현욱의 기업/개인의 가치관입니다. 감사합니다 :)",
          },
        ],
      },
    ],
  },
  suyeongStylist: {
    profile: suyeongStylistImages[0].default.src,
    thumbnail: suyeongStylistImages[1].default.src,
    name: "수영",
    comment: "클래식에서 출발해 트렌드까지",
    instagramId: "0__andu",
    avgGrade: "5.0",
    consultingAmount: "4",
    styleTags: ["미니멀", "클래식", "지적인"],
    aboutMe: [
      "프리랜서 개인 스타일리스트 활동 1년",
      "친구들의 소개팅 전에 가장 연락을 많이 받는 남성",
    ],
    forWho: [
      "영화 “리플리 증후군”이 연상되는 클래식한 무드의 착장을 원하시는 분",
      "영화 “해리포터”의 죽음을 먹는자들과 같이 어둡고 미니멀한 착장을 원하시는 분",
      "본인이 어떤 스타일을 원하는지 모르시는 분",
    ],
    phillosophy: [
      "성격과 취향에는 좋고 나쁨이 없습니다. ",
      "다만 확실한것은 본인을 잘 표현하지 못 하는 것보다 잘 표현하는 것이 더 좋습니다. ",
      "나를 원하는 사람들에게 더 효과적으로 나를 표현하며, ",
      "나와 맞지 않은 사람들에게 불필요한 에너지 낭비를 하지 않게 할 것입니다. ",
      "패션과 스타일은 나를 표현하는 가장 강력한 수단 중 하나입니다. ",
      "나를 표현하지 못 해서 잃어가는 기회를 다시 붙잡읍시다. ",
    ],
    personalImageList: suyeongStylistPersonalImages.map(
      (curr) => curr.default.src,
    ),
    reviewList: [
      {
        reviewer: "양**",
        date: "23.12.23",
        grade: "5.0",
        comment:
          "단 시간 내에 다양한 옷들을 입어볼 수 있어서 너무 좋았습니다. 혼자 쇼핑했다면 입어볼 생각 조차 못 했을 옷들도 입어보고 또 서로 다른 스타일들의 옷들을 입어봤더니, 아예 새로운 쇼핑을 혼자서 할 수 있게 되었다고 생각합니다. 물론 이번 쇼핑 다음으로 혼자서 바로 잘 쇼핑하기는 어렵겠지만, 이렇게 조금씩 좋아지는거라고 생각합니다.",
        imageList: [
          suyeongStylistReviewImages[0].default.src,
          suyeongStylistReviewImages[1].default.src,
          suyeongStylistReviewImages[2].default.src,
        ],
      },
      {
        reviewer: "허**",
        date: "23.10.25",
        grade: "5.0",
        comment:
          "개인적인 패션 취향은 있으나 그런 옷들을 어디서 사는 지 몰랐고 유명한 브랜드 외에는 쇼핑 경험이 없어 실제로 사는게 부담스러웠습니다. 내셔널 지오그래픽처럼 라이선스만 가져와 가격이 뛰는 옷 대신 퀄리티 있으면서 가격은 비싸지 않은 브랜드들을 접할 수 있어 쇼핑 폭이 훨씬 넓어졌습니다. 당연히 1회로 끝나지 않고 4계절 내내 이용하고 싶습니다. 코디를 추천해주는 일방향성 소통이 아니라 왜 이렇게 입어야하는지 이유를 알려주기 때문입니다.",
        imageList: [
          suyeongStylistReviewImages[3].default.src,
          suyeongStylistReviewImages[4].default.src,
        ],
      },
      {
        reviewer: "소**",
        date: "23.11.21",
        grade: "5.0",
        comment:
          "안녕하세요 23학번 새내기입니다.. 학창시절 내내 공부만 하느라 옷에 관심이라곤 1도 없었어요. 대학교 오니 다양한 친구들, 선배님들을 만나게 되었는데, 저도 저만의 스타일로 쇼핑하고 싶더라구요.. 평생을 엄마가 사주시는 옷들만 입었다 보니 어디서부터 어떻게 옷을 사야하는지 감이 안왔어요. 덕분에 퀄리티 있으면서 가격은 비싸지 않은 브랜드들을 접할 수 있어서 쇼핑에 대한 두려움이 사라졌어요. 학교가는 길이 괜히 설레더라구요. 옷이 주는 제 내면의 자신감을 체감하고 있어요 :) 저만의 스타일을 만들어가는 것이 마치 저를 찾아가는 여정 것 같아요.",
        imageList: [
          suyeongStylistReviewImages[8].default.src,
          suyeongStylistReviewImages[9].default.src,
        ],
      },
      {
        reviewer: "이**",
        date: "23.10.31",
        grade: "5.0",
        comment:
          "8월 전역해서 이번학기에 복학한 대학생입니다. 원래 옷에 큰 관심이 있었던 것은 아니지만, 이번에 전역을 기점으로 스타일링을 개선해보고 싶었습니다. 그래서 군적금 중 일부를 스타일링 목적으로 반드시 써보고싶다는 버킷리스트(?) 같은 것도 적어뒀어요ㅋㅋ 군 복학생에 대한 이미지가 있다보니 전역 후 복학이 많이 걱정이 됐었는데, 스타일링 클라우드가 그런 걱정을 아예 없애줬어요ㅎㅎ 2년간 옷을 사본 적이 없어서 뭐부터 사야할지 감이 전혀 오지 않았는데, 저의 취향과 제가 어울릴 법한 스타일들을 체계적으로 분석한 결과로 옷과 브랜드를 추천해줘서 그대로 믿고 사입을 수 있었어요! 1회성으로 끝내는게 아니라, 중요한 일정이 있거나, 계절 바뀔때 마다 내내 이용하고 싶어요!",
        imageList: [
          suyeongStylistReviewImages[5].default.src,
          suyeongStylistReviewImages[6].default.src,
          suyeongStylistReviewImages[7].default.src,
        ],
      },
    ],
    contentsList: [
      {
        id: 0,
        title: "<b>Brand Rec. #1 <VDR></b>",
        text: "Permanent Clothing",
        type: "image",
        image: suyeongStylistContentImages[0].default.src,
        link: "",
        content: [
          {
            subTitle: "VDR은",
            images: [suyeongStylistContentImages[1].default.src],
            content:
              "워크웨어, 밀리터리, 아웃도어 등을 포함하여 아메리칸캐주얼이라는 장르안에서 구와 현대를 적절히 재해석한 디자인을 선보이는 브랜드이다. 'Permanent Clothing'을 지향하여 독창적이고 새로운 디자인을 선보일 뿐 아니라, 튼튼한 원단과 재봉법 그리고 클래식함을 잃지 않고 담아내는 브랜드이다.",
          },
          {
            subTitle: "Permanent Clothing",
            images: [suyeongStylistContentImages[2].default.src],
            content:
              "직역하자면 '영구적인 옷' 이라는 말의 뜻은 직역 그대로 이해하면 될 정도로 단순하다. 지금 내가 입게될 이 옷이 수 십년 뒤 할아버지가 된 나에게도 어색하지 않으며, 나의 손자에게도 어색하지 않을 옷을 말한다. 그것을 가능케 하는 것은 한 세대의 유행을 타지 않는 클래식하고 일관된 멋의 디자인 뿐 아니라, 튼튼하고 단단한 옷의 마감일 것이다. VDR은 그것을 정말 잘 해내고 있는 듯 하다. 튼튼한 청바지 봉제법으로 말해지는 쌈솔로 봉제등의 마감을 보이는 VDR의 데님들만 봐도 디자이너분들의 그러한 철학이 느껴지는 듯하다.",
          },
          {
            subTitle: "소비자가 만들어가는 경험",
            images: [suyeongStylistContentImages[3].default.src],
            content:
              "사실 이러한 브랜드의 철학이 의미를 가지기 위해서는 해당 브랜드의 소비자의 경험이 브랜드의 의도를 이해하고 공감해야만 할 것이다. 그런 의미에서 이미 VDR의 지속적인 소비자인 나에게는 VDR의 옷들을 소비하고 장시간 입어본 경험이 그들의 브랜드 철학에 고개를 끄덕이게 만들었다. 그 경험을 기반으로 아주 주관적인 기준에서 VDR을 장식하는 몇 가지 제품들을 추천하고자 한다.",
          },
          {
            subTitle: "FIVE-PCKET CHORE JACKET",
            images: [suyeongStylistContentImages[4].default.src],
            content:
              "초어 자켓은 작업복을 뜻한다. 우리가 흔히 알고 있는 워크웨어를 구성하고 연출할 수 있는 제품 카테고리 중 하나이다. 워크웨어를 구성하는 데님 자켓, 트러커 자켓, 피셔맨 자켓 등 어떠한 워크웨어 자켓들도 초어 자켓으로 말할 수 있지만 특히나 20세기 공장에서 일하는 사람들이 입던 작업복을 주로 초어자켓이라 표현한다. 13oz 데님으로 빳빳하고 묵직하며 독특한 페인팅 및 워싱으로 현대적인 느낌을 주는 멋드러진 초어자켓이다.",
          },
          {
            subTitle: "TANKER JUMPER [Black Night]",
            images: [suyeongStylistContentImages[5].default.src],
            content:
              "VDR의 Best seller 중에서도 Best seller인 Tanker Jumper이다. Restock이 될 때마다 빠른 품절으로 그 인기를 다시금 실감하게 만들어주는 옷이다. 미군 탱크 운전수들의 자켓을 모티브로 하여 보온성을 높이면서도 남성스러운 멋을 잔뜩 살려낸 옷이다. 그럼에도 불구하고 짙은 검정 색감과 크롭한 기장, 포켓의 모양새 그리고 클래식한 버클이 역설적이게 트렌디한 느낌을 준다.",
          },
          {
            subTitle: "122 Wide Straight (Washed Black) sanforized",
            images: [suyeongStylistContentImages[6].default.src],
            content:
              "질 좋은 13oz 데님 원단에 Stone Damage 가공으로 부드러우면서도 질긴 텍스쳐를 주는 청바지이다. 나는 이 바지를 굉장히 좋아한다. 할아버지가 되어서도 입을 수 있는 클래식함을 추구하면서도 현대적인 멋, 트렌디한 멋을 잃지 않는 감각이 그대로 드러난 VDR의 역작이라고 생각한다. 원단이나 제품 마감 그리고 포켓 커버 디테일등에서 클래식함을 충분히 느낄 수 있으면서도 전체적인 실루엣, 기장감, 핏 그리고 톤은 그 어떤 현대적인 무드의 스타일에도 잘 묻어날 수 있는 범용성 높은 바지라고 생각한다.",
          },
        ],
      },
    ],
  },
  // testStylist: {
  //   profile: suyeongStylistImages[0].default.src,
  //   thumbnail: suyeongStylistImages[1].default.src,
  //   name: "수영",
  //   comment: "클래식에서 출발해 트렌드까지",
  //   instagramId: "0__andu",
  //   avgGrade: "5.0",
  //   consultingAmount: "4",
  //   styleTags: ["미니멀", "클래식", "지적인"],
  //   aboutMe: [
  //     "프리랜서 개인 스타일리스트 활동 1년",
  //     "친구들의 소개팅 전에 가장 연락을 많이 받는 남성",
  //   ],
  //   forWho: [
  //     "영화 “리플리 증후군”이 연상되는 클래식한 무드의 착장을 원하시는 분",
  //     "영화 “해리포터”의 죽음을 먹는자들과 같이 어둡고 미니멀한 착장을 원하시는 분",
  //     "본인이 어떤 스타일을 원하는지 모르시는 분",
  //   ],
  //   phillosophy: [
  //     "성격과 취향에는 좋고 나쁨이 없습니다. ",
  //     "다만 확실한것은 본인을 잘 표현하지 못 하는 것보다 잘 표현하는 것이 더 좋습니다. ",
  //     "나를 원하는 사람들에게 더 효과적으로 나를 표현하며, ",
  //     "나와 맞지 않은 사람들에게 불필요한 에너지 낭비를 하지 않게 할 것입니다. ",
  //     "패션과 스타일은 나를 표현하는 가장 강력한 수단 중 하나입니다. ",
  //     "나를 표현하지 못 해서 잃어가는 기회를 다시 붙잡읍시다. ",
  //   ],
  //   personalImageList: suyeongStylistPersonalImages.map(
  //     (curr) => curr.default.src,
  //   ),
  //   reviewList: [
  //     {
  //       reviewer: "양**",
  //       date: "23.12.23",
  //       grade: "5.0",
  //       comment:
  //         "단 시간 내에 다양한 옷들을 입어볼 수 있어서 너무 좋았습니다. 혼자 쇼핑했다면 입어볼 생각 조차 못 했을 옷들도 입어보고 또 서로 다른 스타일들의 옷들을 입어봤더니, 아예 새로운 쇼핑을 혼자서 할 수 있게 되었다고 생각합니다. 물론 이번 쇼핑 다음으로 혼자서 바로 잘 쇼핑하기는 어렵겠지만, 이렇게 조금씩 좋아지는거라고 생각합니다.",
  //       imageList: [
  //         suyeongStylistReviewImages[0].default.src,
  //         suyeongStylistReviewImages[1].default.src,
  //         suyeongStylistReviewImages[2].default.src,
  //       ],
  //     },
  //     {
  //       reviewer: "허**",
  //       date: "23.10.25",
  //       grade: "5.0",
  //       comment:
  //         "개인적인 패션 취향은 있으나 그런 옷들을 어디서 사는 지 몰랐고 유명한 브랜드 외에는 쇼핑 경험이 없어 실제로 사는게 부담스러웠습니다. 내셔널 지오그래픽처럼 라이선스만 가져와 가격이 뛰는 옷 대신 퀄리티 있으면서 가격은 비싸지 않은 브랜드들을 접할 수 있어 쇼핑 폭이 훨씬 넓어졌습니다. 당연히 1회로 끝나지 않고 4계절 내내 이용하고 싶습니다. 코디를 추천해주는 일방향성 소통이 아니라 왜 이렇게 입어야하는지 이유를 알려주기 때문입니다.",
  //       imageList: [
  //         suyeongStylistReviewImages[3].default.src,
  //         suyeongStylistReviewImages[4].default.src,
  //       ],
  //     },
  //     {
  //       reviewer: "소**",
  //       date: "23.11.21",
  //       grade: "5.0",
  //       comment:
  //         "안녕하세요 23학번 새내기입니다.. 학창시절 내내 공부만 하느라 옷에 관심이라곤 1도 없었어요. 대학교 오니 다양한 친구들, 선배님들을 만나게 되었는데, 저도 저만의 스타일로 쇼핑하고 싶더라구요.. 평생을 엄마가 사주시는 옷들만 입었다 보니 어디서부터 어떻게 옷을 사야하는지 감이 안왔어요. 덕분에 퀄리티 있으면서 가격은 비싸지 않은 브랜드들을 접할 수 있어서 쇼핑에 대한 두려움이 사라졌어요. 학교가는 길이 괜히 설레더라구요. 옷이 주는 제 내면의 자신감을 체감하고 있어요 :) 저만의 스타일을 만들어가는 것이 마치 저를 찾아가는 여정 것 같아요.",
  //       imageList: [
  //         suyeongStylistReviewImages[8].default.src,
  //         suyeongStylistReviewImages[9].default.src,
  //       ],
  //     },
  //     {
  //       reviewer: "이**",
  //       date: "23.10.31",
  //       grade: "5.0",
  //       comment:
  //         "8월 전역해서 이번학기에 복학한 대학생입니다. 원래 옷에 큰 관심이 있었던 것은 아니지만, 이번에 전역을 기점으로 스타일링을 개선해보고 싶었습니다. 그래서 군적금 중 일부를 스타일링 목적으로 반드시 써보고싶다는 버킷리스트(?) 같은 것도 적어뒀어요ㅋㅋ 군 복학생에 대한 이미지가 있다보니 전역 후 복학이 많이 걱정이 됐었는데, 스타일링 클라우드가 그런 걱정을 아예 없애줬어요ㅎㅎ 2년간 옷을 사본 적이 없어서 뭐부터 사야할지 감이 전혀 오지 않았는데, 저의 취향과 제가 어울릴 법한 스타일들을 체계적으로 분석한 결과로 옷과 브랜드를 추천해줘서 그대로 믿고 사입을 수 있었어요! 1회성으로 끝내는게 아니라, 중요한 일정이 있거나, 계절 바뀔때 마다 내내 이용하고 싶어요!",
  //       imageList: [
  //         suyeongStylistReviewImages[5].default.src,
  //         suyeongStylistReviewImages[6].default.src,
  //         suyeongStylistReviewImages[7].default.src,
  //       ],
  //     },
  //   ],
  //   contentsList: [
  //     {
  //       id: 0,
  //       title: "<b>Brand Rec. #1 <VDR></b>",
  //       text: "Permanent Clothing",
  //       type: "image",
  //       image: suyeongStylistContentImages[0].default.src,
  //       link: "",
  //       content: [
  //         {
  //           subTitle: "VDR은",
  //           images: [suyeongStylistContentImages[1].default.src],
  //           content:
  //             "워크웨어, 밀리터리, 아웃도어 등을 포함하여 아메리칸캐주얼이라는 장르안에서 구와 현대를 적절히 재해석한 디자인을 선보이는 브랜드이다. 'Permanent Clothing'을 지향하여 독창적이고 새로운 디자인을 선보일 뿐 아니라, 튼튼한 원단과 재봉법 그리고 클래식함을 잃지 않고 담아내는 브랜드이다.",
  //         },
  //         {
  //           subTitle: "Permanent Clothing",
  //           images: [suyeongStylistContentImages[2].default.src],
  //           content:
  //             "직역하자면 '영구적인 옷' 이라는 말의 뜻은 직역 그대로 이해하면 될 정도로 단순하다. 지금 내가 입게될 이 옷이 수 십년 뒤 할아버지가 된 나에게도 어색하지 않으며, 나의 손자에게도 어색하지 않을 옷을 말한다. 그것을 가능케 하는 것은 한 세대의 유행을 타지 않는 클래식하고 일관된 멋의 디자인 뿐 아니라, 튼튼하고 단단한 옷의 마감일 것이다. VDR은 그것을 정말 잘 해내고 있는 듯 하다. 튼튼한 청바지 봉제법으로 말해지는 쌈솔로 봉제등의 마감을 보이는 VDR의 데님들만 봐도 디자이너분들의 그러한 철학이 느껴지는 듯하다.",
  //         },
  //         {
  //           subTitle: "소비자가 만들어가는 경험",
  //           images: [suyeongStylistContentImages[3].default.src],
  //           content:
  //             "사실 이러한 브랜드의 철학이 의미를 가지기 위해서는 해당 브랜드의 소비자의 경험이 브랜드의 의도를 이해하고 공감해야만 할 것이다. 그런 의미에서 이미 VDR의 지속적인 소비자인 나에게는 VDR의 옷들을 소비하고 장시간 입어본 경험이 그들의 브랜드 철학에 고개를 끄덕이게 만들었다. 그 경험을 기반으로 아주 주관적인 기준에서 VDR을 장식하는 몇 가지 제품들을 추천하고자 한다.",
  //         },
  //         {
  //           subTitle: "FIVE-PCKET CHORE JACKET",
  //           images: [suyeongStylistContentImages[4].default.src],
  //           content:
  //             "초어 자켓은 작업복을 뜻한다. 우리가 흔히 알고 있는 워크웨어를 구성하고 연출할 수 있는 제품 카테고리 중 하나이다. 워크웨어를 구성하는 데님 자켓, 트러커 자켓, 피셔맨 자켓 등 어떠한 워크웨어 자켓들도 초어 자켓으로 말할 수 있지만 특히나 20세기 공장에서 일하는 사람들이 입던 작업복을 주로 초어자켓이라 표현한다. 13oz 데님으로 빳빳하고 묵직하며 독특한 페인팅 및 워싱으로 현대적인 느낌을 주는 멋드러진 초어자켓이다.",
  //         },
  //         {
  //           subTitle: "TANKER JUMPER [Black Night]",
  //           images: [suyeongStylistContentImages[5].default.src],
  //           content:
  //             "VDR의 Best seller 중에서도 Best seller인 Tanker Jumper이다. Restock이 될 때마다 빠른 품절으로 그 인기를 다시금 실감하게 만들어주는 옷이다. 미군 탱크 운전수들의 자켓을 모티브로 하여 보온성을 높이면서도 남성스러운 멋을 잔뜩 살려낸 옷이다. 그럼에도 불구하고 짙은 검정 색감과 크롭한 기장, 포켓의 모양새 그리고 클래식한 버클이 역설적이게 트렌디한 느낌을 준다.",
  //         },
  //         {
  //           subTitle: "122 Wide Straight (Washed Black) sanforized",
  //           images: [suyeongStylistContentImages[6].default.src],
  //           content:
  //             "질 좋은 13oz 데님 원단에 Stone Damage 가공으로 부드러우면서도 질긴 텍스쳐를 주는 청바지이다. 나는 이 바지를 굉장히 좋아한다. 할아버지가 되어서도 입을 수 있는 클래식함을 추구하면서도 현대적인 멋, 트렌디한 멋을 잃지 않는 감각이 그대로 드러난 VDR의 역작이라고 생각한다. 원단이나 제품 마감 그리고 포켓 커버 디테일등에서 클래식함을 충분히 느낄 수 있으면서도 전체적인 실루엣, 기장감, 핏 그리고 톤은 그 어떤 현대적인 무드의 스타일에도 잘 묻어날 수 있는 범용성 높은 바지라고 생각한다.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // josknStylist: {
  //   profile: josknStylistImages[0].default.src,
  //   thumbnail: josknStylistImages[1].default.src,
  //   name: "승관",
  //   comment: "패션 모델에서 일반인으로 닿는 과정",
  //   instagramId: "joskn_",
  //   avgGrade: "5.0",
  //   consultingAmount: "4",
  //   styleTags: ["미니멀", "클래식", "지적인"],
  //   aboutMe: [
  //     "1년간 인스타그램을 통해 무료 코디 서비스 진행",
  //     "주기적인 코디 이벤트 개최",
  //     "약 100명 규모의 패션 질의응답 오픈채팅방 운영",
  //     "비주류 스타일들까지 다양하게 경험",
  //   ],
  //   forWho: [
  //     "영화 “리플리 증후군”이 연상되는 클래식한 무드의 착장을 원하시는 분",
  //     "영화 “해리포터”의 죽음을 먹는자들과 같이 어둡고 미니멀한 착장을 원하시는 분",
  //     "본인이 어떤 스타일을 원하는지 모르시는 분",
  //   ],
  //   phillosophy: [
  //     "저는 여러분의 목적에 따른 니즈, 그리고 그에 대한 해소로써 스타일링을 도와드립니다.",
  //     "",
  //     "어떤 분은 자기에게 잘어울리는 스타일을 찾아서, 남의 시선과 상관없이 입고 싶으신 분이 계실 수 있고, ",
  //     "어떤 분은 이성분들께 어필이 될 만한 외적인 요소를 업그레이드하기 위해서 스스로를 꾸미고 싶으신 분도 계실 수 있고, ",
  //     "어떤 분은 옷을 제대로 사입고 다니신 경험이 없어서 자신에 직업에 맞는 코디들을 알맞게 갖추었으면 하시는 분들도 계실 수 있고, ",
  //     "어떤 분은 막연히 입을 옷이 없어서 잘입는다는 느낌보다는 가성비 좋고 범용성 넓게 입을 만한 옷들을 찾고 분이 계실 수도 있습니다. ",
  //     "스타일링을 신청해주시는 분들의 니즈는 각각 다 다르기 때문에, ",
  //     "일반화 할 수 없고 각각에 목적에 맞게 맞춤화 되어야 한다고 생각하며, ",
  //     "그에 맞게 맞춤형 스타일링을 도와드리고 있습니다.",
  //     "",
  //     "많은 분들의 코디를 만들어드리면서 느낀 점은, 저의 개인적인 취향을 최대한 빼고 고객님의 니즈를 올바르게 반영하는 것이 서비스만족도에 있어서도 좋은 것 같다고 느꼈고, 여기서 올바르게 반영한다라는 것은 고객님께서 간과하고 계시는 부분이나 권장드리는 사항들을 언급드리고, 절충하는 과정을 충분히 거쳐 스타일링에 반영하는 의미합니다.",
  //   ],
  //   personalImageList: josknStylistPersonalImages.map(
  //     (curr) => curr.default.src,
  //   ),
  //   reviewList: [
  //     {
  //       reviewer: "양**",
  //       date: "23.12.23",
  //       grade: "5.0",
  //       comment:
  //         "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
  //       imageList: [],
  //     },
  //     {
  //       reviewer: "허**",
  //       date: "23.10.25",
  //       grade: "5.0",
  //       comment:
  //         "개인적인 패션 취향은 있으나 그런 옷들을 어디서 사는 지 몰랐고 유명한 브랜드 외에는 쇼핑 경험이 없어 실제로 사는게 부담스러웠습니다. 내셔널 지오그래픽처럼 라이선스만 가져와 가격이 뛰는 옷 대신 퀄리티 있으면서 가격은 비싸지 않은 브랜드들을 접할 수 있어 쇼핑 폭이 훨씬 넓어졌습니다. 당연히 1회로 끝나지 않고 4계절 내내 이용하고 싶습니다. 코디를 추천해주는 일방향성 소통이 아니라 왜 이렇게 입어야하는지 이유를 알려주기 때문입니다.",
  //       imageList: [],
  //     },
  //   ],
  //   contentsList: [
  //     {
  //       id: 0,
  //       title: "<b>후드티를 더 멋있게 입는 방법</b>",
  //       text: "박진수 스타일리스트님의 스타일링 팁",
  //       type: "image",
  //       image: josknStylistImages[1].default.src,
  //       link: "",
  //     },
  //     {
  //       id: 1,
  //       title: "<b>잠깐</b>, 아직 스타일링을 안받아봤다면?",
  //       text: "00 님을 위한 추천 컨텐츠를 확인해보세요!",
  //       type: "image",
  //       image: josknStylistImages[1].default.src,
  //       link: "",
  //     },
  //   ],
  // },

  // jennyStylist: {
  //   profile: jennyStylistImages[0].default.src,
  //   thumbnail: jennyStylistImages[1].default.src,
  //   name: "유제니",
  //   comment: "가장 나다운 나를 찾아가는 여정",
  //   instagramId: "",
  //   avgGrade: "5.0",
  //   consultingAmount: "6",
  //   styleTags: ["미니멀", "클래식", "지적인"],
  //   aboutMe: [
  //     "(현) 슈어미 대표, 슈어아이엠 공동대표",
  //     "국내 남성복 패션브랜드 수석디자이너",
  //     "퍼스널컬러 컨설턴트 1급",
  //     "동행쇼핑 및 퍼스널컬러 진단 다수 진행 (유투버, 국회의원, 기업대표, 기업임원 등)",
  //     "동(전) 패션그룹형지 디자인팀",
  //     "(전) LF 디자인팀",
  //     "(전) 세정 I&C 디자인팀",
  //   ],
  //   forWho: [
  //     "자신의 매력포인팅 코디를 찾고 싶었던 직장인",
  //     "전문성을 보여주고 싶은 전문직 종사자",
  //     "취업을 위해 자신감있는 면접복이 필요했던 분",
  //     "소개팅룩, 데이트룩 (매력 어필)",
  //     "좋은 이미지를 만들고 싶은 사업가",
  //     "신뢰감을 주고 싶은 영업직 종사자",
  //     "숨겨진 패션감각을 찾고 싶었던 컴퓨터프로그래밍 관련 IT 계열 종사자",
  //   ],
  //   phillosophy: [
  //     "저는 여러분의 목적에 따른 니즈, 그리고 그에 대한 해소로써 스타일링을 도와드립니다.",
  //     "",
  //     "어떤 분은 자기에게 잘어울리는 스타일을 찾아서, 남의 시선과 상관없이 입고 싶으신 분이 계실 수 있고, ",
  //     "어떤 분은 이성분들께 어필이 될 만한 외적인 요소를 업그레이드하기 위해서 스스로를 꾸미고 싶으신 분도 계실 수 있고, ",
  //     "어떤 분은 옷을 제대로 사입고 다니신 경험이 없어서 자신에 직업에 맞는 코디들을 알맞게 갖추었으면 하시는 분들도 계실 수 있고, ",
  //     "어떤 분은 막연히 입을 옷이 없어서 잘입는다는 느낌보다는 가성비 좋고 범용성 넓게 입을 만한 옷들을 찾고 분이 계실 수도 있습니다. ",
  //     "스타일링을 신청해주시는 분들의 니즈는 각각 다 다르기 때문에, ",
  //     "일반화 할 수 없고 각각에 목적에 맞게 맞춤화 되어야 한다고 생각하며, ",
  //     "그에 맞게 맞춤형 스타일링을 도와드리고 있습니다.",
  //     "",
  //     "많은 분들의 코디를 만들어드리면서 느낀 점은, 저의 개인적인 취향을 최대한 빼고 고객님의 니즈를 올바르게 반영하는 것이 서비스만족도에 있어서도 좋은 것 같다고 느꼈고, 여기서 올바르게 반영한다라는 것은 고객님께서 간과하고 계시는 부분이나 권장드리는 사항들을 언급드리고, 절충하는 과정을 충분히 거쳐 스타일링에 반영하는 의미합니다.",
  //   ],
  //   personalImageList: jennyStylistPersonalImages.map(
  //     (curr) => curr.default.src,
  //   ),
  //   reviewList: [
  //     {
  //       reviewer: "김**",
  //       date: "23.12.23",
  //       grade: "5.0",
  //       comment:
  //         "패알못으로서 무난한 옷들만 구매하다가 제 스타일을 찾고 싶어서 신청했어요! 패션컨설팅을 진행하는 곳이 많지 않아서 검색을 많이 하다가 고수님 컨설팅의 좋은 리뷰들을 보고 홀린 듯이 신청했는데 결론적으로 정말 만족하고 강추합니다>.< \\n저는 단순히 체형, 퍼스널컬러에 맞는 컨설팅을 해주시는줄 알았는데 체형과 퍼스널컬러는 물론이고 대화를 통해서 제 이미지를 파악하시고 거기에 맞는 코디와 브랜드를 추천해 주시더라구요. 너무 획기적이고 좋았어요!! 특히 브랜드 추천은 자아 없이 지그재그, 무신사 상위 랭킹 옷만 사던 제게 신세계였어요,,, 평생 모르고 살 뻔했는데 너무 제 스타일의 옷이어서 당분간 지갑 조심해야 할 것 같아요 (이미 하나 지름) 그리고 내향적인 성격 때문에 초면에 대화를 잘 못하는 편인데도 고수님께서 대화를 편하게 이끌어주시는 덕분 에 시간이 후딱 가있었고 나중엔 언니라고 부르고 싶을 정도로 깊은 대화를 하고 있더라구여,,, 고민하지 마시고 신청하셨음 좋겠어요! 상담 너무 감사드리고 또 뵈어용! 새해 복 많이 받으세요~~",
  //       imageList: [jennyStylistReviewImages[0].default.src],
  //     },
  //     {
  //       reviewer: "남**",
  //       date: "23.10.25",
  //       grade: "5.0",
  //       comment:
  //         "오늘 퍼스널컬러, 패션컨설팅 받았습니다 일단 아주 대만족합니다. 나의 옷입을때 장점,단점을 제가 생각할때 뭔가 감은 있지만, 정확히 알지 못하였는데 퍼스널컬러 패션컨설팅을 듣고 아 이래서 내가 이 옷 입었을 때 이런 느낌이 들었구나 정확히 알려주셨습니다. 최대한 세련되며 고급스러운 분위기를 풍기는게 저의 목표였는데 생각보다 어렵지 않게 이룰 수 있을것같아서 너무 좋습니다. 오늘 여성을 만났는데 패션과 얼굴에 조화가 잘 맞아 엑소 수호 닮은거같다고해서 처음 듣는 연예인이라 누군지 몰라, 검색해보니 내가 느끼게 하고 싶었던 고급스러운 분위기라 완전 1000프로 만족합니다. 무한 경쟁시대에서 나의 최대의 외모 장점을 끌어낼수있는 무조건 들어야 되는 강의 !!",
  //       imageList: [jennyStylistReviewImages[1].default.src],
  //     },
  //     {
  //       reviewer: "백**",
  //       date: "23.10.25",
  //       grade: "5.0",
  //       comment:
  //         "선생님이 너무 친절하시구? 패션도 관심 많아서 이것저것 물어봤는데도 다 대답 해주시고. 완전 고민 해결입니다!! 제 스타일을 더 찾을 수 있는 기회가 됐고 다음부터 쇼핑에 바로 참고 할 수 있게끔 딱 뭐가 잘 어울리고 이건 좀 피해야한다 자세한 설명 너무 감동이었어요!~ 분위기도 좋고 너무 재밌었습니다 감사합니다!!:)",
  //       imageList: [],
  //     },
  //     {
  //       reviewer: "황**",
  //       date: "23.10.25",
  //       grade: "5.0",
  //       comment:
  //         "편안한 분위기에서 상담이 진행되었습니다! 평소에 애매해서 고민되었던 부분들을 전문적으로 알기 쉽게 설명해주셔서 궁금했던 부분이 모두 해결되었습니다! 상담 진행 전 진행 주제에 대한 개념과 이유를 범용적으로 알 수 있는 예시로 설명해주셔서 개념이 어느 정도 이해된 상태로 상담이 진행되었습니다. 덕분에 이해도도 올라간 느낌이 들었습니다! 정말 유익하고 도움되는 내용이었습니다. 정말 강력하게 추천합니다ㅠㅠ",
  //       imageList: [],
  //     },
  //     {
  //       reviewer: "하**",
  //       date: "23.10.25",
  //       grade: "5.0",
  //       comment:
  //         "패션에 대해서 알고싶었고 특히 저의 스타일에 맞춤형 옷을 입고 싶었습니다. 리뷰 및 고용횟수등 인증된 그대로 입니다. 저도 만점 만족도 드리며 전문가답게 정확하게 저의 강점을 살려주셨습니다. 온라인컨설팅도 도움되었지만 같이 동행하면서 하시는걸 강추드립니다. 이분께 진행하면 후회는 없습니다. 이상입니다.",
  //       imageList: [],
  //     },
  //     {
  //       reviewer: "황**",
  //       date: "23.10.25",
  //       grade: "5.0",
  //       comment:
  //         "처음에 만나면 대화로 시작해서 사람의 성향을 끌어내시고 그에 대한 얘기들로 시간가는줄 몰랐는데 그러는 사이 저를 아주 잘 간파하시고 그에 맞는 니즈를 충족시켜주십니다. 적당히 어느선에서 타협하지 않고 저와 쌤 모두 만족하는 코디를 끝끝내 찾았고 아주 만족스러운 결과물을 얻게 되었습니다. 후에 남겨주시는 결과물또한 차후 혼자서 옷을 고름에 있어서 좋은 가이드라인을 제시해주심으로써 패션레벨 0에서 한단계 두단계 세단계 진화할 수 있을거같습니다. 보통 초반중간마무리 중에 한곳이라도 부족한부분이 생기기마련인데 그런부분없이 만족했습니다! 이미지 변화를 시도하고 싶으신 분들께 추천드립니다!",
  //       imageList: [],
  //     },
  //   ],
  //   contentsList: [
  //     {
  //       id: 0,
  //       title: "<b>나만의 착붙스타일 찾기?! <나처럼 옷입기></b>",
  //       text: "패션은 자기의 표현이자 선택이다.",
  //       type: "image",
  //       image: jennyStylistContentImages[0].default.src,
  //       link: "",
  //       content: [
  //         {
  //           subTitle: "패션은 자기의 표현이자 선택이다. ",
  //           images: [jennyStylistContentImages[0].default.src],
  //           content:
  //             "패션은 자기의 표현이자 선택이다. 누군가가 옷을 어떻게 입어야 할지 모르겠다고 말한다면 거울을 보고 자기 자신부터 연구하라고 이야기 하겠다.이처럼 패션은 자신을 꾸미는 사치스러운 소비이기전,많은 유명디자이너들의 생각처럼 철학적 관점으로 보게되면 패션은 삶의 방향성, 가치관이다. 자신이 주로 생각하고 추구하는 삶의 방향성에 맞게 옷을 입게 되기 때문이다. 직업군에 따라,취향에 따라, 지역, 성별, 나이대에 따라 패션은 다르다. 이 부분을 곰곰히 생각하다보면 자신만의 생각하는 인생이 어떤것인지 느낄 수 있을 것이다",
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "<b>호감을 주는 이미지는? <나처럼 옷입기></b>",
  //       text: "자신을 호감있는, 매력있는 사람으로 만들고 싶다면",
  //       type: "image",
  //       image: jennyStylistContentImages[2].default.src,
  //       link: "",
  //     },
  //   ],
  // },
};
