import React from 'react'

const Navber = () => {
  return (
    <>
      <nav className='bg-amber-300'>
        <div className="container">
          <div className='py-11 flex justify-between items-center'>
            <div><a href="#"><h2>Al Rafi</h2></a></div>
            <div>
              <ul className='flex gap-3'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Fatures</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Fesume</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Pricinc</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contract</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navber
