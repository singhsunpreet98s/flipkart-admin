import { loginReducer } from './loginReducer';
import { orderReducer } from './orderReducer';
import { productsReducer } from './productsReducer'
import { combineReducers } from 'redux';
export default combineReducers({
   order: orderReducer,
   user: loginReducer,
   products: productsReducer
})