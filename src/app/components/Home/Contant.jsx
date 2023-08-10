"use client"

import React, {useState} from 'react'

import Question from '@/app/components/Common/Question'

function Contant() {
  const [activeTab, setActiveTab] = useState(1)

  const theme = 'light'

  const questions = [
    {
       question: "Question 1",
       answers: [
        { id: '1', text: 'Answer 1'},
        { id: '2', text: 'Answer 2'},
        { id: '3', text: 'Answer 3'},
        { id: '4', text: 'Answer 4'}
       ]
    },
    {
      question: "Question 1",
      answers: [
       { id: '1', text: 'Answer 1'},
       { id: '2', text: 'Answer 2'},
       { id: '3', text: 'Answer 3'},
       { id: '4', text: 'Answer 4'}
      ]
   },{
    question: "Question 1",
    answers: [
     { id: '1', text: 'Answer 1'},
     { id: '2', text: 'Answer 2'},
     { id: '3', text: 'Answer 3'},
     { id: '4', text: 'Answer 4'}
    ]
 },{
  question: "Question 1",
  answers: [
   { id: '1', text: 'Answer 1'},
   { id: '2', text: 'Answer 2'},
   { id: '3', text: 'Answer 3'},
   { id: '4', text: 'Answer 4'}
  ]
},{
  question: "Question 1",
  answers: [
   { id: '1', text: 'Answer 1'},
   { id: '2', text: 'Answer 2'},
   { id: '3', text: 'Answer 3'},
   { id: '4', text: 'Answer 4'}
  ]
},{
  question: "Question 1",
  answers: [
   { id: '1', text: 'Answer 1'},
   { id: '2', text: 'Answer 2'},
   { id: '3', text: 'Answer 3'},
   { id: '4', text: 'Answer 4'}
  ]
},{
  question: "Question 1",
  answers: [
   { id: '1', text: 'Answer 1'},
   { id: '2', text: 'Answer 2'},
   { id: '3', text: 'Answer 3'},
   { id: '4', text: 'Answer 4'}
  ]
},{
  question: "Question 1",
  answers: [
   { id: '1', text: 'Answer 1'},
   { id: '2', text: 'Answer 2'},
   { id: '3', text: 'Answer 3'},
   { id: '4', text: 'Answer 4'}
  ]
},{
  question: "Question 1",
  answers: [
   { id: '1', text: 'Answer 1'},
   { id: '2', text: 'Answer 2'},
   { id: '3', text: 'Answer 3'},
   { id: '4', text: 'Answer 4'}
  ]
},{
  question: "Question 1",
  answers: [
   { id: '1', text: 'Answer 1'},
   { id: '2', text: 'Answer 2'},
   { id: '3', text: 'Answer 3'},
   { id: '4', text: 'Answer 4'}
  ]
},{
  question: "Question 1",
  answers: [
   { id: '1', text: 'Answer 1'},
   { id: '2', text: 'Answer 2'},
   { id: '3', text: 'Answer 3'},
   { id: '4', text: 'Answer 4'}
  ]
},{
  question: "Question 1",
  answers: [
   { id: '1', text: 'Answer 1'},
   { id: '2', text: 'Answer 2'},
   { id: '3', text: 'Answer 3'},
   { id: '4', text: 'Answer 4'}
  ]
},
 ]

  return (
    <div className='contant'>
      <div className='left-sidebar'>
        <h1>Left Sidebar</h1>
      </div>

      <div className='tabpan'>
        <ul className='flex mb-5 border-black dark:border-white'>
          <li className={activeTab === 1 ? `${theme === 'dark' ? 'active-dark' : 'active'}` : ''} onClick={() => setActiveTab(1)}>Questions</li>
          <li className={activeTab === 2 ? `${theme === 'dark' ? 'active-dark' : 'active'}` : ''} onClick={() => setActiveTab(2)}>Bios</li>
        </ul>

        {activeTab === 1 && (
          <div className='questions'>
            {questions?.map((item, index) => 
              (
                <Question key={index} question={item} homePage={true} />
              )
            )}
            <button className='bg-black text-white dark:bg-white dark:text-black'>View More</button>
          </div>
        )}

        {activeTab === 2 && (
          <div className='bios'>

          </div>
        )}
      </div>

      <div className='right-sidebar'>
        <h1>Right Sidebar</h1>
      </div>
    </div>
  )
}

export default Contant