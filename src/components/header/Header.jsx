import {useState} from 'react';
import { Link } from 'react-router-dom';
const headerNavItems = [
    {
        id: 0,
        display: "Home",
        to: "/",
        section: ""
    },
    {
        id: 1,
        display: "Calendar",
        to: "/calendar",
        section: "calendar"
    },
    {
        id: 2,
        display: "E-Commerce",
        to: "/commerce",
        section: "commerce"
    },
    {
        id: 3,
        display: "About",
        to: "/about",
        section: "about"
    },
    {
        id: 4,
        display: "Contact",
        to: "/contact",
        section: "contact"
    },
]
const classActive = "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
const classInactive = "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const handleClick = (index) =>{
        setActiveIndex(index)
    }
    return <div>
        <nav className="bg-white py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
                <div className="flex justify-between items-center">
                    <Link to="/" className="font-bold text-xl text-indigo-600">PetShop</Link>
                    <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                    
                    {
                        headerNavItems.map((item) => (
                            
                            <Link to={item.to} key={item.id} onClick={() => handleClick(item.id)} className={item.id === activeIndex ? classActive : classInactive}>{item.display} </Link>
                            
                        ))
                    }
                    <Link to="/signup" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</Link>
                    <Link to="/signin" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</Link>
                </div>
            </div>
        </nav>
    </div>;
};

export default Header;
