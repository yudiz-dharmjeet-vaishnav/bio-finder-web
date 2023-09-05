import React from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

function QuestionPageSkeleton() {
  return (
    <div>
      <Skeleton count={1} style={{ height: '36px', marginBottom: '4px' }} />
      <Skeleton count={1} style={{ height: '600px', marginBottom: '4px' }} />
    </div>
  )
}

export default QuestionPageSkeleton