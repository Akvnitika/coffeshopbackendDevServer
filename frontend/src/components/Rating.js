import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  // take the props and destructure it
  return (
    <div className='rating'>
      {/* the span will represent each one of the star, we need 5 of these */}
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      {/* since it both color style = {{color: color}} we could do style = {{color}}  */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      {/* Span to display the text */}
      {/* <span>{text? text : '' }</span> */}
      <span>{text && text}</span>
    </div>
  )
}
// passing default prop
Rating.defaultProps = {
  color: '#f8e825',
}

// prop types to define the type of props e.g. string, number. It will type check for the inputs

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
