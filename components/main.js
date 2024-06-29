import React from 'react'
import { TiArrowShuffle } from "react-icons/ti";
import { TbArrowsSplit2 } from "react-icons/tb";
import { FiRefreshCcw } from "react-icons/fi";
import { BsToggles } from "react-icons/bs";
import { GiToggles } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import { MdOutlineWidgets } from "react-icons/md";



export default function main() {
    return (
        <>
            <div className='d-none d-sm-block '>
                <div className=" w-full mx-auto    mt-5 rounded" style={{ height: "450px", width: "40%" }}>

                    <div className='d-flex'>

                        <div className='px-2 rounded text-white py-2' style={{ border: "0.01px solid #ffffff",backgroundColor:"#17181A" }}>
                            <TbArrowsSplit2 className='mx-1 mb-1' />
                            Same-chain
                        </div>
                        <div className='px-2 me-auto text-white rounded py-2' style={{ border: "1px solid #919191" }}>
                            <TiArrowShuffle className='mx-1 mb-1' />
                            Cross-chain
                        </div>
                        <div>
                            <MdOutlineWidgets style={{ color: "#27e3c4" }} />
                        </div>
                    </div>
                    <div className='rounded px-4 py-2' style={{ border: "1px solid #919191",backgroundColor:"#17181A" }}>

                        <div className='text-white d-flex py-2'>
                            <div className='me-auto'>
                                Same-chain Swap
                            </div>
                            <div className='mx-2'>
                                <FiRefreshCcw style={{ color: "#27e3c4" }} />
                            </div>
                            <div className='mx-2'>
                                <BsToggles style={{ color: "#27e3c4" }} />
                            </div>
                        </div>
                        <div className='d-flex text-white mb-4 mt-2'>
                            <div className=' rounded px-1' style={{ border: "1px solid #919191" }}>
                                <GiToggles size={20} className='' />
                            </div>

                        </div>

                        <div className=' rounded px-4 py-2 d-flex text-white align-items-start' style={{ border: "1px solid #919191",backgroundColor:"#111213" }}>
                            <div className='w-75'>
                                <div className='py-2'>Pay from
                                    <span className='mx-2' style={{ color: "#2ED3B7" }}>Connect Wallet</span>
                                </div>
                                <div className='border-bottom my-2 pb-2'>
                                    0.00
                                </div>
                                <div className='py-2'>
                                    USD 0
                                </div>
                            </div>


                            <div className=' px-4 py-2 mx-2 mt-2 rounded ' style={{ width: "30%", border: "1px solid #919191",backgroundColor:"#17181A" }}>
                                <div className='d-flex justify-content-around'>
                                    <div className='d-flex align-items-center' ><FaRegCircle size={30} /></div>
                                    <div>
                                        Token
                                        <div style={{ fontSize: "10px" }}>onChain</div>
                                    </div>
                                </div>


                            </div>

                        </div>


                        <div className="text-center ">
                            <LuArrowDownUp size={30} className='mx-auto rounded text-white' style={{ marginTop: "-20px", border: "1px solid #919191",backgroundColor:"#111213" }} />
                        </div>


                        <div className=' rounded px-4 py-2 d-flex text-white align-items-start' style={{ marginTop: "-15px", border: "1px solid #919191" ,backgroundColor:"#111213"}}>
                            <div className='w-75'>
                                <div className='py-2'>Receive to
                                    <span className='mx-2' style={{ color: "#27e3c4" }}>Connect Wallet</span>
                                </div>
                                <div className='border-bottom my-2 pb-2'>
                                    0.00
                                </div>
                                <div className='py-2'>
                                    USD 0
                                </div>
                            </div>




                            <div className=' px-4 py-2 mx-2 mt-2 rounded ' style={{ width: "30%", border: "1px solid #919191",backgroundColor:"#17181A" }}>
                                <div className='d-flex justify-content-around'>
                                    <div className='d-flex align-items-center' ><FaRegCircle size={30} /></div>
                                    <div>
                                        Token
                                        <div style={{ fontSize: "10px" }}>onChain</div>
                                    </div>
                                </div>


                            </div>

                        </div>


                        <div className='d-flex py-1 my-2 rounded shadow justify-content-center cursor-pointer ' style={{ border: "1px solid #27e3c4", color: "#27e3c4", borderBottom: "4px solid #27e3c4" }}>
                            Swap now
                        </div>



                    </div>

                    <div className='mt-4 d-flex align-items-center px-2 py-2 rounded  text-white' style={{ border: "1px solid #919191",backgroundColor:"#17181A" }}>
                        <div className='me-auto'> Additional Details </div>  <FaChevronDown />
                    </div>

                </div>
            </div>



            <div className='d-block d-sm-none' style={{backgroundColor:"#0C0C0D"}}>
                <div className="w-full mx-auto   rounded" style={{ height: "450px" }}>

                    <div className='d-flex text-white'>
                        <div className=' text-center rounded  text-white flex-grow-1 py-2'>
                            <TbArrowsSplit2 className='mx-1 mb-1' />
                            Same-Chain
                        </div>
                        <div className='me-auto text-center rounded flex-grow-1 py-2'style={{backgroundColor:"#111213"}}>
                            <TiArrowShuffle className='mx-1 mb-1' />
                            Cross-Chain
                        </div>

                    </div>



                    <div className='bg-black px-2'>

                        <div className='text-white d-flex py-2'>
                            <div className='me-auto'>
                                Same-chain Swap
                            </div>
                            <div className='mx-2'>
                                <FiRefreshCcw style={{ color: "#27e3c4" }} />
                            </div>
                            <div className='mx-2'>
                                <BsToggles style={{ color: "#27e3c4" }} />
                            </div>
                        </div>

                        <div className='d-flex text-white '>
                            <div className='mx-sm-2 me-auto' >
                                <GiToggles />
                            </div>
                            <div className='rounded shadow py-1 px-1' style={{ color: "#27e3c4", border: "1px solid #27e3c4",fontSize:"10px" }}>Other Chains <FaChevronDown /> </div>
                        </div>


                        <div className='  mx-2 my-2 rounded d-flex flex-column justify-content-center align-items-center   text-white' style={{border:"1px solid #919191",backgroundColor:"#111213"}}>

                            <div className=' p-2 w-100 '>
                                <div className='d-flex  bg-dark py-2 my-2 px-2 rounded' style={{border:"1px solid #919191"}}>
                                    <div><FaRegCircle /></div>
                                    <div>
                                        Token

                                        onChain

                                    </div>
                                </div>


                            </div>

                            <div className='w-100 px-2' >
                                <div className='d-flex'>
                                    <div className='me-auto'>  Pay from  </div>
                                    <div style={{ color: "#27e3c4" }}> Connect Wallet </div>
                                </div>
                                <div className='border-bottom my-2'>
                                    0.00
                                </div>
                                <div className='d-flex'>
                                    <div className='me-auto'>
                                        USD 0
                                    </div>
                                    <div>
                                        Balance -
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="text-center ">
                            <LuArrowDownUp size={30} className='mx-auto rounded bg-dark  text-white' style={{ marginTop: "-40px",border:"1px solid #919191" }} />
                        </div>


                        <div className='mx-2 rounded d-flex flex-column justify-content-center align-items-center   text-white' style={{ marginTop: "-25px",border:"1px solid #919191" ,backgroundColor:"#111213"}}>

                            <div className=' p-2 w-100'>
                                <div className='d-flex  bg-dark py-2 my-2 px-2 rounded' style={{border:"1px solid #919191"}}>
                                    <div><FaRegCircle /></div>
                                    <div>
                                        Token

                                        onChain

                                    </div>
                                </div>


                            </div>

                            <div className='w-100 px-2 '>
                                <div className='d-flex'>
                                    <div className='me-auto'>  Receive to  </div>
                                    <div style={{ color: "#27e3c4" }}> Connect Wallet </div>
                                </div>
                                <div className='border-bottom my-2'>
                                    0.00
                                </div>
                                <div className='d-flex'>
                                    <div className='me-auto'>
                                        USD 0
                                    </div>
                                    <div>
                                        Balance -
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='text-white d-flex justify-content-center my-3'>
                            More Routes <FaChevronDown className='mt-1 mx-2' />
                        </div>

                        <div className='d-flex mx-4 my-3 py-1 rounded shadow bg-dark justify-content-center cursor-pointer ' style={{ color: "#2ED3B7", border: "1px solid #2ED3B7",borderBottom:"4px solid #2ED3B7" }}>
                            Swap now
                        </div>

                        <div className='mx-4 px-2 my-2 py-1 shadow rounded d-flex justify-content-center cursor-pointer text-white bg-dark' style={{border:"1px solid #919191"}}>
                            <div className='me-auto' >
                                Additional details
                            </div>
                            <div>
                                <FaChevronDown />
                            </div>
                        </div>

                      

                    </div>


                </div>
            </div>


        </>
    )
}

