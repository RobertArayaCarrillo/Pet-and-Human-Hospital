import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { VeterinariaForm } from './VeterinariaForm'
import { useLocation } from 'react-router-dom';


export  function Veterinaria() {
  const {state} = useLocation();
    console.log(state)
    const nombre =state.nombre;
  return (
    <Fragment>
        <header className="App-header">
        <div style={{ backgroundImage: 'url(require("./Imagenes/ImagenMenu.jpg"))' }}>
            <div className='container mx-auto'>
                    <div className='form-div'>
                        <h1 className ="display-1">Paciente: {nombre}</h1>
                        <br/>
                        <VeterinariaForm/>
                    </div>
                    
            </div>
          </div>
        </header>
    </Fragment>

  )
}