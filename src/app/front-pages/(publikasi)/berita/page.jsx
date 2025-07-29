import { slidesQuery } from '@/app/server/actions'
import BeritaWrapper from '@/views/front-pages/publikasi/berita'

const slides = await slidesQuery()

const Berita = () => {
  return (
    <div className='bg-backgroundPaper'>
      <BeritaWrapper slides={slides.rows} />
    </div>
  )
}

export default Berita
