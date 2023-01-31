import React from 'react'
import Annocement from '../components/annocement'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Navber from '../components/navber'
import { TiTick } from "react-icons/ti"
import axios from "axios"
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const MyOrders = () => {
    const { id } = useParams()
    const user = useSelector((state) => state.user.user)
    const [order, setOrder] = useState([])
    useEffect(() => {
        const fetchingOrders = async () => {
            const res = await axios.get(`https://fashionstorebackend.onrender.com/api/order/orders?userid=${user._id}`, {
                currentUserId: id
            })
            setOrder(res.data)
        }
        fetchingOrders()
    }, [user._id, id])


    return (
        <div>
            <Annocement />
            <Navber />
            <>
                <img className='img' src="https://img.freepik.com/free-vector/fluid-pastel-background_53876-93216.jpg?w=1060&t=st=1671781697~exp=1671782297~hmac=30c025ee4e72a6ce79615379203857f66eae27df0d0cb550ee74f85b15017e75" alt="" />
                <div className="bg-transparent lg:my-3  rounded-xl shadow-md lg:w-4/5 m-auto h-[89vh] overflow-scroll" style={{ minHeight: "100vh" }}>
                    <h1 className='text-3xl text-center py-4 font-semibold'>My Orders</h1>
                    {order.length === 0 &&
                        <>
                            <div className="flex flex-col justify-center items-center gap-2">
                                <span className='text-2xl font-semibold'>you dont have any order</span>
                                <Link to={"/"}>
                                    <p className='text-blue-500'>Continue Shopping</p>
                                </Link>
                            </div>
                        </>
                    }
                    {order.map((item) => {
                        return (
                            <div className="bg-slate-50 m-5 rounded-lg" key={item._id}>
                                <div className="flex justify-between p-4 shadow-md">
                                    <div className="lg:flex gap-12 ">
                                        <div className="flex items-start flex-col mb-2">
                                            <span className='font-semibold'>Order Number</span>
                                            <span>{item.orderId}</span>
                                        </div>
                                        <div className="flex items-start flex-col mb-2">
                                            <span className='font-semibold'>Placed At</span>
                                            <span>{item.createdAt.slice(0, 10)}</span>
                                        </div>
                                        <div className="flex items-start flex-col mb-2">
                                            <span className='font-semibold'>Total Amount</span>
                                            <span>₹{item.totalAmount}</span>
                                        </div>
                                    </div>
                                    <div className="lg:flex gap-4">
                                        <Link to={`../orders/${item._id}`}>
                                            <button className='border px-4 py-4 border-gray-500 rounded-lg shadow-md hover:bg-purple-200'>View Order</button>
                                        </Link>
                                        <button className='border px-4 py-4 border-gray-500 rounded-lg shadow-lg hover:bg-purple-200'>Track Order</button>
                                    </div>
                                </div>
                                {/* cart products */}
                                <div className="flex p-5 flex-col shadow-md">
                                    {item.products.map((i) => (
                                        <>
                                            <div className="lg:flex p-5 gap-4" key={i._id}>
                                                <div style={{ flex: "1.5" }}>
                                                    <img className='rounded-md object-cover h-40' src={i.postData.image[0].url} alt="" />
                                                </div>
                                                <div className="flex flex-col gap-2" style={{ flex: "6.5" }}>
                                                    <div className="flex justify-between">
                                                        <span className='lg:text-xl font-semibold '>{i.postData.title}</span>
                                                        <span className='text-xl font-semibold '>₹{i.postData.price}</span>
                                                    </div>
                                                    <span className='text-sm font-serif text-gray-700'>{i.postData.desc.slice(0, 350)}</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center p-4">
                                                <div className="lg:flex items-center gap-4">
                                                    <TiTick className='border border-gray-400 px-0.5 text-white bg-green-500 rounded-full text-xl' />
                                                    <span className='text-gray-700 font-serif text-xs lg:text-base '>Product Deliverd by 28th oct</span>
                                                </div>
                                                <div className="lg:flex gap-5">
                                                    <Link to={`../../singleproduct/${i.postData._id}`}>
                                                        <button className='text-purple-600 border text-xs lg:text-base lg:border-none'>View product</button>
                                                    </Link>
                                                    <div className="border-l border-gray-500"></div>
                                                    <button className='text-purple-600 border text-xs lg:text-base lg:border-none'>Buy again</button>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>

                        )
                    })}
                </div>

            </>
            <Banner />
            <Footer />
        </div >
    )
}

export default MyOrders
