'use client';
import React, { useState } from 'react'
import '../components/navbar.css';
import Link from 'next/link';

function Navbar() {

    const [isActive, setIsActive] = useState('/about')
    const [showDropdown, setShowDropdown] = useState(false); // Add state for dropdown menu visibility

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className='font-primary shadow-purple-700 shadow-md''>
            <div className="flex m-auto justify-between items-center py-4 pl-6">
                <Link href={'/'}><h2 className='flex font-extrabold tracking-wider text-xl sm:text-2xl hover:scale-105 duration-300'>Resplendent Designs</h2></Link>
                <div className='flex sm:pr-16 pr-2 gap-2 sm:gap-10 font-bold'>
                    <a onClick={() => setIsActive('/about')} href='#me' className={isActive == '/about' ? 'active cursor-pointer hover:scale-105 px-4 hidden sm:block' : 'cursor-pointer hover:scale-105 hidden sm:block'}>Me</a>
                    <a className='hidden sm:block'>•</a>
                    <a onClick={() => setIsActive('/about#portfolio')} href='#portfolio' className={isActive == '/about#portfolio' ? 'active cursor-pointer hover:scale-105 px-4 hidden sm:block' : 'cursor-pointer hover:scale-105 hidden sm:block'}>Portfolio</a>
                    <a className='hidden sm:block'>•</a>
                    <a onClick={() => setIsActive('/about#contact')} href='#contact' className={isActive == '/about#contact' ? 'active cursor-pointer hover:scale-105 px-4 hidden sm:block' : 'cursor-pointer hover:scale-105 hidden sm:block'}>Contact</a>
                    <div className="relative">
                        <a onClick={toggleDropdown} className="cursor-pointer hover:scale-105 pr-12 sm:hidden hover:underline">Menu</a>
                        {showDropdown && (
                            <div className="absolute items-center cursor-pointer justify-center mx-auto pr-20 mt-4 py-2 w-full bg-[#f59665] rounded-md shadow-lg transform -translate-x-1/2 left-[30%]">
                                <a onClick={toggleDropdown}  href='#me' className="block py-2 px-8 text-black hover:underline">Me</a>
                                <p className='px-10'>•</p>
                                <a onClick={toggleDropdown} href='#portfolio' className="block py-2 px-3 text-black hover:underline">Portfolio</a>
                                <p className='px-10'>•</p>
                                <a onClick={toggleDropdown} href='#contact' className="block py-2 px-3 text-black hover:underline">Contact</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
