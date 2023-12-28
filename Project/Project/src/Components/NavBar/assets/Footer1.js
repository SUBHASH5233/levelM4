import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


const Footer1 = () => {
    return (
        <div className=' bg-neutral-900 flex justify-around p-16 flex-col md:flex-row '>
            <div className='  ' >
                <div className='text-white font-Noto text-4xl'>LevelM4</div>
                <div className='text-white'>
                    <div className=' flex gap-5 text-xl mt-16 '>
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
                <div className='text-neutral-500 mt-10 text-base font-Noto'>&#169; 2020 LevelM4 by Mobirise</div>

            </div>

            <div className=' ml-24 '>
                <div className=' text-white font-Noto text-3xl'>
                    Company
                </div>
                <div className='text-base text-neutral-500 p-2 hover:text-white hover:animate-pulse cursor-pointer' >Home</div>
                <div className='text-base text-neutral-500 p-2 cursor-pointer hover:text-white hover:animate-pulse cursor-pointer'>Products</div>
                <div className='text-base text-neutral-500 p-2 hover:text-white hover:animate-pulse cursor-pointer'>Service</div>
                <div className=' text-base text-neutral-500 p-2 hover:text-white hover:animate-pulse cursor-pointer'>Pricing</div>
            </div>

            <div className=' '>
                <div className=' text-white font-Noto text-3xl'>
                    Contact
                </div>
                <div className=' text-neutral-500 mt-3 text-base font-Noto'>
                    2005 Stokes Isle 896,<br />Venaville 1310, USA
                </div>

                <div className='text-neutral-500 mt-7 text-base font-mono'>(+12) 345 6789</div>
                <div className='text-neutral-500 mt-5 text-base font-Noto'>support@mobirise.com</div>
            </div>
            <div className=' '>
                <div className=' text-white font-Noto text-3xl'>
                    NewsLetter
                </div>
                <div className='flex mt-8'><input className=' px-16 py-4 ' type='text' placeholder='Enter your Email'/><div> <button className=' bg-blue-500 text-white  text-3xl p-4' ><IoIosArrowForward /></button></div></div>
                <div className='text-neutral-500 mt-7 text-lg '>Enter your email address for receiving <br/>valuable newsletters and insights on the<br/> industry.</div>
            </div>
            
        </div>
    )
}

export default Footer1