import React from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

function HomePageBiosSkeleton() {
  return (
    <Skeleton count={20} style={{ height: '36px', marginBottom: '4px' }} />
  )
}

export default HomePageBiosSkeleton