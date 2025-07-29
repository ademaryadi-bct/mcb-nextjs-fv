'use client'

import HeroSection from '@/views/front-pages/landing-page/HeroSection'
import { EventDetails } from './EventDetail'
import ContactUs from '@/views/front-pages/landing-page/ContactUs'
import EventDescription from './EventDescription'
import { RelatedEvents } from './RelatedEvents'

const EventDetailWrapper = ({ slides }) => {
  return (
    <div className='p-5'>
      <HeroSection slides={slides} />
      <h2 className='text-black text-5xl font-bold leading-none text-center max-md:max-w-full max-md:text-3xl max-md:mt-10x'>
        Event IHA (Indonesia Heritage Agency)
      </h2>
      <EventDetails event={event} />
      <EventDescription />
      <RelatedEvents />
      <ContactUs />
    </div>
  )
}

export default EventDetailWrapper
