'use client'
import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'

const HubungiKamiWrapper = ({ slides }) => {
  return (
    <div className='bg-backgroundPaper'>
      <HeroSection slides={slides} />
      <ContactUs />
    </div>
  )
}

export default HubungiKamiWrapper
