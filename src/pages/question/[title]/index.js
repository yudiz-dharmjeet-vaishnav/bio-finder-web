import { useParams } from "next/navigation";
import React from "react";

import Question from "@/src/shared/components/Common/Question";

export default function Home() {
  const params = useParams()

  const item = {
      question: "Question 1",
      answers: [
       { id: '1', text: 'Answer 1'},
       { id: '2', text: 'Answer 2'},
       { id: '3', text: 'Answer 3'},
       { id: '4', text: 'Answer 4'}
      ]
  }

  return (
    <div className="single-question">
      <div className="container">
        <Question question={item} homePage={false} />
      </div>
    </div>
  )
}
