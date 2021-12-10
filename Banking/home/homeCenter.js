import React from 'react'



import './homeCSS/homecenter.css'

export default function HomeCenter() {
   
    const BnkleftIcon= <i class="far fa-hand-point-right"></i>

    return (
        <div className="BnkHomeCenter">
            <div className="bnkHomeCenterContainer">
                <h1 className="BnkHomeCenterHeader">Virtual Banking Made Easy</h1>
                <p className="BnkHomeCenterpara">Sign up For a New Account Today and receive $250 <br />
                    in credits towards your Next Payment</p>
                <button className="BnkHomeCenterBtn">Get Started {BnkleftIcon}</button>
                
            </div>
        </div>
    )
}
