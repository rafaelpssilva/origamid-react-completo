import React from "react";

function Preferencia({ produto }) {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        if (produto !== null)
            fetch(
                `https://ranekapi.api.origamid.dev/json/api/produto/${produto}`
            )
                .then((response) => response.json())
                .then((json) => setDados(json));
    }, [produto]);

    if (dados === null) return null;
    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>{dados.preco}</p>
        </div>
    );
}

export default Preferencia;
