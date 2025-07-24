import Link from 'next/link'

const MainContent = ({ filters, productItems, handleFilterChange }) => {
  return (
    <section className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Filter Sidebar */}
          <div className='lg:w-1/4'>
            <div className='bg-white rounded-3xl shadow-lg p-8'>
              {Object.entries(filters).map(([sectionKey, section]) => (
                <div key={sectionKey} className='mb-8'>
                  <h3 className='text-2xl font-proza font-bold mb-4'>{section.title}</h3>
                  <div className='space-y-3'>
                    {section.options.map(option => (
                      <label key={option.id} className='flex items-center space-x-3 cursor-pointer'>
                        <input
                          type='checkbox'
                          checked={option.checked}
                          onChange={() => handleFilterChange(sectionKey, option.id)}
                          className='w-6 h-6 border-2 border-black rounded accent-museum-cyan'
                        />
                        <span className='text-xl font-proza'>{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {sectionKey !== 'gender' && <hr className='mt-6 border-black' />}
                </div>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className='lg:w-3/4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              {productItems.map(item => (
                <Link href={`/front-pages/shop/category/${item.id}`} key={item.id}>
                  <div
                    key={item.id}
                    className='bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow'
                  >
                    <img src={item.image} alt={item.name} className='w-full h-48 object-cover' />
                    <div className='p-4'>
                      <h3 className='text-lg font-proza font-bold mb-2'>{item.name}</h3>
                      <div className='bg-gray-200 bg-opacity-50 rounded-full px-4 py-1 inline-block'>
                        <span className='text-sm font-inter'>{item.type}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className='flex justify-center items-center space-x-4 text-lg font-inter'>
              <span className='text-grey'>Previous</span>
              <div className='h-px w-8 bg-gray-300'></div>
              <button className='px-3 py-1 bg-museum-light-teal text-museum-teal rounded font-inter'>1</button>
              <button className='px-3 py-1 font-inter text-gray-600'>2</button>
              <div className='h-px w-8 bg-gray-300'></div>
              <span className='text-grey text-grey'>Next</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainContent
