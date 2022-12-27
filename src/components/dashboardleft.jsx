import React from 'react'
import { MdDashboardCustomize, MdOutlineProductionQuantityLimits } from "react-icons/md"
import { BsCart2, BsFillPersonFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Dashboardleft = () => {
    return (
        <div className="p-5" style={{ flex: "0.8" }}>
            <div className="flex gap-2 items-center border border-gray-600 rounded-md px-2 py-2 shadow-md w-fit">
                <img className='w-10 h-10 rounded-full cursor-pointer object-cover' src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="flex flex-col ">
                    <span className='font-semibold'>Chanda Venkatesh</span>
                    <span>Online</span>
                </div>
            </div>
            <div className="md:py-14 py-2 flex gap-3 flex-wrap lg:block">
                <Link to={"../dashboard"}>
                    <div className="flex px-2 gap-2 items-center cursor-pointer py-5 border shadow-xl">
                        <MdDashboardCustomize className='text-xl' />
                        <span className=''>Over view</span>
                    </div>
                </Link>
                <Link to={"../dashorders"}>
                    <div className="flex px-2 justify-between  cursor-pointer py-5 border shadow-xl">
                        <div className="flex gap-3 items-center">
                            <BsCart2 className='text-xl' />
                            <span className=''>Orders</span>
                        </div>
                        <span className='w-5 h-5 self-end text-xs flex justify-center items-center rounded-full bg-red-500 text-white'>2</span>
                    </div>
                </Link>
                <Link to={"../dashproducts"}>
                    <div className="flex px-2 items-center cursor-pointer gap-3 py-5 border shadow-lg">
                        <MdOutlineProductionQuantityLimits className='text-xl' />
                        <span className=''>Products</span>
                    </div>
                </Link>
                <Link to={"../dashusers"}>
                    <div className="flex px-2 items-center cursor-pointer gap-3 py-5 border shadow-lg">
                        <BsFillPersonFill className='text-xl' />
                        <span className=''>Customers</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Dashboardleft
