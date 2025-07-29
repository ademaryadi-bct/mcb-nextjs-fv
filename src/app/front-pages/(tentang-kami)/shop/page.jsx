import { slidesQuery } from '@/app/server/actions'
import ShopWrapper from '@/views/front-pages/tentang-kami/shop'

const slides = await slidesQuery()

const Shop = () => {
  return (
    <div className='bg-backgroundPaper'>
      <ShopWrapper slides={slides.rows} />
    </div>
  )
}

export default Shop
