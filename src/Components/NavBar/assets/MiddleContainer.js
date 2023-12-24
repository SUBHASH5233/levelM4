import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";

const MiddleContainer = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-around  bg-slate-100 px-48  '>
            <div className=' flex  hover:shadow-xl cursor-pointer bg-white '>
                <div className='flex-col  py-12  m-4 hover:border-2 border-slate-100'>
                    <div className='flex justify-center px-8   text-8xl '>
                        <HiOutlineLightBulb />
                    </div>
                    <div className=' flex text-xl mt-10 justify-center px-10 '>
                        Creative Always
                    </div>
                    <div className=' flex mt-5 text-lg text-center  justify-center text-slate-400'> Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed eiusmod tempor. </div>
                    <div className=' flex justify-center mt-10 mr-5 font-semibold  text-xl text-slate-400'> LEARN MORE </div>
                </div>
            </div>

            <div className=' flex  hover:shadow-xl cursor-pointer bg-white '>
                <div className='flex-col  py-12  m-4 hover:border-2 border-slate-100'>
                    <div className='flex justify-center px-8   text-8xl '>
                        <BsPencilSquare  />
                    </div>
                    <div className=' flex text-xl mt-10 justify-center px-10 '>
                    Express Customization
                    </div>
                    <div className=' flex mt-5 text-lg text-center  justify-center text-slate-400'> Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed eiusmod tempor. </div>
                    <div className=' flex justify-center mt-10 mr-5 font-semibold  text-xl text-slate-400'> LEARN MORE </div>
                </div>
            </div>

            <div className=' flex cursor-pointer hover:shadow-xl bg-white'>
                <div className='flex-col  py-12  m-4 hover:border-2 border-slate-100'>
                    <div className='flex justify-center px-8   text-8xl '>
                        <IoSettingsOutline />
                    </div>
                    <div className=' flex text-xl mt-10 justify-center px-10 '>
                        Premium Integrations
                    </div>
                    <div className=' flex mt-5 text-lg text-center  justify-center  text-slate-400'> Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed eiusmod tempor. </div>
                    <div className=' flex justify-center mt-10 mr-5 font-semibold  text-xl text-slate-400'> LEARN MORE </div>
                </div>
            </div>


        </div>
    )
}

export default MiddleContainer