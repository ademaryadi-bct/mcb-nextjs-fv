import { slidesQuery } from '@/app/server/actions'
import EventDetailWrapper from '@/views/front-pages/tentang-kami/layanan-ticket-event/event-detail'

const slides = await slidesQuery()

const EventDetail = () => {
  return (
    <div className='bg-backgroundPaper'>
      <EventDetailWrapper slides={slides.rows} />
    </div>
  )
}

export default EventDetail
