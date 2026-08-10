import { useState } from 'react';
import styles from './LoginPage.module.css'
import LoginModal from './login/login.jsx';
import RegisterModal from './register/register.jsx'

export default function LoginPage(){

    return(
        <>
            <div>
                <LoginModal/>
                <RegisterModal/>
                
            </div>
        </>
    );
}