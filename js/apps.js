import mbtiResult from "./mbtiResult.js";
import question from "./question.js";

const imageContainer1 = document.querySelector("#image-container1");
const imageContainer2 = document.querySelector("#image-container2");
const imageContainer3 = document.querySelector("#image-container3");
const textContainer = document.querySelector("#text-container");
const leftItem = document.querySelector("#left-item");
const rightItem = document.querySelector("#right-item");
const page = document.querySelector("#page");
const before = document.querySelector("#before");
const resultBtn = document.querySelector("#result-btn");
const replayBtn = document.querySelector("#replay-btn");
const mbtiInfo = document.querySelector("#mbti-info");
const mbtiResultForm = document.querySelector("#mbti-result");
const HIDDEN_KEY = "hidden";
const VALUE_KEY = "value";
const CHECK_KEY = "check";
let whatOfFour;
let pageNumber = 1;
let finalReusltMbti = ``;
let undefinedCheckArr = [
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
let finalResult = [0, 0, 0, 0];
// orderIndex = [] 0~11 순서대로
let orderIndex = [];
for (let i = 0; i < question.length; i++) {
  orderIndex.push(i);
}
// orderIndex = 0~11 랜덤 배열 -> for what ? : 질문 순서 랜덤하게 하려고
orderIndex.sort(() => Math.random() - 0.5); // 뒤집인 index가 들어있는 orderIndexArr
let pageIndexCorrelation = []; // for what ?
for (let i = 1; i <= question.length; i < i++) {
  const index = orderIndex[i - 1];
  pageIndexCorrelation.push([
    i,
    question[index].surbey,
    question[index].relatedLocationIndex,
  ]); // pageIndexCorrelation : page, surbey, relatedLocationIndex
}

console.log(pageIndexCorrelation);
function printQuestion(page) {
  // 매개변수로 pageNumber를 넣는다.
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
  console.log(pageNumber, `pageNumber`);
  if (this.getAttribute(VALUE_KEY) == 1) {
    // 오른쪽 선택
    undefinedCheckArr[pageNumber - 1] = 1;

    if (leftItem.classList.contains(CHECK_KEY)) {
      finalResult[whatOfFour] += 2;
      leftItem.classList.remove(CHECK_KEY);
    } else {
      finalResult[whatOfFour] += 1;
    }
    rightItem.classList.add(CHECK_KEY);

    if (undefinedCheckArr.includes(null) === false) {
      resultBtn.classList.remove(HIDDEN_KEY);
      page.style.width = "240px";
    }

    setTimeout(function () {
      if (pageNumber !== 12) {
        pageNumber++;
      }
      printQuestion(pageNumber);

      showPage();
      if (undefinedCheckArr[pageNumber - 1] !== null) {
        if (undefinedCheckArr[pageNumber - 1] == 1) {
          rightItem.classList.add(CHECK_KEY);
          leftItem.classList.remove(CHECK_KEY);
        } else {
          rightItem.classList.remove(CHECK_KEY);
          leftItem.classList.add(CHECK_KEY);
        }
      } else {
        rightItem.classList.remove(CHECK_KEY);
        leftItem.classList.remove(CHECK_KEY);
      }
    }, 200);
  } else {
    // 왼쪽 선택
    undefinedCheckArr[pageNumber - 1] = -1;

    if (rightItem.classList.contains(CHECK_KEY)) {
      finalResult[whatOfFour] -= 2;
      rightItem.classList.remove(CHECK_KEY);
    } else {
      finalResult[whatOfFour] -= 1;
    }
    leftItem.classList.add(CHECK_KEY);

    if (undefinedCheckArr.includes(null) === false) {
      resultBtn.classList.remove(HIDDEN_KEY);
      page.style.width = "240px";
    }
    setTimeout(function () {
      if (pageNumber !== 12) {
        pageNumber++;
      }
      printQuestion(pageNumber);
      leftItem.classList.add(CHECK_KEY);
      showPage();
      if (undefinedCheckArr[pageNumber - 1] !== null) {
        if (undefinedCheckArr[pageNumber - 1] == 1) {
          rightItem.classList.add(CHECK_KEY);
          leftItem.classList.remove(CHECK_KEY);
        } else {
          rightItem.classList.remove(CHECK_KEY);
          leftItem.classList.add(CHECK_KEY);
        }
      } else {
        rightItem.classList.remove(CHECK_KEY);
        leftItem.classList.remove(CHECK_KEY);
      }
    }, 200);
  }
  console.log(undefinedCheckArr);
  console.log(finalResult);
}

leftItem.addEventListener("click", Click);
rightItem.addEventListener("click", Click);

function paging(evt) {
  console.log(pageNumber, `pageNumber`);
  console.log(undefinedCheckArr);
  evt.target.classList.add(CHECK_KEY);
  setTimeout(function () {
    evt.target.classList.remove(CHECK_KEY);
  }, 200);

  if (this.id === "before") {
    if (pageNumber === 1) {
    } else {
      pageNumber--;
      printQuestion(pageNumber);
      if (undefinedCheckArr[pageNumber - 1] === -1) {
        leftItem.classList.add(CHECK_KEY);
        rightItem.classList.remove(CHECK_KEY);
      } else if (undefinedCheckArr[pageNumber - 1] === 1) {
        leftItem.classList.remove(CHECK_KEY);
        rightItem.classList.add(CHECK_KEY);
      } else if (undefinedCheckArr[pageNumber - 1] === null) {
        leftItem.classList.remove(CHECK_KEY);
        rightItem.classList.remove(CHECK_KEY);
      }
    }
    page.innerText = `${pageNumber}/12`;
  } else {
    if (pageNumber === 12) {
    } else {
      pageNumber++;
      printQuestion(pageNumber);
      if (undefinedCheckArr[pageNumber - 1] === -1) {
        leftItem.classList.add(CHECK_KEY);
        rightItem.classList.remove(CHECK_KEY);
      } else if (undefinedCheckArr[pageNumber - 1] === 1) {
        leftItem.classList.remove(CHECK_KEY);
        rightItem.classList.add(CHECK_KEY);
      } else if (undefinedCheckArr[pageNumber - 1] === null) {
        leftItem.classList.remove(CHECK_KEY);
        rightItem.classList.remove(CHECK_KEY);
      }
    }
    page.innerText = `${pageNumber}/12`;
  }
}
before.addEventListener("click", paging);
after.addEventListener("click", paging);

function printResult() {
  imageContainer2.classList.add(HIDDEN_KEY);
  textContainer.classList.add(HIDDEN_KEY);
  imageContainer3.classList.remove(HIDDEN_KEY);
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  imageContainer3.style.backgroundImage = `url("../img/result/${randomNumber}.jpg")`;

  if (finalResult[0] < 0) {
    finalReusltMbti += "E";
  } else {
    finalReusltMbti += "I";
  }

  if (finalResult[1] < 0) {
    finalReusltMbti += "S";
  } else {
    finalReusltMbti += "N";
  }

  if (finalResult[2] < 0) {
    finalReusltMbti += "T";
  } else {
    finalReusltMbti += "F";
  }

  if (finalResult[3] < 0) {
    finalReusltMbti += "P";
  } else {
    finalReusltMbti += "J";
  }

  console.log(finalReusltMbti);

  mbtiResult.forEach((item) => {
    if (item[1] === finalReusltMbti) {
      mbtiInfo.innerText = item[0];
      mbtiResultForm.innerText = item[1];
    }
  });
}
resultBtn.addEventListener("click", printResult);
replayBtn.addEventListener("click", function () {
  location.reload();
});
