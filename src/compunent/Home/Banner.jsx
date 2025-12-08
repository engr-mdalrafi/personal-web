import React from 'react'

const Banner = () => {
  return (
    <>
      <section>
        <div className="container">
            <div className='mt-[200px] pb-[100px] flex items-center  justify-around gap-40'>
                <div className='w-max-[612px]'>
                    <h2 className='text-base font-title font-medium text-primary'>Welcome to my world</h2>
                    <h1 className='py-5 text-6xl text-white font-title font-bold'>Hi, I’m <span className='text-brand'>Md. Al Rafi</span></h1>
                    <h2 className='text-5xl text-white font-title font-bold'>a fornt end developer</h2>
                    <p className='pt-6 pb-36 text-base font-SubTitle text-primary'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                </div>
                <div className='w-[509px] h-[400px] bg-secedary rounded-md shadow-[#262a2e] shadow-[-10px_-10px_19px] relative'>
                    <div className='w-full absolute bottom-0'><img src="Portfolio-Images.png" alt="Portfolio-Images" /></div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner
