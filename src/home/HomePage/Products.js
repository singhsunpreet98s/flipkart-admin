import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
// import { data } from './data';
import { fetchProd } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux'
const divStyle = {
   padding: 50
}
export default function Products() {
   const dispatch = useDispatch()
   const loading = useSelector(state => state.products.loading)
   const products = useSelector(state => state.products.products)
   useEffect(() => {
      dispatch(fetchProd())
   }, [])
   if (loading) {
      return <div>loading</div>
   }
   else {
      return (
         <div style={divStyle}>
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Sno</th>
                     <th>BRAND</th>
                     <th>NAME</th>
                     <th>PRICE</th>
                     <th>DISCOUNT</th>
                     <th>UNITS SOLD</th>
                     <th>ACTIONS</th>

                  </tr>
               </thead>
               <tbody>
                  {
                     products.map((item, index) => {
                        return (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.brand}</td>
                              <td>{item.productTitle}</td>
                              <td>{item.price}</td>
                              <td>{item.discount}</td>
                              <td>00</td>
                              <td style={{ justifyContent: 'space-evenly', display: 'flex' }}><Button variant="primary">Edit</Button><Button variant="danger">Delete</Button></td>
                           </tr>
                        )
                     })
                  }
               </tbody>
            </Table>
         </div>
      )
   }
}
