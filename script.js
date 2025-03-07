document.addEventListener('DOMContentLoaded', () => {
  const game1Btn = document.getElementById('game1');
  const game2Btn = document.getElementById('game2');
  const game3Btn = document.getElementById('game3');

  game1Btn.addEventListener('click', () => {
    window.location.href = './oxQuiz/oxQuizMain.html';
  });

  game2Btn.addEventListener('click', () => {
    window.location.href = './nonsenseQuiz/nonsenseQuizMain.html';
  });

  game3Btn.addEventListener('click', () => {
    window.location.href = './teeniePing/teeniePingMain.html';
  });
});
