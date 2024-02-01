import {VscBug} from 'react-icons/vsc'
import Button from '@mui/material/Button';
import * as React from 'react';

export const Post = () =>{

 
    return(
        <>
        <button onClick={()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(function datos (data) {console.log(data)} )

        }}><VscBug /> Traer Datos</button>

        <p> DATOS</p>
        
        </>
    )

}

export function ButtonUsage() {
    return <Button variant="contained">Hello world</Button>;
  }