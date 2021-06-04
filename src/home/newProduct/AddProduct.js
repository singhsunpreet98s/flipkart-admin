import axios from 'axios';
import React, { useState } from 'react';
import { Form, Col, Row, Button, Modal } from 'react-bootstrap';
import './addProd.css'
export default function AddProduct() {
   const [message, setMessage] = useState("");
   const [showModel, setShowModel] = useState(false)
   const MyVerticallyCenteredModal = (props) => {
      return (
         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >


            <Modal.Body>
               <h4>{message}</h4>

            </Modal.Body>
            <Modal.Footer>
               <Button onClick={props.onHide}>OK</Button>
            </Modal.Footer>
         </Modal >
      );
   }

   const handleSubmit = async (e) => {
      const token = localStorage.getItem('token')
      const url = "http://localhost:5000/product/addProd"
      e.preventDefault();
      const data = new URLSearchParams();
      for (let pair of new FormData(e.target)) {
         data.append(pair[0], pair[1]);
      }
      const res = await axios.post(url, data, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
      setMessage(res.data.msg)
      setShowModel(true)
      e.target.reset();
   }
   return (
      <>
         <MyVerticallyCenteredModal
            show={showModel}
            onHide={() => setShowModel(false)}
         />
         <div className="addProdCont">
            <Form onSubmit={handleSubmit}>
               <Form.Group controlId="exampleForm.ControlInput1" >
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter New Product Name" required name="productTitle" />
               </Form.Group>
               <br />
               <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Brand Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Brand Name" required name="brand" />
               </Form.Group>
               <br />
               <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control as="textarea" rows={3} required name="productDesc" />
               </Form.Group>
               <br />
               <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Image Url</Form.Label>
                  <Form.Control type="text" placeholder="Enter Image url" required name="image" />
               </Form.Group>
               <br />
               <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                     <Row>
                        <Col>
                           <Form.Label>Price</Form.Label>
                           <Form.Control type="number" placeholder="Enter Price" required name="price" />
                        </Col>
                        <Col>
                           <Form.Label>Discount</Form.Label>
                           <Form.Control type="number" placeholder="Enter Discount" required name="discount" />
                        </Col>
                     </Row>
                  </Form.Group>
               </Form.Row>
               <br />
               <Form.Group controlId="exampleForm.ControlInput1">

               </Form.Group>
               <br />
               <Button type="submit" variant="primary" >SUBMIT</Button>
            </Form>
         </div>
      </>
   )
}
