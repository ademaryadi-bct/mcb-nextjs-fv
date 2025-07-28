import React, { useState } from 'react'

const FilterSidebar = () => {
  const [areaFilters, setAreaFilters] = useState([
    { id: 'indoor', label: 'Indoor', checked: true },
    { id: 'outdoor', label: 'Outdoor', checked: false },
    { id: 'semi-outdoor', label: 'Semi Outdoor', checked: false }
  ])

  const [facilityFilters, setFacilityFilters] = useState([
    { id: 'photography', label: 'Jasa Fotografi', checked: true },
    { id: 'sound-system', label: 'Sound System', checked: false },
    { id: 'lighting', label: 'Lighting System', checked: false },
    { id: 'equipment', label: 'Sewa Perlengkapan', checked: false },
    { id: 'transport', label: 'Sewa Transportasi', checked: false },
    { id: 'heavy-equipment', label: 'Alat Berat', checked: false }
  ])

  const toggleAreaFilter = id => {
    setAreaFilters(prev => prev.map(filter => (filter.id === id ? { ...filter, checked: !filter.checked } : filter)))
  }

  const toggleFacilityFilter = id => {
    setFacilityFilters(prev =>
      prev.map(filter => (filter.id === id ? { ...filter, checked: !filter.checked } : filter))
    )
  }

  return (
    <aside className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex flex-col items-stretch w-full p-5 max-md:max-w-full'>
      <div className='flex w-full flex-col max-md:max-w-full'>
        <h2 className='text-black text-4xl font-bold leading-none max-md:text-2xl'>Area</h2>
        <div className='items-stretch'>
          {areaFilters.map((filter, index) => (
            <div key={index} className='flex w-full gap-2 text-3xl mt-2'>
              <input
                type='checkbox'
                checked={filter.checked}
                id={filter.id}
                onChange={() => toggleAreaFilter(filter.id)}
                className='w-[2rem] border-red border-solid cursor-pointer max-md:w-[1.5rem]'
              />
              <label htmlFor={filter.id} className='max-md:text-[1.5rem]'>
                {filter.label}
              </label>
            </div>
          ))}
        </div>
        <div className='border shrink-0 mt-5 border-black border-solid max-md:max-w-full' />
      </div>
      <div className='flex w-full flex-col max-md:max-w-full max-md:pr-5'>
        <h2 className='text-black text-4xl font-bold leading-none pt-5 max-md:text-2xl'>Fasilitas</h2>
        <div className='items-stretch'>
          {facilityFilters.map((filter, index) => (
            <div key={index} className='flex w-full gap-2 text-3xl mt-2'>
              <input
                type='checkbox'
                checked={filter.checked}
                id={filter.id}
                onChange={() => toggleFacilityFilter(filter.id)}
                className='w-[2rem] border-red border-solid cursor-pointer max-md:w-[1.5rem]'
              />
              <label htmlFor={filter.id} className='max-md:text-[1.5rem]'>
                {filter.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
