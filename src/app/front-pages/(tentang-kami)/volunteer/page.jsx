import { slidesQuery } from '@/app/server/actions'
import VolunteerWrapper from '@/views/front-pages/tentang-kami/voluteer'

const slides = await slidesQuery()

const Volunteer = () => {
  return (
    <div className='bg-backgroundPaper'>
      <VolunteerWrapper slides={slides.rows} />
    </div>
  )
}

export default Volunteer
