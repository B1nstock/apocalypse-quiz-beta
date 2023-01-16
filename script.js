const questionDisplay= document.querySelector('#questions')
const answerDisplay= document.querySelector('#answer')

const questions= [
 {
   id: 0,
   Text: "Which loved one do you take with you?",
   answers:[
    {
      Text: "Myself",
      Image: "https://thumbs.dreamstime.com/b/happy-young-man-striped-t-shirt-hugging-himself-self-loving-care-people-concept-over-grey-background-179478460.jpg",
      alt:"hugging self",
    },
      
    {
        Text: "your friends hot mom",
      Image: "https://s.wsj.net/public/resources/images/BN-UB370_AUNTMA_M_20170628143551.jpg",
      alt:"two people",

    },
    

    {
        Text: "your favourite pet",
      Image: "https://resources.bestfriends.org/sites/default/files/styles/large/public/2019-01/introducing-dogs-cats-resource_0.jpg?itok=_pvDS_XH",
      alt:"animal",

    },

    {
        Text: "best friend",
      Image: "https://blog.flicks.co.nz/wp-content/uploads/bros.jpg",
      alt:"some guy",

    },

    ]

 },
  
  {
    id: 1,
    Text: "Where would you take shelter?",
    answers: [
        {
            Text: "My underground bunker",
      Image: "",
      alt:"bunker image",
        },
        {
             Text: "The Supermarket!",
      Image: "",
      alt:"supermarket",
        },
         {
             Text: "Abandoned Building",
      Image: "",
      alt:"Abandoned building",
        },
         {
             Text: "My house",
      Image: "",
      alt:"Suburban home",
        },

    ]

  },
 
  {
    id: 2,
    Text: "You're starving,what do you eat?",
    answers: [
        {
            Text: "Eat my loved one (or bits of myself)",
           Image: "https://cdn.britannica.com/91/204591-050-0232C454/Jeffrey-Dahmer-attorneys-hearing-Milwaukee-Wisconsin-August-22-1991.jpg",
      alt:"jeffrey Dahmer",
        },
        {
             Text: "I'll hunt for food",
      Image: "https://www.nps.gov/gicl/learn/nature/images/Abert-s-squirrel_1.jpg",
      alt:"squirell",
        },
         {
             Text: "Maybe I can rummage through garbage?",
      Image: "https://media.istockphoto.com/id/531168932/photo/trash-in-the-park.jpg?s=612x612&w=0&k=20&c=DSCNvps535DKI5Wu4_e6OOuhyx3BCDQkGsZAsS1Q6Ok=",
      alt:"garbage in city",
        },
         {
             Text: "Im vegan ill eat grass :D",
             Image: "https://cdn.evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg",
      
             alt:"grass",
        },

    ]

 }

]
const answers = [
  {
    combination: ["Myself","The Supermarket!","Maybe I can rummage through garbage?"],
    Text: "YOU'RE DEAD!",
    Image: "https://debradupreewilliams.com/wp-content/uploads/2022/08/Here-lies-you.jpg",
    alt: "grave",
    credit: "You can't work alone! team up! Also everyone goes to the supermarket fisrt, you'll end up being a victim to canabilism also you got a diseas from eating garbage genius.."
  },

  {
    combination: ["your friends hot mom","My house","Im vegan ill eat grass :D"],
    Text: "YOU'RE DEAD!",
    Image: "https://debradupreewilliams.com/wp-content/uploads/2022/08/Here-lies-you.jpg",
    alt: "grave",
    credit: "",
  },

  {
    combination: ["your favourite pet","My underground bunker","Eat my loved one (or bits of myself)"],
    Text: "YOU'RE DEAD!",
    Image: "https://debradupreewilliams.com/wp-content/uploads/2022/08/Here-lies-you.jpg",
    alt: "grave",
    credit: "",
  },
  {
    combination: ["your friends hot mom","Abandoned Building","I'll hunt for food"],
    Text: "YOU'RE DEAD!",
    Image: "https://debradupreewilliams.com/wp-content/uploads/2022/08/Here-lies-you.jpg",
    alt: "grave",
    credit: "",
  },
 

]

//Need to have default answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []


const populateQuestions = () => {
    questions.forEach (questions => {
        const titleBlock = document.createElement('div')
        titleBlock.id= questions.id
        titleBlock.classList.add('title-block')

        const titleHeading = document.createElement('h2')
        titleHeading.textContent = questions.Text 
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = questions.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(questions.id)

        questions.answers.forEach (answers => {
            const answerBlock = document.createElement ('div')
            answerBlock.classList.add ('answer-block')
            answerBlock.addEventListener('click',() => handleClick(questions.id, answers.Text))
            
            const answerImage = document.createElement ('img')
            answerImage.setAttribute('src', answers.Image)
           
            const answersTitle = document.createElement ('h3')
            answersTitle.textContent = answers.Text

           const answerInfo = document.createElement('p')
            
            

            answerBlock.append(answerImage, answersTitle)
            answersBlock.append(answerBlock)
        })
         questionDisplay.append(answersBlock)
    })
}
populateQuestions ()

const handleClick = (questionId, chosenAnswer) => {
  if (unansweredQuestions.includes(questionId))
  chosenAnswers.push(chosenAnswer)
  const itemToRemove = unansweredQuestions.indexOf(questionId)

  if (itemToRemove > -1) {
    unansweredQuestions.splice( itemToRemove, 1)
  }
  console.log(chosenAnswers)
  console.log(unansweredQuestions)
   
   disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId


  if (!unansweredQuestions.length){
    //scroll to answer div
    location.href = '#answer'
    showAnswer()
  }
}
const showAnswer = () => {
let result
answers.forEach(answer => {
  if (
    chosenAnswers.includes(answer.combination[0]) +
  chosenAnswers.includes(answer.combination[1]) +
  chosenAnswers.includes(answer.combination[2])
  ){
    result = answer
  } else if (!result) {
    //first answer object is default
    result= answers[0]
  }
})




const answerBlock = document.createElement ('div')
answerBlock.classList.add('result-block')
const answersTitle = document.createElement('h3')
answersTitle.textContent = result.text
const resultInfo = document.createElement('p')

const answerImage = document.createElement('img')
answerImage.setAttribute('src', result.Image)
answerImage.setAttribute('alt', result.alt)
 


answerBlock.append(answersTitle, answerImage,resultInfo)

answerDisplay.append(answerBlock)
const allAnswerBlocks = document.querySelectorAll('.answer-block')
Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
     const currentQuestionBlock = document.getElementById(questionId + "-questions")
     Array.from(currentQuestionBlock.children).forEach(block=> {
     if (block.children.item(1).innerText !== chosenAnswer) {
        block.style.opacity = "50%"
     }

   })

}