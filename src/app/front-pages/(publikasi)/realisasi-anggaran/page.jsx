import { slidesQuery } from '@/app/server/actions'
import RealisasiAnggaranWrapper from '@/views/front-pages/publikasi/realisasi-anggaran'

const slides = await slidesQuery()

const RealisasiAnggaran = () => {
  return (
    <div className='bg-backgroundPaper'>
      <RealisasiAnggaranWrapper slides={slides.rows} />
    </div>
  )
}

export default RealisasiAnggaran
