import React from 'react'
import Face1 from '../../Images/face1.jpg'

const Container5 = () => {
    return (


            <div className='flex justify-center mt-20  '>
                    <div className='  '>
                        <div className=' flex justify-center'>
                    <div className="h-40 w-40 bg-no-repeat bg-cover rounded-full   "
                        style={{ backgroundImage: "url(" + Face1 + ")" }}>
                    </div>
                    </div>
                    <div className=' text-center italic text-3xl mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru<br/> exercitation ullamco laboris nisi ut aliquip ex lorem ipsum.
                    </div>
                    <div className=' flex justify-center m-10'>
                        <div className=' font-Noto text-2xl'>Marie Jordan</div>
                    </div>

                    <div className=' flex justify-center'>
                        <div className=' text-base font-bold text-slate-400'>DESIGNER</div>
                    </div>
                    </div>
                    

            </div>




            )
}

            export default Container5