import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import BlackNewTabImg from '@/src/assets/images/new-tab-black.png'
import CopyIconBlack from '@/src/assets/images/copy-black-icon.png'
// import Tooltip from './Tooltip';

export default function Question({ question, homePage }) {
  const [answers, setAnswers] = useState([])

  const router = useRouter()

  useEffect(() => {
    if (question?.answers) {
      if (homePage) {
        setAnswers(question?.answers.slice(0, 5))
      } else {
        setAnswers(question?.answers)
      }
    }
  }, [question?.answers, homePage])

  function goToSingleQuestionPage (question) {
    router.push({
      pathname: `/question/${question?.question}`,
      query: {
        question: JSON.stringify(question)
      }
    })
  }

  return (
    <div className="question">
      <div className="question-item">
        <div
          className="question-title bg-white dark:bg-black"
        >
          <h1>{question?.question}</h1>
          {homePage &&
            <button onClick={() => goToSingleQuestionPage(question)}>
              <Image src={BlackNewTabImg} width={20} alt='BlackNewTabImg' />
            </button>
          }
        </div>
        <div className="question-content bg-white dark:bg-black">
          {answers.map((answer, index) => (
            <div key={index} className='flex justify-between items-center'>
              <h2>{answer}</h2>
              <div className='flex gap-2 my-2' style={{ width: '20px' }}>
                {/* <butotn>
                  <Tooltip />
                </butotn> */}
                <button onClick={() => {
                  navigator.clipboard.writeText(answer)
                }}><Image src={CopyIconBlack} alt='CopyIconBlack' width={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}