import { Filter, Search } from 'lucide-react'

const SearchSection = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className='bg-white shadow-lg py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='flex items-center space-x-4'>
            <Filter className='w-8 h-8' />
            <span className='text-3xl font-proza'>Filter</span>
          </div>

          <div className='flex-1 max-w-2xl'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search products...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full px-6 py-4 rounded-full border border-gray-300 shadow-lg text-lg focus:outline-none focus:border-museum-purple'
              />
            </div>
          </div>

          <div className='flex items-center bg-white rounded-full shadow-lg px-6 py-3'>
            <Search className='w-6 h-6 mr-3' />
            <span className='text-xl font-proza'>Cari Produk</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection
