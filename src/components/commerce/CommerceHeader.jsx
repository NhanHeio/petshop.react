import React,{ useState, useEffect} from 'react';
import CommerceCart from './CommerceCart';
import CommerceSearch from './CommerceSearch';
import { connect } from 'react-redux';
import { actions } from '../../store/actions';
import { handleGetCart } from '../../services/productService';


const CommerceHeader = (props) => {

    const [products, setProducts] = useState([])
    
    //console.log(props)
    useEffect(() => {
        const fetchCarts = async () => {
             let userID = (props.isLoggedIn ? props.userInfo.id : 0)
            //if (props.isLoggedIn) {
                let response = await handleGetCart(userID)
                setProducts(response.cart)
                //props.fetchingCart(response)
            //} else {
                //props.fetchingCartFail()
            //}
        }
        fetchCarts(props.isLoggedIn)
    }, [])

    return (
        <div className="fixed flex flex-row pt-20 w-full px-20 border-b-2 bg-white z-50">
            <div className="basis-1/4"></div>
            <div className="basis-1/2">
                <CommerceSearch />
            </div>
            <div className="basis-1/4">
                <CommerceCart products={products} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        isLoading: state.cart.isLoading,
        cartData: state.cart.cartData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingCart: (cartData) => dispatch(actions.fetchingCart(cartData)),
        fetchingCartFail: () => dispatch(actions.fetchingCartFail()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommerceHeader)