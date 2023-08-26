
import React from 'react'
import Me from '../components/Me'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import SecondLayout from '../components/secondLayout'
import Footer from '../components/Footer'

function ViewPage() {
  return (
     <SecondLayout>
      <div className='custom-img'>
        <Me />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </SecondLayout>
  )
}

export default ViewPage
