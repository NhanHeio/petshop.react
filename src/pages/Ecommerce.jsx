import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Navbar from '../components/commerce/Navbar/Navbar';
import Pagination from '../components/commerce/Pagination/Pagination';
import Products from '../components/commerce/Products/Products';
import SideBar from '../components/commerce/Sidebar/SideBar';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { handleGetAllProducts, handleGetCart, handleRemoveCart } from '../services/productService';
import { useLocation } from 'react-router-dom';
import ReactGA from "react-ga4";
import CarouselComponent from '../components/carousel/CarouselComponent';


const Ecommerce = (props) => {
  // ga4
  let location = useLocation()
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE)
    ReactGA.send({ hitType: "pageview", page: location.pathname })
  }, [location]);

  //
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [type_id, setType_id] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [filter, setFilter] = useState({
    type_id,
    page
  })
  const [loadCart, setLoadCart] = useState(true)
  //fetch product
  const fetchProducts = async () => {
    const params = queryString.stringify(filter)
    let response = await handleGetAllProducts(params)
    setProducts(response.products.rows)
    setTotalPages(response.totalPages)
  }
  //fetch cart
  let userID = (props.isLoggedIn ? props.userInfo.id : 0)
  const fetchCarts = async (userID) => {
    let response = await handleGetCart(userID)
    setCart(response.cart)
  }

  const handleRemoveCartItem = async (id) => {
    console.log(id)
    let response = await handleRemoveCart(id)
    setCart(response.cart)
    setLoadCart(true)
  }
  window.history.pushState({id: Math.floor(Math.random() * 10)},'search',`/commerce?name=${filter.name ? filter.name : ''}`);
  const filterProducts = (id) => {
    setType_id(id)
    setFilter({
      type_id: id,
      page: 1,
      name: ''
    })
  }
  const getPage = (page) => {
    setPage(page)
    setFilter({
      type_id: 0,
      name: '',
      page: page
    })
  }
  const getName = (name) => {
    setFilter({
      name: name,
      page: 1,
      type_id: 0
    })
  }
  useEffect(() => {
    fetchProducts()
    fetchCarts(userID)

    return setLoadCart(false)
  }, [filter, loadCart])

  document.title = 'E-Commerce'

  return <>
    <Header />
    <div className="h-full w-full min-h-screen bg-gray-50">
      <Navbar cart={cart} handleRemoveCartItem={handleRemoveCartItem} getName={getName} />
      <CarouselComponent /> 
      <SideBar filterProducts={filterProducts} />
      <Products products={products} />
      <Pagination totalPages={totalPages} getPage={getPage} />
    </div>
    <Footer />
  </>;
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ecommerce);
