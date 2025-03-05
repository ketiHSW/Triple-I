const quizData = [
  {
    image: 'heartsping.png',
    correct: '하츄핑',
    wrong1: '로미',
    wrong2: '빛나핑',
  },
  {
    image: 'bbanzzagping.png',
    correct: '빤짝핑',
    wrong1: '반짝핑',
    wrong2: '초롱핑',
  },
  {
    image: 'binnaping.png',
    correct: '빛나핑',
    wrong1: '위험핑',
    wrong2: '샤샤핑',
  },
  {
    image: 'chachaping.png',
    correct: '차차핑',
    wrong1: '미아핑',
    wrong2: '초롱핑',
  },
  {
    image: 'chorongping.png',
    correct: '초롱핑',
    wrong1: '믿어핑',
    wrong2: '빛나핑',
  },
  {
    image: 'JOAHPING.png',
    correct: '조아핑',
    wrong1: '하츄핑',
    wrong2: '빤짝핑',
  },
  {
    image: 'mideoping.png',
    correct: '믿어핑',
    wrong1: '우산핑',
    wrong2: '빛나핑',
  },
  {
    image: 'romi.png',
    correct: '로미',
    wrong1: '티니핑',
    wrong2: '하츄핑',
  },
  {
    image: 'SHASHAPING.png',
    correct: '샤샤핑',
    wrong1: '믿어핑',
    wrong2: '조아핑',
  },
  {
    image: 'sonzziping.png',
    correct: '솔찌핑',
    wrong1: '안경핑',
    wrong2: '초롱핑',
  },
];
let currentQuizIndex = 0;
let correctAnswers = 0;

function loadQuiz() {
  if (currentQuizIndex >= quizData.length) {
    document.getElementById(
      'quiz-container'
    ).innerHTML = `<h1>퀴즈 완료! 🎉</h1>
        <h2>총 ${quizData.length}문제 중 ${correctAnswers}문제를 맞혔습니다! ✅</h2>`;
    return;
  }

  const quiz = quizData[currentQuizIndex];
  document.getElementById('quiz-image').src = quiz.image;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  let options = [quiz.correct, quiz.wrong1, quiz.wrong2];
  options = options.sort(() => Math.random() - 0.5); // 정답과 오답을 랜덤 섞기

  options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option');
    button.onclick = () => checkAnswer(option, quiz.correct);
    optionsContainer.appendChild(button);
  });

  // 이전 정답 메시지 제거
  document.getElementById('result').textContent = '';
  document.getElementById(
    'score'
  ).textContent = `현재 점수: ${correctAnswers} / ${quizData.length}`;
}

function checkAnswer(selected, correct) {
  const result = document.getElementById('result');
  if (selected === correct) {
    result.textContent = '✅ 정답입니다!';
    result.style.color = 'green';
    correctAnswers++;
  } else {
    result.textContent = `❌ 오답입니다! 정답: ${correct}`;
    result.style.color = 'red';
  }

  setTimeout(() => {
    currentQuizIndex++;
    loadQuiz();
  }, 2000); // 2초 후 다음 문제
}

window.onload = loadQuiz;
