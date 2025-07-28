'use client'
import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'
import EventGrid from './EventGrid'
import FilterSection from './FilterSection'
import SearchSection from './SearchSection'

const LayananTicketEventWrapper = ({ slides }) => {
  return (
    <div>
      <HeroSection slides={slides} />
      <SearchSection />
      <FilterSection />
      <EventGrid />
      <ContactUs />
    </div>
  )
}

export default LayananTicketEventWrapper
