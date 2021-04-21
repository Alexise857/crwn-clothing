import React, {Component} from 'react';

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import './card-icon.styles.scss'

import {connect} from 'react-redux'
import {toogleCartHidden} from "../../redux/cart/cart.actions";

const CardIconComponent = ({toogleCartHidden}) => (
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden()) // functions that triggers the dispatch of toogle cart hidden
})

export default connect(
    null,
    mapDispatchToProps
)(CardIconComponent);
