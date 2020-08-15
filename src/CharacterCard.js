import React, { useState } from 'react';

export default function CharacterCard(props) {
 const [active, setActive] = useState(false);
 
 const activate = () => {
    if(!active){
        setActive(true)
        props.activationHandeler(props.value)
    }
 }
 const className = `card ${active ? 'activeCard': ''}`
 
 return (
    <div className="card" onClick={activate}>{props.value}</div>
 )

}