import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";
import { FaSkype } from "react-icons/fa6";

const Container6 = () => {
    return (
        <div className=' bg-neutral-900 flex justify-center'>
            <div>
                <div className=' mt-24 '>
                    <div className=' text-4xl text-white font-Noto text-center'>
                        STAY IN TOUCH
                    </div>
                    <div className=' text-white text-center mt-9 text-xl'>
                        Contact us to give life to awesome ideas or make <br />suggestions on improvements to be made.
                    </div>
                </div>
                <div className=' m-4  mt-28 flex-col md:flex-row '>
                    <input type='text' className="px-52 py-4 border-none text-left " placeholder="Enter your Email " ></input>
                    <button className=' px-12 bg-slate-400 py-4 hover:bg-blue-600 hover:text-white cursor-pointer'>SUBSCRIBE</button></div>
                    <div className=' flex gap-5 text-white text-3xl  justify-center mt-16 mb-32 cursor-pointer  hover:text-purple-600'>
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <RiBasketballLine />
            <FaSkype />
            </div>
            </div>
           
            
        </div>
    )
}

export default Container6