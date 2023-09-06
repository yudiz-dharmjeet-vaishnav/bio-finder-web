import React from "react";

import Question from "@/src/shared/components/Common/Question";

export default function SingleQuestion({ question }) {
  return (
    <div className="single-question">
      <div className="container">
        <Question question={question} homePage={false} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { query } = context

  const response = await fetch(`https://bio-finder-app.vercel.app/api/useinfo?pageNumber=1&type=${query?.id}`)
  const json = await response?.json()

  return {
      props: {
          question: json?.data
      }
  }
}