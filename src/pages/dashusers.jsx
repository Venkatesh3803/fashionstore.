import React from 'react'
import Annocement from '../components/annocement'
import Dashboardleft from '../components/dashboardleft'
import Footer from '../components/footer'
import Navber from '../components/navber'

const Dashusers = () => {
    return (
        <div className='backgroundgradient'>
            <Annocement />
            <Navber />
            <div className="h-[86vh] relative">
                <div className="dash w-[96%] m-auto  h-[96%] rounded-xl flex">
                    <Dashboardleft />
                    <div className="p-5" style={{ flex: "4" }}>
                        <h1 className='text-2xl font-bold'>users</h1>
                        <h2 className='text-gray-600'>Detailed information about the users</h2>

                        <div className="flex justify-around mt-5">

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashusers
