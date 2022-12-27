import React from 'react'
import Annocement from '../components/annocement'
import Dashboardleft from '../components/dashboardleft'
import Footer from '../components/footer'
import Navber from '../components/navber'

const Dashusers = () => {
    return (
        <div>
            <Annocement />
            <Navber />
            <div className="h-[86vh] relative">
            <img className='image' src="https://img.freepik.com/free-vector/peach-bubble-patterned-background_53876-90684.jpg?t=st=1671771486~exp=1671772086~hmac=5df3b34dae78dceee7bb95e81a884e6722c8102564772d01a981d3119a23ce79" alt="" />
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
