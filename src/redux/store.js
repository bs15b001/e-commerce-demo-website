import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from './redux-root';

import {persistStore} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const middlewares=[logger];

export const store = createStore(rootReducer,applyMiddleware(...middlewares))

export const persistor= persistStore(store);


export default {store,persistor};