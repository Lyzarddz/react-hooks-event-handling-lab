// Code Keypad Component Here

import React from "react";

function Keypad(){
    function handleChange(event){
        event.preventDefault()
        console.log('Entering password...');
    }

    return (
    <input
    type="password"
    onChange={handleChange}
    placeholder="Input here"
    />    
    )
}

    export default Keypad;
