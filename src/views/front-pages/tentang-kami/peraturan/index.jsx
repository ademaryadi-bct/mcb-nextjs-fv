'use client'

import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'

const PeraturanWrapper = ({ slides }) => {
  return (
    <div>
      <HeroSection slides={slides} />
      <ContactUs />
    </div>
  )
}

export default PeraturanWrapper
