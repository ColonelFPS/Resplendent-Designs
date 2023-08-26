import React from 'react'
import '../components/footer.css'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='font-primary '>
        <a href='/' className='footer-logo'>Resplendant Designs</a>
        <ul className='permalinks'>
            <li className='hover:scale-105 duration-200'><a href='#me'>Me</a></li>
            <li>•</li>
            <li className='hover:scale-105 duration-200'><a href='#portfolio'>Portfolio</a></li>
            <li>•</li>
            <li className='hover:scale-105 duration-200'><a href='#contact'>Contact</a></li>
        </ul>

      <div className='footer-socials'>
        <a href="https://instagram.com/resplendentdesignsbycn"><BsInstagram size={25}/></a>
      </div>

      <div className='footer-copywrite'>
        <small>&copy; Resplendent Designs. EST 2023</small>
      </div>
      <div className='footer-designer'>
        <small>Designed by: <Link href={'https://406.codes'} target='_blank'>406 Codes</Link></small>
      </div>
    </footer>
  )
}

export default Footer
