'use client'
import { SearchSection } from './SearchSection'
import { NewsList } from './NewsList'
import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'

const BeritaWrapper = ({ slides }) => {
  return (
    <div className='bg-backgroundPaper'>
      <HeroSection slides={slides} />
      <main>
        <SearchSection />
        <NewsList />
        <ContactUs />
      </main>
    </div>
  )
}

export default BeritaWrapper
