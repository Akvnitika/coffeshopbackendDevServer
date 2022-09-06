import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

//import products from '../products'

// this is all temproary as later on when we will be using redux
// and make our request from what is called action creators

const HomeScreen = () => {
  // in class based componet you define state in constructer
  //  we use useState hook for using state in functional component
  // cont [stateName, methodToSetStateValus] =useState(default value'empty array in this case')

  const [products, setProducts] = useState([])

  // useEffect hook is used to make a request to the backend
  // the date in the arrow function will run as soon as the component runs
  // we want to keep our request in the arrow function because we want
  // the requret to fire up as soon as the component loads
  // useEffect(() => { console.log('hello')})
  // since we cant make the arrow function in useEffect as async
  // so we have to create a separate function within use effect

  useEffect(() => {
    const fetchProducts = async () => {
      //const res = await axios.get('/api/products')
      // the res has a data object assigned to it so that we have
      // access to data i.e. res.data

      // to make it simple we desructure the data directly
      const { data } = await axios.get('/api/products')
      // add a proxy for local host 5000 else it will look at 3000

      // once we fetch data we want to set it to products
      // we want it to change it from this empty array useState([]) to this data we get back

      setProducts(data)
    }

    // call fetchProducts

    fetchProducts()

    // as a second argument to useEffect we have to pass an array of dependencies
    // i.e. any thing we want to fire off useEffect when it changes
  }, [])

  return (
    <>
      <h1> Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
