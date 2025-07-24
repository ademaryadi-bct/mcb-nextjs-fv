'use client'

import { useParams } from 'next/navigation'

import HeroSection from '@/views/front-pages/landing-page/HeroSection'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import RelatedProducts from './RelatedProducts'
import ContactUs from '@/views/front-pages/landing-page/ContactUs'

const CategoryDetailWrapper = ({ slides }) => {
  const productImages = [
    '/images/front-pages/tentang-kami/mbc-shop/product_info.png',
    '/images/front-pages/tentang-kami/mbc-shop/product_info.png',
    '/images/front-pages/tentang-kami/mbc-shop/product_info.png',
    '/images/front-pages/tentang-kami/mbc-shop/product_info.png',
    '/images/front-pages/tentang-kami/mbc-shop/product_info.png'
  ]

  const mainProductImage = '/images/front-pages/tentang-kami/mbc-shop/product_info2.png'

  const productInfo = {
    name: 'Nama Produk',
    details: 'Detail Produk',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }

  const relatedProducts = [
    {
      id: '1',
      image:
        'https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/80b105ad70090cef15bae43123a17339813053d2?placeholderIfAbsent=true',
      name: 'Nama Produk',
      type: 'Tipe Produk'
    },
    {
      id: '2',
      image:
        'https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/80b105ad70090cef15bae43123a17339813053d2?placeholderIfAbsent=true',
      name: 'Nama Produk',
      type: 'Tipe Produk'
    },
    {
      id: '3',
      image:
        'https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/80b105ad70090cef15bae43123a17339813053d2?placeholderIfAbsent=true',
      name: 'Nama Produk',
      type: 'Tipe Produk'
    },
    {
      id: '4',
      image:
        'https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/80b105ad70090cef15bae43123a17339813053d2?placeholderIfAbsent=true',
      name: 'Nama Produk',
      type: 'Tipe Produk'
    },
    {
      id: '5',
      image:
        'https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/80b105ad70090cef15bae43123a17339813053d2?placeholderIfAbsent=true',
      name: 'Nama Produk',
      type: 'Tipe Produk'
    }
  ]

  const handleProductClick = productId => {
    console.log(`Clicked product: ${productId}`)

    // In a real application, this would navigate to the product detail page
  }

  return (
    <div>
      <HeroSection slides={slides} />
      <ProductGallery images={[mainProductImage, ...productImages]} productName={productInfo.name} />
      <ProductInfo name={productInfo.name} details={productInfo.details} description={productInfo.description} />
      <RelatedProducts products={relatedProducts} onProductClick={handleProductClick} />
      <ContactUs />
    </div>
  )
}

export default CategoryDetailWrapper
