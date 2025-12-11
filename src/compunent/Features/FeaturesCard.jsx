import React from 'react'

const FeaturesCard = ({title, children, icon}) => {
  return (
    <>
      <div className='w-[400px]'>
        <div className='pl-[50px] pr-[65px] rounded-[10px] bg-secedary  text-primary shadow-[#262a2e] shadow-[-10px_-10px_19px]'>
            <div className='pt-12 text-brand text-5xl'>{icon}</div>
            <h3 className='py-7 font-subTitle text-2xl font-medium text-primary'>{title}</h3>
            <p className='pb-16 text-justify'>{children}</p>
        </div>
      </div>
    </>
  )
}

export default FeaturesCard
