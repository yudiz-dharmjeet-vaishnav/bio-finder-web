import React, { useEffect, useState } from 'react'

export default function SearchBar({ setQuestionsData }) {
  const [searchText, setsearchText] = useState('')

  useEffect(() => {
    if (searchText) {  
      async function getSearchedQuestions () {
        const response = await fetch(`https://bio-finder-app.vercel.app/api/home?size=15&search=${searchText}`)
        const json = await response?.json()
    
        const obj = {}
        const arr = []
    
        json?.data?.questions.forEach((question) => {
          if (!obj[question?.categoryValue]) {
            obj[question?.categoryValue] = {
              q: question?.text,
              id: question?.categoryValue
            }
          }
        })
    
        json?.data?.ans.forEach((answer) => {
          const objj = {
            id: obj[answer._id]?.id,
            question: obj[answer._id]?.q,
            answers: answer.value
          }
    
          arr.push(objj)
        })
    
        setQuestionsData(arr)
      }

      const debouncer = setTimeout(() => {
        getSearchedQuestions()
      }, 1000)
      return () => {
        clearTimeout(debouncer)
      }
    }
  }, [searchText, setQuestionsData])

  function handleChange (e) {
    setQuestionsData([])
    setsearchText(e.target.value)
  }

  return (
    <div className='searchbar'>
      <form>
        <input placeholder='Search Anything...' className='dark:bg-black' onChange={handleChange} />
      </form>
    </div>
  )
}