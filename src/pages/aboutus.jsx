import React from 'react'
import Annocement from '../components/annocement'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Navber from '../components/navber'

const Aboutus = () => {
    return (
        <div>
            <Annocement/>
            <Navber />
            <img className='img' src="https://img.freepik.com/free-vector/fluid-pastel-background_53876-93216.jpg?w=1060&t=st=1671781697~exp=1671782297~hmac=30c025ee4e72a6ce79615379203857f66eae27df0d0cb550ee74f85b15017e75" alt="" />
            <div className="flex justify-center overflow-hidden">
                <div className="flex md:flex-row flex-col justify-center m-4">
                    <div className="lg:w-1/2 bg-black ">
                        <div className="flex justify-center flex-col items-center">
                            <div className="text-white m-6 lg:text-xl z-200"> Contact Us </div>
                            <div className="text-white m-6 z-200 text-xs lg:text-base"> We are always here to help out whatever way we can :) </div>
                            <div className="text-white m-6 z-200">
                                <div className="flex m-2">
                                    <ion-icon name="person-outline" className="m-2"></ion-icon> <input placeholder="Name"
                                        className="bg-gray-800 p-2 rounded-3xl" />
                                </div>
                                <div className="flex m-2">
                                    <ion-icon name="mail-outline" className="m-2"></ion-icon> <input placeholder="E-mail"
                                        className="bg-gray-800 p-2 rounded-3xl" />
                                </div>
                                <div className="flex m-2">
                                    <ion-icon name="call-outline" className="m-2"></ion-icon> <input placeholder="Phone"
                                        className="bg-gray-800 p-2 rounded-3xl" />
                                </div>
                                <div className="flex m-2">
                                    <ion-icon name="create-outline" className="m-2"></ion-icon> <input
                                        placeholder="Type your message" className="bg-gray-800 p-2 rounded-3xl" />
                                </div>
                                <div className="block m-2justify-center">
                                    <div className="bg-blue-700 p-2 rounded-3xl hover:bg-blue-800 cursor-pointer ">
                                        <div className="flex justify-center"> Send </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 lg:w-2/3 ">
                        <div className="w-3/4 lg:w-1/2 overflow-contain h-min">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509815805!2d78.24323292478527!3d17.41260864074029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1670942149562!5m2!1sen!2sin" style={{width:"800px" ,height:"600px", style:"border:0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <Banner />
            <Footer />
        </div>
    )
}

export default Aboutus
