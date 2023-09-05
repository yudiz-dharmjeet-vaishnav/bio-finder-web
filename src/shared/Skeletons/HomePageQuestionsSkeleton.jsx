import React from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

function HomePageQuestionsSkeleton({count}) {
  const arr = [...Array(count).keys()]

  return (
    <>
      {arr.map((item, index) => (
        <div key={index}>
          <Skeleton count={1} style={{ height: '36px', marginBottom: '4px' }} />
          <Skeleton count={1} style={{ height: '200px', marginBottom: '4px' }} />
        </div>
      ))}
    </>
  )
}

export default HomePageQuestionsSkeleton