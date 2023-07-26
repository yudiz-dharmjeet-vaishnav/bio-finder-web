"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter()
  const currentRoute = usePathname()

  return (
    <div className='container'>
      <nav className='flex justify-between items-center h-16'>
        <h1 onClick={() => router.push('/')} className='cursor-pointer text-xl font-semibold'>Bio Finder</h1>
        <ul className='flex gap-10'>
          <li>
            <Link href="/" className={currentRoute === '/' ? 'active-nav py-2' : 'py-2'}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={currentRoute === '/about' ? 'active-nav py-2' : 'py-2'}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar