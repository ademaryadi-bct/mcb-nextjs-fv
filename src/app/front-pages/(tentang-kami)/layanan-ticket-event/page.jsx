import { slidesQuery } from '@/app/server/actions'
import LayananTicketEventWrapper from '@/views/front-pages/tentang-kami/layanan-ticket-event'

const slides = await slidesQuery()

const LayananTicketEvent = () => {
  return (
    <div className='bg-backgroundPaper'>
      <LayananTicketEventWrapper slides={slides.rows} />
    </div>
  )
}

export default LayananTicketEvent
