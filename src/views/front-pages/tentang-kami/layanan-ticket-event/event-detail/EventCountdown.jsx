import React, { useState, useEffect } from 'react'

export const EventCountdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = new Date(targetDate).getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const CountdownItem = ({ value, label }) => (
    <div className='flex grow flex-col items-stretch text-black font-bold whitespace-nowrap text-center max-md:mt-[30px]'>
      <div className='text-5xl leading-none self-center max-md:text-[40px]'>{value.toString().padStart(2, '0')}</div>
      <div className='text-4xl leading-none mt-[22px] max-md:text-[40px]'>{label}</div>
    </div>
  )

  return (
    <div className='self-stretch mt-10 max-md:max-w-full'>
      <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
        <div className='w-[16%] max-md:w-full max-md:ml-0'>
          <CountdownItem value={timeLeft.days} label='Day' />
        </div>
        <div className='w-3/12 ml-5 max-md:w-full max-md:ml-0'>
          <CountdownItem value={timeLeft.hours} label='Hours' />
        </div>
        <div className='w-[30%] ml-5 max-md:w-full max-md:ml-0'>
          <CountdownItem value={timeLeft.minutes} label='Minute' />
        </div>
        <div className='w-[29%] ml-5 max-md:w-full max-md:ml-0'>
          <CountdownItem value={timeLeft.seconds} label='Second' />
        </div>
      </div>
    </div>
  )
}
