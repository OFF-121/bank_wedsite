import React from 'react'
import { BrowserRouter ,Switch,Route} from 'react-router-dom'

import HomeNavBar from './home/homeNavBar';
import Home from '../Banking/home/home';
import About from './about/about';

import './BankContainer.css'
import Discover from './discover/discover';
import Service from './services/service';
import SignUp from './signUp/signup';
import SignIn from './signUp/signin';

export default function BankContainer() {
    return (
        <BrowserRouter>
         <HomeNavBar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/Discover" exact component={Discover}/>
                <Route path="/Service" exact component={Service}/>
                <Route path="/Signup" exact component={SignUp}/>
                <Route path="/Signin" exact component={SignIn}/>
            </Switch>
        </BrowserRouter>
    )
}
