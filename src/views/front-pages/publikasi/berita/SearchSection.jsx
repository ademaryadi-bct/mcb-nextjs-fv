'use client'
import React, { useState } from 'react'

export const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState('Semua Tahun')
  const [selectedMedia, setSelectedMedia] = useState('Semua Media')

  const handleSearch = e => {
    e.preventDefault()
    console.log('Search:', { searchQuery, selectedYear, selectedMedia })
  }

  return (
    <section className='flex w-full flex-col items-stretch mt-0 px-5 max-md:max-w-full max-md:mt-10 max-md:pl-5'>
      <form
        onSubmit={handleSearch}
        className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex gap-5 text-black font-normal text-center leading-none flex-wrap justify-between px-5 py-5 rounded-[40px] max-md:max-w-full max-md:px-5'
      >
        <div className='flex justify-between w-full px-5'>
          <input
            id='search-input'
            type='text'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder='Cari Judul Berita, Sub Judul atau Artikel'
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

      <div className='max-w-full ml-3.5x mt-5 max-md:mt-5'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
          <div className='w-5/12 max-md:w-full max-md:ml-0'>
            <div className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex grow items-stretch gap-5 text-2xl text-black font-normal text-center leading-none flex-wrap w-full px-10 py-3 rounded-[40px] max-md:max-w-full max-md:mt-10 max-md:px-5'>
              <img
                src='/images/front-pages/publikasi/berita/filter.svg'
                alt=''
                className='aspect-[1] object-contain w-7 shrink-0 my-auto'
              />
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className='grow shrink text-xl basis-auto bg-transparent outline-none'
              >
                <option value='Semua Tahun'>Semua Tahun</option>
                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
              </select>
            </div>
          </div>
          <div className='w-5/12 ml-5 max-md:w-full max-md:ml-0'>
            <div className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex grow items-stretch gap-5 text-2xl text-black font-normal text-center leading-none flex-wrap w-full px-10 py-3 rounded-[40px] max-md:max-w-full max-md:mt-10 max-md:px-5'>
              <img
                src='/images/front-pages/publikasi/berita/filter.svg'
                alt=''
                className='aspect-[1] object-contain w-7 shrink-0 my-auto'
              />
              <select
                value={selectedMedia}
                onChange={e => setSelectedMedia(e.target.value)}
                className='grow shrink text-xl basis-auto bg-transparent outline-none'
              >
                <option value='Semua Media'>Semua Media</option>
                <option value='Online'>Online</option>
                <option value='Print'>Print</option>
                <option value='TV'>TV</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
