import React, {useEffect, useState} from "react";

import FilterBar from "@/src/shared/components/Home/FilterBar";
import SearchBar from "@/src/shared/components/Home/SearchBar";
import Contant from "@/src/shared/components/Home/Contant";

export default function Home({questions}) {
  return (
    <div className="home">
      {/* <FilterBar /> */}
      <div className='container'>
        <SearchBar />
        <Contant questions={questions} />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://bio-finder-app.vercel.app/api/home?size=15")
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

  return {
      props: {
          questions: arr
      }
  }
}