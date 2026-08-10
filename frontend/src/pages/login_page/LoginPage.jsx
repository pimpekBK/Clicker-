import { useRef, useState } from 'react';
import styles from './LoginPage.module.css'
import login from '../../services/auth'

export default function LoginPage(){
    const[bool, setbool] = useState(true)
    const emailRef = useRef()
    const nickRef = useRef()
    const passwordRef = useRef()

    function SubmitLogin(){
        login(emailRef.current.value , passwordRef.current.value)
    }
    function SubmitRegister(){
        register(emailRef.current.value ,nickRef.current.value, passwordRef.current.value)
    }

    function ChangeBool(){
        setbool(!bool)
    }
    
    if(bool) 
        //login
        return(
            <>
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