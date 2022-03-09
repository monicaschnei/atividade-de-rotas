import React, {useState} from 'react';
import {Navigate, Component} from 'react-router-dom';


const PrivateRoute = ({Component}) => {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const isLogged = name && password;
    return (
        isLogged ? <Component name={name} password={password}/> : <Navigate to='/'/>
    )
  }
  

export default PrivateRoute;