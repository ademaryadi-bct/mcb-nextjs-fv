import React from 'react'

import Link from 'next/link'

const DestinationCard = ({ name, onBuyTicket }) => {
  return (
    <article className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] w-[98%] mx-auto p-5 m-2 rounded-[40px] max-md:max-w-full'>
      <div className='flex justify-between max-md:flex-col max-md:items-stretch'>
        <div className='w-1/5 max-md:w-full max-md:ml-0'>
          <div className='max-md:max-w-full'>
            <div className='max-md:flex-col max-md:items-stretch'>
              <div className='max-md:w-full max-md:ml-0'>
                <div className='flex flex-col items-stretch'>
                  <img
                    src='/images/front-pages/tentang-kami/layanan-ticket-museum/link.svg'
                    alt=''
                    className='aspect-[1] object-contain lg:w-1/4 self-center'
                  />
                  <img
                    src='/images/front-pages/tentang-kami/layanan-ticket-museum/logo.png'
                    alt={`${name} destination image`}
                    className='aspect-[0.99] object-contain shadow-[0px_4px_20px_rgba(0,0,0,0.25)] lg:w-3/4 self-center max-md:w-[5rem]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grow max-md:w-full max-md:ml-0'>
          <div className='flex flex-col justify-end h-full pb-5'>
            <div className='flex justify-between max-md:grid max-md:justify-center'>
              <div className='w-4/5 ml-5x max-md:w-full max-md:ml-0'>
                <h3 className='text-black text-2xl font-bold leading-none text-center self-stretch my-auto max-md:text-[40px] max-md:mt-10'>
                  {name}
                </h3>
              </div>
              <button
                onClick={onBuyTicket}
                className='bg-[rgba(155,133,243,1)] shadow-[0px_4px_30px_rgba(0,0,0,0.25)] flexx flex-colx items-stretchx text-black font-bold text-center leading-[2.5] w-fullx justify-center mt-[68px]x px-[26px] py-2 rounded-[20px] max-md:mt-10 max-md:px-5 hover:bg-[rgba(145,123,233,1)] transition-colors'
              >
                Beli Tiket
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )

  //   {
  //     <article className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] w-[98%] mx-auto p-5 m-2 rounded-[40px] max-md:max-w-full max-md:mt-[11px] max-md:pl-5'>
  //   <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
  //     <div className='w-[77%] max-md:w-full max-md:ml-0'>
  //       <div className='grow max-md:max-w-full max-md:mt-10'>
  //         <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
  //           <div className='w-1/5 max-md:w-full max-md:ml-0'>
  //             <div className='text-center grow items-stretch max-md:mt-8'>
  //               <img
  //                 src='/images/front-pages/tentang-kami/layanan-ticket-museum/link.svg'
  //                 alt=''
  //                 className='aspect-[1] object-contain w-1/3 self-center'
  //               />
  //               <img
  //                 src='/images/front-pages/tentang-kami/layanan-ticket-museum/logo.png'
  //                 alt={`${name} destination image`}
  //                 className='aspect-[0.99] object-contain shadow-[0px_4px_20px_rgba(0,0,0,0.25)] w-3/4'
  //               />
  //             </div>
  //           </div>
  //           <div className='w-4/5 ml-5 max-md:w-full max-md:ml-0'>
  //             <h3 className='text-black text-2xl font-bold leading-none text-center self-stretch my-auto max-md:text-[40px] max-md:mt-10'>
  //               {name}
  //             </h3>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className='w-[17%]x ml-5x max-md:w-full max-md:ml-0'>
  //       <button
  //         onClick={onBuyTicket}
  //         className='bg-[rgba(155,133,243,1)] shadow-[0px_4px_30px_rgba(0,0,0,0.25)] flex flex-col items-stretch text-black font-bold text-center leading-[2.5] w-full justify-center mt-[68px]x px-[26px] py-2 rounded-[20px] max-md:mt-10 max-md:px-5 hover:bg-[rgba(145,123,233,1)] transition-colors'
  //       >
  //         Beli Tiket
  //       </button>
  //     </div>
  //   </div>
  // </article>
  //   }
}

export default DestinationCard
