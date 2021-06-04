import { orderConstants } from '../constants'
const initialState = {
   orders: []
}
export const orderReducer = (state = initialState, action) => {
   switch (action.type) {
      case orderConstants.setOrders: {
         return {
            orders: action.payload, ...state
         }
      }
      default: {
         return {
            ...state
         }
      }
   }
}