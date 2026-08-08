import { useState } from "react";
import styles from "./Clicker.module.css";
import Mob1 from "../mobs/Mob1";

export default function Clicker(){
    const[count, setcount] = useState(0);
    const[isHitting, setIsHitting] = useState(true);

    function Setcount(){
        setcount(count => count + 1);
        setIsHitting(false)
    }

    return(
        <>
        <button className={styles.container} onClick={Setcount}></button>
        <h3 className={styles.number}>{count}</h3>
        <Mob1 hitting={count} ></Mob1>
        </>
    );
}
