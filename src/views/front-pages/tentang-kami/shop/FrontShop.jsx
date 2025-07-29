import { ChevronRight } from 'lucide-react'

import BrandSection from './BrandSection'
import CategorySection from './CategorySection'
import GenderSection from './GenderSection'

export default function FrontShop() {
  return (
    <section className='relative bg-white shadow-lg mx-auto max-w-7xl my-5 z-10 rounded-lg'>
      {/* Hero Image Section */}
      <div
        className='relative h-96 bg-cover bg-center'
        style={{
          backgroundImage: `url('/images/front-pages/tentang-kami/mbc-shop/header.png')`
        }}
      >
        <div className='absolute bottom-4 right-4'>
          <button className='bg-white px-8 py-3 rounded border border-black font-proza text-lg font-normal shadow-lg hover:bg-gray-50'>
            Cek Katalog
          </button>
        </div>
      </div>

      {/* Brand Name Section */}
      <BrandSection />

      {/* Divider */}
      <div className='border-t border-black mx-8'></div>

      {/* Category Section */}
      <CategorySection />

      {/* Divider */}
      <div className='border-t border-black mx-8'></div>

      {/* Gender Section */}
      <GenderSection />
    </section>
  )
}
