import { Users } from 'lucide-react'

function ProfileCard({ name, title }) {
  return (
    <div className='bg-white p-8 text-center'>
      <div className='w-48 h-48 mx-auto mb-6 bg-black flex items-center justify-center'>
        <Users className='w-20 h-20 text-white' />
      </div>
      <h3 className='text-3xl font-bold text-black mb-3 font-proza'>{name}</h3>
      <p className='text-3xl font-bold text-black font-proza'>{title}</p>
    </div>
  )
}

export default ProfileCard
