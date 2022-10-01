import React from "react";

const DEFAULT = `font-heading
 border border-solid rounded-lg`

const COLORS = {
    teal: "bg-hPrimary text-ofWhite",
    white: "bg-white text-hPrimary border-2"
    
}
const Button = ({btnName, customClasses, color, ...props}) =>{
    customClasses= [customClasses, DEFAULT, COLORS[color]].join(" ")
    


    return(
        <button {...props} className={customClasses}>{btnName}</button>

    )
}


export default Button

