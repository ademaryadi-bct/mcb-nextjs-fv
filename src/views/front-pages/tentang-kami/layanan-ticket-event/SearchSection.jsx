import React, { useState } from 'react'

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [dateFilter, setDateFilter] = useState('')
  const [locationFilter, setLocationFilter] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    console.log('Search:', { searchQuery, dateFilter, locationFilter })
  }

  return (
    <section className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex w-full flex-col items-stretch lg:p-5 max-md:max-w-full max-md:p-5'>
      <form
        onSubmit={handleSearch}
        className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex gap-5 text-black font-normal text-center leading-none flex-wrap justify-between px-5 py-5 rounded-[40px] max-md:max-w-full'
      >
        <div className='flex justify-between w-full px-5'>
          <label htmlFor='search-input' className='sr-only'>
            Cari Event
          </label>
          <input
            id='search-input'
            type='text'
            placeholder='Cari Event'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='w-full bg-transparent text-xl outline-none placeholder-black max-md:max-w-full max-md:text-base'
          />
          <button type='submit' aria-label='Search events'>
            <img
              src='/images/front-pages/publikasi/berita/magnify.svg'
              alt='Search'
              className='aspect-[1] object-contain w-10 shrink-0 max-md:w-7'
            />
          </button>
        </div>
      </form>

      <div className='max-w-full p-5 max-md:px-5 max-md:py-0 max-md:mt-2'>
        <div className='gap-5 flex justify-center max-md:flex-col max-md:items-stretch'>
          <div className='w-6/12 max-md:w-full'>
            <div className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex justify-start grow items-stretch p-5 text-black font-normal text-center leading-none w-full flex-wrap rounded-[40px] max-md:mt-5 max-md:px-5 hover:shadow-[0px_6px_25px_rgba(0,0,0,0.3)] transition-shadow'>
              <img
                src='/images/front-pages/publikasi/berita/filter.svg'
                alt='Calendar'
                className='aspect-[1] object-contain w-7 shrink-0 max-md:w-5'
              />
              <span className='ps-5 shrink text-xl max-md:max-w-full max-md:text-base'>Filter Tanggal</span>
            </div>
          </div>
          <div className='w-6/12 max-md:w-full'>
            <div className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex justify-start grow items-stretch p-5 text-black font-normal text-center leading-none w-full flex-wrap rounded-[40px] max-md:mt-5 max-md:px-5 hover:shadow-[0px_6px_25px_rgba(0,0,0,0.3)] transition-shadow'>
              <img
                src='/images/front-pages/publikasi/berita/filter.svg'
                alt='Location'
                className='aspect-[1] object-contain w-7 shrink-0 max-md:w-5'
              />
              <input
                type='text'
                placeholder='Filter Lokasi'
                className='w-[90%] ps-5 bg-transparent text-xl outline-none placeholder-black max-md:max-w-full max-md:text-base'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
