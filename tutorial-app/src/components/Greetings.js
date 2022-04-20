import React from "react";
import App from "../App";


const Greetings = (props) =>{
    console.log(props);
    return (
        <div>
            <h1>
                Welcome
            </h1>
            <h1> Hello {props.name} {props.lname}</h1>
        </div>
    )
}

export default Greetings;