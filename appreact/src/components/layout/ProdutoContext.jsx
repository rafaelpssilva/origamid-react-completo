import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";

function ProdutoContext() {
    const global = React.useContext(GlobalContext);
    return (
        <div>
            <p>Produto: {global.contar}</p>
            <button onClick={global.adicionarUm}>Adicionar 1</button>
            <button onClick={global.adicionarDois}>Adicionar 2</button>
        </div>
    );
}

export default ProdutoContext;
