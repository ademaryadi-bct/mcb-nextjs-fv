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
            Cari Layanan
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
    </section>
  )
}

export default SearchSection
