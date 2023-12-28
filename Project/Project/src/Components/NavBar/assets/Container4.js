import React from 'react'
import Face1 from '../../Images/face1.jpg'
import { FaPlus } from "react-icons/fa6";

const Container4 = () => {
  return (
    <div className=' flex justify-center mt-20 mb-10'>
      <div className='  py-10  '>
        <div className=' flex   flex-col md:flex-row gap-10' >
          <div className=" h-96 w-96 bg-no-repeat bg-cover "
            style={{ backgroundImage: "url(" + Face1 + ")" }}>
          </div>
          <div className='   '>
            
            <div className=' font-Noto text-5xl mt-5'>
              Look at things from a <br />different angle
            </div>
            <div className='flex mt-16 justify-between'> 
            <div className='flex text-2xl font-Noto'>
              Creative Direction
            </div>
            <div className='flex text-2xl cursor-pointer '>
            <FaPlus />
            </div>
            
            </div>
            <div className="h-0.5 w-full mt-5 bg-slate-200 flex-col cursor-pointer ">
            </div>

            <div className='flex mt-7 justify-between'> 
            <div className='flex text-2xl font-Noto'>
            Prompt Strategies
            </div>
            <div className='flex text-2xl cursor-pointer '>
            <FaPlus />
            </div>
            
            </div>
            <div className="h-0.5 w-full mt-5 bg-slate-200 flex-col cursor-pointer ">
            </div>

            <div className='flex mt-7  justify-between'> 
            <div className='flex text-2xl font-Noto'>
            Ideas & Plans
            </div>
            <div className='flex text-2xl cursor-pointer '>
            <FaPlus />
            </div>
            
            </div>
            <div className="h-0.5 w-full mt-5 bg-slate-200 flex-col cursor-pointer ">
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Container4