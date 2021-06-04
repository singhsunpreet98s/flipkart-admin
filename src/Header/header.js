import React from 'react'
import { Link, useLocation } from 'react-router-dom';
const navlinks = [
   {
      name: "Home",
      ref: "/"
   },
   {
      name: "Orders",
      ref: "/orders"
   },
   {
      name: "Wallet",
      ref: "/wallet"
   },
   {
      name: "Profile",
      ref: "/profile"
   },
   {
      name: "Add Product",
      ref: "/addNew"
   },
]
export default function Header() {
   const links = () => {

      return navlinks.map((item, index) => {

         return <li key={index} className="nav-item"><Link to={item.ref} className={(item.ref === location.pathname) ? "nav-link active" : "nav-link"}>{item.name}</Link></li>
      })
   }
   const location = useLocation()
   console.log(location.pathname)
   return (
      <div className="container">
         <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
               <svg className="bi me-2" width="40" height="32"></svg>
               <span className="fs-4">AdminPanel</span>
            </Link>

            <ul className="nav nav-pills">
               {links()}
            </ul>
         </header>
      </div>

   )
}
