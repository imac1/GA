import React from 'react';


export default function Contact (props) {
 

  return (
    <li className="contact-item" key={props.id}>
        <h3>{props.firstName} {props.lastName}</h3>
        <img src={props.image}/>
        <h5>{props.gender}</h5>
    


    </li>
) 

}