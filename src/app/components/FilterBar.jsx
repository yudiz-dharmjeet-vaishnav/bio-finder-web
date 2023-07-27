import React from 'react'

function FilterBar() {
  return (
    <div className='filterbar'>
      <div className='container'>
        <form>
          <select name="Profession" id="Profession">
            <option value="">Select Profession</option>
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
          </select>

          <select name="Profession" id="Profession">
            <option value="">Select Profession</option>
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
          </select>

          <select name="Profession" id="Profession">
            <option value="">Select Profession</option>
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
          </select>

          <button>Explore More</button>
        </form>
      </div>
    </div>
  )
}

export default FilterBar