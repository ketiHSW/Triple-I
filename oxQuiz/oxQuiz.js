const questions = [
    { question: "달팽이도 이빨이 있다.", answer: "O" },
    { question: "열대 지방에 자라는 나무에는 나이테가 없다.", answer: "O" },
    { question: "원숭이에게도 지문이 있다.", answer: "O" },
    { question: "벼룩은 간을 가지고 있다.", answer: "X" },
];

let currentQuestionIndex = 0; // 현재 문제 인덱스
const questionElement = document.getElementById("question");
const resultElement = document.getElementById("result");
const btnO = document.getElementById("btn-o");
const btnX = document.getElementById("btn-x");
const btnS = document.getElementById("btn-s")

// 문제 로드 함수
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        resultElement.textContent = "";
        btnO.classList.remove("correct-o", "correct-x"); // 이전 정답 색상 제거
        btnX.classList.remove("correct-o", "correct-x");
        btnO.disabled = false; // 버튼 활성화
        btnX.disabled = false; // 버튼 활성화
    } else {
        questionElement.textContent = "퀴즈가 끝났습니다!";
        resultElement.textContent = "";
        btnO.style.display = "none"; // O 버튼 숨기기
        btnX.style.display = "none"; // X 버튼 숨기기
    }
}

// 정답 확인 및 색상 변경 함수
function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "정답입니다!";
        if (correctAnswer === "O") {
            btnO.classList.add("correct-o"); // O 버튼 파란색으로 변경
        } else {
            btnX.classList.add("correct-x"); // X 버튼 빨간색으로 변경
        }
    } else {
        resultElement.textContent = `틀렸습니다. 정답은 ${correctAnswer}입니다.`;
        if (correctAnswer === "O") {
            btnO.classList.add("correct-o"); // O 버튼 파란색으로 변경
        } else {
            btnX.classList.add("correct-x"); // X 버튼 빨간색으로 변경
        }
    }

    // 다음 문제로 넘어가기 위해 버튼 비활성화 후 딜레이 설정
    btnO.disabled = true; 
    btnX.disabled = true;

    currentQuestionIndex++;
    
    setTimeout(loadQuestion, 2000); // 2초 후 다음 문제 로드
}



// 이벤트 리스너 추가
btnO.addEventListener("click", () => checkAnswer("O"));
btnX.addEventListener("click", () => checkAnswer("X"));



// 첫 번째 문제 로드
loadQuestion();
