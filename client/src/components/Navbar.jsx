import React, { useState } from "react"
import { IoClose } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
const Navlinks = [
  "Home", "Market", "Explore", "Exhibition", "Artistics & Collectors"
]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav((prev) => {
      return !prev;
    })

  }
  return (
    <div className="p-4 bg-slate-900 text-white">
      <div className='container mx-auto max-w-screen-xl relative'>
        <div className='flex justify-between items-center text-white'>
          <a href="/" className="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-t from-green-500 via-green-600-400 to-orange-500">
            <span>NFT</span> Market</a>

          <div className=' hidden lg:flex space-x-5 text-sm items-center'>
            {
              Navlinks.map((Link, index) => (
                <a key={index} className='hover:text-indigo-600 duration-200 ease-in-out'>
                  {Link}
                </a>
              ))
            }

            <button className='px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700'> Connect</button>
          </div>
          <div className="lg:hidden" onClick={toggleNav}>
            {
              nav ? <IoClose size={28} className="text-white" /> : <AiOutlineBars size={25} />
            }
            {
              nav && (<div className=" fixed inset-0  bg-gradient-to-r from-blue-900 via-fuchsia-950 to-indigo-300 z-50 w-full h-full px-8 py-8 rounded-lg overflow-x-hidden">
                <div className='  space-y-6 text-sm flex flex-col items-center'>
                  {
                    Navlinks.map((Link, index) => (
                      <a key={index} className='hover:text-indigo-600 duration-200 ease-in-out w-full h-full text-center'>
                        {Link}
                      </a>
                    ))
                  }

                  <button className='px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700'> Connect</button>
                </div>
              </div>

              )}



          </div>
        </div>




      </div>
    </div>
  )
}

export default Navbar