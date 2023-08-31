import React, {useState} from "react";
export default function Augmentation() {
    const [Flip, setFlip]= useState(false);
    const [Rotation, setRotation]= useState(false);
    const change = () =>{
        if (document.getElementById('flip').checked){
            setFlip(true)
        }
        else{
            setFlip(false)
        }
        if (document.getElementById('rotation').checked){
            setRotation(true)
        }
        else{
            setRotation(false)
        }
        console.log("flip",Flip)
        console.log("rotation",Rotation)
    }
    return(
        <div>
        <h1> Data Augmentation</h1>
        <p> Choose your preprocessing </p>
        <div>
        <input type="checkbox" id = "flip" onChange={change}></input>
        <label htmlFor="flip">RandomFlip('horizontal')</label>
        </div>
        <div>
        <input type="checkbox" id = "rotation" onChange={change}></input>
        <label htmlFor="rotation">RandomRotation(0.2)</label>
        </div>
        </div>
    )
}