import { useState } from 'react';
import styles from './register.module.css'

export default function RegisterModal(){
    const[bool, setbool] = useState(true)
    if(bool)          
        return(
            <>
                <div className={styles.bg}>
                    <h1 >Register</h1>
                    <div className={styles.bg2}>
                        <h4>nick</h4>
                        <input  title='email'/>
                        <h4>email</h4>
                        <input  title='password'/>
                        <h4>password</h4>
                        <input  title='password'/>
                        <button className={styles.submit}>Submit</button>
                        <a href='#' className={styles.register}>Login</a>   
                    </div>    
                </div>
            </>
        );
    }   