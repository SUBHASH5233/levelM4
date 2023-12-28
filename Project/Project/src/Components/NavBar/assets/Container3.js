import React from 'react'
import Face1 from '../../Images/face1.jpg'
import Face2 from '../../Images/face2.jpg'
import Face3 from '../../Images/face3.jpg'

const Container3 = () => {
  return (
    <div className=' flex justify-evenly px-48 flex-col md:flex-row  mt-10'>
        <div className=' flex  ' >
           <div className=" h-72 w-72 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(" + Face1 + ")" }}>
      </div>
      </div>
      <div className=' flex ' >
           <div className=" h-72 w-72 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(" + Face2 + ")" }}>
      </div>
      </div>
      <div className=' flex ' >
           <div className=" h-72 w-72 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(" + Face3 + ")" }}>
      </div>
      </div>

      <div className=' flex ' >
           <div className=" h-72 w-72 bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(" + Face1 + ")" }}>
      </div>
      </div>

      
    </div>
  )
}

export default Container3