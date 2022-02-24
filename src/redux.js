// import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import rootReducer from './store/reducers';

// const persistConfig = {
//  key: 'root',
//  storage: storage,
//  stateReconciler: autoMergeLevel2
// };

// const pReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(pReducer);
// export const persistor = persistStore(store);




import { createStore } from 'redux';
// import { createStateSyncMiddleware } from 'redux-state-sync';
import { persistStore } from 'redux-persist';
import rootReducer from './store/reducers';


const store = createStore(
    rootReducer
)

export const dispatch = store.dispatch;

export const persistor = persistStore(store);

export default store;