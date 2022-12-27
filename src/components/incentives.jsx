import React from 'react'
import { GiSurferVan } from "react-icons/gi"
import { BsAward } from "react-icons/bs"
import { IoShirtOutline } from "react-icons/io5"


const Incentives = () => {
    return (
        <div className=' md:p-20 px-4 py-10 flex flex-col gap-3 border-t border-gray-400'>
            <span className='md:text-4xl text-xl font-bold text-gray-600'>We Built our business on customer services</span>
            <span className='text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas voluptatem voluptate, ab <br /> consectetur eveniet illum perspiciatis, laborum ipsum animi dolor saepe, facilis totam nulla <br /> doloribus deserunt. Atque, nisi impedit.</span>
            <div className="md:flex justify-between mt-2 gap-3">
                <div className="md:flex md:flex-col md:gap-3 md:border-none md:shadow-none border border-gray-400 p-2 shadow-md mb-5">
                    <GiSurferVan className='text-6xl' />
                    <span className='text-lg font-semibold mt-2'>Free shipping</span>
                    <span className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae facere sequi porro expedita magnam fugit rem at consectetur,</span>
                </div>
                <div className="md:flex md:flex-col md:gap-3 md:border-none md:shadow-none border border-gray-400 p-2 shadow-md mb-5">
                    <BsAward className='text-6xl' />
                    <span className='text-lg font-semibold mt-2'>5-Years Warrenty</span>
                    <span className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae facere sequi porro expedita magnam fugit rem at consectetur,</span>
                </div>
                <div className="md:flex md:flex-col md:gap-3 md:border-none md:shadow-none border border-gray-400 p-2 shadow-md mb-5">
                    <IoShirtOutline className='text-6xl' />
                    <span className='text-lg font-semibold mt-2'>7-days Easy Returns</span>
                    <span className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae facere sequi porro expedita magnam fugit rem at consectetur,</span>
                </div>

            </div>
        </div>
    )
}

export default Incentives
