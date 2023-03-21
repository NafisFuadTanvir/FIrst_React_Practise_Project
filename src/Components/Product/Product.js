import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    
    const {handleAddToCart}=props;
    const {name,img,seller,price,ratings} = props.product;
      
   
    return (
        <div className='pro'>
           <img src={img} alt="" />
          
           <div className='product-info'>

           <p className='productName'>{name}</p>
           <p>price:${price}</p>
           <p><small>Seller:{seller}</small></p>
           <p><small>Ratings:{ratings}</small></p>
           </div>

           <button onClick={()=>handleAddToCart(props.product)} className='btn'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
         </div>
         
    );
};

export default Product;