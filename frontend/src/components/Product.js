import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} varient='top' />
      </Link>

      <Card.Body>
        <Link className='link' to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          {/* <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div> */}

          {/* // rating takes two props value and text */}

          <Rating
            // color='red' - we dont want to pass color here, we want to pass a default prop in the component
            value={product.rating}
            text={`${product.numReviews} reviews`}
            //text= {10} - this will log console error for default Prop types expect a string passed a number
          />
        </Card.Text>

        <Card.Text as='h3'>£{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

// my-3 margin at top and bottom
// p-3 padding all around
export default Product
