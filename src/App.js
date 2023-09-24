import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div  className="app">
      <FlashCards/>
    </div>
  );
}

const questions = [
  { 
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

function FlashCards() {
const [isSelectedId,setIsSelectedId]=useState(null)

function handleClick(id){
setIsSelectedId(id===isSelectedId?null:id)
}
  return(
  <div className="flashcards">
  
{questions.map(card=>(
  <div className={card.id===isSelectedId?"selected":""} onClick={()=>handleClick(card.id)}>
    <h2>{isSelectedId===card.id? card.answer:card.question}</h2>
  </div>
))}
  </div>);
}
