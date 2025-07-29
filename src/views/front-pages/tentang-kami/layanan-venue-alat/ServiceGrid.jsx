import React, { useEffect, useState } from 'react'

import { current } from '@reduxjs/toolkit'

import ServiceCard from './ServiceCard'
import Pagination from './Pagination'

const services = Array.from({ length: 12 }, (_, index) => ({
  id: `${index + 1}`,
  title: 'Pengambilan Gambar Menggunakan Drone Area Candi Borobudur, Candi Mendut, atau Candi Pawon',
  location: 'Candi Borobudur, Candi Mendut, Candi Pawon',
  category: 'Fotografi/Videografi',
  imageUrl: '/images/front-pages/tentang-kami/layanan-penyewaan-venue/venue.png',
  shortLocation: 'Magelang'
}))

const ServiceGrid = () => {
  const [col, setCol] = useState(3)
  const row = 3
  const totalPages = Math.ceil(services.length / (col * row))
  const [currentPage, setCurrentPage] = useState(1)

  const [gridClass, setGridClass] = useState('grid grid-cols-3')

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setGridClass('grid grid-cols-1')
      setCol(1)
    } else if (window.innerWidth < 1024) {
      setGridClass('grid grid-cols-2')
      setCol(2)
    } else {
      setGridClass('grid grid-cols-3')
      setCol(3)
    }
  })

  return (
    <div>
      <main className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] w-full flex p-5 max-md:max-w-full'>
        <div className={gridClass}>
          {col === 3
            ? services
                .slice(0, col * row)
                .map((service, index) => (
                  <ServiceCard
                    key={index}
                    id={service.id}
                    title={service.title}
                    location={service.location}
                    category={service.category}
                    imageUrl={service.imageUrl}
                    shortLocation={service.shortLocation}
                  />
                ))
            : col === 2
              ? services
                  .slice(0, col * row)
                  .map((service, index) => (
                    <ServiceCard
                      key={index}
                      id={service.id}
                      title={service.title}
                      location={service.location}
                      category={service.category}
                      imageUrl={service.imageUrl}
                      shortLocation={service.shortLocation}
                    />
                  ))
              : services
                  .slice(0, col * row)
                  .map((service, index) => (
                    <ServiceCard
                      key={index}
                      id={service.id}
                      title={service.title}
                      location={service.location}
                      category={service.category}
                      imageUrl={service.imageUrl}
                      shortLocation={service.shortLocation}
                    />
                  ))}
        </div>
      </main>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </div>
    </div>
  )
}

export default ServiceGrid
