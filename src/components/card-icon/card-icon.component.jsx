import React, {Component} from 'react';

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import './card-icon.styles.scss'

import {connect} from 'react-redux'
import {toogleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItems} from "../../redux/cart/cart.selectors";

const CardIconComponent = ({toogleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden()) // functions that triggers the dispatch of toogle cart hidden
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItems(state)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardIconComponent);
