import React, { useState } from 'react'

const ProductGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
      <aside className='w-[23%] max-md:w-full max-md:ml-0'>
        <div className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] grow w-full pt-[23px] pb-[101px] px-[70px] max-md:max-w-full max-md:mt-6 max-md:pb-[100px] max-md:px-5'>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-full mb-[60px] max-md:mb-10 first:mb-[60px] last:mb-0 ${
                selectedImage === index ? 'ring-2 ring-blue-500' : ''
              }`}
              aria-label={`View image ${index + 1} of ${productName}`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className='aspect-[1.33] object-contain w-full shadow-[0px_4px_30px_rgba(0,0,0,0.25)] hover:shadow-[0px_6px_35px_rgba(0,0,0,0.3)] transition-shadow'
              />
            </button>
          ))}
        </div>
      </aside>
      <main className='w-[77%] ml-5 max-md:w-full max-md:ml-0'>
        <div className='grow max-md:max-w-full max-md:mt-6'>
          <div className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex flex-col items-center pt-[29px] pb-[111px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5'>
            <img
              src={images[selectedImage]}
              alt={`${productName} main view`}
              className='aspect-[1.33] object-contain w-[949px] shadow-[0px_4px_30px_rgba(0,0,0,0.25)] mb-[-22px] max-w-full max-md:mb-2.5'
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductGallery
