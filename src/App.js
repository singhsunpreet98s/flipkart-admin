import React, { useEffect } from 'react';
import './App.css';
import Home from './home/index'
import Login from './login/login'
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginConstants } from './redux/constants'
function App() {
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.user.isLoggedIn)
  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      dispatch({ type: loginConstants.setLogin, payload: true })
      dispatch({ type: loginConstants.setUser, payload: localStorage.getItem('user') })
    }
  }, [])
  if (loggedIn) {
    return <Home />
  }
  else {
    return <Login />
  }
  // return (
  //   <>
  //     <Switch>
  //       <Route exact path="/login" component={Login} />
  //     </Switch>
  //     {
  //       (loggedIn &&
  //         <Switch>
  //           <Route exact path="/" component={Home} />
  //         </Switch>
  //       )
  //     }
  //   </>
  // );
}

export default App;
