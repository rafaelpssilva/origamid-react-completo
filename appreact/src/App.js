import React from "react";

function App() {
    const [dados, setDados] = React.useState([]);

    function apiGet() {
        fetch("https://ranekapi.origamid.dev/json/api/produto/tablet")
            .then((resp) => resp.json())
            .then((json) => setDados(json));
    }

    return (
        <>
            {apiGet()}
            {JSON.stringify(data)}
        </>
    );
}

export default App;
