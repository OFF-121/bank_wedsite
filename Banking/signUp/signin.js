import React from 'react'
import Button from '../reusable/button'


import './sign.css'
export default function SignIn() {
    return (
        <div className="BNKsigninContainer">            
            <section className="BNKsigninSubContainer">
                <div className="SigninHeaderTxt">
                    <h3>Signin To Your Account</h3>
                </div>
                <div className="bnkSignininside">
                    <h4>Email</h4>
                    <input type="email" required  className="BnkSigninInput"/>
                </div>
                <div  className="bnkSignininside">    
                    <h4>Password</h4>
                    <input type="password" required  className="BnkSigninInput"/>
                </div>
                <Button name="SignIn" className="BnkSignInBtn" />
                <h3 className="bnkSigninForget">Forgoten Account?</h3>
            </section>
        </div>
    )
}
