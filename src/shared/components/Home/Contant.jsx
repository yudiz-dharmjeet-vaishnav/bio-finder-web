import React from 'react'
import { toast } from 'react-toastify';

import Question from '@/src/shared/components/Common/Question'
import HomePageBiosSkeleton from '../../Skeletons/HomePageBiosSkeleton';
import HomePageQuestionsSkeleton from '../../Skeletons/HomePageQuestionsSkeleton';

export default function Contant({questions, biosData, activeTab, setActiveTab}) {
  const theme = 'light'

  return (
    <div className='contant'>
      {/* <div className='left-sidebar'>
        <h1>Left Sidebar</h1>
      </div> */}

      <div className='tabpan'>
        <ul className='flex mb-5 border-black dark:border-white'>
          <li className={activeTab === 1 ? `${theme === 'dark' ? 'active-dark' : 'active'}` : ''} onClick={() => setActiveTab(1)}>Questions</li>
          <li className={activeTab === 2 ? `${theme === 'dark' ? 'active-dark' : 'active'}` : ''} onClick={() => setActiveTab(2)}>Bios</li>
        </ul>

        {activeTab === 1 && (
          <div className='questions'>
            {!questions.length && <HomePageQuestionsSkeleton count={5} />}
            {questions?.map((item, index) => 
              (
                <Question key={index} question={item} homePage={true} />
              )
            )}
            <button className='bg-black text-white dark:bg-white dark:text-black' id='view-more-btn'>View More</button>
          </div>
        )}

        {activeTab === 2 && (
          <div className='question-item'>
            <div className="question-content dark:bg-black">
              {!biosData?.ans && <HomePageBiosSkeleton />}
              {biosData?.ans?.map((bio, index) => (
                <div key={index} className='answer-bio flex justify-between items-center mb-2 bg-white p-8 rounded-lg' onClick={() => {
                  navigator.clipboard.writeText(bio?.aProfileFields?.sDisplayText)
                  toast("Copied Successfully")
                }}>
                  <h2>{bio?.aProfileFields?.sDisplayText}</h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* <div className='right-sidebar'>
        <h1>Right Sidebar</h1>
      </div> */}
    </div>
  )
}