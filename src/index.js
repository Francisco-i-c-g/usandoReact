import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greeting} from './Greeting'
import { Button, Informacion, Tajeta, CambioDeColor, CambiarNombre } from './Infor'
import { CColor } from './CambioC'
import {Post, ButtonUsage} from './Promes'


const root = ReactDOM.createRoot(document.getElementById('root'))

const nombre = "franciscoI"

const arreglo1 =[

    {   id: 1,
        nombre: 'Francisco',
        apodo: 'panchito'
    },
    {
        id:2,
        nombre: 'Monica',
        apodo: 'moni'
    },
    {
        id:3,
        nombre: 'jose',
        apodo: 'jos'
    }
]




root.render(
    <>

    {arreglo1.map((user,i) =>{
        return <h1 key={i} >{user.nombre}</h1>
    } )}






</>
)
