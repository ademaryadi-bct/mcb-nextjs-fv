import { slidesQuery } from '@/app/server/actions'
import CategoryDetailWrapper from '@/views/front-pages/tentang-kami/shop/category/category-detail'

const slides = await slidesQuery()

const CategoryDetail = async ({ params }) => {
  const id = await params.id

  console.log(id)

  return (
    <div>
      <CategoryDetailWrapper slides={slides.rows} />
    </div>
  )
}

export default CategoryDetail
