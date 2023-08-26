import React from 'react'
import portfolio from '../../public/portfolio.png'
import Image from 'next/image'

function Portfolio() {
  return (
    <section id='portfolio' className='custom-img font-primary'>
  <div className='mx-auto items-center justify-center text-center pt-10'>
                <h1 className='font-bold flex flex-col text-3xl text-white underline'>My Portfolio</h1>
                <Image
                    src={portfolio}
                    height={450}
                    width={450}
                    alt='this is me'
                    className='mt-20 mx-auto p-2 sm:p-0 rounded-md'
                />
                <div className='w-[14rem] mt-4 h-[5rem] mx-auto items-center justify-center'>
                <p className='text-md text-white text-center'>Above, are some of the Logos designed by Resplendent Designs when clients bought our Starter Package. </p>
                </div>
            </div>
   </section>
  )
}

export default Portfolio