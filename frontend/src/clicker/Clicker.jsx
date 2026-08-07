import { useState } from "react";
import styles from "./Clicker.module.css";
import Mob1 from "../mobs/Mob1";



export default function Clicker(){
    const[count, setcount] = useState(0);
    const[normalIF, setNormal] = useState(true);
    const timeoutRef = useRef();
    

    function Setcount(){
        setcount(count=> count + 1);
        
        Hit();
    }
    function Hit(){
        clearTimeout(timeoutRef.current);
        setNormal(false);
        console.log(normalIF);dd
        setTimeout(() =>
            {
                setNormal(true);
                console.log(normalIF);
            },200);
        
    }
    return(
        <>
        <button className={styles.container} onClick={Setcount}></button>
        <h3 className={styles.number}>{count}</h3>
        <Mob1 normal={normalIF}/>
        </>
    );
}
