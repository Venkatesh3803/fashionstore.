import React, { useEffect, useState } from 'react'
import { BsCartX } from 'react-icons/bs'
import Annocement from '../components/annocement'
import Footer from '../components/footer'
import Navber from '../components/navber'
import { Link } from 'react-router-dom'
import axios from "axios"
import Dashboardleft from '../components/dashboardleft'



const Dashproducts = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        const fetchingProducts = async () => {
            const res = await axios.get("https://fashionstorebackend.onrender.com/api/post/admin")
            setProductData(res.data)
        }
        fetchingProducts()
    }, [])

    return (
        <div className='backgroundgradient'>
            <Annocement />
            <Navber />
            <div className="lg:h-[86vh] relative">
                <div className="dash w-[96%] m-auto  h-[96%] rounded-xl lg:flex reletive">
                    <Dashboardleft />
                    <div className="p-5 overflow-y-scroll " style={{ flex: "4" }}>
                        <h1 className='text-2xl font-bold'>Products</h1>
                        <h2 className='text-gray-600'>Detailed information about the Products</h2>
                        <div className="flex justify-around  ">
                            <div className=' mx-auto my-4 '>
                                <div className="flex items-center justify-between">
                                    <Link to={"../addproduct"}>
                                        <button className='bg-orange-400 text-white px-2 py-1 my-2 rounded-md hover:bg-orange-300 duration-150'>addProduct</button>
                                    </Link>
                                    <div className="border-2 flex items-center gap-3 border-gray-700 rounded-lg px-3 py-1">
                                        <BsCartX className='text-xl' />
                                        <span>Out of Stock</span>
                                    </div>
                                </div>
                                <table className=' border border-gray-400 shadow-md '>
                                    <thead>
                                        <tr className='border border-gray-400'>
                                            <td className='lg:px-4 lg:py-3 px-2 py-1 hidden lg:block title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Id</td>
                                            <td className='lg:px-4 lg:py-3 px-2 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>title</td>
                                            <td className='lg:px-4 lg:py-3 px-2 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>img</td>
                                            <td className='lg:px-4 lg:py-3 px-2 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Qty </td>
                                            <td className='lg:px-4 lg:py-3 px-2 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'> size/color</td>
                                            <td className='lg:px-4 lg:py-3 px-2 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>price</td>
                                            <td className='lg:px-4 lg:py-3 px-2 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Edit</td>
                                            <td className='lg:px-4 lg:py-3 px-2 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'> Delete</td>
                                        </tr>
                                    </thead>
                                    {productData?.map((item) => {
                                        return (
                                            <tbody>
                                                <tr className='border border-gray-400' key={item._id}>
                                                    <td className='lg:px-4 lg:py-3 px-2 py-1'>{item._id.slice(0, 8)}...</td>
                                                    <td className='lg:px-4 lg:py-3 px-2 py-1 font-semibold '>{item.title}</td>
                                                    <td className='w-20 h-20  '><img className=' rounded-2xl object-cover py-2 w-20' src={item.image[0]?.url} width={100} height={100} alt={item.title} /></td>
                                                    <td className='lg:px-4 lg:py-3 px-2 py-1'>{item.quantity}</td>
                                                    <td className='lg:px-4 lg:py-3 px-2 py-1'>{item.size} / {item.color}  </td>
                                                    <td className='lg:px-4 lg:py-3 px-2 py-1 '><button className='px-3 py-1'>{item.price} </button></td>
                                                    <Link to={`../dashproductedit/${item._id}`}>
                                                        <td className='lg:px-4 lg:py-3 px-2 py-1 self-center'><button className='px-2 py-1 bg-green-300 rounded-md text-gray-white hover:bg-green-400 '> edit</button></td>
                                                    </Link>
                                                    <td className='lg:px-4 lg:py-3 px-2 py-1'><button className='px-2 py-1 bg-red-300 rounded-md text-gray-white hover:bg-red-400'> Delete</button></td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}

                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashproducts
