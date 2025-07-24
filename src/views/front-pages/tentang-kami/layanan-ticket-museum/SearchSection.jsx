import React, { useState } from 'react'

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <section className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex w-full flex-col items-stretch p-5 max-md:max-w-full'>
      <div className='mb-5'>
        <h1 className='text-black text-4xl font-bold leading-none max-md:max-w-full max-md:text-2xl'>
          Jelajahi Seni Budaya Indonesia
        </h1>
        <h2 className='text-black text-3xl font-bold leading-none mt-2 max-md:max-w-full max-md:text-2xl'>
          Tiket Destinasi Budaya
        </h2>
      </div>
      <form
        onSubmit={handleSearch}
        className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex gap-5 text-black font-normal text-center leading-none flex-wrap justify-between px-5 py-5 rounded-[40px] max-md:max-w-full'
      >
        <div className='flex justify-between w-full px-5'>
          <label htmlFor='search-input' className='sr-only'>
            Cari Destination
          </label>
          <input
            id='destination-search'
            type='text'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder='Cari Nama Destinasi'
            className='w-full bg-transparent text-xl outline-none placeholder-black max-md:max-w-full'
          />
          <button type='submit' aria-label='Search'>
            <img
              src='/images/front-pages/publikasi/berita/magnify.svg'
              alt=''
              className='aspect-[1] object-contain w-10 shrink-0'
            />
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchSection
