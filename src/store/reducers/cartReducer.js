import actionTypes from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    cartData: null
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_CART:
            return {
                ...state,
                isLoading: true,
                cartData: action.cartData,
            }
        case actionTypes.FETCHING_CART_FAIL:
            return {
                ...state,
                isLoading: false,
                cartData: null
            }
        default:
            return state
    }
}

export default cartReducer;