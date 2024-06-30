import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { MdOutlineSettings } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";



function Header() {
    return (
        <>

            <div className="d-none d-sm-flex flex-row justify-content-between align-items-center rounded p-3 mx-3" style={{ height: "120px" ,backgroundColor:"#17181A"}}>
                <div className="d-flex flex-grow-1 me-2  rounded  align-items-center text-white p-4" style={{ height: "50px",backgroundColor:"#1D1E20" }}>
                    <div className='me-auto'>
                    Your Balance
                    </div>
                    <div>Wallet not connected</div>
                </div>
                <div className="d-flex flex-grow-1 me-2  rounded align-items-center text-white p-4" style={{ height: "50px",backgroundColor:"#1D1E20" }}>
                    <CiSearch className='mx-1'/>
                    Search
                </div>
                <div className="d-flex flex-grow-1 me-2  rounded align-items-center p-4" style={{ height: "50px",color:"#27e3c4",backgroundColor:"#1D1E20" }}>
                   <FaRegUserCircle className='mx-1' />
                    Connect Wallet
                </div>
                <div className="d-flex rounded align-items-center text-white p-3" style={{ height: "50px",backgroundColor:"#1D1E20" }}>
                    <MdOutlineSettings size={20}/>
                </div>
            </div>

            <div className='d-flex d-sm-none text-white py-4' style={{backgroundColor:"#111213",position:"sticky",top:"0px"}}>
                <div className='px-1 mx-2'>
                    <img 
                    src="/images/kanalabs-logo-primary.svg" 
                    width={30}
                    />

                </div>

                <div className='me-auto mx-2'>Swap</div>
                <div className='px-1 mx-1'>
                    <IoSettingsOutline size={30}/>
                </div>
                <div className='px-1 mx-1'> 
                    <VscThreeBars size={30}/>
                </div>
            </div>



        </>
    );
}

export default Header;
