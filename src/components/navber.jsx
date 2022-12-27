import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "../redux/authSlice"
import blank from "../images/blankprofile.png"
import { removeProduct, clearCart } from '../redux/cartSlice';



const Navber = () => {
    const user = useSelector((state) => state.user.user)
    const cartData = useSelector((state) => state.cart.cartItems)
    const cartTotal = useSelector((state) => state.cart.cartItemsTotal)
    const [cart, setCart] = useState("")
    const [input, setInput] = useState("")
    const [responsive, setResponsive] = useState("")
    const [profile, setProfile] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='bg-rose-200 p-5 flex justify-between h-20 sticky top-0 left-0 z-50 items-center'>
            <AiOutlineMenu onClick={() => setResponsive(!responsive)} className='text-5xl lg:hidden ' />
            {responsive &&
                <div className="bg-gray-100 h-[100vh] absolute top-20 left-0 lg:hidden md:w-1/3 w-1/2 px-4">
                    <Link to={"/"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Home</li>
                        </ul>
                    </Link>
                    <Link to={"../product/men"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Mens</li>
                        </ul>
                    </Link>
                    <Link to={"../product/women"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Womens</li>
                        </ul>
                    </Link>
                    <Link to={"../products/accessories"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >Accessories</li>
                        </ul>
                    </Link>
                    <Link to={"../aboutus"}>
                        <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                            <li >About Us</li>
                        </ul>
                    </Link>
                </div>

            }
            <div className="lg:flex gap-1 items-center w-[100%] hidden">
                <Link to={"/"}>
                    <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                        <li >Home</li>
                    </ul>
                </Link>
                <Link to={"../product/men"}>
                    <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                        <li >Mens</li>
                    </ul>
                </Link>
                <Link to={"../product/women"}>
                    <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                        <li >Womens</li>
                    </ul>
                </Link>
                <Link to={"../products/accessories"}>
                <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                    <li >Accessories</li>
                </ul>
                </Link>
                <Link to={"../aboutus"}>
                    <ul className='px-2 py-1 cursor-pointer text-gray-700 font-medium text-lg hover:text-gray-500 transition-all'>
                        <li >About Us</li>
                    </ul>
                </Link>
            </div>
            <div className="w-[100%]  flex justify-center">
                <Link to={"/"}>
                    <span className='font-mono text-xl cursor-pointer text-fuchsia-800 md:text-3xl'>Fashion Store</span>
                </Link>
            </div>
            <div className="w-[100%] flex items-center justify-end gap-4 ">
                <div className="flex items-center rounded-lg border border-gray-400 px-2 py-1">
                    <input className='bg-transparent focus:outline-none hidden md:flex' type="text" placeholder='Search...' />
                    <BiSearchAlt2 className='text-xl cursor-pointer placeholder:text-sm hidden ' />
                    <BiSearchAlt2 onClick={() => setInput(!input)} className='text-xl cursor-pointer placeholder:text-sm' />
                    {input &&
                        <input className=' absolute top-20 right-3 focus:outline-none border border-gray-800 px-2 py-1 rounded-md md:hidden' type="text" placeholder='Search...' />
                    }
                </div>
                <div className="flex relative">
                    <span className='w-5 h-5 bg-red-500 text-xs flex justify-center items-center text-white absolute -top-3 -right-2 rounded-full'>{cartData.length}</span>
                    <GiShoppingCart onClick={() => setCart(!cart)} className='text-2xl cursor-pointer' />
                </div>
                {user ?
                    <img onMouseEnter={() => setProfile(!profile)} className='w-8 h-8 cursor-pointer border border-black rounded-full object-cover' src={blank} alt='' />
                    :
                    <Link to={"../login"}>
                        <span className='cursor-pointer'>Login</span>
                    </Link>
                }
            </div>
            {profile &&
                <div onMouseLeave={() => setProfile(false)} className="w-40 bg-purple-500 rounded-md absolute top-14 right-10 p-3">
                    <Link to={"../profile"}>
                        <ul className='px-3 py-2 cursor-pointer rounded-md text-white font-semibold text-lg hover:bg-purple-400'><li>Profile</li></ul>
                    </Link>
                    {user.isAdmin &&
                        <Link to={"../dashboard"}>
                            <ul className='px-3 py-2 cursor-pointer rounded-md text-white font-semibold text-lg hover:bg-purple-400'><li>Dashboard</li></ul>
                        </Link>
                    }
                    <Link to={`../myorders/${user._id}`}>
                        <ul className='px-3 py-2 cursor-pointer rounded-md text-white font-semibold text-lg hover:bg-purple-400'><li>My Orders</li></ul>
                    </Link>
                    <ul onClick={() => dispatch(logOut())} className='px-3 py-2 cursor-pointer rounded-md text-white font-semibold text-lg hover:bg-purple-400'><li>Log Out</li></ul>
                </div>
            }
            {cart &&
                <>
                    <div className="bg-purple-100 w-4/5 overflow-y-scroll items-end fixed top-20 right-3 rounded-xl p-5 max-h-screen z-20 md:w-1/4 " style={{ zIndex: "2" }}>
                        <span onClick={() => setCart(false)} className='absolute top-2 w-8 h-8 bg-black text-white rounded-full flex justify-center items-center text-xl font-semibold cursor-pointer right-4 hover:bg-gray-700 transition-all'>x</span>
                        {cartData && cartData.length === 0 && <span className='text-lg text-gray-600 font-semibold'>OUR CART IS EMPTY</span>}
                        {cartData && cartData.map((c) => {
                            return (
                                <div className="flex justify-between  mt-4" key={c._id}>
                                    <div className="flex gap-3 items-center ">
                                        <Link to={`../singleproduct/${c._id}`}>
                                            <img className='w-28 h-28 rounded-md object-cover ' src={c.postData.image ? c.postData.image[0].url : ""} alt="" />
                                        </Link>
                                        <div className=" flex flex-col gap-1">
                                            <span className='font-semibold text-sm'>{c.postData.title}</span>
                                            <span className=''>size :- {c.postData.size[c.size] ? c.postData.size[c.size] : c.size}</span>
                                            <div className="flex items-center gap-2">
                                                <span>Qty:- {c.quantity}</span>
                                            </div>
                                            <span>color :- {c.postData.color}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="flex flex-col">
                                            <span className='text-lg font font-semibold'>price</span>
                                            <span className='text'>₹{c.postData.price * c.quantity}</span>
                                        </div>
                                        <button onClick={() => dispatch(removeProduct(c))} className='text-red-500 font-serif text-sm cursor-pointer'>REMOVE</button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="flex flex-col gap-2 border-t border-gray-500 mt-10">
                            <button onClick={() => dispatch(clearCart())} className='bg-red-500 mt-2  px-4 py-1 rounded-md text-white cursor-pointer self-end'>Clear Cart </button>
                            <div className="flex justify-between">
                                <ul className=''><li>Order Value</li></ul>
                                <ul><li>₹{cartTotal}</li></ul>
                            </div>
                            <div className="flex justify-between">
                                <ul className=''><li>Delivery</li></ul>
                                <ul><li>Free</li></ul>
                            </div>
                            <div className="flex justify-between">
                                <ul className=''><li>Discount</li></ul>
                                <ul><li>10%</li></ul>
                            </div>
                            <div className="flex justify-between mt-2">
                                <ul className='font-semibold'><li>TOTAL</li></ul>
                                <ul className='font-semibold'><li>₹{cartTotal}</li></ul>
                            </div>

                            <Link to={"../checkout"}>
                                <button className='bg-orange-400 w-[100%] cursor-pointer py-2 rounded-md text-white hover:bg-orange-600 transition-all'>CheckOut</button>
                            </Link>
                            <Link to={"/"}>
                                <button className='border border-gray-500 hover:bg-purple-200 w-[100%] cursor-pointer py-2 rounded-md text-gray-700 transition-all'>Continue Shopping</button>
                            </Link>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}

export default Navber
