import React from 'react'

import img1 from '../assests/img1.svg'
import BnkCompReuse from '../reusable/BnkCompReuse';

import './aboutCss/about.css'

export default function About() {

    const head1="Premium Bank";
    const head2=<h3>Unlimied <br/> Transaction With <br/>Zero Fees</h3>
    const head3=<p>Get access To our exclusive apps that alllows you <br/> to send Ultimated Transactions without getting <br/>charged any fees</p>
    const head4="Get Started";

    const head1Style={color:'black'};
    const head2Style={color: 'black'};


    return (
        <div className="BnkAbtContainer">
           <div className="subBnkAbtContainer">
               <BnkCompReuse head1={head1} head2={head2} head3={head3} head4={head4} head1Style={head1Style} head2Style={head2Style}/>
           </div>
           <div>
                <img src={img1} alt="ad1" className="bnkAbtImage"/>
           </div>
          
        </div>
    )
}
