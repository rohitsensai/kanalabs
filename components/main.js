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

                        <div className='px-2 rounded text-white py-2' style={{ border: "0.01px solid #ffffff", backgroundColor: "#17181A" }}>
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
                    <div className='rounded px-4 py-2' style={{ border: "1px solid #919191", backgroundColor: "#17181A" }}>

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

                        <div className=' rounded px-4 py-2 d-flex text-white align-items-start' style={{ border: "1px solid #919191", backgroundColor: "#111213" }}>
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


                            <div className=' px-4 py-2 mx-2 mt-2 rounded ' style={{ width: "30%", border: "1px solid #919191", backgroundColor: "#17181A" }}>
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
                            <LuArrowDownUp size={30} className='mx-auto rounded text-white' style={{ marginTop: "-20px", border: "1px solid #919191", backgroundColor: "#111213" }} />
                        </div>


                        <div className=' rounded px-4 py-2 d-flex text-white align-items-start' style={{ marginTop: "-15px", border: "1px solid #919191", backgroundColor: "#111213" }}>
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




                            <div className=' px-4 py-2 mx-2 mt-2 rounded ' style={{ width: "30%", border: "1px solid #919191", backgroundColor: "#17181A" }}>
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

                    <div className='mt-4 d-flex align-items-center px-2 py-2 rounded  text-white' style={{ border: "1px solid #919191", backgroundColor: "#17181A" }}>
                        <div className='me-auto'> Additional Details </div>  <FaChevronDown />
                    </div>

                </div>
            </div>



            <div className='d-block d-sm-none ' style={{ backgroundColor: "#0C0C0D", height: "100vh" }}>
                <div className="w-full mx-auto   rounded" style={{ height: "450px" }}>

                    <div className='d-flex text-white'>
                        <div className=' text-center rounded  text-white flex-grow-1 py-3'>
                            <TbArrowsSplit2 className='mx-1 mb-1' />
                            Same-Chain
                        </div>
                        <div className='me-auto text-center rounded flex-grow-1 py-3' style={{ backgroundColor: "#111213" }}>
                            <TiArrowShuffle className='mx-1 mb-1' />
                            Cross-Chain
                        </div>

                    </div>



                    <div className='bg-black px-2'>

                        <div className='text-white d-flex py-4 px-2'>
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

                        <div className='d-flex text-white px-2 py-2'>

                            <img src='https://s3-alpha-sig.figma.com/img/e909/bd74/aa0a9be6883d6cde025f2ba30e1038a9?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jYE3YM3TrSeDo4Gz1EKQv6W1z6RBjAHx27nqDqE-AZb3dZ5jIL~PcTKWIrBUY2CjzCwY906xk6YozUnRZjZwVEjup8ZfVZCC9bdvubr91N74SZdwgzecePPKdfRPyZ4dBJc-nozL22WWQLrt6IaCd-I-CANaTBCz3uxcm8fwKCJmTrl8Sf18E~ST-kGN9hTFjfvA1PGlEZPI7d2o7azS5aZoE2-HTlBsolb7qjkD7kP9cLG1IsS5kEn0e6bbx0q-YMAzqRYa81ZZd63pBITUMGgmMBzhcWl0kYZPNzgP5Ig5rS1pYHRsWcVKzgoHgDgE6E-zE8CeGj~iwjDfnXg6pQ__' width={35} className='mx-2' />
                            <img src='https://s3-alpha-sig.figma.com/img/8a6c/ae54/b45e3da7af6e8af4a4c440376b72b965?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EI~uMznzXE8Nks-AXTA~W5l6gLVpiqg0xQZ8iBHg0iQIuf4xLgclW~qTv7U-St6FjbgZibZ93IyapDdSjczJ3PKSdn499tQjvbKAMFfE86gBpYBj~1BEDLu7dH2OeJZUfKA0Q4eyRZVicGB2zSwtmEntP9BESoujdXwYP1gwHRyHxhV3I9FUHS6MqMF2ss76bBwoSdZrrS1yInAH2XeMdbHRpQp440ULrw6u6~vddgoHky8P6cHZoWkGd7nwMAqJqkt25pJC4aHUWmmvSr-S~LR4nKzqPf2JFDzZoW16nWko~-Ja0S5NJDQnHtn2t3U-7R3Dbu~1~TVESbZd~05rlA__' width={35} className='mx-2' />
                            <img src='https://s3-alpha-sig.figma.com/img/1232/5c5c/aed6729c431959cbcbfe061a43ae4ebf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=co-gKUdImDw8aB7D9TzcVi8Mb8ZTVhzmgazsNDCDfDFFPmuSIY1MDUyY38Zzavxq9aMEiRETqEFHqVQq2X4HpyZ8xLSwvzjGuKau67ZgM6lD2DKXSlrisVBHgH5EL4G84tvBegR00Fo-LJMlzmr1HMNCufTQ6-4ETFQkv-CefXMWHfP9eK4FssxlVfKAHvhkjQAxlBm5F76EWoyUvSC3ckfOdLMoWEV5BVJdqb2WxbO1eLfuwwi0xgVfXPgCMnLp8-TaqoCN81PDHYzTSRmu2OL4HxzPG2qSXO~XtYlaP~GflNekJ4o0s11KifPQCwdax40D6OkhvZYTOEdntsCQvA__' width={35} className='mx-2' />
                            <img src='https://s3-alpha-sig.figma.com/img/3ec3/9070/cfea798a13336af431617b531e74fc20?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hFLIcOoH7IDhAsNE5~IKa5fEZUKP~Qu-JnNrDXMvyXesPhIUSCE1GtOZJoX7l4lI9xt7d2Sr1LEoiZytdi7TQsmkuxw6CLp0xkqLAHKCnsFaed5k3k3R7tIZg6On3TOu5GX-n-CeoxoUhFewrWQSiTvhmV7NYM6ePRAPpKc3U8sGpanU-qlu5lNpOOweIhS0FVKk1V06fO0l8B85XXl8cYxbo~0XiyjljM0KHMOqAuM-5fRqhly27RstBUb0XTBPmFcJDd~sAS-ElwjkoJaeJaZSo6MvsstCPPb3YNZuzLsOVlganUbmV9t57h8ThVLuXODtQTUxxrKSpDDTM6DgbQ__' width={35} className='me-auto mx-2' />

                            <div className='rounded shadow py-1 px-1' style={{ color: "#27e3c4", border: "1px solid #27e3c4" }}>Other Chains <FaChevronDown /> </div>
                        </div>


                        <div className='  mx-2 my-2 rounded d-flex flex-column justify-content-center align-items-center   text-white' style={{ border: "1px solid #919191", backgroundColor: "#111213" }}>

                            <div className=' p-2 w-100 '>
                                <div className='d-flex mx-3 py-4 my-2 px-2 rounded' style={{ border: "1px solid #919191", backgroundColor: "#17181A" }}>
                                    <div style={{ backgroundColor: '#17181A' }}><FaRegCircle style={{ backgroundColor: '#17181A' }} /></div>
                                    <div style={{ backgroundColor: "#17181A" }}>
                                        <span className='mx-1' style={{ fontSize: "18px", fontFamily: "Manrope", fontWeight: "bold", backgroundColor: "#17181A" }}>Token</span>

                                        <span className='mb-2' style={{ backgroundColor: '#17181A' }}>onChain</span>

                                    </div>
                                </div>


                            </div>

                            <div className='w-100 px-4' style={{ color: "#A5A5A6" }} >
                                <div className='d-flex'>
                                    <div className='me-auto' style={{ color: "#A5A5A6" }}>  Pay from  </div>
                                    <div style={{ color: "#27e3c4" }}> Connect Wallet </div>
                                </div>
                                <div className='border-bottom my-4'>
                                    <input type='number' placeholder='0.00' style={{ backgroundColor: "", border: "none", color: "#A5A5A6" }} />

                                </div>
                                <div className='d-flex my-4'>
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
                            <LuArrowDownUp size={50} className='mx-auto rounded bg-dark  text-white' style={{ marginTop: "-40px", border: "1px solid #919191" }} />
                        </div>


                        <div className='  mx-2  rounded d-flex flex-column justify-content-center align-items-center   text-white' style={{ border: "1px solid #919191", backgroundColor: "#111213", marginTop: "-20px" }}>

                            <div className=' p-2 w-100 '>
                                <div className='d-flex mx-3 py-4 my-2 px-2 rounded' style={{ border: "1px solid #919191", backgroundColor: "#17181A" }}>
                                    <div style={{ backgroundColor: '#17181A' }}><FaRegCircle style={{ backgroundColor: '#17181A' }} /></div>
                                    <div style={{ backgroundColor: "#17181A" }}>
                                        <span className='mx-1' style={{ fontSize: "18px", fontFamily: "Manrope", fontWeight: "bold", backgroundColor: "#17181A" }}>Token</span>

                                        <span className='mb-2' style={{ backgroundColor: '#17181A' }}>onChain</span>

                                    </div>
                                </div>


                            </div>
                            <div className='w-100 px-4' style={{ color: "#A5A5A6" }}>
                                <div className='d-flex'>
                                    <div className='me-auto' style={{ color: "#A5A5A6" }}>  Receive to  </div>
                                    <div style={{ color: "#27e3c4" }}> Connect Wallet </div>
                                </div>
                                <div className='border-bottom my-4'>
                                    <input type='number' placeholder='0.00' style={{ backgroundColor: "", border: "none", color: "#A5A5A6" }} />
                                </div>
                                <div className='d-flex my-4'>
                                    <div className='me-auto'>
                                        USD 0
                                    </div>
                                    <div>
                                        Balance -
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='text-white d-flex justify-content-center my-3' style={{ backgroundColor: "#0C0C0D" }}>
                            More Routes <FaChevronDown className='mt-1 mx-2' />
                        </div>

                        <div className='d-flex mx-4 my-4 py-1 rounded shadow bg-dark justify-content-center cursor-pointer ' style={{ color: "#2ED3B7", border: "1px solid #2ED3B7", borderBottom: "4px solid #2ED3B7" }}>
                            Swap now
                        </div>

                        <div className='mx-4 px-2 my-4 py-1 shadow rounded d-flex justify-content-center cursor-pointer text-white ' style={{ border: "1px solid #919191",backgroundColor:"#17181A" }}>
                            <div className='me-auto' style={{backgroundColor:"#17181A"}}>
                                Additional details
                            </div>
                            <div style={{backgroundColor:"#17181A"}}>
                                <FaChevronDown />
                            </div>
                        </div>



                    </div>


                </div>
            </div>


        </>
    )
}

