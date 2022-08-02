import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { HospitalForm } from './HospitalForm'
import { useLocation } from 'react-router-dom';


export  function Hospital() {
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
                        <HospitalForm/>
                    </div>
                    
            </div>
          </div>
        </header>
    </Fragment>

  )
}