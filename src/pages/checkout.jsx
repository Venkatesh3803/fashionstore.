import React, { useState } from 'react'
import { useSelector  } from 'react-redux'
import { Link } from 'react-router-dom'
import Annocement from '../components/annocement'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Navber from '../components/navber'
import CheckoutButton from '../components/checkoutButton'
import AdderssModel from '../components/adderssModel'

const Checkout = () => {
  const cartData = useSelector((state) => state.cart.cartItems)
  const cartTotal = useSelector((state) => state.cart.cartItemsTotal)
  const [cod, setCod] = useState(false)
  return (
    <div className='backgroundgradient'>
      <Annocement />
      <Navber />
      <>
  
        <div className="lg:flex md:mx-10 mx-2 relative my-5 dash lg:h-[87vh]">
          <div className='lg:p-20 md:p-10 p-4' style={{ flex: "2.5" }}>
            {cartData.length === 0 &&
              <div className="flex flex-col items-center md:mt-32">
                <span className=' text-2xl font-semibold'>You Dont have Items In Your Cart </span>
                <Link to={"/"} >
                  <span className=' text-xl cursor-pointer font-semibold text-blue-500'>Continue Shopping </span>
                </Link>
              </div>
            }
            {cartData?.map((c) => {
              return (
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-3 items-center ">
                    <Link to={`../singleproduct/${c.postData._id}`}>
                      <img className='w-28 h-28 rounded-md object-cover ' src={c.postData.image[0].url} alt="" />
                    </Link>
                    <div className=" flex flex-col gap-1">
                      <span className='font-semibold text-sm'>{c.postData.title}</span>
                      <span className=''>size :- {c.postData.size[c.size]}</span>
                      <div className="flex items-center gap-2">
                        <span className=''>Qty :-{c.quantity}</span>
                      </div>
                      <span>color :- {c.postData.color}</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <span className='text-lg font font-semibold'>price</span>
                      <span className='text'>₹{c.postData.price * c.quantity}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ flex: "1.5" }} >
            <div className="w-2/3 mx-auto my-5  bg-purple-100 rounded-xl p-5 flex flex-col md:gap-6 gap-2 ">
              <span className='font-semibold md:text-xl text-lg'>
                CheckOut
              </span>
              <hr />
              <div className="flex justify-between">
                <ul><li className='font-medium'>No.of Products</li></ul>
                <ul><li>{cartData.length}</li></ul>
              </div>
              <div className="flex justify-between">
                <ul><li className='font-medium'> Discount</li></ul>
                <ul><li>22%</li></ul>
              </div>
              <div className="flex justify-between">
                <ul><li className='font-medium'>Shipping</li></ul>
                <ul><li>free</li></ul>
              </div>

              <div className="border-t border-black flex justify-between">
                <ul><li className='font-medium mt-3'>Total Amount</li></ul>
                <ul><li className='mt-3'>₹{cartTotal}</li></ul>
              </div>

              <div className=" flex gap-3">
                <CheckoutButton cartData={cartData} />
                {cartData.length === 0 ?
                  <button onClick={() => setCod(true)} className='self-end lg:px-6 py-1 px-2  text-white lg:text-lg text-sm cursor-not-allowed bg-purple-500 rounded-lg hover:bg-purple-400' disabled>COD</button>
                  :
                  <button onClick={() => setCod(true)} className='self-end lg:px-6 py-1 px-2  text-white lg:text-lg text-sm bg-purple-500 rounded-lg cursor-pointer hover:bg-purple-400'>COD</button>
                }
              </div>
            </div>
            {cod &&
              <AdderssModel setCod={setCod} cartData={cartData} cartTotal={cartTotal} />}
          </div>
        </div>
      </>
      <Banner />
      <Footer />
    </div>
  )
}

export default Checkout
