import React from 'react'
import Face1 from '../../Images/face1.jpg'

const Container5 = () => {
    return (
        <div className=' flex justify-center bg-slate-200 '>
            <div className=' flex flex-col m-10 mt-36'>
                <div className=' flex justify-center'>
                    <div className=" flex h-40 w-40 rounded-full bg-cover bg-no-repeat  " style={{ backgroundImage: " url( " + Face1 + " )" }}></div>
                </div>
                <div className='flex text-center italic   mt-20 text-3xl '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru <br />exercitation ullamco laboris nisi ut aliquip ex lorem ipsum.
                </div>
                <div className=' flex justify-center  '>
                    <div className=' mt-24'>
                        <div className=' flex text-3xl space-x-4'>Marie Jordan</div>
                        
                        <div className=' mt-3 ml-10  font-Nunito text-gray-500 flex'>DESIGNER</div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Container5