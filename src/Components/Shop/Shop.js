import React, { useState, useEffect } from "react";
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
        <h2>order summury </h2>
        <p>selected items:{cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
