import { slidesQuery } from '@/app/server/actions'
import HubungiKamiWrapper from '@/views/front-pages/tentang-kami/hubungi-kami'

const slides = await slidesQuery()

const HubungiKami = () => {
  return (
    <div className='bg-backgroundPaper'>
      <HubungiKamiWrapper slides={slides.rows} />
    </div>
  )
}

export default HubungiKami
