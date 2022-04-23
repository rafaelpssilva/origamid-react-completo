import React from "react";
import { GlobalContext } from "./GlobalContext";

function ProdutoContext() {
    const global = React.useContext(GlobalContext);

    console.log(global.produtos);

    return (
        <div>
            <p>Produto</p>
        </div>
    );
}

export default ProdutoContext;
