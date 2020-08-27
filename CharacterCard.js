import React, { useState, useEffect, useRef } from 'react';
import { attempt } from 'lodash';

export default function CharacterCard(props) {
 const [active, setActive] = useState(false);
 const attemptRef = useRef(props.attempt);
 
 const activate = () => {
    if(!active){
        setActive(true)
        props.activationHandeler(props.value)
    }
 }
 
 useEffect(() => {
      if(attemptRef.current != props.attempt){
         setActive(false);
         attempt.current = props.attempt 
      }
 })

 const className = `card ${active ? 'activeCard': ''}`
 
 return (
    <div className="card" onClick={activate}>{props.value}</div>
 )

}