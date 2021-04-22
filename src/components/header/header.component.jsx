import React from 'react'
import {Link} from "react-router-dom";

import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import CardIconComponent from "../card-icon/card-icon.component";
import CartDropdownComponent from "../cart-dropdown/cart-dropdown.component";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";

import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

import './header.style.scss'

const getSignInOrSignOut = (currentUser) => {
    if (!currentUser) {
        return <Link className='option' to='/signin'>SIGN IN</Link>;
    }
    if (!currentUser.currentUser) {
        return <Link className='option' to='/signin'>SIGN IN</Link>
    }
    if (currentUser.currentUser) {
        return <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>;
    }
}

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                getSignInOrSignOut(currentUser)
            }
            <CardIconComponent/>
        </div>
        {
            hidden ? null : (<CartDropdownComponent/>)
        }
    </div>
);

// Function that allow us to access the states with the state being our reducer ( root reducer )
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
