import { slidesQuery } from '@/app/server/actions'
import PeraturanWrapper from '@/views/front-pages/tentang-kami/peraturan'

const slides = await slidesQuery()

const Peraturan = () => {
  return (
    <div className='bg-backgroundPaper'>
      <PeraturanWrapper slides={slides.rows} />
    </div>
  )
}

export default Peraturan
