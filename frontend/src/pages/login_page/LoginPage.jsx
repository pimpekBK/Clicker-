import { useRef, useState } from 'react';
import styles from './LoginPage.module.css'
import {login, logout, register} from '../../services/authServices/auth.js'
import { getMe } from '../../services/userServices/user.js';
import { connectToServer, disconnectFromServer, sendMessage } from '../../services/websocket.js';

export default function LoginPage(){
    const[bool, setbool] = useState(true)
    const emailRef = useRef()
    const nickRef = useRef()
    const passwordRef = useRef()

    function SubmitLogin(){
        console.log(login(emailRef.current.value , passwordRef.current.value));
        
    }
    function SubmitRegister(){ 
        console.log(register(emailRef.current.value ,nickRef.current.value, passwordRef.current.value));
        
    }

    function ChangeBool(){
        setbool(!bool)
    }
    
    if(bool) 
        //login
        return(
            <>
                <button onClick={() => getMe()}>me</button>
                <button onClick={() => logout()}>logout</button>
                <button onClick={() => connectToServer()}>connect</button>
                <button onClick={() => disconnectFromServer()}>disconect</button>
                <button onClick={() => sendMessage("test")}>test message</button>

                <div className={styles.loginbg}>
                    <h1 >Login</h1>
                    <div className={styles.bg2}>
                        <h4>email</h4>
                        <input ref={emailRef}  title='email'/>
                        <h4>password</h4>
                        <input ref={passwordRef} title='password'/>
                        <button className={styles.submit} onClick={SubmitLogin}>Submit</button>   
                        <a href='#' className={styles.register} onClick={ChangeBool}>Register</a>
                    </div>
                </div>
            </>
        );
        else
        //register
        return(
            <>
                <div className={styles.registerbg}>
                    <h1 >Register</h1>
                    <div className={styles.bg2}>
                        <h4>nick</h4>
                        <input ref={nickRef} title='email'/>
                        <h4>email</h4>
                        <input ref={emailRef} title='password'/>
                        <h4>password</h4>
                        <input ref={passwordRef} title='password'/>
                        <button className={styles.submit} onClick={SubmitRegister}>Submit</button>
                        <a href='#' className={styles.register} onClick={ChangeBool}>Login</a>   
                    </div>    
                </div>
            </>
        );     

        
}