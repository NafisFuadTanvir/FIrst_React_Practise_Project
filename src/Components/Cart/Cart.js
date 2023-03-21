import React from 'react';

const Cart = (props) => {

    const {cart}=props;
    return (
        <div>
            <h2>order summury </h2>
        <p>selected items:{cart.length}</p>
        </div>
    );
};

export default Cart;