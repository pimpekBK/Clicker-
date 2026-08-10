import { useState, useEffect} from "react";
import HpBarr from './hp_barr/HpBarr.jsx'
import MobNeutral from "../assets/mob1-neutral.png";
import MobHiting from '../assets/mob1-hiting.png';
import MobDead from '../assets/mob1-dead.png';
import './Mob1.module.css';

export default function Mob1(object){
    const[hitting, sethitting] = useState(false)
    const[hp,sethp] = useState(object.hp +1)


    useEffect(()=> {sethp(hp-1)},[object.trigger])

    useEffect(()=> {
        sethitting(true)
        
        const timer = setTimeout(() => {
            sethitting(false)
        }, 200);

        return () => clearTimeout(timer);
          
    },[object.trigger])

    if (hp >= 1){
        return(
            <>    
            <HpBarr trigger={object.trigger} hp={object.hp}/>
            {hitting === true ? <img src={MobHiting}  ></img> : <img src={MobNeutral}  width="600" height="auto" ></img>};
            </>
            );
        }

        else{
            return(
                <>
                    <img src={MobDead}></img>
                </>  
            );      
        }
}
