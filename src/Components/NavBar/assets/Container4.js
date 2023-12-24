import React from 'react'
import Face1 from '../../Images/face1.jpg'
import { FaPlus } from "react-icons/fa6";

const Container4 = () => {
  return (
    <div className=' flex justify-center '>
      <div className='  mt-20 md:w-auto md:h-full'>
        <div className=' flex py-10   flex-col md:flex-row gap-10' >
         <div className=' '>
          <div className=" h-full w-96 bg-no-repeat bg-cover "
            style={{ backgroundImage: "url(" + Face1 + ")" }}>
          </div></div>
          <div className='  px-4 '>
            <div className=' font-Noto text-5xl'>
              Look at things from a <br />different angle
            </div>
            <div className='flex mt-16 justify-between'> 
            <div className=' text-2xl font-Noto'>
              Creative Direction
            </div>
            <div className=' text-2xl cursor-pointer '>
            <FaPlus />
            </div>
            
            </div>
            <div className="h-0.5 w-full mt-5 bg-slate-200 flex-col cursor-pointer ">
            </div>

            <div className='flex mt-7 justify-between'> 
            <div className=' text-2xl font-Noto'>
            Prompt Strategies
            </div>
            <div className=' text-2xl cursor-pointer '>
            <FaPlus />
            </div>
            
            </div>
            <div className="h-0.5 w-full mt-5 bg-slate-200 flex-col cursor-pointer ">
            </div>

            <div className='flex mt-7  justify-between'> 
            <div className=' text-2xl font-Noto'>
            Ideas & Plans
            </div>
            <div className=' text-2xl cursor-pointer '>
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