"use strict";
let built = function buildQuiz(){
  const output = [];

  allAskedQ.forEach(( currentQ, qNumber) =>   {

      // we'll want to store the list of answer choices
      const answers = [];


      // and for each available answer...
      for (var letter in currentQ.answers)  {

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${qNumber}" value="${letter}">
            ${letter} : ${currentQ.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQ.askedQuestion} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });


  quizContainer.innerHTML = output.join("");
};

let result = function viewResults(){
  const answerContainers = quizContainer.querySelectorAll(".answers");

  let score = 0;

  allAskedQ.forEach((currentQ, qNumber) => {
    const answerContainer = answerContainers[qNumber];
    const selector = 'input[name=question'+qNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer===currentQ.correctAnswers){
      score++;
      answerContainers[qNumber].style.color = "lightgreen";
    } else{
      answerContainers[qNumber].style.color = "red";
    }
  });
  resultsContainer.innerHTML = score + " out of " + allAskedQ.length;
};

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const allAskedQ = [
  {
    askedQuestion:
    "Hvad skal man indsætte i sit HTML document for at bruge JavaScript?",
    answers: {
      a: "<function>",
      b: "<javascript>",
      c: "<script>",
      d:  "<js>",
    },
    correctAnswers: "c"
  },
  {
    askedQuestion: "Hvad er et array?",
    answers: {
      a: "Det er et variable, som bruges til at holde forskellige elementer",
      b: "Det er et variable, som sletter forskellige elemementer",
      c: "Det er ikke noget som eksisterer",
      d: "Det er bare et andet navn for en funktion"
    },
    correctAnswers: "a"
  },
  {
    askedQuestion: "Hvad er et modul i JavaScript?",
    answers: {
      d:
      "Det er et genbrugeligt stykke kode",
      c:
      "Det er et ubrugeligt stykke kode",
      a:
      "Det er en enhjørning af kodning",
      b:
      "Det er en funktion, som kan skabe en timer"
    },
    correctAnswers: "d"
  },
  {
    askedQuestion: "Hvem skabte JavaScript?",
    answers: {
      a: "Brendan Eich",
      c: "Harry Potter",
      d: "James McAvoy",
      b: "Jeremy Reynolds"
    },
    correctAnswers: "a"
  },
  {
    askedQuestion: "Hvad kan man ikke lave med JavaScript?",
    answers: {
      b: "Aftensmad",
      a: "Spil",
      c: "Stopur",
      d: "Animationer"
    },
    correctAnswers: "b"
  }
];

export {quizContainer,
  resultsContainer,
  submitButton,
  allAskedQ,
  built,
  result};
