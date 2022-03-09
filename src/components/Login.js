import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import Calculadora from './Calculadora';



const Login = ({auth}) => {


    const [name, setName] = useState ();
    const [password, setPassword] = useState();
    const navigate  = useNavigate ();

    
    const handleSubmit = () => {
       auth.login(name, password, navigate ('/Calculadora/'));
       console.log ("submit");
    };

return(
<>
    <Form>
    <Form.Group className="mb-3" controlId="FormName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName (e.currentTarget.value)} placeholder="name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="FormPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword (e.currentTarget.value)} rows={3} />
    </Form.Group>
    </Form>

        <Button type="submit" onClick={handleSubmit}>Entrar</Button>    
  
        
  

</>
);

};

export default Login;