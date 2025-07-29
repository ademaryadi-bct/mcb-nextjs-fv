'use client'

import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'
import FrontShop from './FrontShop'

const ShopWrapper = ({ slides }) => {
  return (
    <div className='bg-backgroundPaper'>
      <HeroSection slides={slides} />
      <FrontShop />
      <ContactUs />
    </div>
  )
}

export default ShopWrapper
