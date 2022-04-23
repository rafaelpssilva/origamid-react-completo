import React from "react";
import { GlobalStore } from "./components/desafios/GlobalContext";
import ProdutoContext from "./components/desafios/ProdutoContext";

function App() {
    return (
        <GlobalStore>
            <ProdutoContext />
        </GlobalStore>
    );
}

export default App;
