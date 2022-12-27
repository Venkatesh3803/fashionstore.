import React, { useState } from 'react'
import { AiOutlineStar, AiFillStar, AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'

const ProductDesign = ({ productData }) => {
    const [selected, setSelected] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    let postData = productData;
    const [size, setSize] = useState(postData.size && postData.size[0])
    const handleQty = (qty) => {
        if (qty === "des") {
            if (quantity === 1) {
            } else {
                setQuantity((prev)=> prev - 1)
            }
        } else if (qty === "inc") {
            setQuantity((prev) => prev + 1)
        }
    }
    return (
        <div className='lg:flex m-4 gap-3'>
            <div className="flex-1 md:flex gap-3">
                <div className="flex md:flex-col gap-1" style={{ flex: "1" }}>
                    {productData.image && productData.image.map((i, index) => {
                        return (
                            <img onClick={() => setSelected(index)} className='rounded-sm object-cover w-24 h-20 md:w-48 md:h-32 md:object-cover' src={i.url} alt="" />
                        )
                    })
                    }
                </div>
                <div style={{ flex: "5" }}>
                    <img src={postData.image ? postData.image[selected].url : ""} className=' md:object-cover md:mt-0 mt-2 md:h-[90%] h-[60vh] w-[100vw]' alt="" />
                </div>
            </div>

            {/* right */}
            <div className=" flex-1 md:m-10 m-2 md:mt-0 mt-5">
                <div className="md:w-4/5 mx-auto flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <span className='px-2 rounded-md text-white bg-red-700'>10% off</span>
                                <span>Pre-Order</span>
                            </div>
                            <h1 className='md:text-3xl font-semibold font-sans'>{postData?.title} -</h1>
                            <h1 className='md:text-3xl font-semibold font-sans'>{postData?.color}</h1>
                        </div>
                        <span className='md:text-2xl font-semibold'>₹{postData?.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className=" flex gap-2 items-center">
                            <span className="md:text-lg font-semibold">Qty :-</span>
                            <AiFillCaretLeft onClick={() => handleQty("des")} className='text-xl cursor-pointer text-gray-600' />
                            <span>{quantity}</span>
                            <AiFillCaretRight onClick={() => handleQty("inc")} className='text-xl cursor-pointer text-gray-600' />
                        </div>
                        <div className="flex items-center self-end gap-3">
                            <span>Rating :-</span>
                            <div className="flex gap-1 text-yellow-600 items-center">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                                <span>(25)</span>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="">
                        <span className='text-xs md:text-base'>{postData?.desc}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className='font-semibold'>Color :-</span>
                        <button className='cursor-pointer rounded-full md:px-4 md:py-4 px-3 py-3 border-2 border-gray-800' style={{ backgroundColor: `${productData.color}` }}></button>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className='md:text-lg font-semibold'>Sizes:-</span>
                        {productData.size && productData.size.map((s, index) => {
                            return (
                                <span onClick={() => setSize(index)} className='border border-gray-500 rounded-sm md:px-3 py-1 px-2 text-sm md:text-base cursor-pointer'>{s}
                                </span>

                            )
                        })
                        }
                    </div>

                    <button onClick={() => dispatch(addProduct({ postData, size, quantity }))} className='md:px-5 md:py-3 px-2 py-2 text-sm md:text-lg md:mt-6 bg-sky-500 w-fit cursor-pointer text-white rounded-lg font-semibold'>Add to Cart</button>
                </div>
            </div>
        </div >

    )
}

export default ProductDesign
