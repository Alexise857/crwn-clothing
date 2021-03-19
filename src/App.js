import React from "react";
import {Route, Switch} from 'react-router-dom'

import './App.css';

import HomePage from "./pages/homepages/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopComponent}/>
            </Switch>
        </div>
    );
}

export default App;
