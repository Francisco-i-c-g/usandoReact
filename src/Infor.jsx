import PropTypes from "prop-types";
import "./style.css";
import React, {useState} from "react";

export function Informacion({ nombre, datos, firma }) {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{datos}</p>
      <h3>{firma}</h3>
    </div>
  );
}

export function Button({ txt }) {
  return <button>{txt}</button>;
}
Button.propTypes = {
  txt: PropTypes.string,
};

export function Tajeta({ titulo, contenido }) {
  return (
    <div className="estilos">
      <h1>{titulo}</h1>
      <p>{contenido}</p>
    </div>
  );
}

export function CambioDeColor({valor}) {
  return (
    
    <div style={valor ?{background: 'green'}:{background: 'red'} }>
        
      <h1>Cambio de color</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni facere
        error ea quis sequi libero, quas saepe. Repellendus, voluptas. Ex
        voluptate magni molestias sint? Voluptates sunt labore delectus! Iure,
        impedit?
      </p>
    </div>
  );
}

export function CambiarNombre(){

    const [nombre, setNombre] = useState("francisco");

    function CambiarNombre (event){
        setNombre(event.target.value);
    }


    return(
        <div>
        <h1>Mi primer componente</h1>
        
        <p>Mi nombre es:{nombre}</p>

        <input type="text" onChange={CambiarNombre}></input>
        </div>
    )






  }


