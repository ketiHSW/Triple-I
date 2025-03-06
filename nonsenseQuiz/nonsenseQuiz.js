document.addEventListener("DOMContentLoaded", function() {
    const quizList = [
        { question: "가장 억울한 도형은?", answer: "원통" },
        { question: "차를 발로 차면?", answer: "카놀라유" },
        { question: "바람이 귀엽게 부는 도시는?", answer: "분당" },
        { question: "반성문을 영어로 하면?", answer: "글로벌" },
        { question: "펭귄이 다니는 중학교는?", answer: "냉방중" }
    ];

    let currentIndex = 0;
    const questionEl = document.getElementById("question");
    const answerBoxEl = document.getElementById("answer-boxes");
    const answerEl = document.getElementById("answer");

    //스코어
    let score = 0; // 맞힌 문제 개수 저장
    let totalQuestions = quizList.length; //전체 문제 개수

    

    function loadQuestion() {
        let currentQuiz = quizList[currentIndex];
        questionEl.innerHTML = "Q.<br>" + currentQuiz.question;
        answerEl.value = "";
        answerBoxEl.innerHTML = "";

        let trimmedAnswer = currentQuiz.answer.replace(/\s/g, "");

        // 정답 글자 수에 따라 네모 박스 생성
        for (let i = 0; i < trimmedAnswer.length; i++) {
            let box = document.createElement("div");
            box.className = "answer-box";
            answerBoxEl.appendChild(box);
        }
    }

    function showFeedback(isCorrect) {
        const feedbackMessage = document.getElementById("feedback-message");
        const feedbackImage = document.getElementById("feedback-image");
    
        if (isCorrect) {
            feedbackImage.src = "correct.png"; // 정답 이미지
            score++;
        } else {
            feedbackImage.src = "incorrect.png"; // 오답 이미지
        }
    
        feedbackMessage.classList.remove("hidden");
    
        setTimeout(() => {
            feedbackMessage.classList.add("hidden"); // 1초 후 숨기기
            if (currentIndex < totalQuestions - 1) {
                currentIndex++;
                loadQuestion(); //다음 문제 로드
            } else {
                showScore(); //퀴즈 종료 후 SCORE 화면 표시
            }
        }, 1000);
    }


    function checkAnswer() {
        let userInput = answerEl.value.trim().toLowerCase().replace(/\s/g, "");
        let correctAnswer = quizList[currentIndex].answer.toLowerCase().replace(/\s/g, "");

        if (userInput === correctAnswer) {
            showFeedback(true);
        } else {
            showFeedback(false);
        }

        
    }

    function showScore() {
        const quizContent = document.getElementById("quiz-content");
        const scoreScreen = document.getElementById("score-screen");
        const scoreText = document.getElementById("score-text");
        const restartButton = document.getElementById("restart-button");

        quizContent.classList.add("hidden"); // 기존 퀴즈 숨김
        scoreScreen.classList.add("visible"); // SCORE 화면 표시
        scoreScreen.style.display = "flex";
        restartButton.style.display = "block";

        scoreText.textContent = `총 ${totalQuestions}문제 중 ${score}개 맞춤! 🎉`;
    }

    function restartQuiz() {
        score = 0; // 점수 초기화
        currentIndex = 0; // 첫 번째 문제로 리셋
        const quizContent = document.getElementById("quiz-content");
        const scoreScreen = document.getElementById("score-screen");
        const restartButton = document.getElementById("restart-button");

        scoreScreen.classList.remove("visible"); // SCORE 화면 숨김
        scoreScreen.style.display = "none"; 
        restartButton.style.display = "none"; // 버튼 숨김
        quizContent.classList.remove("hidden"); // 퀴즈 다시 표시
        loadQuestion();

        
    }

    window.handleEnter = function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    }

    window.restartQuiz = restartQuiz;
    window.goToMain = goToMain;

    function goToMain() {
        window.location.href = "../main.html"; // 메인 페이지로 이동
    }

    // 첫 번째 문제 로드
    loadQuestion();
});
