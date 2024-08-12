
const quizDB = [
    {
    question: "Q1: What is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"HyperText Makeup Language",
    d:"HyperText Markup Language",
    ans:"ans4"
},
{
    question:"Q2: What is the full form of CSS?",
    a:"Cascading Style Sheets",
    b:"Cascading Style Sheep",
    c:"Cartoon Style Sheets",
    d:"Cascading Super Sheets",
    ans:"ans1",
},

{
    question:"Q3: What is full form of HTTP?",
    a:"Hypertext Transfer Product",
    b:"Hypertext test protocol",
    c:"Hey Transfer Protocol",
    d:"Hypertext Transfer Protocolo ",
    ans:"ans4"

},
{
    qustion:"Q4:What is the full form of JS",
    a:"JavaSuper",
    b:"JavaScript",
    c:"JustScript",
    d:"JordenShoes",
}
];


let question = document.querySelector(".question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2") ;
let option3 = document.querySelector("#option3") ;
let option4 = document.querySelector("#option4") ;
let submit = document.querySelector("#submit");

let answers = document.querySelector(".answer");

let questionCount = 0;

function loadQuestion() {
    const  questionList = quizDB[questionCount];

    question.innerText =  questionList.question;

    option1.innerText =  questionList.a;
    option2.innerText =  questionList.b;
    option3.innerText =  questionList.c;
    option4.innerText =  questionList.d;



}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.map((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       
    });

   return answer;
   
}

submit.addEventListener('click', () => {
     const checkedAnswer = getCheckAnswer();
     console.log(checkedAnswer)
});
