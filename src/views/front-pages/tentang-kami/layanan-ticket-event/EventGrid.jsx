import React from 'react'

import EventCard from './EventCard'

export const events = [
  {
    id: 1,
    title: 'Judul Event',
    shortInfo: 'Short Info Event',
    time: '02:00 PM - 08:00PM',
    category: 'Pameran Kontemporer',
    price: '20.000',
    imageUrl: '/images/front-pages/tentang-kami/layanan-ticket-event/event_grid1.png',
    eventDate: '2025-07-30T14:00:00',
    location: 'Main Gallery, Museum Nasional Indonesia',
    description: 'Short Info Event'
  },
  {
    id: 2,
    title: 'Judul Event',
    shortInfo: 'Short Info Event',
    time: '02:00 PM - 08:00PM',
    category: 'Pameran Kontemporer',
    price: '15.000',
    imageUrl: '/images/front-pages/tentang-kami/layanan-ticket-event/event_grid1.png',
    eventDate: '2025-08-30T14:00:00',
    location: 'Interactibe Wing, Museum Nasional Indonesia',
    description: 'Short Info Event'
  },
  {
    id: 3,
    title: 'Judul Event',
    shortInfo: 'Short Info Event',
    time: '02:00 PM - 08:00PM',
    category: 'Pameran Kontemporer',
    price: '30.000',
    imageUrl: '/images/front-pages/tentang-kami/layanan-ticket-event/event_grid1.png',
    eventDate: '2025-09-30T14:00:00',
    location: 'Main Gallery, Museum Nasional Indonesia',
    description: 'Short Info Event'
  },
  {
    id: 4,
    title: 'Judul Event',
    shortInfo: 'Short Info Event',
    time: '02:00 PM - 08:00PM',
    category: 'Pameran Kontemporer',
    price: 'Htm',
    imageUrl: '/images/front-pages/tentang-kami/layanan-ticket-event/event_grid1.png',
    eventDate: '2025-08-30T14:00:00',
    location: 'Interactibe Wing, Museum Nasional Indonesia',
    description: 'Short Info Event'
  },
  {
    id: 5,
    title: 'Judul Event',
    shortInfo: 'Short Info Event',
    time: '02:00 PM - 08:00PM',
    category: 'Pameran Kontemporer',
    price: 'Htm',
    imageUrl: '/images/front-pages/tentang-kami/layanan-ticket-event/event_grid1.png',
    eventDate: '2025-08-30T14:00:00',
    location: 'Interactibe Wing, Museum Nasional Indonesia',
    description: 'Short Info Event'
  },
  {
    id: 6,
    title: 'Judul Event',
    shortInfo: 'Short Info Event',
    time: '02:00 PM - 08:00PM',
    category: 'Pameran Kontemporer',
    price: 'Htm',
    imageUrl: '/images/front-pages/tentang-kami/layanan-ticket-event/event_grid1.png',
    eventDate: '2025-08-30T14:00:00',
    location: 'Interactibe Wing, Museum Nasional Indonesia',
    description: 'Short Info Event'
  },
  {
    id: 7,
    title: 'Judul Event',
    shortInfo: 'Short Info Event',
    time: '02:00 PM - 08:00PM',
    category: 'Pameran Kontemporer',
    price: 'Htm',
    imageUrl: '/images/front-pages/tentang-kami/layanan-ticket-event/event_grid1.png',
    eventDate: '2025-08-30T14:00:00',
    location: 'Interactibe Wing, Museum Nasional Indonesia',
    description: 'Short Info Event'
  },
  {
    id: 8,
    title: 'Judul Event',
    shortInfo: 'Short Info Event',
    time: '02:00 PM - 08:00PM',
    category: 'Pameran Kontemporer',
    price: 'Htm',
    imageUrl: '/images/front-pages/tentang-kami/layanan-ticket-event/event_grid1.png',
    eventDate: '2025-08-30T14:00:00',
    location: 'Interactibe Wing, Museum Nasional Indonesia',
    description: 'Short Info Event'
  },
  {
    id: 9,
    title: 'Judul Event',
    shortInfo: 'Short Info Event',
    time: '02:00 PM - 08:00PM',
    category: 'Pameran Kontemporer',
    price: 'Htm',
    imageUrl: '/images/front-pages/tentang-kami/layanan-ticket-event/event_grid1.png',
    eventDate: '2025-08-30T14:00:00',
    location: 'Interactibe Wing, Museum Nasional Indonesia',
    description: 'Short Info Event'
  }
]

const EventGrid = () => {
  return (
    <section className='p-5 mt-5 max-md:max-w-full max-md:text-lg'>
      <h2 className='text-black text-5xl font-bold leading-none text-center max-md:max-w-full max-md:text-3xl max-md:mt-10x'>
        Event IHA (Indonesia Heritage Agency)
      </h2>

      <div className='mt-5 max-md:max-w-full max-md:mr-[3px] max-md:mt-10'>
        <div className='grid grid-cols-3 gap-5 max-md:flex-col max-md:items-stretch max-md:grid-cols-2'>
          {events.map(event => (
            <div key={event.id} className='max-md:w-full max-md:ml-0'>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventGrid
