import React from 'react'

const ProductInfo = ({ name, details, description }) => {
  return (
    <section className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex flex-col text-black font-normal mt-[13px] px-[46px] py-14 max-md:max-w-full max-md:px-5'>
      <header>
        <h1 className='text-5xl font-bold leading-[1.2] text-center max-md:text-[40px]'>{name}</h1>
        <h2 className='text-[38px] leading-loose text-center mt-7'>{details}</h2>
      </header>
      <div className='text-[35px] leading-[58px] self-stretch mt-[43px] max-md:max-w-full max-md:mt-10'>
        {description.split('\n').map((paragraph, index) => (
          <p key={index} className={index > 0 ? 'mt-4' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default ProductInfo
