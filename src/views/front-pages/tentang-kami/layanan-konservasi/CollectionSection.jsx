const CollectionSection = () => {
  return (
    <section className='bg-white shadow-[0px_1px_10px_rgba(0,0,0,0.25)] w-full max-md:max-w-full max-md:px-5 lg:px-5 lg:mb-5 lg:py-5 pb-5 mb-5'>
      <div className='max-md:max-w-full'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
          <div className='w-2/5 max-md:w-full max-md:ml-0'>
            <img
              src='/images/front-pages/tentang-kami/profil-lembaga/koleksi_kuratorial1.jpg'
              alt='Museum collection display'
              className='aspect-[1.33] object-contain w-full grow max-md:max-w-full max-md:mt-5'
            />
          </div>
          <div className='w-3/5 ml-5 max-md:w-full max-md:ml-0'>
            <article className='flex flex-col items-stretch text-black max-md:max-w-full lg:mt-10'>
              <h2 className='lg:text-4xl font-bold text-center leading-none max-md:max-w-full max-md:text-3xl'>
                Koleksi & Kuratorial
              </h2>
              <p className='text-2xl font-normal mt-5 max-md:max-w-full lg:mt-10'>
                Museum & Cagar Budaya ( IHA / Indonesia Heritage Agent ) berupaya untuk dapat menyajikan beragam koleksi
                benda & tak benda yang melengkapi sejarah peradaban Indonesia, dengan kajian Kuratorial yang
                berkualitas, Koleksi dari Masa Prasejarah, Masa Kolonial, Masa Kemerdekaan hingga Kontemporer tersebar
                dan tersaji elok di 18 Unit Museum.
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className='w-full max-md:max-w-full lg:mt-10'>
        <div className='gap-3 flex max-md:flex-col max-md:items-stretch mx-auto'>
          <div className='w-[24%] max-md:w-full max-md:ml-0'>
            <img
              src='/images/front-pages/tentang-kami/profil-lembaga/koleksi_kuratorial2.jpg'
              alt='Heritage site 1'
              className='aspect-[0.75] object-contain shrink-0 max-w-full grow max-md:mt-5'
            />
          </div>
          <div className='w-[24%] ml-5 max-md:w-full max-md:ml-0'>
            <img
              src='/images/front-pages/tentang-kami/profil-lembaga/koleksi_kuratorial3.jpg'
              alt='Heritage site 2'
              className='aspect-[0.75] object-contain shrink-0 max-w-full grow max-md:mt-5'
            />
          </div>
          <div className='w-[52%] ml-5 max-md:w-full max-md:ml-0'>
            <p className='text-2xl font-normal max-md:max-w-full max-md:mt-5'>
              Selain itu, terdapat pula 34 situs cagar budaya nasional dengan keindahan yang tersebar dari Sabang hingga
              Merauke. Kekayaan repertoar koleksi ini akan terus dijaga kualitasnya, dengan harapan IHA dapat
              memaksimalkan pengalaman pengunjung melalui narasi, tata pamer, dan infrastrukturnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionSection
