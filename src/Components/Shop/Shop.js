import React, { useState, useEffect } from "react";
import { addToDb, getStoredCard} from '../../utilities/fakedb';
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import "./Shop.css";


const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 
   
  useEffect(()=>{

   const storedCart= getStoredCard();
   const savedcart=[];

    for(const id in storedCart){

        const addededproduct= products.find(product=>product.id===id);
          
        if(addededproduct){

          const quantity= storedCart[id];
          addededproduct.quantity= quantity;
          savedcart.push(addededproduct);
        }
        
    }

    setCart(savedcart);

  },[products])

  
  const [cart,setCart]= useState([]);

  const handleAddToCart = (product) => {
   
    let newCart = [];
    
    const exists = cart.find(pd => pd.id === product.id);
    if (!exists) {
        product.quantity = 1;
        newCart = [...cart, product]
    }
    else {
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== product.id);
        newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id)
}

  return (
    <div className="main-container">

      <div className="product">
        {
            products.map(product=><Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            
            ></Product>)
        }
      </div>


      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
