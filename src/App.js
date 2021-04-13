import React from "react";
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'

import './App.css';

import HomePage from "./pages/homepages/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {setCurrentUser} from "./redux/user/user.actions";

import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            console.log({user})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopComponent}/>
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        )
    }
}

// Dispatch is a way for redux to know that whatever object you are passing me, is
// going to be an action object that I'm going to pass to every reducer
const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
