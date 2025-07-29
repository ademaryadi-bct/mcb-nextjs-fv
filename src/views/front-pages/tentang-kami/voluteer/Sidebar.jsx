import { Card, CardContent, Input } from '@mui/material'
import { Filter, Search } from 'lucide-react'

const Sidebar = ({ sidebarProps }) => {
  const { categories, searchTerm, setSearchTerm, selectedFilters, toggleFilter } = sidebarProps

  return (
    <div className='lg:w-1/4'>
      <Card className='bg-white shadow-lg'>
        <CardContent className='p-6'>
          {/* Search */}
          <div className='mb-6'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
              <Input
                type='text'
                placeholder='Cari Nama Volunteer'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='pl-10 rounded-40 h-12 font-proza'
              />
            </div>
          </div>

          {/* Filter */}
          <div className='mb-6'>
            <div className='flex items-center mb-4'>
              <Filter className='h-5 w-5 mr-2' />
              <span className='font-proza text-2xl font-medium'>Filter</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className='font-proza text-2xl font-bold mb-4'>Kategori Keahlian</h3>
            <div className='space-y-3'>
              {categories.map(category => (
                <label key={category} className='flex items-center'>
                  <input
                    type='checkbox'
                    checked={selectedFilters.includes(category)}
                    onChange={() => toggleFilter(category)}
                    className='mr-3 h-5 w-5 text-museum-teal'
                  />
                  <span className='font-proza text-lg'>{category}</span>
                </label>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Sidebar
