import React, { useEffect, useState } from 'react'
import Annocement from '../components/annocement'
import Navber from '../components/navber'
import Footer from "../components/footer"
import "../styles/dashboard.css"
import { BsArrowDownCircle, BsArrowUpCircle, BsClipboardData, } from "react-icons/bs"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { Link } from 'react-router-dom'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BiUserCircle } from 'react-icons/bi'
import Dashboardleft from '../components/dashboardleft'
import Chart from '../components/chart'
import axios from 'axios'

const Dashboard = () => {
    const [productData, setProductData] = useState([])
    useEffect(() => {
        const fetchingProducts = async () => {
            const res = await axios.get("https://shopping-backend-cmc7.onrender.com/api/post/admin")
            setProductData(res.data)
        }
        fetchingProducts()
    }, [])

    return (
        <div>
            <Annocement />
            <Navber />
            <div className="flex lg:h-[86vh] relative">
                <img className='image' src="https://img.freepik.com/free-vector/peach-bubble-patterned-background_53876-90684.jpg?t=st=1671771486~exp=1671772086~hmac=5df3b34dae78dceee7bb95e81a884e6722c8102564772d01a981d3119a23ce79" alt="" />
                <div className="dash w-[96%] m-auto mt-4 h-[96%] rounded-xl lg:flex">
                    <Dashboardleft />
                    <div className="lg:p-5 px-2 overflow-y-scroll" style={{ flex: "4" }}>
                        <h1 className='text-2xl font-bold'>Dashboard</h1>
                        <h2 className='text-gray-600'>Detailed information about the store</h2>
                        <div className="w-[90%] mx-auto flex gap-3 flex-wrap">
                            <Link to={"/dashproducts"}>
                                <div className="border-2 border-gray-300 lg:px-4 lg:py-2 px-2 py-1 bg-pink-300 rounded-lg sm:w-60 shadow-md cursor-pointer mx-auto">
                                    <div className=" flex gap-2 flex-col justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className='px-4 py-2 rounded-xl lg:text-2xl bg-gray-400 text-white'>< MdOutlineProductionQuantityLimits /></span>
                                            <p className='lg:text-xl font-semibold'>Total Products</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className='md:text-xl text-red-500'><BsArrowDownCircle /></span>
                                            <span className='text-sm self-end rounded-full lg:px-3 lg:py-2 px-2 py-1 shadow-sm bg-cyan-600 text-white'>{productData.length}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="border-2 border-gray-300 lg:px-4 lg:py-2 px-2 py-1 bg-purple-300 rounded-lg sm:w-60 shadow-md cursor-pointer mx-auto">
                                <div className=" flex gap-2 flex-col justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className='px-4 py-2 rounded-xl lg:text-2xl bg-gray-400 text-white'><GiTakeMyMoney /></span>
                                        <p className='lg:text-xl font-semibold'>Montly Earning</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className='text-xl text-red-500'><BsArrowDownCircle /></span>
                                        <span className='text-sm self-end rounded-full lg:px-3 lg:py-2 px-2 py-1  shadow-sm bg-cyan-600 text-white'>12.5L</span>
                                    </div>
                                </div>
                            </div>
                            <Link to={"/dashorders"}>
                                <div className="border-2 border-gray-300 bg-yellow-200 lg:px-4 lg:py-2 px-2 py-1rounded-lg sm:w-60 shadow-md cursor-pointer mx-auto">
                                    <div className=" flex gap-2 flex-col justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className='px-4 py-2 rounded-xl lg:text-2xl bg-gray-400 text-white'><BsClipboardData /></span>
                                            <p className='lg:text-xl font-semibold'>No Of Orders</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className='lg:text-xl text-green-500'><BsArrowUpCircle /></span>
                                            <span className='text-sm self-end rounded-full lg:px-3 lg:py-2 px-2 py-1 shadow-sm bg-cyan-600 text-white'>12</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/dashusers"}>
                                <div className="border-2 border-gray-300 lg:px-4 lg:py-2 px-2 py-1 bg-rose-200 rounded-lg sm:w-60 shadow-md cursor-pointer mx-auto">
                                    <div className=" flex gap-2 flex-col justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className='px-4 py-2 rounded-xl lg:text-2xl bg-gray-400 text-white'><BiUserCircle /></span>
                                            <p className='lg:text-xl font-semibold'>No Of Users</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className='lg:text-xl text-green-500'><BsArrowUpCircle /></span>
                                            <span className='text-sm self-end rounded-full lg:px-3 lg:py-2 px-2 py-1  shadow-sm bg-cyan-600 text-white'>12</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <Chart />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
