import React, {useState} from 'react'

function Accordian({item}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <h1>{item?.title}</h1>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">{item?.content}</div>}
      </div>
    </div>
  )
}

export default Accordian