import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { appleImg, searchImg, bagImg } from "@/utils/index"
import { navLists } from "@/constants/index"

function Navbar() {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>

            <nav className='flex w-full screen-max-width'>
                <Image src={appleImg} alt="Apple" width={18} height={18} />

                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((nav) => (
                        <Link key={nav} href={`/${nav.toLowerCase()}`} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                            {nav}
                        </Link>
                    ))}
                </div>

                <div className='flex items-baseline gap-7 max-sm:justify-end maax-sm:flex-1'>
                    <Image src={searchImg} alt="search" width={18} height={18} />
                    <Image src={bagImg} alt="bag" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar