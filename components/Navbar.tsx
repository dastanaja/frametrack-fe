import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav >
      <div className='mx-auto mt-6 flex items-center justify-between py-2 max-w-[1450px]'>
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/logo.png" alt='Logo Frame Track' width={80} height={80} />
          </Link>
        </div>

        {/* Nav items */}
        <div>
          <ul className='flex gap-4 text-[#98abbc] font-medium'>
            <li className='hover:text-white transition-colors duration-150 ease-in-out'>
              <Link href="/diary">Diary</Link>
            </li>
            <li className='hover:text-white transition-colors duration-150 ease-in-out'>
              <Link href="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar