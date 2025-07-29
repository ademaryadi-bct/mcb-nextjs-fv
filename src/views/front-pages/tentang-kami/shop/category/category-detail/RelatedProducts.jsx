import React from 'react'

import ProductCard from './ProductCard'

const RelatedProducts = ({ products, onProductClick }) => {
  return (
    <section className='self-center flex w-full max-w-[1702px] flex-col items-center mt-28 max-md:max-w-full max-md:mt-10'>
      <header>
        <h2 className='text-black text-5xl font-bold leading-[1.2] text-center max-md:max-w-full max-md:text-[40px]'>
          Lihat Produk Lain
        </h2>
      </header>
      <div className='self-stretch flex items-stretch gap-5 text-black mt-[27px] max-md:max-w-full max-md:flex-col'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            type={product.type}
            onClick={() => onProductClick?.(product.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
