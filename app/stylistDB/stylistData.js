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
// context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
const suyeongStylistPngFiles = suyeongStylistContext.keys();
const suyeongStylistReviewPngFiles = suyeongStylistReviewContext.keys();
const suyeongStylistPersonalPngFiles = suyeongStylistPersonalContext.keys();
// pngFiles 배열을 사용하여 각 이미지를 import
const suyeongStylistImages = suyeongStylistPngFiles.map(suyeongStylistContext);
const suyeongStylistReviewImages = suyeongStylistReviewPngFiles.map(
  suyeongStylistReviewContext,
);
const suyeongStylistPersonalImages = suyeongStylistPersonalPngFiles.map(
  suyeongStylistPersonalContext,
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
// context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
const wooklasStylistPngFiles = wooklasStylistContext.keys();
const wooklasStylistReviewPngFiles = wooklasStylistReviewContext.keys();
const wooklasStylistPersonalPngFiles = wooklasStylistPersonalContext.keys();
// pngFiles 배열을 사용하여 각 이미지를 import
const wooklasStylistImages = wooklasStylistPngFiles.map(wooklasStylistContext);
const wooklasStylistReviewImages = wooklasStylistReviewPngFiles.map(
  wooklasStylistReviewContext,
);
const wooklasStylistPersonalImages = wooklasStylistPersonalPngFiles.map(
  wooklasStylistPersonalContext,
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
          "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
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
          "개인적인 패션 취향은 있으나 그런 옷들을 어디서 사는 지 몰랐고 유명한 브랜드 외에는 쇼핑 경험이 없어 실제로 사는게 부담스러웠습니다. 내셔널 지오그래픽처럼 라이선스만 가져와 가격이 뛰는 옷 대신 퀄리티 있으면서 가격은 비싸지 않은 브랜드들을 접할 수 있어 쇼핑 폭이 훨씬 넓어졌습니다. 당연히 1회로 끝나지 않고 4계절 내내 이용하고 싶습니다. 코디를 추천해주는 일방향성 소통이 아니라 왜 이렇게 입어야하는지 이유를 알려주기 때문입니다.",
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
          "개인적인 패션 취향은 있으나 그런 옷들을 어디서 사는 지 몰랐고 유명한 브랜드 외에는 쇼핑 경험이 없어 실제로 사는게 부담스러웠습니다. 내셔널 지오그래픽처럼 라이선스만 가져와 가격이 뛰는 옷 대신 퀄리티 있으면서 가격은 비싸지 않은 브랜드들을 접할 수 있어 쇼핑 폭이 훨씬 넓어졌습니다. 당연히 1회로 끝나지 않고 4계절 내내 이용하고 싶습니다. 코디를 추천해주는 일방향성 소통이 아니라 왜 이렇게 입어야하는지 이유를 알려주기 때문입니다.",
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
        title: "<b>후드티를 더 멋있게 입는 방법</b>",
        text: "박진수 스타일리스트님의 스타일링 팁",
        type: "image",
        image: suyeongStylistImages[1].default.src,
        link: "",
      },
      {
        id: 1,
        title: "<b>잠깐</b>, 아직 스타일링을 안받아봤다면?",
        text: "00 님을 위한 추천 컨텐츠를 확인해보세요!",
        type: "image",
        image: suyeongStylistImages[1].default.src,
        link: "",
      },
    ],
  },

  // wooklasStylist: {
  //   profile: wooklasStylistImages[0].default.src,
  //   thumbnail: wooklasStylistImages[1].default.src,
  //   name: "현욱",
  //   comment: "미니멀하게 만드는 넘치는 이성적 매력",
  //   instagramId: "wooklas",
  //   avgGrade: "5.0",
  //   consultingAmount: "4",
  //   styleTags: ["미니멀", "클래식", "지적인"],
  //   aboutMe: [
  //     "(전) 연 매출 5억원 남성 쇼핑몰 CEO",
  //     "(현) 20K 인스타그램 패션 인플루언서",
  //     "(현) 패션 크리에이터 및 블로거",
  //   ],
  //   forWho: [
  //     "나의 체형에 딱 맞는 스타일링을 하는데 어려움이 있는 남성",
  //     "바뀌는 계절마다 직접 옷을 찾아 다닐 시간이 없는 남성",
  //     "요즘 트렌드에 맞는 스타일링을 원하는 남성",
  //     "중요한 자리 (소개팅, 비즈니스 미팅, 여행)를 앞에 두고 스타일링을 고민하고 있는 남성",
  //   ],
  //   phillosophy: [
  //     "<b>첫 인상에서 옷 차림이 중요한 이유</b>",
  //     "",
  //     "혹시.. 매번 실패하고 걱정되는 인간관계, 이성관계, 비즈니스 자리가 있지는 않으신가요?",
  //     "소개팅에서 좋은 첫 인상의 결정은 29.3%로 외모가 1순위를 차지하고 있습니다.",
  //     "그러나 외모보다 높은 비율 56.5%로 옷차림, 말투, 헤어스타일이 첫 인상 결정에 더욱 높은 비중을 차 지하고 있습니다. 이는 인생에서 수백만원이상의 잠재가치를 의미합니다.",
  //     "또한, 좋은 첫 인상을 결정하는 요소가 외모가 아니라 옷차림과, 말투일 수도 있다는 사실을 알 수 있습니다.",
  //     "커피 한 잔 마실 시간을 투자 하여 대인관계, 연애, 사회생활에서 남들보다 한 발 앞서 나갈 수 있다면 어떻게 하시겠습니까?",
  //     "",
  //     '<b>썸녀에게 "나 만날 때는 그 옷 안 입고 왔으면 좋겠어"라고 듣던 남자에서 [자랑하고 싶은 스타일 좋은 남자친구]가 되었다.</b>',
  //     "",
  //     "좋아하는 사람에게 비난을 받는 것은 언제나 기쁘지 못합니다. 물론 저의 경우도 그랬어요. 다행히 비난의 대상이 '바꿀 수 있는' 부분이라는 점에서 다행이었습니다.",
  //     "스스로 체형에 대해 분석하고, 패션 분야에 대해 공부하고, 쇼핑의 시행착오를 겪어 가다보니 어느새 저는 21K 패션 인플루언서, 패션 크리에이터 및 블로거, 연 매출 5억 쇼핑몰 CEO 말 그대로 옷 잘 입는 남자가 되어 있었죠.",
  //     "스타일의 변화는 제 인생에 많은 것은 바꿔주었습니다. 이 좋은 경험을 혼자 누리고 싶지 않았고, 많은 남성들에게 희망이 되었으면 좋겠습니다 :D",
  //   ],
  //   personalImageList: wooklasStylistPersonalImages.map(
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
  //       image: jenfloxStylistImages[1].default.src,
  //       link: "",
  //     },
  //     {
  //       id: 1,
  //       title: "<b>잠깐</b>, 아직 스타일링을 안받아봤다면?",
  //       text: "00 님을 위한 추천 컨텐츠를 확인해보세요!",
  //       type: "image",
  //       image: jenfloxStylistImages[1].default.src,
  //       link: "",
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
