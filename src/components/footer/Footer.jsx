import React from 'react';
import { Link } from 'react-router-dom';
import { path } from '../../constants/constant';

const Footer = () => {
    return <div>
        <div>
            <hr></hr>
            <div className="bg-white py-2 md:py-4 mx-auto">
                <div className="container mx-auto md:flex md:justify-between flex-wrap items-center ">
                    <div className="md:w-1/3 w-5/6 md:flex md:items-center mx-auto">
                        <div>
                            <h1 className="font-medium mb-2 uppercase">PetShop</h1>
                            <p className="mb-4">
                                Tận tình, uy tính, chất lượng.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/3 w-5/6 md:flex md:items-center mx-auto">
                        <div>
                            <div className="md:flex md:flex-col hidden">
                                <h5 className="md:font-medium mb-2 uppercase">List pages</h5>
                                <p className="md:mb-4">
                                    <Link to={path.ABOUT}>About</Link>
                                    <br></br>
                                    <Link to={path.CONTACT}>Contact</Link>
                                </p>
                            </div>
                            <div className="text-center text-gray-700 p-4">
                                © 2021 Copyright:
                                <a href="fb.com/nhantrung.ho">Hồ Trung Nhân</a>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3 w-5/6 md:flex hidden items-center">
                        <div>
                            <h5 className="font-medium mb-2 uppercase">Link Fanpage Facebook</h5>
                            <p className="mb-4">
                                <a href="fb.com/nhantrung.ho">Hồ Trung Nhân</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Footer;
