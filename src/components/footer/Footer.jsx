import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return <div>
        <div className="bg-white py-2 md:py-4">
            <div className="container px-96 mx-auto md:flex md:items-center">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-medium mb-2 uppercase">PetShop</h1>
                        <p className="mb-4">
                            Tận tình, uy tính, chất lượng.
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <h5 className="font-medium mb-2 uppercase">List pages</h5>
                        <p className="mb-4">
                            <Link to='/about'>About</Link>
                            <br></br>
                            <Link to='/contact'>Contact</Link>
                        </p>
                        <div className="text-center text-gray-700 p-4">
                            © 2021 Copyright:
                            <a href="fb.com/nhantrung.ho">Hồ Trung Nhân</a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <h5 className="font-medium mb-2 uppercase">Link Fanpage Facebook</h5>
                        <p className="mb-4">
                            <a href="fb.com/nhantrung.ho">Hồ Trung Nhân</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Footer;
