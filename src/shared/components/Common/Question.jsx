import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import BlackNewTabImg from '@/src/assets/images/new-tab-black.png'
import CopyIconBlack from '@/src/assets/images/copy-icon-black.png'
import Tooltip from './Tooltip';

export default function Question({ question, homePage }) {
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
            <button onClick={() => goToSingleQuestionPage(question?.question)}>
              <Image src={BlackNewTabImg} width={20} alt='BlackNewTabImg' />
            </button>
          }
        </div>
        <div className="question-content bg-white dark:bg-black">
          {question?.answers.map((answer) => (
            <div key={answer.id} className='flex justify-between items-center'>
              <h2>{answer.text}</h2>
              <div className='flex gap-2 my-2'>
                <butotn>
                  <Tooltip />
                </butotn>
                <button onClick={() => {
                  navigator.clipboard.writeText(answer.text)
                }}><Image src={CopyIconBlack} alt='CopyIconBlack' width={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}