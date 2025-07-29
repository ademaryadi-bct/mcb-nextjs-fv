import React from 'react'

const AboutSection = () => {
  return (
    <section className='bg-[rgba(247,249,251,1)] self-stretch flex w-full flex-col items-stretch text-black font-bold text-center p-5 max-md:max-w-full max-md:px-5'>
      <h1 className='text-4xl leading-none self-center max-md:text-3xl'>Tentang IHA</h1>
      <article className='text-2xl leading-10 my-10 max-md:max-w-full max-md:text-lg'>
        <p>
          Museum & Cagar Budaya (IHA / Indonesian Heritage Agency) merupakan Badan Layanan Umum (BLU) di bawah naungan
          Kementerian Kebudayaan Republik Indonesia yang saat ini bertanggung jawab atas pengelolaan 18 museum dan
          galeri serta 34 situs cagar budaya nasional di Indonesia. IHA Terbentuk pada tahun 2022 dan diresmikan menjadi
          BLU per tanggal 1 September 2023. IHA memiliki visi untuk menjadi institusi yang bersifat kolaboratif dan
          mendorong daya cipta, perubahan sosial, serta pembangunan masyarakat yang berbudaya.
        </p>
        <p>
          IHA mengedepankan peningkatan pelayanan yang berbasis perlindungan sebagai prioritas utama. Dengan merangkul
          kreativitas dan mengusung semangat kolaborasi yang inklusif, IHA secara kolektif berkontribusi untuk membuka
          wawasan apresiasi mendalam terhadap warisan budaya Indonesia yang beragam.
        </p>
      </article>
    </section>
  )
}

export default AboutSection
