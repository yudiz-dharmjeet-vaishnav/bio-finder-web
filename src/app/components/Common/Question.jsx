import React from 'react'
import { useRouter } from 'next/navigation';

function Question({ question, homePage }) {
  const router = useRouter()

  function goToSingleQuestionPage (title) {
    router.push(`/question/${title}`)
  }

  return (
    <div className="question">
      <div className="question-item">
        <div
          className="question-title bg-white dark:bg-black"
        >
          <h1>{question?.question}</h1>
          {homePage &&
            <button onClick={() => goToSingleQuestionPage(question?.question)}>Open</button>
          }
        </div>
        <div className="question-content bg-white dark:bg-black">
          {question?.answers.map((answer) => (
            <li key={answer.id}>{answer.text}</li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Question