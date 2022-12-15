import React from 'react'
import Link from "next/link"
const store = () => {
  return (
    <div>
            <nav  className='relative flex h-12 items-center px-4 justify-between shadow-md dark:shadow-gray-700' style={{height:"70px" }}>
          <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670936284/1_rdfnhm.png" className="logo" style={{width:"200px" ,height:"170px"}} alt="" />

            
            <div>
            
            <Link href='/home' className="p-2 text-dark">Home</Link>
            <Link href='/collection'className="p-2 text-dark">Collection</Link>

            <Link href='/store' className="p-2 text-dark">Store</Link>
            <Link href='/cart' className="p-2 text-dark">Cart</Link>
              <Link href='/aboutus'className="p-2 text-dark">About us</Link>
              <Link href='/login'className="p-2 text-dark">Login</Link>
            </div>
          </nav>
      
             
    </div>
  )
}

export default store