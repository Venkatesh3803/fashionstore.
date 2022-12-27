import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/category.css"

const Category = () => {
    return (
        <div className='md:flex gap-2 m-4'>
            <div className="flex-1 flex gap-2 ">
                <div className="flex flex-col flex-1 gap-2 overflow-hidden ">
                    <div className="overflow-hidden flex relative  justify-center items-center">
                        <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <Link to={"../products/shirt"}>
                            <span className='absolute  top-[45%] left-[35%]  md:px-4 md:py-2 px-2 py-1 text-xs md:text-base bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Shirts</span>
                        </Link>
                    </div>
                    <div className="overflow-hidden flex relative  justify-center items-center">
                        <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <Link to={"../products/bag"}>
                            <span className='absolute  top-[45%] left-[35%]  md:px-4 md:py-2 px-2 py-1 text-xs md:text-base bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Bags</span>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden flex relative  justify-center items-center">
                    <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/1035692/pexels-photo-1035692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <Link to={"../products/hoodies"}>
                        <span className='absolute  top-[45%] left-[35%]  md:px-4 md:py-2 px-2 py-1 text-xs md:text-base bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Hoodies</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col mt-2 md:mt-0 gap-2 flex-1 w-full ">
                <div className="flex-1  overflow-hidden flex relative  justify-center items-center">
                    <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <Link to={"../products/shoes"}>
                        <span className='absolute  top-[45%] left-[35%]  md:px-4 md:py-2 px-2 py-1 text-xs md:text-base bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Shoes</span>
                    </Link>
                </div>
                <div className="flex flex-1 gap-2 overflow-hidden ">
                    <div className="overflow-hidden  relative flex justify-center items-center">
                        <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/7679657/pexels-photo-7679657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <Link to={"../products/accessories"}>
                            <span className='absolute  top-[45%] left-[35%]  md:px-4 md:py-2 px-2 py-1 text-xs md:text-base bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>Accessories</span>
                        </Link>
                    </div>
                    <div className="overflow-hidden flex relative  justify-center items-center">
                        <img className='images h-full w-full overflow-hidden object-cover' src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <Link to={"products/t-shirt"}>
                            <span className='absolute  top-[45%] left-[35%]  md:px-4 md:py-2 px-2 py-1 text-xs md:text-base bg-rose-500 text-white font-semibold hover:bg-rose-400 rounded-md'>T-Shirts</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category
