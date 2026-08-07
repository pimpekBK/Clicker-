import { useState } from "react";
import styles from "./Clicker.module.css";
import Mob1 from "../mobs/Mob1";



export default function Clicker(){
    const[count, setcount] = useState(0);
    const[normalIF, setNormal] = useState(true);
    

    function Setcount(){
        setcount(count=> count + 1);
        
        Hit();
    }
    function Hit(){
        setNormal(false);
        console.log(normalIF);
        // setTimeout(() => {setNormal(true)},200);
        console.log(normalIF);
    }
    return(
        <>
        <button className={styles.container} onClick={Setcount}></button>
        <h3 className={styles.number}>{count}</h3>
        <Mob1 normal={normalIF}></Mob1>
        </>
    );
}
