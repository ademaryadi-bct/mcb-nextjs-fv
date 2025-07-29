import { slidesQuery } from '@/app/server/actions'
import LayananVenueAlatWrapper from '@/views/front-pages/tentang-kami/layanan-venue-alat'

const slides = await slidesQuery()

const LayananVenueAlat = () => {
  return (
    <div className='bg-backgroundPaper'>
      <LayananVenueAlatWrapper slides={slides.rows} />
    </div>
  )
}

export default LayananVenueAlat
