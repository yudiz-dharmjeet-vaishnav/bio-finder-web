"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes'
import Moon from '../../../public/images/moon.png'
import Sun from '../../../public/images/sun.png'
import Image from 'next/image';

function Navbar() {
  const router = useRouter()
  const currentRoute = usePathname()

  const { theme, setTheme } = useTheme()

  function toggleTheme () {
    if (theme === 'dark') {
      return 'light'
    } else {
      return 'dark'
    }
  }

  return (
    <div className='navbar bg-black dark:bg-white'>
      <div className='container'>
        <nav className='flex justify-between items-center h-14'>
          <h1 onClick={() => router.push('/')} className='cursor-pointer text-xl font-semibold text-white dark:text-black'>Bio Finder</h1>
          <ul className='flex gap-10'>
            <li className='text-white dark:text-black'>
              <Link href="/" className={currentRoute === '/' ? `${theme === 'dark' ? 'active-nav-dark' : 'active-nav'} p-2` : 'p-2'}>Home</Link>
            </li>
            <li className='text-white dark:text-black'>
              <Link href="/about" className={currentRoute === '/about' ? `${theme === 'dark' ? 'active-nav-dark' : 'active-nav'} p-2` : 'p-2'}>About</Link>
            </li>
            <li className='text-white dark:text-black' onClick={() => setTheme(toggleTheme)}>
              {
                theme === 'dark' 
                  ? <Image src={Sun} width={24} alt='Sun' />
                  : <Image src={Moon} width={24} alt='Moon' />
              }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar