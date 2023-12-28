import React from 'react'
import Home from './Home'
import LiveDemo from './LiveDemo'
import LiveDemoBlock from './LiveDemoBlock'
import { MdArrowDropDown } from "react-icons/md";


const Navbar = () => {
  return (
    <div className=' flex '>
      <div className='flex  md:flex-col px-20 w-full fixed shadow-xl bg-white justify-center '>
        <div className='flex justify-between ' >
         <div className=' mt-1 px-4  py-3 font-Noto text-4xl flex  text-center'> LevelM4</div>
          <div className='flex  flex-row  gap-9 py-5  text-lg '>
            <Home />
            <LiveDemo />
            <div className=' flex text-4xl -ml-10 -mt-0.5'><MdArrowDropDown /></div>
            <LiveDemoBlock />
            <div className='flex text-4xl mr-16 -ml-10 -mt-0.5'><MdArrowDropDown /></div>
          </div>
          <button className=' bg-blue-600 text-white  text-base px-8 py-4 m-2'>BUY NOW</button>
        </div>

      </div>
    </div>



  )
}

export default Navbar                   