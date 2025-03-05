const questions = [
    { question: "달팽이도 이빨이 있다.", answer: "O" },
    { question: "열대 지방에 자라는 나무에는 나이테가 없다.", answer: "O" },
    { question: "원숭이에게도 지문이 있다.", answer: "O" },
    { question: "벼룩은 간을 가지고 있다.", answer: "X" },
    { question: "지하철 1량 (칸)에는 출입문이 모두 8개이다.", answer: "O" },
    { question: "세계에서 제일 처음으로 텔레비전 방송을 시작한 나라는 영국이다.", answer: "O" },
    { question: "말도 잠을 잘 때는 사람과 같이 코를 곤다.", answer: "O" },
    { question: "셰익스피어 희곡 햄릿의 주인공인 햄릿은 네덜란드 사람이다.", answer: "X" },
    { question: "바늘 한 쌍은 모두 22개이다.", answer: "X" },
    { question: "북두칠성은 시계의 반대 방향으로 회전한다.", answer: "O" },
    { question: "게의 다리는 모두 10개이다.", answer: "O" },
    { question: "열대 지방에 자라는 나무에는 나이테가 없다.", answer: "O" },
    { question: "늑대는 개 과, 호랑이는 고양이과에 속한다. 닭은 꿩과에 속한다.", answer: "O" },
    { question: "여자들은 흔히 사용하는 화장용 크림은 약간 단맛이 나는데, 그 이유는 화장용 크림 속에 글리셀린 성분이 들어있기 때문이다.", answer: "O" },
    { question: "벼룩은 암컷과 수컷 가운데 수컷의 몸집이 더 크다.", answer: "X" },
    { question: "딸기는 장미과에 속한다.", answer: "O" },
    { question: "여의도 국회의사당을 둘러싸고 있는 돌기둥의 수는 모두 24개이다.", answer: "O" },
    { question: "아라비아 숫자 1부터 100사이에는 9라는 숫자가 모두 19개 들어 있다.", answer: "X" },
    { question: "금강산은 경치가 아름다워 4계절마다 불리우는 이름이 다르다.", answer: "O" },
    { question: "병아리도 배꼽이 있다.", answer: "O" },
    { question: "전쟁시 여자아이보다 남자아이의 출생률이 높다.", answer: "O" },
    { question: "향수 선택법 : 향수를 바르게 고르려면 손등에 바른 후 10분 경과한 뒤에 냄새를 맡아보아야 한다.", answer: "O" },
    { question: "세계적으로 가장 많이 발생하는 병은 말라리아 (학질) 이다.", answer: "X" },
    { question: "세계 최초의 신용카드는 아메리칸 익스프레스이다.", answer: "X" },
    { question: "채찍이라는 뜻을 가진 '람바다'는 브라질 춤이다.", answer: "O" },
    { question: "밀물과 썰물 현상은 하루 2번씩 일어난다.", answer: "O" },
    { question: "고추 1관은 5Kg 이다.", answer: "X" },
    { question: "조선시대 호패는 (주민등록증) 16세 이상 모든 남녀가 소지했다.", answer: "X" },
    { question: "인간의 뇌 세포는 재생이 안 되는 신체세포이다.", answer: "O" },
    { question: "사람의 5가지 (시각, 후각, 미각, 청각, 촉각) 충에서 가장 먼저 나빠지는 감각기관은 시각이다.", answer: "O" },
    { question: "우리나라 최초의 대중가요는 1923년부터 불리워진 '희망가'이다.", answer: "X" },
    { question: "우리나라에서 가장 넓은 차선은 광화문 앞에 16차선이다.", answer: "O" },
    { question: "시내버스 경로석은 6석 이상이 되어야 한다.", answer: "O" },
    { question: "용은 십장생의 하나다.", answer: "X" },
    { question: "일간신문은 3종 우편물이다.", answer: "O" },
    { question: "물고기도 기침을 한다.", answer: "O" },
    { question: "사슴뿔은 매년 빠졌다 다시 난다.", answer: "O" },
    { question: "사람의 땀은 산성이다.", answer: "O" },
    { question: "소는 꿇어 낮을 때 앞 다리부터 앉는다. 그럼 말은 뒷다리부터 꿇어앉는다.", answer: "O" },
    { question: "색소폰은 그 이름이 최초의 연주자 이름으로부터 유래된 것이다.", answer: "O" },
    { question: "로댕의 생각하는 사람은 오른손으로 턱을 받치고 있다.", answer: "O" },
    { question: "고대 원시인들의 가장 큰 적은 공룡이었다.", answer: "X" },
    { question: "남자와 여자의 목소리 중 멀리 들리는 것은 여자 목소리다.", answer: "O" },
    { question: "달걀은 어린 닭이 낳은 것일수록 그 크기가 크다.", answer: "X" },
    { question: "열대어가 입을 맞추는 것은 애정의 표현이다.", answer: "X" },
    { question: "축구 경기에서 사용되는 공은 흰색과 검은색으로 만들어야 한다.", answer: "X" },
    { question: "마라톤은 42.195 Km를 달린다. 이 거리는 제1회 아테네 올림픽부터 채택된 것이다.", answer: "X" },
    { question: "탱고의 고장은 '아르헨티나'다.", answer: "O" },
    { question: "단오 날 여인들은 '청포' 라는 물로 머리를 감았다.", answer: "X" },
    { question: "고래는 수심 5M 이하의 물 속에서 잠을 잔다.", answer: "X" },
    { question: "우리나라에서 최초로 지정된 국립 공원은 지리산이다.", answer: "O" },
    { question: "역사상 한 여인이 가장 많은 아이를 낳은 출산기록이 60명 이하다.", answer: "X" },
    { question: "원숭이에게도 지문이 있다.", answer: "O" },
    { question: "호적법에 의하면 사람이 출생한 후 출생신고를 하게 되어 있다. 신고는 보름 이내에 해야한다.", answer: "X" },
    { question: "셰익스피어의 4대 비극의 하나인 '리어왕'의 주인공은 3명의 딸이 있다.", answer: "O" },
    { question: "윤선도의 '오우가'중 다섯 벗이란 물, 돌, 소나무, 대나무, 해이다.", answer: "X" },
    { question: "서울로 들어오는 중부고속도로 톨게이트의 입구에 파인 홈은 모두 14개이다.", answer: "X" },
    { question: "코끼리의 젖꼭지는 2개이고, 고양이는 8개이고, 사람과 고래의 젖꼭지는 2개이다. 그러면 곰의 젖꼭지는 4개이다.", answer: "O" },
    { question: "덴마아크의 3대 명물로는 나막신, 튜울립 그리고 풍차이다.", answer: "O" },
    { question: "파란 전등 밑에서 빨강 종이를 보면 보라색으로 보인다.", answer: "X" },
    { question: "기린의 목뼈는 모두 7개이다. 그러면 사람은 그보다 작은 5개이다.", answer: "X" },
    { question: "서울 지하철 및 전철 호선을 갈아타는 곳은 20군데이다.", answer: "O" },
    { question: "지상에 동물중 가장 키가 큰 동물인 기린의 울음소리는 말의 울음소리와 비슷하다.", answer: "O" },
    { question: "빵은 순수한 우리말이다.", answer: "O" },
    { question: "옛 서당에도 오늘날의 반장이 있었다.", answer: "O" },
    { question: "차례 상을 차릴 때 흰 과일은 동쪽, 붉은 과일은 서쪽에 놓는다.", answer: "O" },
    { question: "북쪽을 가리키는 별은 북극성, 남쪽을 가리키는 별은 남십자성이다.", answer: "O" },
    { question: "육상 선수가 한쪽 발에만 운동화를 신고 경기할 수 없다.", answer: "X" },
    { question: "난중일기는 이순신 장군이 전사하기 한달 전까지 기록되어있다.", answer: "O" },
    { question: "비행기의 출발시간이란 비행기의 탑승문이 완전히 닫힌 순간을 말한다.", answer: "X" },
    { question: "백설공주에 나오는 일곱 난쟁이의 직업은 광부였다.", answer: "O" },
    { question: "남극에도 우편번호가 있다.", answer: "X" },
    { question: "수놈 캥거루가 앞발을 들고 권투하는 모습을 보여 주는 것은 암컷에 대한 프로포즈이다.", answer: "O" },
    { question: "서울 마사회 과천 경마장 정문 앞의 말 동상은 숫말이다.", answer: "O" },
    { question: "대한극장 좌석 수는 1,920석이다.", answer: "O" },
    { question: "버스의 무임 승차 나이는 6세 미만이다.", answer: "O" },
    { question: "BUS라는 단어는 미국에서 처음 사용하였다.", answer: "X" },
    { question: "꺼벙이란 꿩의 새끼를 말한다.", answer: "O" },
    { question: "고래는 보통 한 마리의 새끼를 낳고 명태는 약 30만개의 알을 한번에 낳는다. 그리고 돼지는 보통 5마리 6마리의 새끼를 낳는다.", answer: "X" },
    { question: "우리나라에서 김장철 김치에 쓰이는 무와 배추는 십자화과에 속한다.", answer: "O" },
    { question: "영국의 위대한 극작가인 셰익스피어가 쓴 비극 '롬오와 줄리엣'에서 로미오가 더 오래 살았다.", answer: "O" },
    { question: "가장 강한 독을 가진 개구리 1마리의 독으로 사람을 2000명 이상을 죽일 수 있다.", answer: "O" },
    { question: "지하철 1자리에는 8명이 앉을 수 있다.", answer: "X" },
    { question: "우리 나라 주화 중 50원 짜리에 그려진 보리 알의 개수는 35개가 넘는다.", answer: "X" },
    { question: "맥주를 많이 마시면 배가 나온다.", answer: "X" },
    { question: "머리를 자주 감으면 머리카락이 빠진다.", answer: "X" },
    { question: "1부터 7까지 곱한 숫자가 1부터 100까지 더한 숫자보다 높다", answer: "X" },
    { question: "개구리를 먹던 살모사가 자기 혀를 깨물었을 경우 살모사는 죽는다.", answer: "O" },
    { question: "닭도 왼발잡이 , 오른발잡이가 있다.", answer: "O" },
    { question: "다섯 손톱가운데 가장 잘 자라는 손톱은 엄지손톱이다.", answer: "X" },
    { question: "색맹도 색깔이 있는 꿈을 꿀 수가 있다", answer: "X" },
    { question: "사마귀가 있는 사람과 키스를 하면 자신도 사마귀가 생긴다.", answer: "O" },
    { question: "개발에도 땀이 난다", answer: "X" },
    { question: "사람의 몸에서 가장 불결한 곳은 발가락이다", answer: "O" },
    { question: "새는 뒤로도 날 수 있다.", answer: "O" },
    { question: "한국 돌고래와 미국 돌고래는 말이 통한다.", answer: "X" },
    { question: "사람의 세포는 개미의 세포보다 크다.", answer: "X" },
    { question: "비행기의 블랙박스는 검은색이다.", answer: "X" },
    { question: "여객선의 출발 시간은 뱃고동을 통해 알린다.", answer: "X" },
    { question: "남극을 갈 때도 비자가 필요하다.", answer: "X" },
    { question: "위가 없어도 사람은 살 수 있다.", answer: "O" },
    { question: "지구에서 육안으로 한 번에 볼 수 있는 별의 숫자는 약 4,000개 정도이다.", answer: "X" }
];


let currentQuestionIndex = 0; // 현재 문제 인덱스
let currentPrize = 456; // 초기 상금
const questionElement = document.getElementById("question");
const resultElement = document.getElementById("result");
const prizeElement = document.getElementById("prize");
const btnO = document.getElementById("btn-o");
const btnX = document.getElementById("btn-x");
const btnS = document.getElementById("btn-s");
const btnR = document.getElementById("btn-r"); // 돌아가기 버튼

// 상금 업데이트 함수
function updatePrize(isCorrect) {
    if (!isCorrect) {
        currentPrize -= 45; // 틀릴 경우 1000원 차감
    }
    prizeElement.textContent = `💵누적 상금 : ${currentPrize}억💵`;
}

// 문제 로드 함수
function loadQuestion() {
    if (currentQuestionIndex < 10) {
        questionElement.textContent = questions[currentQuestionIndex].question;
        resultElement.textContent = "";
        btnO.classList.remove("correct-o", "correct-x");
        btnX.classList.remove("correct-o", "correct-x");
        btnO.disabled = false;
        btnX.disabled = false;
    } else {
        questionElement.textContent = "퀴즈가 끝났습니다!";
        resultElement.textContent = `최종 상금 : ${currentPrize}억`;
        btnO.style.display = "none";
        btnX.style.display = "none";
        btnR.style.display = "inline-block";
    }
}

// 정답 확인 및 색상 변경 함수
function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
        resultElement.textContent = "정답입니다!";
        if (correctAnswer === "O") {
            btnO.classList.add("correct-o");
        } else {
            btnX.classList.add("correct-x");
        }
    } else {
        resultElement.textContent = `틀렸습니다. 정답은 ${correctAnswer}입니다.`;
        if (correctAnswer === "O") {
            btnO.classList.add("correct-o");
        } else {
            btnX.classList.add("correct-x");
        }
    }

    updatePrize(isCorrect);

    btnO.disabled = true;
    btnX.disabled = true;

    currentQuestionIndex++;
    
    setTimeout(loadQuestion, 2000);
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}




// 이벤트 리스너 추가
btnO.addEventListener("click", () => checkAnswer("O"));
btnX.addEventListener("click", () => checkAnswer("X"));
btnR.addEventListener("click", () => {
    window.location.href = "../main.html"; // main.html로 이동
});



// 문제 섞기
shuffleQuestions();

// 첫 번째 문제 로드
loadQuestion();

