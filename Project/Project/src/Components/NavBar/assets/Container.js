import React from 'react'
import Image from '../../Images/Img3.JPG'

const Container = () => {
  return (
    <div className='flex justify-center flex-col bg-slate-100'>
       <div className=' flex flex-col text-center font-semibold py-10 mt-20 text-6xl font-Nunito'>Watch Video
        <div
          className="flex w-full cursor-pointer mt-14 h-screen bg-no-repeat bg-cover  "
          style={{ backgroundImage: "url(" + Image + ")" }}
        ></div></div>
        
    </div>
  )
}

export default Container