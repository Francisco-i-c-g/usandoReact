import React, {useState} from 'react';


export function CColor(){

    const [color, setColor] = useState("red");

    function cambiarColor(){
       color=="red" ? setColor("orange"):setColor("red")

    }

    return(
        <div>
            <h1 >Cambio de Color</h1>
        
            <button onClick={cambiarColor}>Cambiar</button>
            <div style={{background: color}}>COLOR</div>
        </div>
    )



}