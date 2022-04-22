import React from "react";
import Produtos from "./Produtos";

function Api() {
    const [dados, setDados] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null);

    async function handleClick(event) {
        setCarregando(true);
        const response = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
        );
        const json = await response.json();
        setDados(json);
        setCarregando(false);
    }

    return (
        <div>
            <button onClick={handleClick} style={{ margin: ".5rem" }}>
                Notebook
            </button>
            <button onClick={handleClick} style={{ margin: ".5rem" }}>
                Smartphone
            </button>
            <button onClick={handleClick} style={{ margin: ".5rem" }}>
                Tablet
            </button>
            {carregando && <p>Carregando...</p>}
            {dados && <Produtos dados={dados} />}
        </div>
    );
}

export default Api;
