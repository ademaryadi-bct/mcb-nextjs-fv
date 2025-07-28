'use client'
import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'
import FilterSection from './FilterSection'
import ReportsList from './ReportList'
import SearchSection from './SearchSection'

const RealisasiAnggaranWrapper = ({ slides }) => {
  return (
    <div className='bg-backgroundPaper'>
      <HeroSection slides={slides} />
      <SearchSection />
      <FilterSection />
      <ReportsList />
      <ContactUs />
    </div>
  )
}

export default RealisasiAnggaranWrapper
