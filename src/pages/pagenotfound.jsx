import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="w-1/2  bg-slate-100 rounded-lg flex flex-col text-center py-5 px-20 gap-6">
                <span className='text-9xl font-bold bg-transparent'>404</span>
                <span className='text-2xl '>OPPS! PAGE NOT FOUND</span>
                <span>Sorry, the page youre lokking for doesn't exist. if you think somethinfg is broken, report a problem </span>
                <div className="flex justify-around my-4">
                    <Link to={"/"} >
                        <button className='bg-purple-500 text-white px-5 py-2 rounded-full '>Return Home</button>
                    </Link>
                    <button className=' border border-purple-500 text-purple-500 px-5 py-2 rounded-full'>Report Problem</button>
                </div>
            </div>
        </div>
    )
}

export default Pagenotfound
