import React from 'react'
import Image from '../../Images/Img1.jpg'
import Image1 from '../../Images/Img2.jpg'

const SubMiddleCont = () => {
  return (
    <div className='flex mt-10 flex-col md:flex-row'>
        
        <div
          className="flex w-full h-screen bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(" + Image + ")" }}
        ></div>
    
        <div
          className="flex w-full h-screen  bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(" + Image1 + ")" }}
        >
        </div>
    </div>
  )
}

export default SubMiddleCont