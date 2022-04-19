import React from "react";

function Eventos() {
    function handleClick() {
        alert("Você é educado");
    }

    return (
        <div>
            <button onClick={handleClick}>Clique em mim</button>
            <button onClick={(event) => alert(event.target.innerHTML)}>
                Clique em mim
            </button>
        </div>
    );
}

export default Eventos;
