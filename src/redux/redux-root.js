import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import storage from 'redux-persist/lib/storage';
import Cartreducer from './cart/cart.reducer';
import directoryreducer from './directory/directory.reducer';

import { persistReducer } from 'redux-persist';
import shopreducer from './shop/shop.reducer';


const persistconfig={

    key:'root',
    storage,
    whitelist:['cart']



}

const rootreducer= combineReducers({
    user:userReducer,
    cart:Cartreducer,
    directory:directoryreducer,
    shop: shopreducer

})


export default persistReducer(persistconfig,rootreducer)