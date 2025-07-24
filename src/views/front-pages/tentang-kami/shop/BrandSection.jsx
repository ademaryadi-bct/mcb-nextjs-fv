import NavigationArrows from './NavigationArrows'

const BrandSection = () => {
  return (
    <div className='relative py-16'>
      <h2 className='text-center font-proza text-5xl lg:text-7xl font-bold text-black mb-16'>Brand Name</h2>

      {/* Brand Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mb-16'>
        <div className='bg-white shadow-xl rounded-lg p-8 text-center'>
          <h3 className='font-proza text-4xl lg:text-6xl font-bold text-black mb-4'>Brand Name</h3>
        </div>
        <div className='bg-white shadow-xl rounded-lg p-8 text-center'>
          <h3 className='font-proza text-4xl lg:text-6xl font-bold text-black mb-4'>Brand Name</h3>
        </div>
        <div className='bg-white shadow-xl rounded-lg p-8 text-center'>
          <h3 className='font-proza text-4xl lg:text-6xl font-bold text-black mb-4'>Brand Name</h3>
        </div>
      </div>

      {/* Cek Brand Button */}
      <div className='flex justify-end px-8 mb-16'>
        <button className='bg-white px-8 py-3 rounded border border-black font-proza text-lg font-normal shadow-lg hover:bg-gray-50'>
          Cek Brand
        </button>
      </div>

      <NavigationArrows />
    </div>
  )
}

export default BrandSection
