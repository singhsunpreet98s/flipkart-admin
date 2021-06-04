import axios from 'axios';
import { loginConstants } from '../constants'
const url = "http://localhost:5000/user/adminLogin";

export const loginAction = (creden) => {
   return async (dispatch) => {
      const data = await axios.post(url, creden)
      if (data.data.msg === "success") {
         localStorage.setItem('token', data.data.data.token)
         localStorage.setItem('user', JSON.stringify(data.data.data.user))
         dispatch({ type: loginConstants.setLogin, payload: true })
         dispatch({ type: loginConstants.setUser, payload: data.data.data.user })
      }
      else {
         dispatch({ type: loginConstants.setLoginMsg, payload: data.data.msg })
      }
   }

}