import { slidesQuery } from '@/app/server/actions'
import LayananKonservasiWrapper from '@/views/front-pages/tentang-kami/layanan-konservasi'

const slides = await slidesQuery()

const LayananKonservasi = () => {
  return (
    <div className='bg-backgroundPaper'>
      <LayananKonservasiWrapper slides={slides.rows} />
    </div>
  )
}

export default LayananKonservasi
