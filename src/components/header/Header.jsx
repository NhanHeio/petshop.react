
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import { useEffect, useState } from 'react';
import { actions } from '../../store/actions';
import { connect } from "react-redux";
import logo from '../../assets/image/logo-home.png';

const headerNavItems = [
    {
        id: 0,
        display: "Home",
        to: "/",
        section: " "
    },
    {
        id: 1,
        display: "Booking",
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
    }
]
const classActive = "p-2 lg:px-4 md:mx-2 text-lg text-white rounded bg-indigo-600"
const classInactive = "p-2 lg:px-4 md:mx-2 text-lg text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
const Header = props => {
    const [activeIndex, setActiveIndex] = useState(' ')
    const [showHeader, setShowHeader] = useState(true)
    const location = useLocation()
    const handleClick = () => {
        //setActiveIndex(location.pathname)
        // setActiveIndex(index)
        //console.log(activeIndex)
        document.getElementById("navbar-collapse").classList.add("hidden")
        setShowHeader(!showHeader)
    }
    useEffect(() => {
        if(location.pathname.length === 1){
            setActiveIndex(' ')
        }else{
            setActiveIndex(location.pathname)
        }
    },[location.pathname])
    const handleClickHeader = () => {
        setShowHeader(!showHeader)
        if(showHeader) {
            document.getElementById("navbar-collapse").classList.remove("hidden")
        }else{
            document.getElementById("navbar-collapse").classList.add("hidden")
        }
    }
    
    return <div>
        <div className="header-sticky">
            <nav className="bg-white py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="font-bold text-xl text-indigo-600"><img className="w-28 -m-4" src={logo} alt="logo" /></Link>
                        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                            onClick={() => handleClickHeader()}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    
                        
                            <div className=" md:flex hidden flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                            {/* <div className={showHeader ? classNonHidden : classHidden}> */}
                                {
                                    headerNavItems.map((item) => (

                                        <Link to={item.to} key={item.id} onClick={() => handleClick()} className={activeIndex.search(item.section) !== -1 ? classActive : classInactive}>{item.display} </Link>
                                    ))
                                }
                                {
                                    !props.isLoggedIn &&
                                    <>
                                        <Link to="/signin" onClick={() => handleClick("signin")} className="p-2 lg:px-4 md:mx-2 text-lg text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</Link>
                                        <Link to="/signup" onClick={() => handleClick("signup")} className="p-2 lg:px-4 md:mx-2 text-lg text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</Link>
                                    </>
                                }
                                {
                                    props.isLoggedIn &&
                                    <>
                                        {props.userInfo.name && <Link to={`/profile/${props.userInfo.id}`} className="p-2 lg:px-4 md:mx-2 text-lg text-gray-500 text-center border border-transparent rounded transition-colors duration-300">{props.userInfo.name}</Link>}
                                        <button onClick={() => props.processLogout()} className="p-2 lg:px-4 md:mx-2 text-lg text-indigo-600 text-center border border-transparent rounded hover:bg-gray-100 hover:text-red-600 transition-colors duration-300">Log out</button>
                                    </>
                                }
                            </div>
                        
                    
                </div>
            </nav>
        </div>
    </div>;
};

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo,
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
