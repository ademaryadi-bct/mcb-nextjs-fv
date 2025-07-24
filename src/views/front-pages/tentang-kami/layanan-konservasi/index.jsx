'use client'

import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'
import AboutSection from './AboutSection'
import CollectionSection from './CollectionSection'
import ConservationSection from './ConservationSection'
import EducationSection from './EducationSection'
import PartnershipSection from './PartnershipSection'

const LayananKonservasiWrapper = ({ slides }) => {
  return (
    <div>
      <HeroSection slides={slides} />
      <AboutSection />
      <CollectionSection />
      <ConservationSection />
      <EducationSection />
      <PartnershipSection />
      <ContactUs />
    </div>
  )
}

export default LayananKonservasiWrapper
