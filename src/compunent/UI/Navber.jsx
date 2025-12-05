import React from 'react'
import Button from './Button'

const Navber = () => {
  return (
    <>
      <nav className=''>
        <div className="container">
          <div className='py-11 flex justify-between items-center font-title text-sm uppercase text-primary'>
            <div><a href="#"><h2>Al Rafi</h2></a></div>
            <div>
              <ul className='flex gap-7'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Fatures</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Fesume</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Pricinc</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contract</a></li>
              </ul>
              <Button/>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navber
