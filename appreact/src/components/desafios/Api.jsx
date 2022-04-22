import React from "react";
import Produtos from "./Produtos";

function Api() {
    
    function handleClick(event) {
        console.log(event.target.innerText);
    }

    return (
        <div>
            <button onClick={handleClick}>Notebook</button>
            <button onClick={handleClick}>Smartphone</button>
            <button onClick={handleClick}>Tablet</button>
            <Produtos />
        </div>
    );
}

export default Api;
