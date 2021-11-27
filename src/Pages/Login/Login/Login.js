import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Registration from '../../Registration/Registration';

const Login = () => {
     const { signInUsingGoogle} = useAuth();
    return (
        
        <div>
           <h2>Please Login</h2> 
           <button onClick={signInUsingGoogle} className="btn btn-warning">Google SignIn</button>
           <Registration></Registration>
        </div>
    );
};

export default Login;