import React from 'react'


import img2 from '../assests/img2.svg'
import BnkCompReuse from '../reusable/BnkCompReuse';

import './discover.css'

export default function Discover() {
    const head1="Unlimited Access";
    const head2=<h3>Login To Your <br/> Account At Any <br/>Time</h3>
    const head3=<p>We have You Covered No mater Where You are <br/> Located . All You need is an Internet Connection <br/>and a Phone NUmber or a Computer</p>
    const head4="Learn More";

    const head3Style={backgroundColor:'white',color:'black'
                       , boxShadow: "5px 5px 30px 5px white"};

    return (
        <div className="BnkDiscoverContainer">
            <div>
                <img src={img2} alt="ad1" className="bnkAbtImage"/>
           </div>
          
           <div className="subBnkAbtContainer">
               <BnkCompReuse head1={head1} head2={head2} head3={head3} head4={head4} head3Style={head3Style}/>
           </div>
           
        </div>
    )
}
