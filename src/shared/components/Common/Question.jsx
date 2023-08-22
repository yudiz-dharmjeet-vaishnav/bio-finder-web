import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { toast } from 'react-toastify';

import BlackNewTabImg from '@/src/assets/images/new-tab-black.png'
// import CopyIconBlack from '@/src/assets/images/copy.svg'
// import Tooltip from './Tooltip';

export default function Question({ question, homePage }) {
  const [answers, setAnswers] = useState([])
  const [q, setQ] = useState('')

  const router = useRouter()

  useEffect(() => {
    if (question) {
      if (homePage) {
        setQ(question.question)
        setAnswers(question?.answers.slice(0, 5))
      } else {
        setQ(question.question.text)
        setAnswers(question?.ans.map((a) => a.aProfileFields.sDisplayText))
      }
    }
  }, [question, homePage])

  function goToSingleQuestionPage () {
    router.push({
      pathname: `/question/${question?.question}`,
      query: {
        id: question.id
      }
    })
  }

  return (
    <div className="question">
      <div className="question-item">
        <div
          className="question-title dark:bg-black"
        >
          <h1>{q}</h1>
          {homePage &&
            <button onClick={() => goToSingleQuestionPage()}>
              <Image src={BlackNewTabImg} width={20} alt='BlackNewTabImg' />
            </button>
          }
        </div>
        <div className="question-content bg-white dark:bg-black">
          {answers.map((answer, index) => (
            <div key={index} className='answer flex justify-between items-center' onClick={() => {
              navigator.clipboard.writeText(answer || answer?.aProfileFields?.sDisplayText)
              toast("Copied Successfully")
            }}>
              <h2>{answer || answer?.aProfileFields?.sDisplayText}</h2>
              {/* <div className='flex gap-2 my-2' style={{ width: '20px' }}>
                <butotn>
                  <Tooltip />
                </butotn>
                <button onClick={() => {
                  navigator.clipboard.writeText(answer)
                }}>
                  <Image src={CopyIconBlack} alt='CopyIconBlack' width={16} />
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}