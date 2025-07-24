import { slidesQuery } from '@/app/server/actions'
import PpidWrapper from '@/views/front-pages/ppid'

const slides = await slidesQuery()

const Ppid = () => {
  return (
    <div className='bg-backgroundPaper'>
      <PpidWrapper slides={slides.rows} />
    </div>
  )
}

export default Ppid
