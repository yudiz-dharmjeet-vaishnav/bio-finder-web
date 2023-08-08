import React, {useState} from 'react'

function Accordian({item}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title bg-white dark:bg-black"
          onClick={() => setIsActive(!isActive)}
        >
          <h1>{item?.title}</h1>
        </div>
        <div className="accordion-content bg-white dark:bg-black">{item?.content}</div>
      </div>
    </div>
  )
}

export default Accordian