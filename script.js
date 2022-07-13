const quiz = [
  {
    text :"次の8つの言葉の中から1つだけ選んでください。",
    question :'スキー、鼻水、コップ、温泉、ゴミ箱、コーヒー、冬、お土産',
  },
  {
    text :"今選んだ単語と関係があるものを、次の中から1つだけ選んでください。",
    question: '電卓、雪、針、ティッシュ、米、まんじゅう、牛乳、電話',
  },
  {
    text :"今選んだ単語の特徴を、次の中から選んでください。",
    question: '大きい、遅い、白い、鋭い、暗い、甘い、牛乳、電話',
  },
  {
    text :"今選んだ特徴と当てはまるものを次の中から選んでください。",
    question: 'ナイフ、ピラミッド、砂糖、亀、犬小屋、宇宙、鍋、深海',
  }
];
//quiz.sort(() => 0.5 - Math.random());

const quizLength = quiz.length;
let quizIndex = 0;

const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');

// クイズの問題文を表示
const setupQuiz = () => {
  document.getElementById('js-text').textContent = quiz[quizIndex].text;
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  //answerInput.value = '';
};

setupQuiz();

const clickHandler = () => {
  quiz[quizIndex].input = setupQuiz.value;
  quizIndex++; // 次の問題へ
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('あなたがえらんだものは砂糖です。');
    //showAllAnswers();
  }
};

// ボタンクリックで正誤判定
submitButton.addEventListener('click', () => {
  clickHandler();
});

/*const showAllAnswers = () => {
  const container = document.getElementById('all-answers-container');
  container.style.display = 'block';
  
  const tbody = document.getElementById('all-answers-tbody');
  for (const q of quiz) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${q.question}</td><td>${q.input}</td><td>${q.correct}</td><td>${q.input === q.correct ? '○' : '×'}</td>`;
    tbody.appendChild(row);
  }
};*/