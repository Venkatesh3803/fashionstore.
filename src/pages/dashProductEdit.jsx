import React from 'react'
import { useEffect, useState } from 'react'
import Annocement from '../components/annocement'
import Dashboardleft from '../components/dashboardleft'
import Footer from '../components/footer'
import Navber from '../components/navber'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DashProductEdit = () => {
    const { id } = useParams()
    const [post, setPost] = useState('')
    useEffect(() => {
        const fetchingPost = async () => {
            const res = await axios.get(`http://localhost:8000/api/post/single/${id}`)
            setPost(res.data)
        }
        fetchingPost()
    }, [id])

    // const handleChange = (e) => {

    // }

    return (
        <div>
            <Annocement />
            <Navber />
            <div className="lg:h-[86vh] relative">
                <img className='image' src="https://img.freepik.com/free-vector/peach-bubble-patterned-background_53876-90684.jpg?t=st=1671771486~exp=1671772086~hmac=5df3b34dae78dceee7bb95e81a884e6722c8102564772d01a981d3119a23ce79" alt="" />
                <div className="dash w-[96%] m-auto  h-[96%] rounded-xl lg:flex reletive">
                    <Dashboardleft />
                    <div className="p-5 overflow-y-scroll " style={{ flex: "4" }}>
                        <form style={{ flex: 3 }} className=" lg:mx-20 mx-2 flex flex-col gap-4 lg:p-20 p-2  my-5 relative border border-gray-400 shadow-lg rounded-xl flex-1">
                            <h2 className='font-semibold text-2xl '> Edit Product</h2>
                            <div className=" flex gap-5">
                                <label className='w-full'>Title :-
                                    <input name="title" value={post.title} onChange={(e) =>(e.target.value)} className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='title' />
                                </label>
                                <label className='w-full'>Gender:-
                                    <input name="gender" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Gender' />
                                </label>
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label className="block text-sm font-medium text-gray-700">Image</label>
                                <input type="file" multiple name="image" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>

                            <div className=" flex lg:gap-5">
                                <div className="flex flex-col">
                                    <label>category:-</label>
                                    <input placeholder="category" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="category" id="" />
                                </div>
                                <div className="lg:flex flex-col">
                                    <label>color:-</label>
                                    <input placeholder="color" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                </div>
                            </div>
                            <div className=" flex lg:gap-5">
                                <div className="flex gap-2">
                                    <label>Sizes:-</label>
                                    <input placeholder="S" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="category" id="" />
                                    <input placeholder="M" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                    <input placeholder="L" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                    <input placeholder="XL" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                    <input placeholder="XXL" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                </div>
                            </div>
                            <label className='w-full'>Desc:-
                                <textarea name="desc" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" rows={2} type="text" placeholder='Description' />
                            </label>
                            <div className=" flex gap-5">
                                <label className='w-full'>Price:-
                                    <input name="price" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Price' />
                                </label>
                                <label className='w-full'>Fabric:-
                                    <input name="fabric" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Fabric' />
                                </label>
                                <label className='w-full'>Quantity:-
                                    <input name="quantity" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Quantity' />
                                </label>
                            </div>
                            <button type='submit' className='px-4 py-1 bg-purple-500 rounded-md cursor-pointer hover:bg-purple-400 text-white transition-all text-lg font-semibold'> Upload</button>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DashProductEdit
