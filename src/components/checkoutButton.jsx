import React from 'react'
import axios from "axios"
import { useSelector } from "react-redux"

const CheckoutButton = ({ cartData }) => {
    const user = useSelector((state) => state.user.user)
    const handleCheckOut = async () => {
        await axios.post("https://fashionstorebackend.onrender.com/api/checkout/payment", {
            cartData,
            userId: user._id
        }).then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message))
    }
    return (
        <div>
            {cartData.length === 0 ?
                <button className='bg-green-500 text-white lg:px-5 py-1 px-2 rounded-lg cursor-not-allowed lg:text-xl text-sm hover:bg-green-400' onClick={() => handleCheckOut()} disabled>Pay Now</button>
                :
                <button className='bg-green-500 text-white lg:px-5 py-1 px-2 rounded-lg cursor-pointer lg:text-xl text-sm hover:bg-green-400' onClick={() => handleCheckOut()}>Pay Now</button>
            }
        </div>
    )
}

export default CheckoutButton
