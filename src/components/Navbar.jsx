import React from 'react'

const Navbar = () => {
  return (
   <>

   <nav className='mb-20 flex items-center justify-between py-6'>
    <div className=' mx-5 text-3xl font-medium  flex flex-shrink-0 items-center'>
        <h1>RS</h1>
    </div>
    <div className='mx-5 flex gap-5  justify-center text-xl'>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
    </div>
   </nav>
   </>

  )
}

export default Navbar
