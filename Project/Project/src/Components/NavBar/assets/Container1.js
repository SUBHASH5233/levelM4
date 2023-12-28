import React from 'react'

const Container1 = () => {
    return (
        <div className=' flex  bg-blue-600 w-full  justify-center '>
            <div className='flex-col md:flex-row  '>
                <div className=' mt-16 text-center text-5xl text-white font-Poplin'>Pricing Tables</div>
                <div className='  bg-white px-48 h-96 mt-16 flex '>
                    <div className=' flex mt-16 gap-20 flex-col md:flex-row '>
                        <div className='cursor-pointer '>
                            <div className=' text-2xl font-Nunito text-center '>Classic</div>
                            <div className=' text-center mt-5 '>
                                <span className='text-xl text-blue-600 font-bold font-Nunito  '>$</span>
                                <span className='text-5xl font-Noto text-blue-600 '>20.00</span>
                                <span className=' text-xl text-slate-500 ml-1 italic'>/month</span></div>
                            <div className=' mt-5 text-center text-gray-400'>Lorem ipsum dolor sit aet, in dicant <br />tamquam adodum pri, eiusmod  cum <br />tibique anti.</div>
                            <div className=' flex justify-center'>
                                <button className=' text-slate-500 bg-slate-100 hover:text-white hover:bg-blue-600  px-10 py-5 text-lg mt-10 flex '> GET STARTED</button>
                            </div>
                        </div>

                        <div className='  cursor-pointer'>
                            <div className=' text-2xl font-Nunito text-center '>Standard</div>
                            <div className=' text-center mt-5 '>
                                <span className='text-xl text-blue-600 font-bold font-Nunito  '>$</span>
                                <span className='text-5xl font-Noto text-blue-600 '>70.00</span>
                                <span className=' text-xl text-slate-500 ml-1 italic'>/month</span></div>
                            <div className=' mt-5 text-gray-400 text-center'>Lorem ipsum dolor sit aet, in dicant <br />tamquam adodum pri, eiusmod  cum<br /> tibique anti.</div>
                            <div className=' flex justify-center'>
                                <button className=' text-slate-500 bg-slate-100 hover:text-white hover:bg-blue-600  px-10 py-5 text-lg mt-10 flex '> GET STARTED</button>
                            </div>                   
                             </div>

                        <div className=' cursor-pointer'>
                            <div className=' text-2xl font-Nunito text-center '>Premium</div>
                            <div className=' text-center mt-5 '>
                                <span className='text-xl text-blue-600 font-bold font-Nunito  '>$</span>
                                <span className='text-5xl font-Noto text-blue-600 '>90.00</span>
                                <span className=' text-xl text-slate-500 ml-1 italic'>/month</span></div>
                            <div className=' mt-5 text-gray-400 text-center'>Lorem ipsum dolor sit aet, in dicant <br />tamquam adodum pri, eiusmod  cum <br /> tibique anti.</div>
                            <div className=' flex justify-center'>
                        <button className=' text-slate-500 bg-slate-100 hover:text-white hover:bg-blue-600  px-10 py-5 text-lg mt-10 flex '> GET STARTED</button>
                        </div>                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container1