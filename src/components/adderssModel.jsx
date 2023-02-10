import React, { useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom';


const AdderssModel = ({ setCod, cartData, cartTotal }) => {
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [state, setState] = useState("")
    const [district, setDistrict] = useState("")
    const [deliveryAddress, setDeliveryAddress] = useState("")

    const handleChange = (e) => {
        if (e.target.name === "fullname") {
            setFullname(e.target.value)
        } else if (e.target.name === "email") {
            setEmail(e.target.value)
        } else if (e.target.name === "phone") {
            setPhone(e.target.value)
        } else if (e.target.name === "city") {
            setCity(e.target.value)
        } else if (e.target.name === "deliveryAddress") {
            setDeliveryAddress(e.target.value)
        } else if (e.target.name === "pincode") {
            setPincode(e.target.value)
        } else if (e.target.name === "state") {
            setState(e.target.value)
        } else if (e.target.name === "district") {
            setDistrict(e.target.value)
        }
    }

    let orderId = Math.random()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("https://fashionstorebackend.onrender.com/api/order/create", {
                userId: user._id,
                orderId: orderId,
                address: {
                    fullname: fullname,
                    email: email,
                    phone: phone,
                    city: city,
                    deliveryAddress: deliveryAddress,
                    pincode: pincode,
                    district: district,
                    state: state
                },
                products: cartData,
                totalAmount: cartTotal
            })
            await res.data
            dispatch(clearCart());
            if (res.data) {
                navigate('/sucess')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="lg:w-2/4 mx-auto flex flex-col absolute md:gap-6 md:p-10 md:my-5 p-5 gap-2 my-2 bg-purple-100 rounded-sm- flex-1 lg:-top-8 lg:right-80 -top-6">
            <span onClick={() => setCod(false)} className='w-8 h-8 rounded-full text-white bg-black flex justify-center items-center cursor-pointer'>X</span>
            <h2 className='font-semibold text-2xl '> Billing Adderss</h2>
            <div className=" flex gap-5">
                <label className='w-full'>Full Name :-
                    <input onChange={handleChange} required value={fullname} name="fullname" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Full Name' />
                </label>
            </div>
            <label className='w-full'> email:-
                <input onChange={handleChange} required value={email} name="email" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="email" placeholder='email' />
            </label>
            <div className=" flex gap-5">
                <label className='w-full'>Phone Number :-
                    <input onChange={handleChange} value={phone} required minLength={10} name="phone" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='Phone Number' />
                </label>
                <label className='w-full'>City:-
                    <input onChange={handleChange} value={city} required name="city" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='City' />
                </label>
            </div>
            <label className='w-full'>Address:-
                <textarea onChange={handleChange} value={deliveryAddress} required name="deliveryAddress" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" rows={2} type="text" placeholder='adderss' />
            </label>
            <div className=" flex gap-5">
                <label className='w-full'>State :-
                    <input onChange={handleChange} value={state} required name="state" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='first name' />
                </label>
                <label className='w-full'>District:-
                    <input onChange={handleChange} value={district} required name="district" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='last name' />
                </label>
                <label className='w-full'>Pincode:-
                    <input onChange={handleChange} value={pincode} required min={6} name="pincode" className="px-2 py-1 bg-transparent border border-gray-600 rounded-lg placeholder:text-sm  w-full" type="text" placeholder='last name' />
                </label>
            </div>
            <button type='submit' className='text-xl px-5 py-2 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-400'>Place order</button>
        </form>
    )
}

export default AdderssModel
