import { useState } from 'react';
import styles from './login.module.css'

export default function LoginModal(){
    const[bool, setbool] = useState(true)
    if(bool)    
        return
            <>
                <div className={styles.bg}>
                    <h1 >Login</h1>
                    <div className={styles.bg2}>
                        <h4>email</h4>
                        <input  title='email'/>
                        <h4>password</h4>
                        <input  title='password'/>
                        <button className={styles.submit}>Submit</button>   
                        <a href='#' className={styles.register}>Register</a>               
                    </div>
                </div>
            </>
    }   