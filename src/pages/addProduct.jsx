import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import Annocement from '../components/annocement'
import Dashboardleft from '../components/dashboardleft'
import Footer from '../components/footer'
import Navber from '../components/navber'
import { createProduct } from "../redux/productSlice"


const AddproductModel = () => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [gender, setGender] = useState("")
    const [image, setImage] = useState([])
    const [desc, setDesc] = useState("")
    const [size, setSize] = useState([])
    const [category, setCategory] = useState("")
    const [color, setColor] = useState("")
    const [fabric, setFabric] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")

    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else if (e.target.name === "gender") {
            setGender(e.target.value)
        } else if (e.target.name === "desc") {
            setDesc(e.target.value)
        } else if (e.target.name === "category") {
            setCategory(e.target.value)
        } else if (e.target.name === "price") {
            setPrice(e.target.value)
        } else if (e.target.name === "fabric") {
            setFabric(e.target.value)
        } else if (e.target.name === "quantity") {
            setQuantity(e.target.value)
        } else if (e.target.name === "color") {
            setColor(e.target.value)
        } 
    }

    const handleSize = (e, index) => {
        const currentSize = size;
        currentSize[index] = e.target.value;
        setSize(currentSize)
    }

    const handleImage = (e) => {
        const files = Array.from(e.target.files)
        files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage((oldPost) => [...oldPost, reader.result]);
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct({ title, desc, image, color, quantity, size, gender, price, fabric, category }))
    }

    return (
        <>
            <div className='backgroundgradient'>
                <Annocement />
                <Navber />
               
                <div className=" ">
                    <div className="dash w-[96%] m-auto mt-4 h-[96%] rounded-xl lg:flex">
                        <Dashboardleft />
                        <form onSubmit={handleSubmit} style={{ flex: 3 }} className=" lg:mx-20 mx-2 flex flex-col gap-4 lg:p-20 p-2  my-5 relative border border-gray-400 shadow-lg rounded-xl flex-1">

                            <h2 className='font-semibold text-2xl '> Add Product</h2>
                            <div className=" flex gap-5">
                                <label className='w-full'>Title :-
                                    <input onChange={handleChange} value={title} name="title" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='title' />
                                </label>
                                <label className='w-full'>Gender:-
                                    <input onChange={handleChange} value={gender} name="gender" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Gender' />
                                </label>
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                                <label className="block text-sm font-medium text-gray-700">Image</label>
                                <input onChange={handleImage} type="file" multiple name="image" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                            </div>

                            <div className=" flex lg:gap-5">
                                <div className="flex flex-col">
                                    <label>category:-</label>
                                    <input onChange={handleChange} value={category} placeholder="category" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="category" id="" />
                                </div>
                                <div className="lg:flex flex-col">
                                    <label>color:-</label>
                                    <input onChange={handleChange} value={color} placeholder="color" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                </div>
                            </div>
                            <div className=" flex lg:gap-5">
                                <div className="flex gap-2">
                                    <label>Sizes:-</label>
                                    <input onChange={(e)=> handleSize(e, 0)} placeholder="S" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="category" id="" />
                                    <input onChange={(e)=> handleSize(e, 1)} placeholder="M" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                    <input onChange={(e)=> handleSize(e, 2)} placeholder="L" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                    <input onChange={(e)=> handleSize(e, 3)} placeholder="XL" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                    <input onChange={(e)=> handleSize(e, 2)} placeholder="XXL" className="mt-1 block w-1/2 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="color" id="" />
                                </div>
                            </div>
                            <label className='w-full'>Desc:-
                                <textarea onChange={handleChange} value={desc} name="desc" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" rows={2} type="text" placeholder='Description' />
                            </label>
                            <div className=" flex gap-5">
                                <label className='w-full'>Price:-
                                    <input onChange={handleChange} value={price} name="price" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Price' />
                                </label>
                                <label className='w-full'>Fabric:-
                                    <input onChange={handleChange} value={fabric} name="fabric" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Fabric' />
                                </label>
                                <label className='w-full'>Quantity:-
                                    <input onChange={handleChange} value={quantity} name="quantity" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Quantity' />
                                </label>
                            </div>
                            <button type='submit' className='px-4 py-1 bg-purple-500 rounded-md cursor-pointer hover:bg-purple-400 text-white transition-all text-lg font-semibold'> Upload</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddproductModel
