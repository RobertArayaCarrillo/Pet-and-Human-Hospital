import React, { Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios';


export  function PrincipalForm() {
    //parameters for system use
    const {register,handleSubmit} = useForm();
    //sends parameters to and manages another system
    let navigate = useNavigate()
    const loggedIn = (userLogged,userType,userStoreID) =>{
        let adminPath
        (userType===3) ? (adminPath='/ClientMenu') : (adminPath='/AdmiMenu') 
        navigate(adminPath,{state:{user:userLogged,store:userStoreID}})
    }


    const onSubmit = async(data) =>{
        try{
            const response = await axios.post('http://localhost:3001/registro/createDatosUsuario', data);
            //alert(JSON.stringify(response.data[0].storeID))
            

        } catch(err){
            alert('Invalid User')
        }


    }

  return (
      <Fragment>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
                    <label htmlFor="id" className="form-label">Documento de identidad de la Persona o Animal</label>
                    <input  className="form-control" id="id" placeholder="Documento Identidad"
                    {...register('id',{required:true})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Persona o Animal</label>
                    <input  className="form-control" id="nombre" placeholder="Nombre"
                    {...register('nombre',{required:true})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Edad de la Persona o Animal</label>
                    <input  className="form-control" id="edad" placeholder="Edad"
                    {...register('edad',{required:true})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="problema" className="form-label">Problema de la Persona o Animal</label>
                    <input  className="form-control" id="problema" placeholder="Problema"
                    {...register('problema',{required:true})}/>
                </div>
                <br />
                <div className="col">
                    <label htmlFor="text" className="form-label">Seleccion de Servicio</label>
                    <br />
                    <select className="form-select" defaultValue="Hospital" aria-label="servicio"{...register('servicio',{required:true})}> 
                  
                    <option value= "Hospital">Hospital</option>
                    <option value= 'Vetrinaria'>Veterinaria</option>
                    </select>
                </div>
                <br />
                <div className="mb-3">
                   
                </div>
                <br />
                    <center>
                        <input type='submit' className='btn btn-dark btn-block' value='Mandar a la central'/>
                    </center>

            </form>
      </Fragment>

  )
}