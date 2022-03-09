import React, {useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import {Button} from 'react-bootstrap';

import Navbar from './components/Navbar';
import Login from './components/Login';
import {Navigate, Component} from 'react-router-dom';
import Calculadora from './components/Calculadora';
import PrivateRoute from './components/PrivateRoute';


const  App = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const isLogged = name && password;

  const fakeAuth = {
    login(name, password, cb) {
      setName(name);
      setPassword(password);
      setTimeout(cb, 100);
    },
    logout(cb) {
      setName();
      setPassword();
      setTimeout(cb, 100);
    },
  };



  
  return(
    <>
      <Navbar/>
      
        
        <Routes>
          <Route path='/' element ={<Login/>}/>
          <Route path='/Calculadora/' element = {<PrivateRoute component={Calculadora} logged={isLogged}/>}/>
        </Routes>

        
        

    </>
   

  );
 
}

export default App;
