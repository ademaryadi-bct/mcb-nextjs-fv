import React from 'react'

export const NewsCard = ({ title, year, media }) => {
  return (
    <article className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex w-full flex-col text-lg text-black font-bold leading-none mt-5 px-5 py-5 rounded-[40px] max-md:max-w-full max-md:px-5 hover:shadow-[0px_6px_25px_rgba(0,0,0,0.3)] transition-shadow cursor-pointer'>
      <div>
        <h3 className='py-2'>{title}</h3>
        <div className='border border-black border-solid shadow-[0px_4px_20px_rgba(0,0,0,0.25)] shrink-0 h-0'></div>
      </div>
      <div className='grid grid-cols-2 py-2'>
        <div>{media}</div>
        <div className=''>{year}</div>
      </div>
    </article>
  )
}
