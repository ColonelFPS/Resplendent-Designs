
import React from 'react'
import Me from '../components/Me'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import SecondLayout from '../components/secondLayout'
import Footer from '../components/Footer'

function ViewPage() {
  return (
    <SecondLayout>
      <>
        <Me />
        <Portfolio />
        <Contact />
        <Footer/>
      </>
    </SecondLayout>
  )
}

export default ViewPage