import { productConstants } from '../constants'
const initialState = {
   products: [],
   loading: false
}
export const productsReducer = (state = initialState, action) => {
   switch (action.type) {
      case productConstants.setProducts:
         return {
            ...state, products: action.payload
         }
      case productConstants.setLoading:
         return {
            ...state, loading: action.payload
         }
      default:
         return {
            ...state
         }
   }
}