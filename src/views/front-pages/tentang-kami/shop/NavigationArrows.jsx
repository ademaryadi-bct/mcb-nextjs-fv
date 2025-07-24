import { ChevronRight } from 'lucide-react'

const NavigationArrows = () => {
  return (
    <div className='absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 px-4'>
      <button className='bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 pointer-events-auto transform rotate-180'>
        <ChevronRight className='w-6 h-6 text-black' />
      </button>
      <button className='bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 pointer-events-auto'>
        <ChevronRight className='w-6 h-6 text-black' />
      </button>
    </div>
  )
}

export default NavigationArrows
