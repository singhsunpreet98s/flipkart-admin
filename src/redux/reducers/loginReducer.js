import { loginConstants } from '../constants'
const initialState = {
   isLoggedIn: false,
   user: [],
   loginMessage: null
}
export const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case loginConstants.setLogin:

         return {
            ...state, isLoggedIn: action.payload
         }

      case loginConstants.setUser:

         return {
            ...state, user: action.payload
         }
      case loginConstants.setLoginMsg:
         return {
            ...state, loginMessage: action.payload
         }
      default:
         return {
            ...state
         }

   }
}