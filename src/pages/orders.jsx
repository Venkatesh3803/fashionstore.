import { Link } from "react-router-dom"
import Navber from "../components/navber"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ordersPic from "../images/order.avif"

const Orders = () => {
    const { id } = useParams()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const fetchingOrders = async () => {
            const res = await axios.get(`https://fashionstorebackend.onrender.com/api/order/single/${id}`)
            setOrders(res.data)
        }
        fetchingOrders()
    }, [id])
    return (
        <>
            <Navber />
            <div className="flex w-[90%] lg:mx-12 mx-2 lg:my-10 my-4 max-h-[89vh] overflow-hidden bg-white ">
                <div style={{ flex: "1.5" }} className ="hidden lg:block">
                    <img className='object-cover rounded-lg w-[100%] h-[100%]' src={ordersPic} alt="" />
                </div>
                <div style={{ flex: "2.5" }} className="lg:mx-14 mx-2 lg:mt-10 mt-2 overflow-scroll">
                    <div className="flex flex-col gap-6">
                        <span className=' text-lg text-blue-500'>payment sucessfull</span>
                        <div className="">
                            <h2 className='lg:text-5xl text-3xl font-semibold'>Thanks for ordering</h2>
                            <span className='text-gray-500 text-m '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem architecto <br /> mollitia laudantium enim fuga.</span>
                        </div>
                        <div className="">
                            <h2 className='text-xl font-semibold'>Tracking Id</h2>
                            <span className='text-blue-600 text-sm'>12354645465</span>
                        </div>
                        <div className="border-t border-gray-300">
                            {orders.products?.map((p) => {
                                return (
                                    <div className="flex justify-between items-center border-b border-gray-200">
                                        <div className=" flex gap-4 items-center m-5 cursor-pointer">
                                            <img className='object-cover rounded-lg w-28 h-24' src={p.postData.image[0].url} alt="" />
                                            <div className="">
                                                <p className='font-semibold'>{p.postData.title}</p>
                                                <p>{p.postData.color}</p>

                                            </div>
                                        </div>
                                        <div className=" flex flex-col">
                                            <button className="text-white bg-red-600 px-5 py-1 rounded-md hover:bg-red-500">Cancel</button>
                                            <span className='m-5 text-xl'>₹{p.postData.price}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="">
                            <div className="flex items-center justify-between m-5">
                                <ul><li>subtotal</li></ul>
                                <ul><li className='font-semibold'>₹{orders.totalAmount}</li></ul>
                            </div>
                            <div className="flex items-center justify-between m-5">
                                <ul><li>Discount</li></ul>
                                <ul><li className='font-semibold'>5%</li></ul>
                            </div>
                            <div className="flex items-center justify-between m-5">
                                <ul><li>Shipping</li></ul>
                                <ul><li className='font-semibold'>Free</li></ul>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-300 m-5">
                                <ul><li>Total Amount</li></ul>
                                <ul><li className='font-semibold'>₹{orders.totalAmount}</li></ul>
                            </div>
                        </div>

                        <div className="">
                            <span className="text-lg font-semibold">Address</span>
                            <div className="">
                               <p>Name :- {orders.address?.fullname}</p> 
                               <p>email :- {orders.address?.email}</p> 
                               <p>Address :- {orders.address?.deliveryAddress}</p> 
                               <p>State :- {orders.address?.state}</p> 
                               <p>Phone :- {orders.address?.phone}</p> 
                            </div>

                        </div>
                        <Link to="/">
                            <span className='text-blue-600 border-b border-blue-600'>continue Shopping...</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders

