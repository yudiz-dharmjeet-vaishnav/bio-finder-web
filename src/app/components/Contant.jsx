"use client"

import React, {useState} from 'react'
import Accordian from './Accordian'
import { useTheme } from 'next-themes'

function Contant() {
  const [activeTab, setActiveTab] = useState(1)
  const { theme } = useTheme()

  const questions = [
    {
       title: "Question 1",
       content: 
       <>
        <li>Answer 1</li>
        <li>Answer 2</li>
        <li>Answer 3</li>
      </>
    },
    {
      title: "Question 2",
      content: 
      <>
       <li>Answer 1</li>
       <li>Answer 2</li>
       <li>Answer 3</li>
     </>
   },
   {
    title: "Question 3",
    content: 
    <>
     <li>Answer 1</li>
     <li>Answer 2</li>
     <li>Answer 3</li>
    </>
    },
    {
      title: "Question 3",
      content: 
      <>
       <li>Answer 1</li>
       <li>Answer 2</li>
       <li>Answer 3</li>
      </>
      },{
        title: "Question 3",
        content: 
        <>
         <li>Answer 1</li>
         <li>Answer 2</li>
         <li>Answer 3</li>
        </>
        },{
          title: "Question 3",
          content: 
          <>
           <li>Answer 1</li>
           <li>Answer 2</li>
           <li>Answer 3</li>
          </>
          },{
            title: "Question 3",
            content: 
            <>
             <li>Answer 1</li>
             <li>Answer 2</li>
             <li>Answer 3</li>
            </>
            },{
              title: "Question 3",
              content: 
              <>
               <li>Answer 1</li>
               <li>Answer 2</li>
               <li>Answer 3</li>
              </>
              },{
                title: "Question 3",
                content: 
                <>
                 <li>Answer 1</li>
                 <li>Answer 2</li>
                 <li>Answer 3</li>
                </>
                },{
                  title: "Question 3",
                  content: 
                  <>
                   <li>Answer 1</li>
                   <li>Answer 2</li>
                   <li>Answer 3</li>
                  </>
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
                <Accordian key={index} item={item} />
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