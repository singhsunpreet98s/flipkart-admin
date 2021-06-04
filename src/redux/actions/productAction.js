import axios from 'axios';
import { productConstants } from '../constants'
export const fetchProd = () => {
   const url = 'http://localhost:5000/product/adminProd';
   return async (dispatch) => {
      const token = localStorage.getItem('token')
      if (token) {
         dispatch({ type: productConstants.setLoading, payload: true })
         const data = await axios.get(url, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         if (data) {
            dispatch({ type: productConstants.setLoading, payload: false })
            dispatch({ type: productConstants.setProducts, payload: data.data.products })
         }

      }
   }
}