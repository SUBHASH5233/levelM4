import React from 'react'
import Image from "../../Images/Img1.jpg";
import Image2 from "../../Images/Img2.jpg";

const SubMiddle = () => {
  return (
    <div className=' flex mt-10 '>
      <div className=' '>
      <div className=" h-96 w-1/2 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(" + Image + ")" }}>
      </div>

      <div className=" h-96 w-1/2 p-1 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(" + Image2 + ")" }}>
      </div>
      </div>
    </div>

  )
}

export default SubMiddle