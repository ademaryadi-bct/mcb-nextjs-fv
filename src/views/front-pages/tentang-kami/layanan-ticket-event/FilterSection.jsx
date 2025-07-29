const FilterSection = () => {
  return (
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
  )
}

export default FilterSection
