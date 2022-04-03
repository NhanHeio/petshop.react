import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { handleGetCart, handlePlaceAnOrderShipCod, handlePlaceAnOrderPayment } from '../../../services/productService'
import { useSnackbar } from 'notistack';
import Payment from './Payment';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Box, MenuItem, FormControl, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = (props) => {

  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [cart, setCart] = useState()
  const [payment, setPayment] = useState(1)
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate()
  const checkUserLogin = () => {
    if (!props.isLoggedIn) {
      return navigate("/signin")
    }
  }

  let userID = (props.isLoggedIn ? props.userInfo.id : 0)
  const handleChangePaymentMethod = (event) => {
    setPayment(event.target.value)
    // if (event.target.value === 2) {
    //   document.getElementById("payment").classList.remove("hidden")
    //   document.getElementById("payment-button").classList.remove("hidden")
    //   document.getElementById("order-button").classList.add("hidden")
    // } else {
    //   document.getElementById("payment").classList.add("hidden")
    //   document.getElementById("payment-button").classList.add("hidden")
    //   document.getElementById("order-button").classList.remove("hidden")
    // }
  };

  const fetchShippingData = () => {
    if (props.isLoggedIn) {
      setName(props.userInfo.name)
      setPhoneNumber(props.userInfo.phone_number)
      setAddress(props.userInfo.address)
    }
  }

  const handleOrderCod = async (name, phoneNumber, address) => {
    if (props.isLoggedIn) {
      if (name !== '' || phoneNumber !== '' || address !== '') {
        let response = await handlePlaceAnOrderShipCod(userID, name, phoneNumber, address);
        if (response.errCode === 0) {
          enqueueSnackbar('Place an order successfully!', {
            variant: 'success',
            autoHideDuration: 3000
          })
          return navigate("/commerce")
        } else {
          enqueueSnackbar('Place an order failed!', {
            variant: 'error',
            autoHideDuration: 3000
          })
        }
      } else {
        enqueueSnackbar('Missing parameters', {
          variant: 'error',
          autoHideDuration: 3000
        })
      }
    } else {
      enqueueSnackbar('Order failed. Please Login to order', {
        variant: 'error',
        autoHideDuration: 3000
      })
    }
  }

  const handleOrderCard = async (name, phoneNumber, address) => {
    if (props.isLoggedIn) {
      if (name !== '' || phoneNumber !== '' || address !== '') {
        let response = await handlePlaceAnOrderPayment(userID, name, phoneNumber, address);
        if (response.errCode === 0) {
          enqueueSnackbar('Place an order successfully!', {
            variant: 'success',
            autoHideDuration: 3000
          })
          return navigate("/commerce")
        } else {
          enqueueSnackbar('Place an order failed!', {
            variant: 'error',
            autoHideDuration: 3000
          })
        }
      } else {
        enqueueSnackbar('Missing parameters', {
          variant: 'error',
          autoHideDuration: 3000
        })
      }
    } else {
      enqueueSnackbar('Order failed. Please Login to order', {
        variant: 'error',
        autoHideDuration: 3000
      })
    }
  }

  useEffect(() => {
    checkUserLogin()
    fetchShippingData()
    handleGetCart(userID)
      .then(rs => {
        setCart(rs.cart)
        setAmount((rs.cart.total_price/22670).toFixed(2))
      })
      .catch(err => console.log(err))

  }, [userID, payment])

  return (
    <div className="w-3/5 mx-auto mt-20 bg-slate-50">
      <h2 className="text-4xl font-semibold text-indigo-600">Checkout Details</h2>
      <div className="block p-6 mx-auto rounded-lg shadow-lg bg-white max-w-5xl">
        <div>
          <div className="flex flex-wrap">
            <div className="mb-6 w-1/2 flex flex-col px-4">
              <label htmlFor="name" className="w-fit font-normal text-md left-0 py-1.5" >Full Name: </label>
              <input
                type="text"
                className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Full Name"
                name="name"
                value={name}
                onChange={(e) => { setName(e.target.value) }}

              />
            </div>
            <div className="mb-6 w-1/2 flex flex-col px-4">
              <label htmlFor="phoneNumber" className="w-fit font-normal text-md left-0 py-1.5" >Phone Number: </label>
              <input
                type="text"
                className="w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => { setPhoneNumber(e.target.value) }}
              />
            </div>
            <div className="mb-6 w-full flex flex-col px-4">
              <label htmlFor="address" className="w-fit font-normal text-md left-0 py-1.5" >Address: </label>
              <textarea
                type="text"
                className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Address"
                name="address"
                value={address}
                onChange={(e) => { setAddress(e.target.value) }}
              />
            </div>
          </div>
          <div className="w-full text-left">
            <h2 className="text-2xl text-slate-500 font-normal">List Products of your order:</h2>
          </div>
          {/* <Review cart={cart} loadCart={loadCart} /> */}

          <div className="w-full my-3 mx-auto flex flex-wrap">
            {cart &&
              (cart.cartItems.map((item) => (
                <li key={item.id} className="flex flex-wrap w-2/5 my-3 mx-auto p-3 rounded-md border-2 border-slate-200">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src={process.env.REACT_APP_PRODUCT_IMG + item.img} alt={item.name} className="h-full w-full object-cover object-center"></img>
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="#">{item.product_name}</a>
                        </h3>
                        <p className="ml-4">{item.price}đ</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))
              )
            }
          </div>
          {cart &&
            <div>
              <span className="text-2xl text-slate-500">Total Price: <span className="text-2xl text-pink-500">{cart.total_price}</span></span>
            </div>
          }
          <div className="flex flex-row m-2 p-2">
            <span className="mx-4 my-3">Select Payment Method: </span>
            <Box sx={{ minWidth: 120 }}>
              <FormControl >
                <Select
                  value={payment}
                  label="Payment Method"
                  onChange={handleChangePaymentMethod}
                >
                  <MenuItem value={1}>Ship COD</MenuItem>
                  <MenuItem value={2}>Internet Banking</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div id="payment" className="hidden md:w-1/2 w-full mx-auto">
            {/* <Payment /> */}

          </div>
          {
            (payment === 1) ?
              <button
                type="button"
                id="order-button"
                className=" w-fit px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => { handleOrderCod(name, phoneNumber, address) }}
              >
                Place an Order
              </button> :
              <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
                <PayPalButtons
                  style={{ layout: "horizontal" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: amount,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      document.getElementById("payment-button").click()
                  });
                  }}
                />
              </PayPalScriptProvider>
          }
          <button
            type="button"
            id="payment-button"
            className="hidden w-fit px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => { handleOrderCard(name, phoneNumber, address, amount) }}
          >
            Order and Pay
          </button>
        </div>
      </div>
    </div>
  )
}

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
)(Checkout)