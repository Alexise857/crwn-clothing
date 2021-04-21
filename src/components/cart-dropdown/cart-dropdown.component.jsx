import React from 'react';

import CustomeButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss'

const CartDropdownComponent = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomeButton>GO TO CHECKOUT</CustomeButton>
        </div>
    );
};

export default CartDropdownComponent;
