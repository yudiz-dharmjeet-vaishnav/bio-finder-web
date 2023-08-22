import React from "react";

import Question from "@/src/shared/components/Common/Question";
import { useRouter } from "next/router";

export default function SingleQuestion() {
  const router = useRouter()

  console.log('router.query', router.query)

  return (
    <div className="single-question">
      <div className="container">
        <Question question={router?.query?.question} homePage={false} />
      </div>
    </div>
  )
}
