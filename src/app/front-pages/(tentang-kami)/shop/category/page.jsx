import { slidesQuery } from '@/app/server/actions'
import ShopCategoryWrapper from '@/views/front-pages/tentang-kami/shop/category'

const slides = await slidesQuery()

const ShopCategory = () => {
  return (
    <div className='bg-backgroundPaper'>
      <ShopCategoryWrapper slides={slides.rows} />
    </div>
  )
}

export default ShopCategory
