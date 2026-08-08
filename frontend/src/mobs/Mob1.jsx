import { useState, useEffect } from "react";
import MobNeutral from "../assets/mob1-neutral.png";
import MobHiting from '../assets/mob1-hiting.png'

export default function Mob1({count}){
    const[hitting, sethitting] = useState(false)
    
    useEffect(()=> {
        sethitting(true)
          
        const timer = setTimeout(() => {
            sethitting(false)
        }, 200);

        return () => clearTimeout(timer);
          
    },[count])
    
    return(
        <>
        {/* {console.log('Mob1')}; */}
        {console.log(hitting)};
        {hitting === true ? <img src={MobNeutral} className="MobNeutral" width="600" height="auto" ></img> : <img src={MobHiting} className="MobHiting" width="600" height="auto" ></img>} ;
        </>
    );
}
