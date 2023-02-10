
import React, { useEffect, useState } from 'react'
import Annocement from '../components/annocement'
import Dashboardleft from '../components/dashboardleft'
import Footer from '../components/footer'
import Navber from '../components/navber'
import { useSelector } from 'react-redux'
import axios from "axios"
import {toast} from "react-toastify"

const Dashorders = () => {
    const user = useSelector((state) => state.user.user)
    const [order, setOrder] = useState([])
    useEffect(() => {
        const fetchingOrders = async () => {
            const res = await axios.get(`https://fashionstorebackend.onrender.com/api/order/orders`)
            setOrder(res.data)
        }
        fetchingOrders()
    }, [user._id])

    const handleCancle = async (id) => {
        alert("You want to Delete Order",)
        try {
            const response = await axios.delete(`https://fashionstorebackend.onrender.com/api/order/${id}`, {
                currentUserIsAdmin: user._id
            })
            await response.data
            toast.success(response.data)
        } catch (error) {
            console.log(error)
        }

    }
    const handleUpdate = async (id) => {
        alert("You want to Delete Order",)
        try {
            const response = await axios.put(`https://fashionstorebackend.onrender.com/api/order/${id}`, {
                currentUserIsAdmin: user._id
            })
            await response.data
            toast.success(response.data)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='backgroundgradient'>
            <Annocement />
            <Navber />
            <div className="lg:h-[86vh] relative">

                <div className="dash w-[96%] m-auto  h-[96%] rounded-xl lg:flex ">
                    <Dashboardleft />
                    <div className="lg:p-5 p-2 overflow-scroll" style={{ flex: "4" }}>
                        <h1 className='text-2xl font-bold'>Orders</h1>
                        <h2 className='text-gray-600'>Detailed information about the orders</h2>
                        <div className="flex justify-around mt-5 overflow-y-scroll">
                            <div className='mx-auto my-4'>
                                <div className="bg-transparent my-3 rounded-xl shadow-md ld:w-4/5 m-auto ">
                                    {order.map((item) => {
                                        return (
                                            <div className="bg-slate-50 m-5 rounded-lg" key={item._id}>
                                                <div className="flex justify-between p-4 shadow-md">
                                                    <div className="md:flex gap-12">
                                                        <div className="flex items-start flex-col mb-2">
                                                            <span className='font-semibold'>Order Number</span>
                                                            <span>{item.orderId}</span>
                                                        </div>
                                                        <div className="flex items-start flex-col  mb-2">
                                                            <span className='font-semibold'>Placed At</span>
                                                            <span>{item.createdAt.slice(0, 10)}</span>
                                                        </div>
                                                        <div className="flex items-start flex-col">
                                                            <span className='font-semibold'>Total Amount</span>
                                                            <span>₹{item.totalAmount}</span>
                                                        </div>
                                                    </div>
                                                    <div className="md:flex gap-4">
                                                        <button onClick={() => handleUpdate(item._id)} className='border px-4 border-gray-500 rounded-lg shadow-md hover:bg-purple-200'>Accept Order</button>
                                                        <button onClick={() => handleCancle(item.id)} className='border px-4 border-gray-500 rounded-lg shadow-lg hover:bg-purple-200'>Delete Order</button>
                                                    </div>
                                                </div>
                                                {/* cart products */}
                                                <div className="flex p-5 flex-col shadow-md">
                                                    {item.products.map((i) => (
                                                        <>
                                                            <div className="lg:flex lg:p-5 gap-4" key={i._id}>
                                                                <div style={{ flex: "1.5" }}>
                                                                    <img className='rounded-md object-cover h-40' src={i.postData.image[0].url} alt="" />

                                                                </div>
                                                                <div className="flex flex-col gap-2" style={{ flex: "6.5" }}>
                                                                    <div className="flex justify-between">
                                                                        <span className='text-xl font-semibold '>{i.postData.title}</span>
                                                                        <span className='text-xl font-semibold '>₹{i.postData.price}</span>
                                                                    </div>
                                                                    <span className='text-sm font-serif text-gray-700'>{i.postData.desc.slice(0, 350)}</span>
                                                                </div>
                                                            </div>

                                                            <div className="flex justify-between items-center p-4">
                                                                <div className="flex gap-5">
                                                                    <button className='text-purple-600'>View product</button>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                            </div>

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default Dashorders
