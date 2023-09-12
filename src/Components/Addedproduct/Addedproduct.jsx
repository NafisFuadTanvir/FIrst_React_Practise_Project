import React from 'react';
import "./added-item.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Addedproduct = ({product,removeCart}) => {

    const {id,name,quantity,img,price}= product;

    return (
        <div className='added-item'>
            <img src={img} alt="" />

            <div className='itemdetails'>
                <p className='item-title'>{name}</p>
                <p>price:<span className='orange'>${price}</span></p>
                <p>order Quantity:<span className='orange'>{quantity}</span></p>
            </div>
            <button onClick={()=>removeCart(id)} className='btn-Details'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Addedproduct;