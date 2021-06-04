import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/header';
import Products from './HomePage/Products';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddProduct from './newProduct/AddProduct'
export default function Index() {
   const isLoggedIn = useSelector(state => state.user.isLoggedIn)
   if (isLoggedIn) {
      return (
         <>
            <Switch>
               <Route path="/">
                  <Header />

               </Route>
            </Switch>
            <Switch>
               <Route exact path="/">
                  <Products />
               </Route>
               <Route exact path="/addNew">
                  <AddProduct />
               </Route>
            </Switch>
         </>
      )
   }
   else {
      return <Redirect to="login" />
   }
}
