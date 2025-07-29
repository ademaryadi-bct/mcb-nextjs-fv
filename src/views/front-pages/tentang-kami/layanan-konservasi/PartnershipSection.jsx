import React from 'react'

const PartnershipSection = () => {
  return (
    <section className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] my-5 pl-20 pr-px py-5 max-md:max-w-full max-md:p-5'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-6/12 max-md:w-full max-md:ml-0'>
          <article className='flex flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-5'>
            <h2 className='text-black lg:text-4xl font-bold leading-none ml-20 max-md:text-3xl max-md:mx-auto'>
              Kemitraan
            </h2>
            <p className='text-[#45403d] text-2xl font-normal leading-7 mt-5 max-md:max-w-full'>
              Museum & Cagar Budaya (IHA/Indonesian Heritage Agency) mendorong perluasan kolaborasi bersama pengunjung
              dan pecinta warisan budaya, pemangku kepentingan dalam negeri, serta institusi mancanegara sebagai
              komitmen utama.
            </p>
            <img
              src='/images/front-pages/tentang-kami/profil-lembaga/partnership1.png'
              alt='Partnership collaboration'
              className='aspect-[1.22] object-contain w-full ml-5 mt-5 max-md:max-w-full max-md:ml-0'
            />
          </article>
        </div>
        <div className='w-6/12 ml-5 max-md:w-full max-md:ml-0'>
          <div className='flex grow flex-col items-stretch text-[#45403d] font-normal leading-7 max-md:max-w-full'>
            <img
              src='/images/front-pages/tentang-kami/profil-lembaga/partnership2.png'
              alt='Partnership activities'
              className='aspect-[1.25] object-contain self-center max-w-full'
            />
            <p className='font-normal leading-7 mt-5 text-2xl max-md:max-w-full'>
              Guna mentransformasi mutu layanan, IHA mengelola, mengembangkan, dan mengoptimalkan kekayaan / aset secara
              profesional dengan prinsip pelestarian dan keberlanjutan. Kami turut membuka ruang kolaborasi melalui
              berbagai program studi & lokakarya serta inisiatif terobosan lainnya, hingga pembentukan sistem donasi.
              Mari berkolaborasi dengan IHA untuk menjadi bagian dari pelestari budaya bangsa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnershipSection
