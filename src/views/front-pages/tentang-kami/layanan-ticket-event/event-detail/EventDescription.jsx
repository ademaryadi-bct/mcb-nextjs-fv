import React from 'react'

const EventDescription = () => {
  return (
    <section className='w-full mx-auto px-4'>
      <h2 className='text-black text-4xl font-bold leading-[1.4] px-5 mt-10 max-md:ml-2.5 max-md:mt-10'>
        Detail Acara
      </h2>
      <div className='bg-[rgba(247,241,241,1)] w-full text-xl text-black font-normal text-center leading-[58px] p-5 rounded-[20px] max-md:max-w-full max-md:px-5'>
        <p className='max-md:max-w-full'>
          {`Pameran SUNTING merupakan sebuah penghormatan atas kontribusi perempuan dalam membentuk sejarah bangsa
          Indonesia. Sunting sendiri merupakan hiasan kepala yang ditujukan untuk memperindah rupa, penanda martabat,
          peran sosial, dan identitas budaya. Dalam budaya Minangkabau misalnya, sunting dikenakan dengan harapan
          "menghaluskan budi dan memperelok tingkah" pemakainya. Namun lebih dari itu, dalam pameran ini makna sunting
          meluas ke ranah gagasan dan perubahan – menyusun ulang, meninjau kembali, dan membentuk arah baru bagi
          masyarakat.`}
        </p>
        <p className='max-md:max-w-full'>
          {`Pameran "SUNTING: Jejak Perempuan Indonesia Penggerak Perubahan" dapat dikunjungi publik mulai Selasa, 22
          April 2025 di Gedung B lantai 1. Untuk mengunjungi pameran ini, pengunjung cukup membeli tiket masuk museum
          seharga Rp15.000 untuk anak-anak (3–12 tahun), Rp25.000 untuk dewasa, dan Rp50.000 untuk WNA. Tiket dapat
          dibeli langsung di loket museum dengan metode pembayaran non-tunai, atau melalui aplikasi Traveloka dan Tiket.`}
        </p>
      </div>
    </section>
  )
}

export default EventDescription
