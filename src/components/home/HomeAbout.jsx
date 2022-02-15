import React from 'react';
import { Link } from 'react-router-dom';
import { path } from '../../constants/constant';

const HomeAbout = () => {
    return (
        <div>
            <div className="flex justify-center py-auto bg-gray-50">
                <div className="w-1/5 my-40">
                    <h1 className="text-center font-bold text-gray-800 text-4xl">Giới thiệu</h1>
                    <span className="text-center text-gray-600 text-2xl block mb-8">
                        Chúng tôi tạo ra website PetShop này để cung cấp đến quý khách hàng
                        dịch vụ chăm sóc thú cưng tốt nhất của chúng tôi.
                    </span>
                    <Link to={path.ABOUT} className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                        About us
                    </Link>
                </div>
                <div className="w-1/5 my-40">
                    <img className="mx-auto rounded-full" src="https://i.pinimg.com/originals/83/20/e9/8320e947c10986a251de255fb0ec9e47.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default HomeAbout