import React from 'react';
import {connect} from 'react-redux'
import {selectCartItems} from "../../redux/cart/cart.selectors";

import CustomeButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss'

const CartDropdownComponent = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomeButton>GO TO CHECKOUT</CustomeButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdownComponent);
