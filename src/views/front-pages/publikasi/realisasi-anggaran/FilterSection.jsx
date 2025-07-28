import React, { useState } from 'react'

const FilterSection = ({ onYearChange, onReportTypeChange, className = '' }) => {
  const [selectedYear, setSelectedYear] = useState('Semua Tahun')
  const [selectedReportType, setSelectedReportType] = useState('Semua Laporan')
  const [isYearOpen, setIsYearOpen] = useState(false)
  const [isReportTypeOpen, setIsReportTypeOpen] = useState(false)

  const years = ['Semua Tahun', '2024', '2023', '2022', '2021', '2020']
  const reportTypes = ['Semua Laporan', 'Laporan Keuangan', 'Laporan Anggaran', 'Laporan Realisasi']

  const handleYearSelect = year => {
    setSelectedYear(year)
    setIsYearOpen(false)

    if (onYearChange) {
      onYearChange(year)
    }
  }

  const handleReportTypeSelect = reportType => {
    setSelectedReportType(reportType)
    setIsReportTypeOpen(false)

    if (onReportTypeChange) {
      onReportTypeChange(reportType)
    }
  }

  return (
    <section className='max-w-full w-full p-5 max-md:px-5 max-md:py-0 max-md:mt-2'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        {/* Tahun Dropdown */}
        <div className='w-6/12 max-md:w-full max-md:ml-0'>
          <div className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex grow items-stretch gap-[40px_69px] text-[43px] text-black font-normal text-center leading-none flex-wrap w-full px-[39px] py-[25px] rounded-[40px] max-md:max-w-full max-md:mt-10 max-md:px-5 relative'>
            <img
              src='/images/front-pages/publikasi/berita/filter.svg'
              alt='Filter icon'
              className='aspect-[1] object-contain w-7 shrink-0 max-md:w-5'
            />
            <button
              onClick={() => setIsYearOpen(!isYearOpen)}
              className='grow shrink w-[385px] basis-auto text-left hover:text-gray-600 transition-colors'
              aria-expanded={isYearOpen}
              aria-haspopup='listbox'
              role='combobox'
            >
              {selectedYear}
            </button>
            {isYearOpen && (
              <div className='absolute top-full left-0 right-0 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] rounded-[20px] mt-2 z-10'>
                <ul role='listbox' className='py-2'>
                  {years.map(year => (
                    <li key={year}>
                      <button
                        onClick={() => handleYearSelect(year)}
                        className='w-full px-[39px] py-3 text-left hover:bg-gray-100 transition-colors text-[43px] text-black font-normal'
                        role='option'
                        aria-selected={selectedYear === year}
                      >
                        {year}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Jenis Laporan Dropdown */}
        <div className='w-6/12 ml-5 max-md:w-full max-md:ml-0'>
          <div className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex grow items-stretch gap-[40px_48px] text-[43px] text-black font-normal text-center leading-none w-full flex-wrap px-[39px] py-[25px] rounded-[40px] max-md:mt-10 max-md:px-5 relative'>
            <img
              src='/images/front-pages/publikasi/berita/filter.svg'
              alt='Filter icon'
              className='aspect-[1] object-contain w-7 shrink-0 max-md:w-5'
            />
            <button
              onClick={() => setIsReportTypeOpen(!isReportTypeOpen)}
              className='grow shrink w-[408px] basis-auto text-left hover:text-gray-600 transition-colors'
              aria-expanded={isReportTypeOpen}
              aria-haspopup='listbox'
              role='combobox'
            >
              {selectedReportType}
            </button>
            {isReportTypeOpen && (
              <div className='absolute top-full left-0 right-0 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] rounded-[20px] mt-2 z-10'>
                <ul role='listbox' className='py-2'>
                  {reportTypes.map(reportType => (
                    <li key={reportType}>
                      <button
                        onClick={() => handleReportTypeSelect(reportType)}
                        className='w-full px-[39px] py-3 text-left hover:bg-gray-100 transition-colors text-[43px] text-black font-normal'
                        role='option'
                        aria-selected={selectedReportType === reportType}
                      >
                        {reportType}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilterSection
