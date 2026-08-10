import { useState, useEffect } from 'react';
import styles from './HpBarr.module.css'

export default function HpBarr(object){
    
    console.log(object.trigger);

    return(
        <>
            <h2 className={styles.text}> {object.hp}</h2>
        </>
    );
}