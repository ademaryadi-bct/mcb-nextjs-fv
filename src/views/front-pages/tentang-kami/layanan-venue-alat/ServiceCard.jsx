import React from 'react'

import { MapPin } from 'lucide-react'

const ServiceCard = ({ id, title, location, category, imageUrl, shortLocation }) => {
  return (
    <article className='grow rounded-[40px] flex max-md:mt-[37px]'>
      <div className='w-full p-2.5'>
        <div className='flex w-full flex-col overflow-hidden items-stretch justify-center'>
          <img src={imageUrl} className='object-contain w-full' alt={title} />
        </div>
        <div className='w-full'>
          <div>
            <div className='w-full text-[#0e2523] font-bold'>
              <h3 className='font-bold'>{title}</h3>
            </div>
            <div className='w-full text-[#86807c] font-normal mt-2'>
              <p className='font-normal'>{location}</p>
            </div>
          </div>
          <div className='flex w-full items-center text-zinc-600 font-normal whitespace-nowrap'>
            <div className='items-center self-stretch flex bg-[#F1F0EF] my-auto p-2'>
              <div className='self-stretch my-auto'>
                <span className='font-normal'>{category}</span>
              </div>
            </div>
          </div>
          <div className='flex w-full items-center mt-2.5'>
            <div className='items-center self-stretch flex my-auto'>
              <div className='self-stretch flex flex-col my-auto'>
                <MapPin />
              </div>
              <div className='self-stretch text-lg text-[#514e4b] font-normal whitespace-nowrap leading-none my-auto'>
                <span className='font-normal'>{`${shortLocation} - ${id}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ServiceCard
