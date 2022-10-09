import React, { useContext } from 'react'
import { CartContext, ProductsContext } from './Root'
import Product from '../components/Product'
import { addToDb } from '../utils/fakeDB'
import { toast } from 'react-toastify'

const Shop = () => {

  const products = useContext(ProductsContext)
  const [cart, setCart] = useContext(CartContext);


  const handleAddToCart = (product) =>{

    let newCart = [];
    const exists = cart.find(existingProduct => existingProduct.id === product.id);

    if (!exists) {
        product.quantity = 1;
        newCart = [...cart, product];
    }
    else{
      const rest = cart.filter(restProduct => restProduct.id !== product.id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }

    setCart(newCart)
    addToDb(product.id)
    toast.success('Product Added Successfully', {autoClose: 500});
  }

  return (
    <div className='shop-container'>
      <div className='products-container row-gap-5 lg:row-gap-8'>
        {
          products.map(product => <Product 
            key={product.id} 
            product={product}
            handleAddToCart={handleAddToCart}
            />)
        }
      </div>
    </div>
  )
}

export default Shop
