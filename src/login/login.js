import React from 'react';
import './login.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../redux/actions/loginAction'
export default function Login() {
   const dispatch = useDispatch()
   const loggedIn = useSelector(state => state.user.isLoggedIn)
   const loginMsg = useSelector(state => state.user.loginMessage)
   const handleSubmit = async (e) => {

      e.preventDefault()
      const data = new URLSearchParams()
      for (let pair of new FormData(e.target)) {
         data.append(pair[0], pair[1])
      }
      dispatch(loginAction(data))




   }
   if (!loggedIn) {
      return (
         <div className="loginMainCont">
            <main className="form-signin" >
               <form onSubmit={handleSubmit}>
                  <img className="mb-4" src="https://img.icons8.com/bubbles/2x/admin-settings-male.png" alt="" width="100" height="100" />
                  <h1 className="h3 mb-3 fw-normal">Please Login</h1>
                  <p>{loginMsg}</p>
                  <div className="form-floating">
                     <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                     <label >Email address</label>
                  </div>
                  <div className="form-floating">
                     <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
                     <label >Password</label>
                  </div>

                  <div className="checkbox mb-3">
                     <label>
                        <input type="checkbox" value="remember-me" /> Remember me
      </label>
                  </div>
                  <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>

               </form>
            </main>
         </div>
      )
   }
   else {
      return <Redirect to="/" />
   }

}
