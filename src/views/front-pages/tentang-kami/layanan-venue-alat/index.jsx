'use client'
import HeroSection from '../../landing-page/HeroSection'
import FilterSidebar from './FilterSidebar'
import Pagination from './Pagination'
import SearchSection from './SearchSection'
import ServiceGrid from './ServiceGrid'
import ServiceTypeSelector from './ServiceTypeSelector'

const LayananVenueAlatWrapper = ({ slides }) => {
  return (
    <div>
      <HeroSection slides={slides} />
      <SearchSection />
      <ServiceTypeSelector />
      <div className='flex p-5'>
        <div className='min-w-[30%] max-md:w-[45%]'>
          <FilterSidebar />
        </div>
        <div className='grow ps-5 max-md:w-[55%]'>
          <ServiceGrid />
        </div>
      </div>
    </div>
  )
}

export default LayananVenueAlatWrapper
