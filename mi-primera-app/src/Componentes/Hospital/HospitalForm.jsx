import React, { Fragment} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import axios from 'axios';


export  function HospitalForm() {
    
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
            loggedIn()
        } catch(err){
            alert('Invalid User')
        }
    }

  return (
      <Fragment>
          <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="doctor" className="form-label">Doctor que atiende</label>
                    <input  className="form-control" id="doctor" placeholder="Doctor"
                    {...register('id',{required:true})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="observaciones" className="form-label">Observaciones</label>
                    <input  className="form-control" id="observaciones" placeholder="Observaciones"
                    {...register('nombre',{required:true})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Medicacion</label>
                    <input  className="form-control" id="edad" placeholder="Edad"
                    {...register('edad',{required:true})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="problema" className="form-label">Costo</label>
                    <input  className="form-control" id="problema" placeholder="Problema"
                    {...register('problema',{required:true})}/>
                </div>
                <br />
                <div className="mb-3">
                   
                </div>
                <br />
                    <center>
                        <input type='submit' className='btn btn-dark btn-block' value='Facturar'/>
                    </center>

            </form>
      </Fragment>

  )
}