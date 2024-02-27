import React from "react";
import "./reuseable.css";
import img from "../Assets/download.png"


const reuseable = ()=>{
    return(
        <div className="container">
        <h1>E commerce</h1>
        <div className="powder">
                <h1>Tide powder</h1>
                <img src={img} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde autem natus veritatis maiores vel vero accusantium ipsum deserunt laboriosam laborum? Quos eveniet enim inventore tempora illum sapiente aliquam porro assumenda?</p>
        </div>

       <div className="powder">
                <h1>Tide powder</h1>
                <img src={img} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde autem natus veritatis maiores vel vero accusantium ipsum deserunt laboriosam laborum? Quos eveniet enim inventore tempora illum sapiente aliquam porro assumenda?</p>
        </div>
        </div>
        
    )
}

export default reuseable;