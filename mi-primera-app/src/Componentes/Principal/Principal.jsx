import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { PrincipalForm } from './PrincipalForm'


export  function Principal() {
  return (
    <Fragment>
        <header className="App-header">
        <div style={{ backgroundImage: 'url(require("./Imagenes/ImagenMenu.jpg"))' }}>
            <div className='container mx-auto'>
                    <div className='form-div'>
                        <h1 className ="display-1">Bienvenido a Nuestro Servicio</h1>
                        <br/>
                        <PrincipalForm/>
                    </div>
                    
            </div>
          </div>
        </header>
    </Fragment>

  )
}