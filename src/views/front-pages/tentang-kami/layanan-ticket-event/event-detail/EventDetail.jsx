import React from 'react'

import { useParams } from 'next/navigation'

import { Calendar, Clock, MapPin } from 'lucide-react'

import { formatDate } from 'date-fns/format'

import { EventCountdown } from './EventCountdown'
import { events } from '../EventGrid'

export const EventDetails = () => {
  // const eventDate = new Date('2025-08-30T14:00:00')
  const params = useParams()
  const eventId = params.id

  const event = events.filter(event => event.id === Number(eventId))[0]
  const { title, location, time, category, price, imageUrl, eventDate } = event

  return (
    <section className='bg-[rgba(240,215,215,1)] shadow-[0px_4px_20px_rgba(0,0,0,0.25)] self-center flex w-full flex-col items-stretch mt-5 p-5 max-md:max-w-full max-md:p-5'>
      <div className='max-md:max-w-full'>
        <div className='gap-5x flex max-md:flex-col max-md:items-stretch'>
          <div className='w-[36%] max-md:w-full max-md:ml-0'>
            <img
              src='/images/front-pages/tentang-kami/layanan-ticket-event/event_detail.png'
              alt='Event showcase image'
              className='aspect-[0.81] object-contain w-full grow max-md:max-w-full max-md:w-4/4'
            />
          </div>
          <div className='w-[64%] ml-5 max-md:w-full'>
            <div className='flex flex-col max-md:max-w-full'>
              <div className='flex max-w-full flex-col ml-2.5'>
                <h2 className='text-black text-5xl font-bold leading-none text-center max-md:max-w-full max-md:text-3xl'>
                  Upcoming Event
                </h2>
                <EventCountdown targetDate={eventDate} />
                <div className='bg-[rgba(217,217,217,1)] flex w-[430px]x max-w-full flex-col text-[19px] text-black font-bold text-center leading-[3] justify-center mt-5 py-5 rounded-[10px] max-md:px-5'>
                  <span>Pameran Kontemporer</span>
                </div>
              </div>
              <h1 className='text-black text-3xl font-bold p-5 mt-5 max-md:max-w-full'>
                SUNTING Jejak Perempuan Indonesia : Penggerak Perubahan
              </h1>
              <div className='self-stretch flex w-full flex-col max-md:max-w-full'>
                <div className='border shrink-0 max-w-full h-[3px] border-black border-solid' />
                <div className='self-stretch flex w-full items-stretch gap-5 flex-wrap justify-between mt-5x max-md:max-w-full'>
                  <div className='flex text-2xl grow text-black font-normal leading-loose my-auto'>
                    <div className='w-full flex gap-2'>
                      <Calendar size={40} color='rgb(155,133,243)' />
                      <time className='basis-auto grow shrink flex flex-col justify-center' dateTime='2025-07-20'>
                        {formatDate(eventDate, 'dd MMMM yyyy')}
                      </time>
                    </div>
                  </div>
                  <button className='bg-[rgba(155,133,243,1)] shadow-[0px_4px_30px_rgba(0,0,0,0.25)] flex flex-col items-stretch text-2xl font-bold pt-3 justify-center mt-3 px-5 py-2.5 rounded-[20px] max-md:px-5 hover:bg-[rgba(145,123,233,1)] transition-colors'>
                    <span>Beli Tiket</span>
                  </button>
                </div>
                <div className='w-full flex gap-2 text-2xl text-black leading-[3] mt-[-1rem] max-md:mr-1'>
                  <div className='flex flex-col justify-center'>
                    <Clock size={40} color='rgb(155,133,243)' />
                  </div>
                  <time>{time}</time>
                </div>
                <address className='flex gap-2 not-italic text-2xl text-black'>
                  <MapPin size={40} color='rgb(155,133,243)' />
                  <div className='growx shrinkx w-[80%]x mt-3.5x flex flex-col justify-center'>{location}</div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
