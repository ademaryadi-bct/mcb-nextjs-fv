import { slidesQuery } from '@/app/server/actions'
import SopWrapper from '@/views/front-pages/tentang-kami/sop'

const slides = await slidesQuery()

const SOP = () => {
  return (
    <div className='bg-backgroundPaper'>
      <SopWrapper slides={slides.rows} />
    </div>
  )
}

export default SOP
