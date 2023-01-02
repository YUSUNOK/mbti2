import mbtiReulst from "./mbtiResult.js";
import question from "./question.js";

const imageContainer1 = document.querySelector("#image-container1");
const imageContainer2 = document.querySelector("#image-container2");
const imageContainer3 = document.querySelector("#image-container3");
const textContainer = document.querySelector("#text-container");
const leftItem = document.querySelector("#left-item");
const rightItem = document.querySelector("#right-item");
const page = document.querySelector("#page");
const before = document.querySelector("#before");
const HIDDEN_KEY = "hidden";
const CHECK_KEY = "value";
let whatOfFour;
let pageNumber = 1;
let undefinedCheckArr = new Array(12);
let finalResult = [0, 0, 0, 0];
// orderIndex = [] 0~11 순서대로
let orderIndex = [];
for (let i = 0; i < question.length; i++) {
  orderIndex.push(i);
}
// orderIndex = 0~11 랜덤 배열 -> for what ? : 질문 순서 랜덤하게 하려고
orderIndex.sort(() => Math.random() - 0.5); // 뒤집인 index가 들어있는 orderIndexArr
let pageIndexCorrelation = []; // for what ? : [pageNumber, orderIndex]
for (let i = 1; i <= question.length; i < i++) {
  const index = orderIndex[i - 1];
  pageIndexCorrelation.push([
    i,
    question[index].surbey,
    question[index].relatedLocationIndex,
  ]); // pageIndexCorrelation : page, surbey, relatedLocationIndex
}
function printQuestion(page) {
  // 매개변수로 pageNumber를 넣는다.
  // 반환은 현재 질문 인덱스를 반환한다.
  for (let i = 0; i < question.length; i++) {
    if (pageIndexCorrelation[i][0] === page) {
      leftItem.innerText = pageIndexCorrelation[i][1][0];
      rightItem.innerText = pageIndexCorrelation[i][1][1];
      whatOfFour = pageIndexCorrelation[i][2]; // 몇번째 인덱스에 값을 바꿔줄꺼냐
      break;
    }
  }
}
function openContainer2() {
  imageContainer1.classList.add(HIDDEN_KEY);
  imageContainer2.classList.remove(HIDDEN_KEY);
  textContainer.classList.remove(HIDDEN_KEY);
}
function showPage() {
  page.innerText = `${pageNumber}/12`;
}

// 시작할 떄 -> 사진 변경
function onStart() {
  openContainer2();
  printQuestion(pageNumber);
  showPage();
}
imageContainer1.addEventListener("click", onStart);



// 카드 선택할 때 -> 
function Click() {
  if (this.getAttribute(CHECK_KEY) == 1) {
    // 오른쪽 선택
    finalResult[whatOfFour] -= 
  } else {
    // 왼쪽 선택
  }
}
leftItem.addEventListener("click", Click);
rightItem.addEventListener("click", Click);

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
