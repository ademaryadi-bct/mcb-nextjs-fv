'use client'

import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'
import OrganizationalStructure from './OrganizationalStructure'

const Index = ({ slides }) => {
  return (
    <main>
      <HeroSection slides={slides} />
      <OrganizationalStructure />
      <ContactUs />
    </main>
  )
}

export default Index
