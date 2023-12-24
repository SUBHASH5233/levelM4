import React from 'react'
import Home from './Home'
import LiveDemo from './LiveDemo'
import LiveDemoBlock from './LiveDemoBlock'
import { MdArrowDropDown } from "react-icons/md";


const Navbar = () => {
  return (
    <div className='flex md:flex-col  border-solid w-full  fixed shadow-xl bg-white justify-center min-w-min space-x-64'>
      <div className=' mt-1 px-10 py-3 font-Noto text-4xl flex ' >
        LevelM4
        <div className='flex flex-row mt-2 ml-60 gap-9  text-lg '>
          <Home />
          <LiveDemo /><div className=' flex text-4xl -ml-10 -mt-0.5'><MdArrowDropDown /></div>
          <LiveDemoBlock /><div className='flex text-4xl mr-16 -ml-10 -mt-0.5'><MdArrowDropDown /></div>
        </div>
        <button className=' bg-blue-600 text-white ml-96 text-base px-8 py-4'>BUY NOW</button>
      </div>


    </div>



  )
}

export default Navbar                   