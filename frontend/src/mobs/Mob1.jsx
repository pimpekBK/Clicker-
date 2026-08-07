import { useState } from "react";
import Mob1Normal from "../assets/mob1-normal.png";
import Mob1Angry from "../assets/mob1-angry.png";

export default function Mob1(normal){

    return(
        <>
        {normal &&(
            <img src={Mob1Normal} className="Mob1Normal" width="600" height="auto" ></img>
        )}
        {!normal &&(
            <img src={Mob1Angry} className="Mob1Normal" width="600" height="auto" ></img>
        )}
        </>
    );
}
