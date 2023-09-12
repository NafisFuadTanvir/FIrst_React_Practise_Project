import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Addedproduct from '../Addedproduct/Addedproduct';
import "./addedcontainer.css"

const Orders = () => {

    const initialcart= useLoaderData();
    const [cart,setCart]= useState(initialcart);

    const removeCart=(id)=>{

          const remaining= cart.filter(product=> product.id!==id)
          setCart(remaining);

    }

    return (
        <div className='main-container'>

            <div className='addedcontainer'>

                {
                    cart.map(product=>
                     <Addedproduct key={product.id}
                      product={product} removeCart={removeCart}>
                        

                    </Addedproduct>)
                }
            </div>
            
            <div className='cart'>

                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Orders;