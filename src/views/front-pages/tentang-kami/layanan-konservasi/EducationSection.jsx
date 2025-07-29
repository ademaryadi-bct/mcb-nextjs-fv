import React from 'react'

const EducationSection = () => {
  return (
    <section className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] w-full mt-5 pt-5 pb-5 px-5 max-md:max-w-full max-md:mt-10'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-[38%] max-md:w-full max-md:ml-0'>
          <div className='grow max-md:max-w-full'>
            <img
              src='/images/front-pages/tentang-kami/profil-lembaga/education1.png'
              alt='Educational program activities'
              className='aspect-[1.25] object-contain w-full max-md:max-w-full'
            />
            <img
              src='/images/front-pages/tentang-kami/profil-lembaga/education2.png'
              alt='Public program engagement'
              className='aspect-[1.26] object-contain w-full mt-9 max-md:max-w-full'
            />
          </div>
        </div>
        <div className='w-[62%] ml-5 max-md:w-full max-md:ml-0'>
          <article className='flex flex-col items-stretch max-md:max-w-full'>
            <h2 className='text-black lg:text-4xl font-bold leading-none self-center max-md:max-w-full max-md:text-3xl'>
              Edukasi & Program Publik
            </h2>
            <p className='text-black text-2xl font-normal leading-7 mt-5 max-md:max-w-full'>
              Museum & Cagar Budaya (IHA/Indonesian Heritage Agency) sepakat bahwa ilmu peradaban harus dapat disajikan
              dengan relevan dan inovatif sehingga muatan-muatan edukasi tersebut mampu melebur bersama kurikulum
              pendidikan formal. Selain itu, persiapan infrastruktur museum seperti ruang anak dan buku panduan museum
              turut menjadi program prioritas. IHA turut melakukan perubahan besar pada program komunikasi yang selaras
              zaman dan informatif, serta rangkaian program publik luring agar mampu menciptakan ekosistem pendidikan
              sejarah budaya yang dapat dinikmati dan bermanfaat bagi seluruh kalangan.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
