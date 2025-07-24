import React, { useEffect, useState } from 'react'

import { useParams } from 'next/navigation'

import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react'
import { formatDate } from 'date-fns/format'

import { events } from '../EventGrid'

const EventCard = ({ title, location, time, category, price, imageUrl, eventDate, description }) => {
  return (
    <article className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border grow w-full pl-5 pr-20 py-8 rounded-[20px] border-black border-solid max-md:max-w-full max-md:mt-10 max-md:pr-5'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-[65%] max-md:w-full max-md:ml-0'>
          <div className='flex grow flex-col text-center max-md:mt-9'>
            <img
              src={imageUrl}
              alt={title}
              className='aspect-[2.11] object-contain w-full self-stretch rounded-[20px]'
            />
            <h3 className='text-black text-xl font-bold mt-5'>{title}</h3>
            <p className='text-black text-sm font-normal mt-3'>{description}</p>
          </div>
        </div>
        <div className='w-[60%] ml-5 max-md:w-full max-md:ml-0'>
          <div className='w-full flex gap-2 text-2xl text-black leading-[2] mt-[-1rem]x max-md:mr-1'>
            <div className='flex flex-col justify-center'>
              <Calendar size={30} color='rgb(155,133,243)' />
            </div>
            <time>{formatDate(eventDate, 'dd MMMM yyyy')}</time>
          </div>
          <div className='w-full flex gap-2 text-2xl text-black max-md:mr-1'>
            <div className='flex flex-col justify-center'>
              <Clock size={30} color='rgb(155,133,243)' />
            </div>
            <time>{time}</time>
          </div>
          <div className='w-full flex gap-2 text-2xl text-black mt-2 max-md:mr-1'>
            <div className='flex flex-col justify-start'>
              <MapPin size={30} color='rgb(155,133,243)' />
            </div>
            <div>{location}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

export const RelatedEvents = () => {
  const [currentEvent, setCurrentEvent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent(prev => (prev + 1) % events.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const nextEvent = () => {
    setCurrentEvent(prev => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEvent(prev => (prev - 1 + events.length) % events.length)
  }

  return (
    <section className='w-full max-w-[1746px] mt-[21px] max-md:max-w-full'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-[17%] max-md:w-full max-md:ml-0'>
          <h2 className='text-black text-[41px] font-bold leading-[1.4] text-center self-stretch my-auto max-md:mt-10'>
            Acara Terbaru
          </h2>
        </div>
        <div className='relative max-w-6xl mx-auto'>
          <div className='bg-[rgba(247,241,241,1)] p-10 rounded-4xl'>
            <div className='relative overflow-hidden rounded-2xl bg-card shadow-2xl'>
              {events &&
                events.map((event, index) => (
                  <div
                    key={event.id}
                    className={`transition-all duration-700 ${
                      index === currentEvent
                        ? 'opacity-100 translate-x-0'
                        : index < currentEvent
                          ? 'opacity-0 -translate-x-full absolute inset-0'
                          : 'opacity-0 translate-x-full absolute inset-0'
                    }`}
                  >
                    <EventCard {...event} />
                  </div>
                ))}
            </div>
          </div>
          <button
            onClick={prevEvent}
            className='absolute left-[4rem] top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-3 shadow-lg transition-all'
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextEvent}
            className='absolute right-[4rem] top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-3 shadow-lg transition-all'
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
