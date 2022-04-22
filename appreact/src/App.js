import React from "react";
import Api from "./components/desafios/Api";

function App() {
    function apiGet() {
        fetch("https://ranekapi.origamid.dev/json/api/produto/tablet");
    }

    return (
        <div>
            <Api />
        </div>
    );
}

export default App;
