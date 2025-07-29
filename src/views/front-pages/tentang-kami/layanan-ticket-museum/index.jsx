'use client'
import SearchSection from './SearchSection'
import DestinationGrid from './DestinationGrid'
import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'

const LayananTicketMuseumWrapper = ({ slides }) => {
  return (
    <div>
      <HeroSection slides={slides} />
      <SearchSection />
      <DestinationGrid />
      <ContactUs />
    </div>
  )
}

export default LayananTicketMuseumWrapper
