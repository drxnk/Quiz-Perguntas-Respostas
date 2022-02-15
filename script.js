const quizBase = [
  {
    pergunta: "Qual nome do desenvolvedor deste projeto?",
    a: "Luiz Fernando",
    b: "Luiz Henrique",
    c: "Luiz Felipe",
    d: "Luiz Eduardo",
    correct: "c",
  },
  {
    pergunta: "Qual a linguagem de programação mais popular do mundo?",
    a: "Python",
    b: "C#",
    c: "Java",
    d: "JavaScript",
    correct: "d",
  },
  {
    pergunta: "HTML é a abreviação para a expressão inglesa:",
    a: "HyperText Preprocessor",
    b: "HyperText Markup Language",
    c: "Cascading Style Sheet",
    d: "Application Programming Interface",
    correct: "b",
  },
  {
    pergunta: "Oque é uma CPU?",
    a: "Unidade central de processamento",
    b: "Unidade de processamento visual",
    c: "Memória de acesso randômico",
    d: "Unidade de estado sólido",
    correct: "a",
  },
];



const quiz = document.getElementById("quiz");

const respostasEl = document.querySelectorAll(".resposta");
const perguntaEl = document.getElementById("pergunta");
const aTexto = document.getElementById("a_texto");
const bTexto = document.getElementById("b_texto");
const cTexto = document.getElementById("c_texto");
const dTexto = document.getElementById("d_texto");

const enviarBtn = document.getElementById("enviar");

let quizAtual = 0;
let score = 0;



loadQuiz();
function loadQuiz() {
  deselect();

  const baseAtualQuiz = quizBase[quizAtual];

  perguntaEl.innerText = baseAtualQuiz.pergunta;
  aTexto.innerText = baseAtualQuiz.a;
  bTexto.innerText = baseAtualQuiz.b;
  cTexto.innerText = baseAtualQuiz.c;
  dTexto.innerText = baseAtualQuiz.d;
}



function getSelected() {
  let resposta = undefined;

  respostasEl.forEach((respostasEl) => {
    if (respostasEl.checked) {
      resposta = respostasEl.id;
    }
  });
  return resposta;
}



function deselect() {
  respostasEl.forEach((respostasEl) => {
    if (respostasEl.checked) {
      respostasEl.checked = false;
    }
  });
}



enviarBtn.addEventListener("click", () => {
  const resposta = getSelected();

  if (resposta) {
    if (resposta === quizBase[quizAtual].correct) {
      score++;
    }
    quizAtual++;
  }

  if (quizAtual < quizBase.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>Você acertou ${score}/${quizBase.length} perguntas!</h2>`;
  }
});
