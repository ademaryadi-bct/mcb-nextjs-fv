import { Card, CardContent } from '@mui/material'
import { Users } from 'lucide-react'

const StatsSection = () => {
  return (
    <section className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Card className='bg-white shadow-lg'>
            <CardContent className='p-8 flex items-center'>
              <Users className='h-16 w-16 text-museum-purple mr-6' />
              <div>
                <h3 className='font-proza text-3xl md:text-4xl font-bold text-gray-900'>Total Volunteer</h3>
                <p className='font-proza text-3xl md:text-4xl font-bold text-gray-900'>10</p>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-white shadow-lg'>
            <CardContent className='p-8 flex items-center'>
              <Users className='h-16 w-16 text-museum-purple mr-6' />
              <div>
                <h3 className='font-proza text-3xl md:text-4xl font-bold text-gray-900'>Volunteer Tersedia</h3>
                <p className='font-proza text-3xl md:text-4xl font-bold text-gray-900'>10</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
