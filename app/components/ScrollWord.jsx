'use client';
import React from 'react'

function ScrollWord() {

    const scroll = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }


  return (
    <div className='font-primary mt-10'>
        <small onClick={scroll} className='underline cursor-pointer text-[#68538f]'>Scroll down</small>
    </div>
  )
}

export default ScrollWord