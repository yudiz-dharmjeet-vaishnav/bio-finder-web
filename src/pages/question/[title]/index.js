import React, { useState, useEffect } from "react";

import Question from "@/src/shared/components/Common/Question";
import { useRouter } from "next/router";

export default function SingleQuestion() {
  const router = useRouter()
  const [question, setQuestion] = useState()

  useEffect(() => {
    if (router?.query?.id) { 
      async function getSingleQuestionData () {
        const response = await fetch(`https://bio-finder-app.vercel.app/api/useinfo?pageNumber=1&type=${router?.query?.id}`)
        const json = await response.json()
        setQuestion(json.data)
      }
      getSingleQuestionData()
    }
  }, [router?.query?.id])

  return (
    <div className="single-question">
      <div className="container">
        <Question question={question} homePage={false} />
      </div>
    </div>
  )
}
