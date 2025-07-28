import React from 'react'

import ReportCard from './ReportCard'

// interface Report {
//   id: string;
//   title: string;
//   year: string;
//   reportType: string;
// }

// interface ReportsListProps {
//   reports?: Report[];
//   onReportClick?: (report: Report) => void;
//   className?: string;
// }

const ReportsList = ({ reports = [], onReportClick, className = '' }) => {
  // Default reports if none provided
  const defaultReports = [
    {
      id: '1',
      title: 'Nama Realisasi',
      year: 'Tahun Pelaporan',
      reportType: 'Jenis Laporan'
    },
    {
      id: '2',
      title: 'Nama Realisasi',
      year: 'Tahun Pelaporan',
      reportType: 'Jenis Laporan'
    },
    {
      id: '3',
      title: 'Nama Realisasi',
      year: 'Tahun Pelaporan',
      reportType: 'Jenis Laporan'
    }
  ]

  const displayReports = reports.length > 0 ? reports : defaultReports

  const handleReportClick = report => {
    if (onReportClick) {
      onReportClick(report)
    }
  }

  return (
    <section className={`w-full p-5 ${className}`} aria-label='Reports list'>
      {displayReports.map(report => (
        <ReportCard
          key={report.id}
          title={report.title}
          year={report.year}
          reportType={report.reportType}
          onClick={() => handleReportClick(report)}
        />
      ))}
    </section>
  )
}

export default ReportsList
