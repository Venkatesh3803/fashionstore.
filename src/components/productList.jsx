import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const ProductList = ({ cat, gender }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = cat ? await axios.get(`https://shopping-backend-cmc7.onrender.com/api/post?category=${cat}`) :
                gender ? await axios.get(`https://shopping-backend-cmc7.onrender.com/api/post?gender=${gender}`)
                    : await axios.get(`https://shopping-backend-cmc7.onrender.com/api/post`)
            setProducts(res.data)
        }
        fetchData()
    }, [cat, gender])



    return (
        <div className="">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 z-0">
                    {products?.slice(0, 8).map((item) => {
                        return (
                            <div key={item._id} className="group relative shadow-md p-2">
                                <div className="group relative overflow-hidden">
                                    <div className="min-h-80 flex aspect-w-1 transition-all aspect-h-1 w-full rounded-md bg-gray-200 group-hover:-translate-x-56 lg:aspect-none lg:h-80">
                                        <img
                                            src={item.image[0].url}
                                            alt={item.image[0].alt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                        <img
                                            src={item.image[1].url}
                                            alt={item.image[1].alt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className='flex flex-col gap-2'>
                                            <h3 className="text-base font-semibold text-gray-700">
                                                <Link to={`../singleproduct/${item._id}`}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {item.title}
                                                </Link>
                                            </h3>
                                            <div className='flex gap-2'>
                                                <button className="mt-1 w-7 h-7  border-2 border-gray-500  rounded-full " style={{ backgroundColor: `${item.color}` }}></button>
                                            </div>
                                            <div className='flex gap-2'>{item.size.map(s => {
                                                return (
                                                    <button className="mt-1 px-2 py-1 font-semibold border border-gray-500 text-gray-500">{s}</button>
                                                )
                                            })}
                                            </div>
                                        </div>
                                        <p className="text-lg font-medium text-gray-900">₹{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}



export default ProductList
