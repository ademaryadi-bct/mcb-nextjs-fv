import React from 'react'

import Link from 'next/link'

import { Calendar, Clock, MapPin } from 'lucide-react'

const EventCard = ({ id, title, shortInfo, time, category, price, imageUrl }) => {
  const handleBuyTicket = () => {
    console.log('Buy ticket for:', title)
  }

  return (
    <article className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border flex w-full flex-col mx-auto p-5 rounded-[20px] border-black border-solid max-md:max-w-full max-md:mt-2'>
      <div className='w-full'>
        <div className='grid lg:grid-cols-2 max-md:flex-col max-md:items-stretch'>
          <div className='max-md:w-full max-md:ml-0'>
            <div className='flex grow flex-col text-center max-md:mt-[9px]'>
              <img
                src={imageUrl}
                alt={title}
                className='aspect-[2.11] object-contain w-full self-stretch rounded-[20px]'
              />
              <Link href={`/front-pages/layanan-ticket-event/${id}`} className='text-sm font-bold'>
                <h3 className='text-black text-xl font-bold leading-[3] pt-3'>{title}</h3>
              </Link>
              <p className='text-black text-sm font-normal'>{shortInfo}</p>
            </div>
          </div>
          <div className='ml-5 max-md:w-full max-md:ml-0'>
            <div className='w-full font-normal text-center max-md:mt-4'>
              <div className='w-full'>
                <Calendar size={40} color='rgb(155,133,243)' />
              </div>
              <div className='w-full flex gap-2 text-black leading-[3] max-md:mr-1'>
                <div className='flex flex-col justify-center'>
                  <Clock size={30} color='rgb(155,133,243)' />
                </div>
                <time>{time}</time>
              </div>
              <div className='flex gap-2 text-black'>
                <MapPin size={30} color='rgb(155,133,243)' />
                <div className='growx shrinkx w-[80%]x mt-3.5x flex flex-col justify-center'>{category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='border self-stretch shrink-0 h-1 border-black border-solid max-md:max-w-full max-md:mt-10' />
      <div className='flex max-w-full items-stretch gap-5 text-black text-center flex-wrap justify-between'>
        <div className='text-lg font-normal pt-3'>{`Rp ${price}`}</div>

        <button
          onClick={handleBuyTicket}
          className='bg-[rgba(155,133,243,1)] shadow-[0px_4px_30px_rgba(0,0,0,0.25)] flex flex-col items-stretch font-bold pt-3 justify-center mt-3 px-5 py-2.5 rounded-[20px] max-md:px-5 hover:bg-[rgba(145,123,233,1)] transition-colors'
        >
          Beli Tiket
        </button>
      </div>
    </article>
  )
}

export default EventCard
