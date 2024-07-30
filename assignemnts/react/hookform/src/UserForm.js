import React, { useState } from  'react';
import styleee from './Form.module.css';
    
const UserForm = () => {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setcPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { Firstname, Lastname, email, password };
        console.log("Welcome", newUser);
    	setFirstname("");
    	setLastname("");
    	setEmail("");
    	setPassword("");
    };
    
    
    return(
        <>
        <form>
            <div className={styleee.field}>
                <label>Firstname: </label> 
                <input type="text" value={Firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div className={styleee.field}>
                <label>Lastname: </label> 
                <input type="text" value={Lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div className={styleee.field}>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className={styleee.field}>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            
            </div>
            <div className={styleee.field}>
                <label>confirm Password: </label>
                <input type="password" value={cpassword} onChange={ (e) => setcPassword(e.target.value) } />
            
            </div>
        </form>
        <p>first name: <h5 className={styleee.answer}>{Firstname}</h5></p>
        <p>last name: <h5 className='answer'>{Lastname}</h5></p>
        <p>email: <h5 className='answer'>{email}</h5></p>
        <p>password: <h5 className='answer'>{password}</h5></p>
        <p>confrim password: <h5 className='answer'>{cpassword}</h5></p>
        
        </>
    );
};
    
export default UserForm;
