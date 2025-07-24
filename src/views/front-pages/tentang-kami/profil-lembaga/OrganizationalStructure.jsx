import OrganizationalSection from './OrganizationalSection'

const OrganizationalStructure = () => {
  return (
    <div className='bg-gray-50 py-16'>
      {/* Unsur Pemimpin */}
      <OrganizationalSection
        title='Unsur Pemimpin'
        people={[
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' }
        ]}
        layout='two-column'
      />

      {/* Unsur Pembantu Pemimpin */}
      <OrganizationalSection
        title='Unsur Pembantu pemimpin'
        people={[
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' }
        ]}
        layout='four-column'
      />

      {/* Unsur Pengawas */}
      <OrganizationalSection
        title='Unsur Pengawas'
        people={[
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' }
        ]}
        layout='four-column'
      />

      {/* Unsur Pelaksana */}
      <OrganizationalSection
        title='Unsur Pelaksana'
        people={[
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' }
        ]}
        layout='four-column'
      />

      {/* Unsur Pendukung */}
      <OrganizationalSection
        title='Unsur Pendukung'
        people={[
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' }
        ]}
        layout='four-column'
      />

      {/* Unsur Staff Ahli */}
      <OrganizationalSection
        title='Unsur Staff Ahli'
        people={[
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' },
          { name: 'Name', title: 'Title' }
        ]}
        layout='four-column'
      />
    </div>
  )
}

export default OrganizationalStructure
