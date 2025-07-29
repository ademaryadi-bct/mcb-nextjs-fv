import React, { useState } from 'react'

const ServiceTypeSelector = () => {
  const [selectedService, setSelectedService] = useState('Layanan Sewa Aset')

  return (
    <section className='w-full p-5 max-md:max-w-full'>
      <div className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex w-[30%] items-stretch text-[#292726] font-semibold flex-wrap py-5 px-8 rounded-[40px] max-md:px-5 max-md:w-[50%]'>
        <img
          src='/images/front-pages/tentang-kami/layanan-penyewaan-venue/threebar.svg'
          className='aspect-[0.89] object-contain w-10'
          alt='Service icon'
        />
        <div className='ms-3 grow max-md:max-w-full'>
          <div className='flex border-b-2 border-black border-solid'>
            <button
              className={`bg-white font-semibold text-lg flex-1 shrink basis-[0%] text-left ${
                selectedService === 'Layanan Sewa Aset' ? 'text-[#292726]' : 'text-gray-500'
              }`}
              onClick={() => setSelectedService('Layanan Sewa Aset')}
            >
              Layanan Sewa Aset
            </button>
          </div>
          <div className='flex'>
            <button
              className={`bg-white font-semibold text-lg flex-1 shrink basis-[0%] text-left ${
                selectedService === 'Layanan Lainnya' ? 'text-[#292726]' : 'text-gray-500'
              }`}
              onClick={() => setSelectedService('Layanan Lainnya')}
            >
              Layanan Lainnya
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceTypeSelector
