import React, { useState, useEffect } from "react";
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


  
  const [cart,setCart]= useState([]);
  const handleAddToCart=(product)=>{

    const newProduct= [...cart,product];
    setCart(newProduct);
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
