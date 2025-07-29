'use client'
import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'
import EventGrid from './EventGrid'
import SearchSection from './SearchSection'

const LayananTicketEventWrapper = ({ slides }) => {
  return (
    <div>
      <HeroSection slides={slides} />
      <SearchSection />
      <EventGrid />
      <ContactUs />
    </div>
  )
}

export default LayananTicketEventWrapper
