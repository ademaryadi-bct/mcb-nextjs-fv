import { Button, Card, CardContent } from '@mui/material'
import { Calendar, MapPin, Plus, Users } from 'lucide-react'

const MainContent = ({ MainProps }) => {
  const { volunteers } = MainProps

  return (
    <div className='lg:w-3/4'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='font-proza text-4xl font-bold text-gray-900'>Daftar Volunteer</h2>
        <Button className='bg-museum-purple hover:bg-museum-dark-purple font-proza text-lg px-6 py-3 rounded-40'>
          <Plus className='h-5 w-5 mr-2' />
          Tambah Volunteer
        </Button>
      </div>

      {/* Volunteer Cards */}
      <div className='space-y-6'>
        {volunteers.map(volunteer => (
          <Card key={volunteer.id} className='bg-white shadow-lg'>
            <CardContent className='p-6'>
              <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
                {/* Avatar */}
                <div className='w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center'>
                  <Users className='h-12 w-12 text-gray-600' />
                </div>

                {/* Info */}
                <div className='flex-1'>
                  <h3 className='font-proza text-3xl font-bold text-gray-900 mb-2'>{volunteer.name}</h3>
                  <div className='flex items-center text-gray-600 mb-4'>
                    <MapPin className='h-5 w-5 mr-2' />
                    <span className='font-proza text-lg'>{volunteer.location}</span>
                  </div>

                  <div className='flex flex-wrap gap-3 mb-4'>
                    <span className='px-4 py-2 bg-museum-gray bg-slate-200 rounded-20 font-proza text-sm'>
                      {volunteer.category}
                    </span>
                    <span className='px-4 py-2 bg-museum-gray bg-slate-200 rounded-20 font-proza text-sm'>
                      Keahlian
                    </span>
                  </div>

                  <div className='flex items-center text-gray-600'>
                    <Calendar className='h-5 w-5 mr-2' />
                    <span className='font-proza text-lg'>Bergabung {volunteer.joinDate}</span>
                  </div>
                </div>

                {/* Status */}
                <div className='md:ml-auto'>
                  <Button
                    variant='outline'
                    className='bg-museum-gray text-gray-900 bg-slate-200 border-none font-proza text-lg px-6 py-3 rounded-20'
                  >
                    Status
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center items-center mt-8 space-x-4'>
        <button className='px-4 py-2 font-inter text-gray-600'>Previous</button>
        <div className='h-px w-8 bg-gray-300'></div>
        <button className='px-3 py-1 bg-museum-light-teal text-museum-teal rounded font-inter'>1</button>
        <button className='px-3 py-1 font-inter text-gray-600'>2</button>
        <div className='h-px w-8 bg-gray-300'></div>
        <button className='px-4 py-2 font-inter text-gray-600'>Next</button>
      </div>
    </div>
  )
}

export default MainContent
