import React, { useState } from 'react'

// interface SearchSectionProps {
//   onSearch?: (query: string) => void;
//   className?: string;
// }

const SearchSection = ({ onSearch, className = '' }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (onSearch) {
      onSearch(searchQuery)
    }
  }

  const handleInputChange = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <section className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex w-full flex-col items-stretch lg:p-5 max-md:max-w-full max-md:p-5'>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex gap-5x text-black font-normal text-center leading-none flex-wrap justify-between p-5 rounded-[40px] max-md:max-w-full'
      >
        <div className='flex justify-between w-full px-5'>
          <label htmlFor='search-input' className='sr-only'>
            Cari Laporan
          </label>
          <input
            id='search-reports'
            type='text'
            value={searchQuery}
            onChange={handleInputChange}
            placeholder='Cari Laporan'
            className='w-full bg-transparent text-xl outline-none placeholder-black max-md:max-w-full max-md:text-base'
          />
          <button type='submit' aria-label='Search reports'>
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
