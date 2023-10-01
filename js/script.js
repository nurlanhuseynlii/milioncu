const questionData=[
    {
        question : "In what children's game are participants chased by someone designated \"It\"?",
        
          a: "Tag",
          b:"Simon Says",
          c:"Charades",
          d: "Hopscotch",
          correct : 'a'
    },
    {
        question : "On a radio, stations are changed by using what control?",
        
           a: "Tuning",
           b: "Volume",
           c: "Bass",
           d: "Treble",
        
        correct : 'a'
    },
    {
        question : "Which material is most dense?",
        
            a:"Silver",
            b:"Styrofoam",
            c:"Butter",
            d:"Gold",
           correct : 'c'
    },
    {
        question : "Which state in the United States is largest by area?",
        
            a:"Alaska",
            b:"California",
            c:"Texas",
            d:"Hawaii",
        correct : 'a'
    },
    {
        question : "What is Aurora Borealis commonly known as?",
            
            a:"Fairy Dust",
            b:"Northern Lights",
            c:"Book of ages",
            d:"a Game of Thrones main character",
        
        correct : 'b'
    },
   
]



const milioncu = document.querySelector('.millionaire-container');
const answall = document.querySelectorAll('.a-sual');
const question = document.querySelector('.questions');
const a1Txt = document.querySelector('#a1-txt');
const a2Txt = document.querySelector('#a2-txt');
const a3Txt = document.querySelector('#a3-txt');
const a4Txt = document.querySelector('#a4-txt');
const btn = document.querySelector('#submit');

let currentquiz = 0
let score = 0


loadQuiz();

function loadQuiz (){

    deselectAnswer();

    const currentQuestionData = questionData[currentquiz]
    question.innerText = currentQuestionData.question;

    a1Txt.innerText = currentQuestionData.a
    a2Txt.innerText = currentQuestionData.b
    a3Txt.innerText = currentQuestionData.c
    a4Txt.innerText = currentQuestionData.d

 
}


function deselectAnswer(){
    answall.forEach(answall => answall.checked = false)
}

function getselected(){
    let answer;

    answall.forEach(answall=>{
        if(answall.checked){
            answer = answall.id     
        }
    })
    return answer

    
}

btn.addEventListener('click' , ()=>{

    

    const answer = getselected()

    if(answer === questionData.correct){
        alert('xanani doldur')
        score++
    }

  
    currentquiz++
  

  

  if(answall == questionData.correct){
    milioncu.style.background = 'green'
  }else{
    milioncu.style.background = 'red'
  }

    

    if(currentquiz < questionData.length){
        loadQuiz();
    }else{
        milioncu.innerHTML = `<h2>you answered correctly at ${score} / ${questionData.length} questions</h2> `
    }
} )