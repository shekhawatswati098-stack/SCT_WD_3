const questions = [
{
question:"What does HTML stand for?",
answers:[
{text:"Hyper Text Markup Language", correct:true},
{text:"High Text Machine Language", correct:false},
{text:"Hyper Transfer Markup Language", correct:false},
{text:"Home Tool Markup Language", correct:false}
]
},
{
question:"Which language is used for styling web pages?",
answers:[
{text:"HTML", correct:false},
{text:"CSS", correct:true},
{text:"Java", correct:false},
{text:"Python", correct:false}
]
},
{
question:"Which language is used to make web pages interactive?",
answers:[
{text:"CSS", correct:false},
{text:"JavaScript", correct:true},
{text:"HTML", correct:false},
{text:"C", correct:false}
]
},
{
question:"Which tag is used for images?",
answers:[
{text:"<img>", correct:true},
{text:"<image>", correct:false},
{text:"<pic>", correct:false},
{text:"<src>", correct:false}
]
}
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const result=document.getElementById("result");
const scoreElement=document.getElementById("score");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
showQuestion();
}

function showQuestion(){
resetState();

let currentQuestion=questions[currentQuestionIndex];
questionElement.innerText=currentQuestion.question;

currentQuestion.answers.forEach(answer=>{
const button=document.createElement("button");
button.innerText=answer.text;
button.classList.add("btn");
if(answer.correct){
button.dataset.correct=answer.correct;
}
button.addEventListener("click",selectAnswer);
answerButtons.appendChild(button);
});
}

function resetState(){
nextButton.style.display="none";
answerButtons.innerHTML="";
}

function selectAnswer(e){
const selectedButton=e.target;
const correct=selectedButton.dataset.correct==="true";

if(correct){
score++;
selectedButton.classList.add("correct");
}else{
selectedButton.classList.add("wrong");
}

Array.from(answerButtons.children).forEach(button=>{
if(button.dataset.correct==="true"){
button.classList.add("correct");
}
button.disabled=true;
});

nextButton.style.display="block";
}

nextButton.addEventListener("click",()=>{
currentQuestionIndex++;

if(currentQuestionIndex<questions.length){
showQuestion();
}else{
document.getElementById("quiz").classList.add("hide");
result.classList.remove("hide");
scoreElement.innerText=score+" / "+questions.length;
}
});

startQuiz();