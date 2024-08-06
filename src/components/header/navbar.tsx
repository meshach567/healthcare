"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>

            <nav className="xs:hidden  sm:hidden md:block">
                { /* Desktop  */}

                <header className=' w-full h-auto flex flex-row  items-center justify-between p-[1.5rem]'>
                    <div className='block'>
                        <Image className='object-fit object-cover block' src="/textimage.svg" alt='text image' width={120} height={120} priority />
                    </div>

                    <ul className='flex space-x-4'>
                        <Link className='flex items-center space-x-2' href="overview">
                            <Image className='object-cover object-center block' src='/home.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Overview</span>
                        </Link >
                        <Link className='flex items-center space-x-2' href="#patients">
                            <Image className='object-cover object-center block' src='/group.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Patients</span>
                        </Link>
                        <Link className='flex items-center space-x-2' href="#schedule">
                            <Image className='object-cover object-center block' src='/calendar.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Schedule</span>
                        </Link>
                        <Link className='flex items-center space-x-2' href="#message">
                            <Image className='object-cover object-center block' src='/chat.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Message</span>
                        </Link>
                        <Link className='flex items-center space-x-2' href="#trasactions">
                            <Image className='object-cover object-center block' src='/creditcard.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Transaction</span>
                        </Link>
                    </ul>

                    <div className='flex item-center space-x-2'>
                        <div>
                            <Image className='object-cover object-center block' src='/senior-woman-doctor-sm.png' alt='senior woman doctor' width={35} height={35} priority />
                        </div>
                        <div className='flex flex-col text-[14px]'>
                            <span className='text-[11px]'>Dr. Jose Simmons</span>
                            <span className='text-[11px]'>General Practitioner</span>
                        </div>
                        <div className='flex item-center space-x-2'>
                            <Image src="/settings.svg" alt='settings' width={15} height={15} priority />
                            <Image src="./more.svg" alt="more " width={3} height={3} priority />
                        </div>
                    </div>
                </header>
            </nav>

            { /* mobile */}
            <nav className='  p-[1.5rem]  '>
                <header className='flex flex-col  space-y-4  xs:block ss:block  md:hidden'>
                    <div className='flex flex-row justify-between'>
                        <div>
                            <Image className='object-fit object-cover block' src="/textimage.svg" alt='text image' width={120} height={120} priority />
                        </div>

                        <div aria-controls="mobile-menu"
                            aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (<AiOutlineClose />) : (<AiOutlineMenu />)}
                        </div>
                    </div>

                    {isOpen && <ul className='flex flex-col space-y-8'>
                        <Link className='flex items-center space-x-2' href="#overview">
                            <Image className='object-cover object-center block' src='/home.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Overview</span>
                        </Link >
                        <Link className='flex items-center space-x-2' href="#patients">
                            <Image className='object-cover object-center block' src='/group.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Patients</span>
                        </Link>
                        <Link className='flex items-center space-x-2' href="#schedule">
                            <Image className='object-cover object-center block' src='/calendar.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Schedule</span>
                        </Link>
                        <Link className='flex items-center space-x-2' href="#message">
                            <Image className='object-cover object-center block' src='/chat.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Message</span>
                        </Link>
                        <Link className='flex items-center space-x-2' href="#trasactions">
                            <Image className='object-cover object-center block' src='/creditcard.svg' alt='patients group' width={12} height={12} priority />
                            <span className='text-[13.5px]'>Transaction</span>
                        </Link>
                        <div className='flex item-center space-x-4'>
                            <div>
                                <Image className='object-cover object-center block' src='/senior-woman-doctor-sm.png' alt='senior woman doctor' width={35} height={35} priority />
                            </div>
                            <div className='flex flex-col text-[14px]'>
                                <span className='text-[11px]'>Dr. Jose Simmons</span>
                                <span className='text-[11px]'>General Practitioner</span>
                            </div>
                            <div className='flex item-center space-x-2'>
                                <Image src="/settings.svg" alt='settings' width={15} height={15} priority />
                                <Image src="./more.svg" alt="more " width={3} height={3} priority />
                            </div>
                        </div>
                    </ul>}

                </header>
            </nav>
        </>

    )
}

export default Navbar;