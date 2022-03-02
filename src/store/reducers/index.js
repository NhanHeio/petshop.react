import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';



const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo']
}

const cartPersistConfig = {
    ...persistCommonConfig,
    key: 'cart',
    whitelist: ['isLoading', 'cartData']
}


const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
    cart: persistReducer(cartPersistConfig, cartReducer),
})

// export const persistor = persistStore(store);
export default rootReducer;