import React from 'react'

const PortfolioCard = (pUrl, pSubtitle, pTitle, rating) => {
  return (
    <>
      <div className='w-[401px] bg-secedary rounded-3xl block'>
        <div className='p-8 overflow-hidden rounded-3xl'><img src={pUrl} alt={pUrl} /></div>
        <div className=''>
            <div className='px-8 text-base font-SubTitle font-medium text-primary flex justify-between'>
                <p className='text-brand'>{pSubtitle}</p>
                <p>{rating}</p>
            </div>
            <div>
                <h3 className='px-8 pb-8 pt-3.5 text-2xl font-title font-bold text-primary'>{pTitle}</h3>
            </div>
        </div>

      </div>
    </>
  )
}

export default PortfolioCard
