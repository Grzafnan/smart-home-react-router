import React, { createContext, useState } from 'react';
import Header from '../components/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
import {useLoaderData} from 'react-router-dom'

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

const Root = () => {
  const {products, initialCart} = useLoaderData();

  const [cart,setCart] = useState(initialCart);

  return (
      <ProductsContext.Provider value={products}>
        <CartContext.Provider value={[cart, setCart]}>
          <Header />
          <Outlet/>
          <Footer />
        </CartContext.Provider>
      </ProductsContext.Provider>
  );
};

export default Root;