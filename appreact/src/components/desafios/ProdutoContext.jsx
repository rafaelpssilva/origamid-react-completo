import React from "react";
import { GlobalContext } from "./GlobalContext";

function ProdutoContext() {
    const { produtos, limparDados, visible, setVisible } =
        React.useContext(GlobalContext);

    function handleClick() {
        setVisible(!visible);
    }

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
            <button onClick={handleClick}>Aparecer</button>
        </div>
    );
}

export default ProdutoContext;
