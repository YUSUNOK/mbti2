const mbtiInfo = {
  istp: [
    "대담하면서도 현실적인 성격으로, 모든 종류의 도구를 자유자재로 다루는 장인입니다.",
    "ISTP",
  ],
  istj: ["사실을 중시하는 믿음직한 현실주의자입니다.", , "ISTJ"],
  isfp: [
    "항상 새로운 경험을 추구하는 유연하고 매력 넘치는 예술가입니다.",
    "ISFP",
  ],
  isfj: [
    "주변 사람을 보호할 준비가 되어있는 헌신적이고 따뜻한 수호자입니다.",
    "ISFJ",
  ],
  intp: ["지식을 끝없이 갈망하는 혁신적인 발명가입니다.", "INTP"],
  intj: ["모든 일에 대해 계획을 세우며 상상력이 풍부한 전략가입니다.", "INTJ"],
  infp: [
    "항상 선을 행할 준비가 되어 있는 부드럽고 친절한 이타주의자입니다.",
    "INFP",
  ],
  infj: [
    "차분하고 신비한 분위기를 풍기는 성격으로, 다른 사람에게 의욕을 불어넣는 이상주의자입니다.",
    "INFJ",
  ],
  estp: [
    "위험을 기꺼이 감수하는 성격으로 영리하고 에너지 넘치며 관찰력이 뛰어난 사업가입니다.",
    "ESTP",
  ],
  estj: ["사물과 사람을 관리하는 데 뛰어난 능력을 지닌 경영자입니다.", "ESTJ"],
  esfp: [
    "즉흥적이고 넘치는 에너지와 열정으로 주변사람을 즐겁게 하는 연예인입니다.",
    "ESFP",
  ],
  esfj: [
    "배려심이 넘치고 항상 타인을 도울 준비가 되어있는 성격으로, 사교성이 높은 마당발입니다.",
    "ESFJ",
  ],
  entp: ["지적 도전을 즐기는 영리하고 호기심이 많은 사색가입니다.", "ENTP"],
  entj: [
    "항상 해결책을 찾아내는 성격으로, 대담하고 상상력이 풍부하며 의지가 강한 지도자입니다.",
    "ENTJ",
  ],
  enfp: [
    "열정적이고 창의적인 성격으로, 긍정적으로 삶을 바라보는 사교적이면서도 자유로운 영혼입니다.",
    "ENFP",
  ],
  enfj: [
    "청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는 지도자입니다.",
    "ENFJ",
  ],
};
let pageNumber = 1;
const imageContainer1 = document.querySelector("#image-container1");
const imageContainer2 = document.querySelector("#image-container2");
const imageContainer3 = document.querySelector("#image-container3");

const textContainer = document.querySelector("#text-container");
const leftItem = document.querySelector("#left-item");
const rightItem = document.querySelector("#right-item");
const HIDDEN_KEY = "hidden";

let answerArr = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
const page = document.querySelector("#page");
function onStart() {
  imageContainer1.classList.add(HIDDEN_KEY);
  imageContainer2.classList.remove(HIDDEN_KEY);
  textContainer.classList.remove(HIDDEN_KEY);
  page.innerText = `${pageNumber}/12`;
}
imageContainer1.addEventListener("click", onStart);

const before = document.querySelector("#before");

function pagingMinus() {
  if (pageNumber === 1) {
  } else {
    pageNumber--;
  }
  page.innerText = `${pageNumber}/12`;
}

function pagingPlus() {
  if (pageNumber === 12) {
  } else {
    pageNumber++;
  }
  page.innerText = `${pageNumber}/12`;
}
before.addEventListener("click", pagingMinus);
after.addEventListener("click", pagingPlus);
