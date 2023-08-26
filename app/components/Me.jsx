
import React from 'react'
import Image from 'next/image'
import me from '../../public/Me.png'
import ScrollWord from './ScrollWord'

function Me() {

    return (
        <section id='me' className='custom-img flex min-h-screen'>
            <div className='mx-auto items-center justify-center text-center mt-[8rem]'>
                <h1 className='font-bold flex flex-col text-3xl text-white underline'>About Me</h1>
                <Image
                    src={me}
                    priority
                    height={450}
                    width={450}
                    alt='this is me'
                    className='mt-20 mx-auto p-2 sm:p-0 rounded-md'
                />
                <ScrollWord/>
            </div>

        </section>
    )
}

export default Me