import React from 'react'

export default function SearchBar() {
  return (
    <div className='searchbar'>
      <form>
        <input placeholder='Search Anything...' className='dark:bg-black' />
      </form>
    </div>
  )
}