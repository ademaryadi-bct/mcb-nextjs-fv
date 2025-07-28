import React, { useState } from 'react'

const Pagination = ({ currentPage, totalPages, handlePrevious, handleNext, handlePageChange }) => {
  // const [currentPage, setCurrentPage] = useState(1)

  // const totalPages = 2

  // const handlePageChange = page => {
  //   if (page >= 1 && page <= totalPages) {
  //     setCurrentPage(page)
  //   }
  // }

  // const handlePrevious = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1)
  //   }
  // }

  // const handleNext = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1)
  //   }
  // }

  return (
    <nav
      className='bg-white self-centerx flex justify-center w-full max-w-full items-stretch gap-1.5 text-[#292726] font-normal whitespace-nowrap leading-none mt-5 max-md:px-5'
      aria-label='Pagination'
    >
      <button
        className='text-black font-normal leading-7 my-auto disabled:opacity-50'
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label='Go to previous page'
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1
        const isActive = page === currentPage

        return (
          <button
            key={page}
            className={`flex flex-col items-stretch justify-center px-2.5 py-1 ${
              isActive ? 'bg-[rgba(215,240,233,1)] text-[#2c756a]' : 'text-[#292726]'
            }`}
            onClick={() => handlePageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className='font-normal leading-7'>{page}</span>
          </button>
        )
      })}

      <button
        className='items-stretch flex flex-col justify-center max-w-48 px-2.5 py-1 disabled:opacity-50'
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label='Go to next page'
      >
        <span className='font-normal leading-7'>Next</span>
      </button>
    </nav>
  )
}

export default Pagination
