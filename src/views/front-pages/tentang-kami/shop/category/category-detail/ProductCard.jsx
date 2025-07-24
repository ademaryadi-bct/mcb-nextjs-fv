import React from 'react'

const ProductCard = ({ image, name, type, onClick }) => {
  return (
    <article
      className='bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.25)] flex flex-col flex-1 pt-[25px] pb-[41px] px-5 cursor-pointer hover:shadow-[0px_6px_35px_rgba(0,0,0,0.3)] transition-shadow'
      onClick={onClick}
      role='button'
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
      aria-label={`View ${name} product details`}
    >
      <img
        src={image}
        alt={name}
        className='aspect-[1.33] object-contain w-full shadow-[0px_4px_30px_rgba(0,0,0,0.25)] self-stretch'
      />
      <h3 className='text-[23px] font-bold leading-8 mt-[17px]'>{name}</h3>
      <div className='bg-[rgba(217,217,217,0.5)] shadow-[0px_4px_30px_rgba(0,0,0,0.25)] flex w-[143px] max-w-full flex-col text-[17px] font-normal leading-none justify-center px-7 py-[5px] rounded-[30px] max-md:pl-5 mt-2'>
        <span className='font-normal leading-6'>{type}</span>
      </div>
    </article>
  )
}

export default ProductCard
