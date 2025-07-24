import React from 'react'

import ProfileCard from './ProfileCard'

function OrganizationalSection({ title, people, layout = 'four-column' }) {
  const gridCols = layout === 'two-column' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'

  return (
    <section className='mb-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white shadow-xl p-12'>
          <h2 className='text-5xl font-bold text-center text-black mb-16 font-proza'>{title}</h2>
          <div className={`grid ${gridCols} gap-6`}>
            {people.map((person, index) => (
              <ProfileCard key={index} name={person.name} title={person.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrganizationalSection
