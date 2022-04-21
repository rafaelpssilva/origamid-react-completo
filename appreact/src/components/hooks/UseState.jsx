import React from "react";

function UseState() {
    const [modal, setModal] = React.useState(false);
    const [contador, setContador] = React.useState(0);

    function handleClick() {
        setModal(!modal);
    }

    function atualizarContador() {
        setContador(contador + 1);
    }

    const styleBox = {
        width: "300px",
        height: "300px",
        border: "1px solid",
        margin: "3rem 0",
    };

    const box = (
        <div style={styleBox}>
            {modal ? <p>Aberto</p> : <p>Fechado</p>}
            {contador}
        </div>
    );

    return (
        <div>
            <button onClick={handleClick}>{modal ? "Fechar" : "Abrir"}</button>
            {modal ? (
                <button onClick={atualizarContador}>Contador</button>
            ) : null}
            {modal ? box : null}
        </div>
    );
}

export default UseState;
