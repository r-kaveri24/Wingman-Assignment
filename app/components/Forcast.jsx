import React from 'react'

const Forcast = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col items-center justify-center gap-6'>
        <div className='w-[212px] h-[30px] flex gap-2 items-center'>
            <img className='w-3 h-3' src="./message.png" alt="" />
            <p className=' text-xs font-semibold text-[#CCFBEF]'>FORECASTS</p>
        </div>
        <div className='w-[212px] h-[145px]'>
            <div className='flex justify-between items-start'><p className=' text-[56px] font-medium text-white'>+15%</p><img className='w-[35px] h-[35px]' src="./up.png" alt="" /></div>
            <p className='text-sm font-normal text-white'>forecasted increase in your sales closed by the end of the current month</p>
        </div>
        <div className='w-[212px] h-[145px]'>
        <div className='flex justify-between items-start'><p className=' text-[56px] font-medium text-white'>+25%</p><img className='w-[35px] h-[35px]' src="./up.png" alt="" /></div>
        <p className='text-sm font-normal text-white'>forecasted increase in consultations by the end of the current month</p>
        </div>
    </div>
  )
}

export default Forcast