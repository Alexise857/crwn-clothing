import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {setCurrentUser} from "./redux/user/user.actions";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

import HomePage from "./pages/homepages/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            console.log({userAuth});
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            }
            setCurrentUser({currentUser: userAuth});
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    redirectComponent = (user) => {
        if (!user) {
            return <SignInAndSignUpPage/>
        }
        if (!user.currentUser) {
            return <SignInAndSignUpPage/>
        }
        if (user.currentUser) {
            return <Redirect to={'/'}/>
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopComponent}/>
                    <Route exact
                           path='/signin'
                           render={() => this.redirectComponent(this.props.currentUser)}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

// Dispatch is a way for redux to know that whatever object you are passing me, is
// going to be an action object that I'm going to pass to every reducer
const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
