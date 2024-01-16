// stylist_test ------------------------------------------------------------
// 이미지 폴더 내의 모든 PNG 파일 가져오기
const testContext = require.context("./stylist_test", false, /\.png$/);
// context.keys()는 해당 폴더 내의 모든 파일 경로를 배열로 반환합니다.
const pngFiles = testContext.keys();
// pngFiles 배열을 사용하여 각 이미지를 import
const testStylistimages = pngFiles.map(testContext);
// -------------------------------------------------------------------------

export const stylistDB = {
  testStylist: {
    thumbnail: testStylistimages[1].default.src,
    profile: testStylistimages[0].default.src,
    name: "박진수",
    comment: "미니멀한 당신을 위해",
    avgGrade: "4.9",
    consultingAmount: "127",
    aboutMe: [
      "SPA 브랜드 XXX 근무 N년",
      "팔로워 Nk 인스타그램 운영",
      "유튜버 000 맞춤 스타일링",
      "다음 경력",
      "마지막 경력",
    ],
    forWho: ["옷 잘입고시푼 사람", "연애하고시픈사람", "나처럼옷입고싶은사람"],
    phillosophy: [
      "사람의 이미지는 머리부터 발끝이지만,",
      "<b>시선이 가는 곳은 입고 있는 의상</b>입니다.",
      "여러분의 첫인상이 <b>평생을 좌우합니다.</b>",
      "<b>자신의 스타일을 찾고</b> 자신감을 찾으세요.",
    ],
    personalImageList: [
      testStylistimages[3].default.src,
      testStylistimages[3].default.src,
      testStylistimages[3].default.src,
      testStylistimages[3].default.src,
      testStylistimages[3].default.src,
      testStylistimages[3].default.src,
      testStylistimages[3].default.src,
    ],
    reviewList: [
      {
        reviewer: "박**",
        date: "24.01.08 04:23",
        grade: "5.0",
        comment:
          "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
        imageList: [
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
        ],
      },
      {
        reviewer: "박**",
        date: "24.01.08 04:23",
        grade: "5.0",
        comment:
          "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
        imageList: [
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
        ],
      },
      {
        reviewer: "박**",
        date: "24.01.08 04:23",
        grade: "5.0",
        comment:
          "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
        imageList: [
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
        ],
      },
      {
        reviewer: "박**",
        date: "24.01.08 04:23",
        grade: "5.0",
        comment:
          "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
        imageList: [
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
        ],
      },
      {
        reviewer: "박**",
        date: "24.01.08 04:23",
        grade: "5.0",
        comment:
          "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
        imageList: [
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
        ],
      },
      {
        reviewer: "박**",
        date: "24.01.08 04:23",
        grade: "5.0",
        comment:
          "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
        imageList: [
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
        ],
      },
      {
        reviewer: "박**",
        date: "24.01.08 04:23",
        grade: "5.0",
        comment:
          "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
        imageList: [
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
        ],
      },
      {
        reviewer: "박**",
        date: "24.01.08 04:23",
        grade: "5.0",
        comment:
          "스타일링 최고 스타일링 더 받을래요 스타일링 어쩌구저쩌구 후기는 2줄만 보이는거로 더 넘어가면 일단 말줄임표로 마무리 합시다 이정도로 글은 어느정도까지 보여줄까요? 글자수 제한을 두기는 해야할 것 같은데 사실 펼쳤을때 이정도면 충분히 리뷰하기에는 부족하지 않을 것 같은데요 음 더 들어가야하나 모르겠는데 좌우로 늘리고 5줄이면 솔직히 이거보다 더 적을 사람 있을까 싶긴 합니다 충분한 리뷰가 될 듯 사진도 충분해이.",
        imageList: [
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
          testStylistimages[2].default.src,
        ],
      },
    ],
    contentsList: [
      {
        id: 0,
        title: "<b>후드티를 더 멋있게 입는 방법</b>",
        text: "박진수 스타일리스트님의 스타일링 팁",
        type: "image",
        image: testStylistimages[2].default.src,
        link: "",
      },
      {
        id: 1,
        title: "<b>잠깐</b>, 아직 스타일링을 안받아봤다면?",
        text: "00 님을 위한 추천 컨텐츠를 확인해보세요!",
        type: "image",
        image: testStylistimages[2].default.src,
        link: "",
      },
      {
        id: 2,
        title: "<b>후드티를 더 멋있게 입는 방법</b>",
        text: "박진수 스타일리스트님의 스타일링 팁",
        type: "image",
        image: testStylistimages[2].default.src,
        link: "",
      },
      {
        id: 3,
        title: "<b>잠깐</b>, 아직 스타일링을 안받아봤다면?",
        text: "00 님을 위한 추천 컨텐츠를 확인해보세요!",
        type: "image",
        image: testStylistimages[2].default.src,
        link: "",
      },
    ],
  },
};
