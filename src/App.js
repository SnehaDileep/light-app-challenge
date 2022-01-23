import React, { useState } from "react";

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [style, setStyle] = useState("phase1");
  const [isOff, setIsOff] = useState(true);

   
  const changeStyle = () => {
     
 
    setStyle("phase2");

 };


 return (
   <>
   
     <div className={style}> 
       <button className="button" onClick={changeStyle }>
       click here</button> 
       <button className="button2" onClick={() =>  setIsOff(!isOff)}>{ isOff ? 'ON' : 'OFF' }</button>
     </div>
   </>
 );
};




export default App;
