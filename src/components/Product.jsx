import React from 'react'

const Product = ({product,handleAddToCart}) => {
  const { name, picture, price, category } = product
  return (
    <div className='product-container'>
      <img
        className='product-img'
        src={picture}
        alt=''
      />
      <p className='product-name'>{name}</p>
      <p className='text-gray-700 '>Category: {category}</p>
      <p className='text-gray-700 font-bold'>Price: {price}$</p>
      <button
      onClick={() =>handleAddToCart(product)}
        type='button'
        className='add-to-cart-btn'
      >
        Add To Cart
      </button>
    </div>
  )
}

export default Product
