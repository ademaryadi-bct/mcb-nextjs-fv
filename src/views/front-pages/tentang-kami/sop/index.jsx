'use client'

import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'

const SopWrapper = ({ slides }) => {
  return (
    <div className='bg-backgroundPaper'>
      <HeroSection slides={slides} />
      <ContactUs />
    </div>
  )
}

export default SopWrapper
