import React, { useState } from  'react';
import styleee from './Form.module.css';
    
const UserForm = () => {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [cpassword, setcPassword] = useState("");
    const [fnameError, setFNameError] = useState("");
    const [lnameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [matchError, setmatchError] = useState("");
  
    const handleFName = (e) => {
        setFirstname(e.target.value)
        if(e.target.value.length < 1) {
            setFNameError("Title is required!");
        } else if(e.target.value.length < 2) {
            setFNameError("First Name must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setFNameError("");
        }
    }
    const handleLName = (e) => {
        setLastname(e.target.value)
        if(e.target.value.length < 1) {
            setLNameError("Title is required!");
        } else if(e.target.value.length < 2) {
            setLNameError("Last Name must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setLNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 1) {
            setEmailError("Title is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }
    const handlePass = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 1) {
            setpasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setpasswordError("Password must be 8 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setpasswordError("");
        }
    }
    const handlePassmatch = (e,password) => {
        setcPassword(e.target.value)
        if(e.target.value != password) {
            setmatchError("Passwords don't match");
        } else {
            setmatchError("");
        }
    }

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
                <input type="text" value={Firstname} onChange={ handleFName } />
            </div>
            <div>{fnameError}</div>
            <div className={styleee.field}>
                <label>Lastname: </label> 
                <input type="text" value={Lastname} onChange={ handleLName } />
            </div>
            <div className={styleee.errorm}>{
                    lnameError ?
                    <p>{ lnameError }</p> :
                    ''
                }</div>
            <div className={styleee.field}>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ handleEmail } />
            </div>
            <div>{
                    emailError ?
                    <p className={styleee.errorm}>{ emailError }</p> :
                    ''
                }</div>
            <div className={styleee.field}>
                <label>Password: </label>
                <input type="password" value={password} onChange={ handlePass } />
            
            </div>
            <div className={styleee.errorm}>{
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }</div>
            <div className={styleee.field}>
                <label>confirm Password: </label>
                <input type="password" value={cpassword} onChange={ handlePassmatch } />
            
            </div>
            <div className={styleee.errorm}>{
                    matchError ?
                    <p>{ matchError }</p> :
                    ''
                }</div>
        </form>
        <p>first name: <h5 className={styleee.answer}>{Firstname}</h5></p>
        <p>last name: <h5 className={styleee.answer}>{Lastname}</h5></p>
        <p>email: <h5 className={styleee.answer}>{email}</h5></p>
        <p>password: <h5 className={styleee.answer}>{password}</h5></p>
        <p>confrim password: <h5 className={styleee.answer}>{cpassword}</h5></p>
        
        </>
    );
};
    
export default UserForm;
