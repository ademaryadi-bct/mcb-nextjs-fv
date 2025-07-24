import { slidesQuery } from '@/app/server/actions'
import LayananTicketMuseumWrapper from '@/views/front-pages/tentang-kami/layanan-ticket-museum'

const slides = await slidesQuery()

const LayananTicketMuseum = () => {
  return (
    <div className='bg-backgroundPaper'>
      <LayananTicketMuseumWrapper slides={slides.rows} />
    </div>
  )
}

export default LayananTicketMuseum
