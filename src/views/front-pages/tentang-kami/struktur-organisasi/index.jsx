'use client'
import ContactUs from '../../landing-page/ContactUs'

const StrukturOrganisasiWrapper = () => {
  return (
    <main className='w-full flex flex-col items-center'>
      <h1 className='text-black text-5xl font-bold leading-none text-center mt-5'>Struktur Organisasi</h1>
      <section className='w-full flex justify-center mt-5x max-md:mt-10' aria-label='Organizational chart'>
        <img
          src='/images/front-pages/tentang-kami/struktur-organisasi/struktur_organisasi.jpg'
          alt='Struktur Organisasi MBC - Organizational chart showing the complete hierarchy and structure of the organization'
          className='object-contain w-full self-stretch max-md:max-w-full mt-5'
        />
      </section>
      <ContactUs />
    </main>
  )
}

export default StrukturOrganisasiWrapper
