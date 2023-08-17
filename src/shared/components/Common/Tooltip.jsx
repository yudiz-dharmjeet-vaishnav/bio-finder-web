import React from 'react'
import Image from 'next/image'

import InfoIconBlack from '@/src/assets/images/info-icon-black.png'

export default function Tooltip() {
  return (
    <div className="relative flex flex-col items-center group">
		<Image src={InfoIconBlack} width={16} alt='InfoiconBlack' />
		<div className="absolute right-0 flex-col items-center justify-center hidden mr-6 group-hover:flex">
      <div className='relative z-10 p-2 text-xs leading-none text-black whitespace-no-wrap bg-white shadow-lg w-96'>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
			  <p>Hello Hello Hello Hello Hello</p>
      </div>
		</div>
	</div>
  )
}