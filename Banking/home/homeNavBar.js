import React from 'react'
import { Link,useHistory } from 'react-router-dom'

import NavbarMenusList from './navbarMenusList'


import './homeCSS/homeNavBar.css'

export default function HomeNavbar() {

    const history=useHistory();

    const SignPageHandler=()=>{
        history.push('/SignIn');
    }

    return (
        <div className="BnkHomeContainer">
            <div className="BnkHomeHeading">
                <Link to="/" className="BnkHomeHeading">Bank</Link>
            </div>
            <div className="BnkHomeNavMenuContainer">
                {NavbarMenusList.map((item,index)=>{
                   return(
                       <div  className="BnkHomeNavMenus" key={index}>
                          <Link to={item.to} className="BnkHomeNavMenus">{item.name}</Link>
                        </div>
                   )
                })}
            </div>
                <button className="BnkHomeNavBtn"  onClick={SignPageHandler}>Sign In</button>
        </div>
    )
}
