import React from 'react'


import Button from './button'
import './BnkCompReuse.css'

export default function BnkCompReuse(props) {
    return (
        <div className="OverallComp">
            <div className="BnkAbtHeader1" style={props.head2Style}>{props.head1}</div>
            <div className="BnkAbtHeader2" style={props.head1Style}>{props.head2}</div>
            <p className="BnkAbtHeader3" style={props.head3Style}>{props.head3}</p>
            <Button name={props.head4} className="BnkAbtBtn" />
        </div>
    )
}
