import React from 'react'

function SearchBar() {
  return (
    <div className='searchbar'>
      <form>
        <input placeholder='Search Anything...' className='dark:bg-black' />
      </form>
    </div>
  )
}

export default SearchBar