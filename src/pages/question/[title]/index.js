import React from "react";

import Question from "@/src/shared/components/Common/Question";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  return (
    <div className="single-question">
      <div className="container">
        <Question question={JSON.parse(router.query.question)} homePage={false} />
      </div>
    </div>
  )
}
