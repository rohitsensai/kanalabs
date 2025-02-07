import React from 'react'
import { BsDatabase } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiHandCoins } from "react-icons/pi";
import { FaBalanceScale } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineWidgets } from "react-icons/md";



export default function leftnavbar() {
  return (
  
    <div className='d-none d-sm-flex flex-column align-items-center min-vh-100  ' style={{backgroundColor:"#17181A",width:"8%"}} >
        <img src="/images/kanalabs-logo-primary.svg" width={30} className='my-5'/>
        <BsDatabase size={50} className='iconhover my-3 rounded p-2' />
        <PiHandCoins size={50} className='iconhover my-3 rounded p-2' />
        <FaBalanceScale size={50} className='iconhover my-3 rounded p-2' />
        <FiBarChart2 size={50} className='iconhover my-3 rounded p-2' />
        <MdOutlineWidgets size={50} className='iconhover rounded my-3 p-2 ' />
        <IoIosHelpCircleOutline size={50} className='help my-5 rounded p-2 mt-auto text-white' style={{backgroundColor:"#111213"}}/>
           
    </div>
  
  )
}
