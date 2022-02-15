import React from 'react'
import { useState } from 'react';
import GoogleMap from './map/GoogleMap';

const ContactComponent = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')

    return (
        <div className="bg-gray-50">
            <div className="flex justify-around w-3/5 h-screen mt-20 mx-auto">
                <div className="mx-4">
                    <div>
                        <h1 className="text-4xl text-gray-600 font-bold my-6">Liên hệ cửa hàng:</h1>
                        <h6 className="text-2xl text-gray-400 font-semibold">132/42B phường Hưng Lợi, quận Ninh Kiều, thành phố Cần Thơ.</h6>
                        <h6 className="text-2xl text-gray-400 font-semibold">Điện thoại liên hệ: 0774000828</h6>
                        <h6 className="text-2xl text-gray-400 font-semibold">Email: hotrungnhan2000@gmail.com</h6>
                    </div>
                    <div className="w-1/2 h-1/2 mt-6">
                        <h1 className="text-2xl text-gray-800 font-semibold text-left mb-8">Google Map:</h1>
                        <GoogleMap />
                    </div>
                </div>
                <div className="mx-4">
                    <h6 className="text-2xl text-gray-800 font-semibold my-8 text-left">Nếu cần hỗ trợ, quý khách vui lòng điền thông tin theo form sau:</h6>
                    <div>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="phoneNumber"
                            placeholder="Số điện thoại"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <textarea
                            type="text"
                            rows={3}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="content"
                            placeholder="Nội dung"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                        <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Gửi liên hệ</button>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default ContactComponent