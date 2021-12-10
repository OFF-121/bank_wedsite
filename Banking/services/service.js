import React from 'react'

import './service.css'
import BnkServicesList from './servicesList'


export default function Service() {
    return (
        <div className="bnkServiceContainer">
            <h1 className="bnkServiceHeader">Our Services</h1>
                <div className="BnkServiceListItems">
                    {BnkServicesList.map((item, index) => {
                        return (
                            <div className="subBnkServiceContainer" key={index}>
                                <img src={item.img} className="bnkServiceImg" alt="serv" />
                                <p>{item.heading}</p>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
