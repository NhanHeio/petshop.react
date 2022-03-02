import React, { useState, useEffect } from 'react';
import Navbar from '../components/commerce/Navbar/Navbar';
import Pagination from '../components/commerce/Pagination/Pagination';
import Products from '../components/commerce/Products/Products';
import SideBar from '../components/commerce/Sidebar/SideBar';
import { handleGetAllProducts, handleGetCart } from '../services/productService';

const Ecommerce = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [sidebar, setSidebar] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
const [filter, setFilter] = useState({
  sidebar,
  page
})
  const fetchProducts = async (sidebar) => {
    let response = await handleGetAllProducts(sidebar,page)
    setProducts(response.products.rows)
    setTotalPages(response.totalPages)
  }

  const fetchCarts = async () => {
    let response = await handleGetCart(3)
    setCart(response.cart)
  }

  // const fetchSidebar = async () => {
  //   let response = await handleGetType()
  //   setSidebar(response.type)
  // }

  const filterProducts = (id) => {
    setSidebar(id)
    setFilter({
      ...filter,
      sidebar: id
    })
  }
  const getPage = (page) => {
    setPage(page)
    setFilter({
      ...filter,
      page: page
    })
  }

  useEffect(() => {
    fetchProducts(sidebar,page)
  },[filter])
  useEffect(() => {
    fetchCarts()
  },[])
  return <div className="h-full w-full bg-gray-50">

    <Navbar cart={cart} />
    <SideBar filterProducts={filterProducts} />
    <Products products={products} />
    <Pagination totalPages={totalPages} getPage={getPage} />
    
  </div>;
};

export default Ecommerce;
