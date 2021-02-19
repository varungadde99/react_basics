// HTML + JS -> In SAME FILE
import  React from "react";

const Greet = ({name,surname}) => {
    return (
        <div>
            <h1>Hello {`${name} ${surname}`}</h1> 
            <h2>and the age is {20+2}</h2>
        </div>
    )
}

export default Greet;