
import React from 'react'
import Form from '../components/Form'
import Image from 'next/image'
import contact from '../../public/contact.png'

function Contact() {
  return (
   <section id='contact' className='h-full w-full'>
    <div className='mx-auto mt-6 items-center justify-center text-center pt-10 rounded-md'>
    <Image
    src={contact}
    height={200}
    className='mx-auto mb-10'
    alt='contact theme'
    />
    <Form/>
    </div>
   </section>
  )
}

export default Contact
