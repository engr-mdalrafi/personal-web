import React from 'react'
import { FaFigma, FaInstagram, FaReact } from 'react-icons/fa'
import { FiFacebook, FiTv } from 'react-icons/fi'
import { IoIosWifi, IoLogoJavascript } from 'react-icons/io'
import { LuLinkedin, LuMenu } from 'react-icons/lu'
import FeaturesCard from '../Features/FeaturesCard'
import { BsBoxSeam } from 'react-icons/bs'
import { PiChatTextThin } from 'react-icons/pi'
import { IoBookOutline } from 'react-icons/io5'

const Banner = () => {
  return (
    <>
      <section>
        <div className="container">
              <div className='mt-[200px] pb-[100px] flex items-center justify-around gap-40'>
                <div className='w-max-[612px]'>
                    <h2 className='text-base font-title font-medium text-primary'>Welcome to my world</h2>
                    <h1 className='py-5 text-6xl text-white font-title font-bold'>Hi, I’m <span className='text-brand'>Md. Al Rafi</span></h1>
                    <h2 className='text-5xl text-white font-title font-bold'>a fornt end developer</h2>
                    <p className='pt-6 pb-36 text-base font-SubTitle text-primary'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                    <div className='flex gap-40'>
                      <div>
                        <p className='pb-5 text-base text-primary uppercase font-SubTitle'>Find With Me</p>
                        <div className='flex gap-8'>
                          <div className='py-5 px-6 text-2xl rounded-md bg-secedary shadow-[#262a2e] shadow-[-10px_-10px_19px] text-primary'><FiFacebook /></div>
                          <div className='py-5 px-6 text-2xl rounded-md bg-secedary shadow-[#262a2e] shadow-[-10px_-10px_19px] text-primary'><FaInstagram /></div>
                          <div className='py-5 px-6 text-2xl rounded-md bg-secedary shadow-[#262a2e] shadow-[-10px_-10px_19px] text-primary'><LuLinkedin /></div>
                        </div>
                      </div>
                      <div>
                        <p className='pb-5 text-base text-primary uppercase font-SubTitle'>Best Skill On</p>
                        <div className='flex gap-8'>
                          <div className='py-5 px-6 text-2xl rounded-md bg-secedary shadow-[#262a2e] shadow-[-10px_-10px_19px] text-primary'><FaFigma /></div>
                          <div className='py-5 px-6 text-2xl rounded-md bg-secedary shadow-[#262a2e] shadow-[-10px_-10px_19px] text-primary'><FaReact /></div>
                          <div className='py-5 px-6 text-2xl rounded-md bg-secedary shadow-[#262a2e] shadow-[-10px_-10px_19px] text-primary'><IoLogoJavascript /></div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='w-[509px] h-[450px] bg-secedary rounded-md shadow-[#262a2e] shadow-[-10px_-10px_19px] relative'>
                    <div className='w-full absolute bottom-0'><img src="Portfolio-Images.png" alt="Portfolio-Images" /></div>
                </div>
              </div>

            <div className='pb-24'>
              <p className='text-base text-brand uppercase'>Features</p>
              <h2 className='pt-3.5 pb-12 text-5xl text-primary font-bold font-title'>What I Do</h2>
              <div className='grid grid-cols-3 gap-y-20'>
                <FeaturesCard icon={<LuMenu />} title="Business Stratagy">
                  I throw myself down among the tall
                  grass by the stream as I lie close to
                  the earth. 
                </FeaturesCard>
                <FeaturesCard icon={<IoBookOutline />} title="App Development">
                  It uses a dictionary of over 200 Latin
                  words, combined with a handful of
                  model sentence. 
                </FeaturesCard>
                <FeaturesCard icon={<FiTv />} title="App Development">
                  I throw myself down among the tall
                  grass by the stream as I lie close to
                  the earth. 
                </FeaturesCard>
                <FeaturesCard icon={<PiChatTextThin />} title="Mobile App">
                  There are many variations of
                  passages of Lorem Ipsum available,
                  but the majority.
                </FeaturesCard>
                <FeaturesCard icon={<IoIosWifi />} title="CEO Marketing">
                  always free from repetition, injected
                  humour, or non-characteristic words
                  etc. 
                </FeaturesCard>
                <FeaturesCard icon={<BsBoxSeam />} title="Personal Portfolio April">
                  It uses a dictionary of over 200 Latin
                  words, combined with a handful of
                  model sentence. 
                </FeaturesCard>
              </div>
            </div>



        </div>
      </section>
    </>
  )
}

export default Banner
