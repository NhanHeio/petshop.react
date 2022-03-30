import React, { useState, useEffect, memo } from 'react'
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import queryString from 'query-string';
import { handleAddToCart, handleGetComments, handleGetProductDetails, handlePostComment } from '../../../services/productService';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import Comment from './Comment/Comment';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

const ProductDetail = (props) => {
  const [quantity, setQuantity] = useState(1)
  const [productDetail, setProductDetail] = useState({})
  const [productComment, setProductComment] = useState([])
  const [comment, setComment] = useState('')
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [load, setLoad] = useState(true)

  const fetchProductDetail = async () => {
    let response = await handleGetProductDetails(id)
    setProductDetail(response.product)
  }
  const fetchComment = async () => {
    let response = await handleGetComments(id)
    setProductComment(response.comments)

  }

  const addToCart = async (quantity) => {
    if (props.isLoggedIn) {
      let paramsObject = {
        user_id: props.userInfo.id,
        product_id: productDetail.id,
        quantity: quantity
      }
      let params = queryString.stringify(paramsObject)

      let response = await handleAddToCart(params)
      if (response.errCode === 0) {
        console.log("Add to cart successfully")
        enqueueSnackbar('Add product to cart successfully!', {
          variant: 'success',
          autoHideDuration: 3000
        })
      } else {
        console.log("Add to cart failed", response.errMessage)
        enqueueSnackbar('Add product to cart failed!', {
          variant: 'error',
          autoHideDuration: 3000
        })
      }
      return response
    } else {
      console.log("Please login")
      return null;
    }
  }

  const handlePost = async (comment) => {
    let paramsObject = {
      id: productDetail.id,
      name: props.userInfo.name,
      img: props.userInfo.img,
      content: comment
    }
    setLoad(true)
    let params = queryString.stringify(paramsObject)
    if (props.isLoggedIn) {
      if (comment !== '') {
        await handlePostComment(params)
        setComment('')
        enqueueSnackbar('Post comment successfully!', {
          variant: 'success',
          autoHideDuration: 3000
        })
      } else {
        console.log("content empty")
      }
    }
    else {
      console.log("Please login")
    }
  }

  useEffect(() => {
    fetchProductDetail()
  }, [])
  useEffect(() => {
    fetchComment()
    return setLoad(false)

  }, [load])
  return (<>
    <Header />
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 pt-20">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <img className="md:w-4/5 md:h-4/5" src={process.env.REACT_APP_PRODUCT_IMG + productDetail.img} alt={productDetail.name} />
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{productDetail.name}</h2>
            <p className="text-gray-500 text-sm">Sản xuất bởi <span className="text-indigo-600">{productDetail.provider}</span></p>
            <Rating name="product-rate" value={productDetail.rate || 0} precision={0.1} readOnly />
            <div className="space-x-4 my-4">
              <div>
                <div className="w-fit rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">đ</span>
                  <span className="font-bold text-indigo-600 text-3xl">{productDetail.price}</span>
                </div>
              </div>

            </div>

            <span className="text-gray-500">{productDetail.desc}</span>

            <div className="flex py-4 space-x-4">
              <div className="relative">
                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                <input
                  className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 w-20 flex items-end pb-1"
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                >
                </input>
              </div>
              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                onClick={() => { addToCart(quantity) }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* comment */}
        <div className="h-fit py-2 mx-auto bg-white">
          <h2 className="text-3xl mb-10">Comments</h2>

          <Comment productComment={productComment} />

          {/* write comment */}
          <div className="relative flex items-stretch md:w-3/5 w-full mb-4">
            <input
              type="text"
              className="relative flex-auto min-w-0 block w-3/5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Write comment"
              value={comment}
              onChange={e => setComment(e.target.value)}>
            </input>
            <button
              className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              onClick={() => { handlePost(comment) }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
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
)(memo(ProductDetail));