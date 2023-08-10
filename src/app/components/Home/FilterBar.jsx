'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

function FilterBar() {
  const router = useRouter()

  function goToExploreMorePage() {
    router.push('/explore')
  }

  return (
    <div className='filterbar border-black dark:border-white'>
      <div className='container'>
        <form>
          <select name="Profession" id="Profession" className='dark:bg-black'>
            <option value="">Select Profession</option>
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
          </select>

          <select name="Profession" id="Profession" className='dark:bg-black'>
            <option value="">Select Profession</option>
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
          </select>

          <select name="Profession" id="Profession" className='dark:bg-black'>
            <option value="">Select Profession</option>
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
          </select>

          <button type='button' className='bg-black text-white dark:bg-white dark:text-black' onClick={() => goToExploreMorePage()}>Explore More</button>
        </form>
      </div>
    </div>
  )
}

export default FilterBar