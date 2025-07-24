import React from 'react'

import DestinationCard from './DestinationCard'

const DestinationGrid = () => {
  const destinations = [
    { id: 1, name: 'Nama Destinasi' },
    { id: 2, name: 'Nama Destinasi' },
    { id: 3, name: 'Nama Destinasi' },
    { id: 4, name: 'Nama Destinasi' },
    { id: 5, name: 'Nama Destinasi' },
    { id: 6, name: 'Nama Destinasi' },
    { id: 7, name: 'Nama Destinasi' },
    { id: 8, name: 'Nama Destinasi' }
  ]

  const handleBuyTicket = destinationId => {
    console.log(`Buying ticket for destination ${destinationId}`)
  }

  return (
    <section className='w-full mx-auto'>
      <div className='grid max-md:grid-cols-1 lg:grid-cols-2 p-5'>
        {destinations.map((destination, index) => (
          <div key={index}>
            <DestinationCard name={destination.name} onBuyTicket={() => handleBuyTicket(destination.id)} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default DestinationGrid
