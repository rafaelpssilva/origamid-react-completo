import React from "react";
import { GlobalContext } from "./GlobalContext";

function ProdutoContext() {
    const { produtos, limparDados } = React.useContext(GlobalContext);

    if (global.produtos === null) return null;

    return (
        <div>
            <ul>
                {produtos &&
                    produtos.map((produto) => (
                        <li key={produto.id}>{produto.nome}</li>
                    ))}
            </ul>
            <button onClick={limparDados}>Limpar Dados</button>
        </div>
    );
}

export default ProdutoContext;
