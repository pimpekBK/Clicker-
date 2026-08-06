import { useState } from "react";
import styles from "./Clicker.module.css";



export default function Clicker(){
    const[count, setcount] = useState(0);
    return(
        <>
        <button className={styles.container} onClick={()=>{setcount(count=> count + 1)}}></button>
        <h3 className={styles.number}>{count}</h3>
        </>
    );
}