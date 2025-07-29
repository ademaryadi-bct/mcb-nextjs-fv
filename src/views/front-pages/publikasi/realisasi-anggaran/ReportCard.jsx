import React from 'react'

// interface ReportCardProps {
//   title: string;
//   year: string;
//   reportType: string;
//   onClick?: () => void;
//   className?: string;
// }

const ReportCard = ({ title, year, reportType, onClick, className = '' }) => {
  return (
    <article
      className={`bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] w-full text-blackx font-boldx mt-5 p-5 rounded-[40px] hover:shadow-[0px_6px_25px_rgba(0,0,0,0.3)] transition-shadow cursor-pointer ${className}`}
      onClick={onClick}
      role='button'
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
    >
      <div className='text-[2rem] text-black font-bold text-left max-md:text-[1.5rem]'>
        <div className='border-b-2 border-black border-solid pb-5'>
          <span>{title}</span>
        </div>
        <div className='grid grid-cols-2 pt-5'>
          <div>
            <span className='sr-only'>Tahun Pelaporan: </span>
            {year}
          </div>
          <div>
            <span className='sr-only'>Jenis Laporan: </span>
            {reportType}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ReportCard
