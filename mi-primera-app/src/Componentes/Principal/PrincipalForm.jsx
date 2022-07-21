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
            const response = await axios.post('http://localhost:3001/users/login', data);
            //alert(JSON.stringify(response.data[0].storeID))
            const userLogged = response.data[0].identification
            const userType = response.data[0].userType
            const userStoreID = response.data[0].storeID

            loggedIn(userLogged,userType,userStoreID)

        } catch(err){
            alert('Invalid User')
        }


    }

  return (
      <Fragment>
          <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Persona o Animal</label>
                    <input  className="form-control" id="nombre" placeholder="Nombre"
                    {...register('nombre',{required:true})}/>
                </div>
                <br />
                <div className="col">
                    <label htmlFor="text" className="form-label">Seleccion de Servicio</label>
                    <br />
                    <select className="form-select" defaultValue="Hospital" aria-label="Servicio"{...register('Servicio',{required:true})}> 
                  
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