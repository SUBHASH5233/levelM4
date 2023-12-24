import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";
import { PiHandSwipeRight } from "react-icons/pi";

const BottomMiddleCont = () => {
  return (
    <div className=' mt-32 px-16'>
        <div className=' flex flex-col md:flex-row mx-28'>
            <div className=' flex   cursor-pointer bg-white '>
                <div className='flex-col '>
                    <div className='flex px-2 m-4   text-7xl '>
                        <HiOutlineLightBulb />
                    </div>
                    <div className=' flex text-xl px-2 m-4'>
                        Creative Always
                    </div>
                    <div className=' flex mt-5 text-base m-4  text-slate-400 '> Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed eiusmod tempor. </div>
                    
                </div>
            </div>
            <div className=' flex   cursor-pointer '>
                <div className='flex-col'>
                    <div className='flex px-2 m-4   text-7xl '>
                        <BsPencilSquare />
                    </div>
                    <div className=' flex text-xl px-2 m-4'>
                    Express Customization
                    </div>
                    <div className=' flex mt-5 text-base m-4  text-slate-400'> Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed eiusmod tempor. </div>
                    
                </div>
            </div>

            <div className=' flex   cursor-pointer '>
                <div className='flex-col'>
                    <div className='flex px-2 m-4   text-7xl '>
                        <IoSettingsOutline  />
                    </div>
                    <div className=' flex text-xl px-2 m-4'>
                    Premium Integrations
                    </div>
                    <div className=' flex mt-5 text-base m-4  text-slate-400'> Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed eiusmod tempor. </div>
                    
                </div>
            </div>

            <div className=' flex   cursor-pointer '>
                <div className='flex-col'>
                    <div className='flex px-2 m-4   text-7xl '>
                        <PiHandSwipeRight  />
                    </div>
                    <div className=' flex text-xl px-2 m-4'>
                    Real-time Editing
                    </div>
                    <div className=' flex mt-5 text-base m-4  text-slate-400 '> Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed eiusmod tempor. </div>
                    
                </div>
            </div>
        
           

        </div>
    </div>
  )
}

export default BottomMiddleCont