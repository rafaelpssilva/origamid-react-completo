import React from "react";

function Desafio2() {
    const produtos = [
        {
            id: 1,
            nome: "Smartphone",
            preco: "R$ 2000",
            cores: ["#29d8d5", "#252a34", "#fc3766"],
        },
        {
            id: 2,
            nome: "Notebook",
            preco: "R$ 3000",
            cores: ["#ffd045", "#d4394b", "#f37c59"],
        },
        {
            id: 3,
            nome: "Tablet",
            preco: "R$ 1500",
            cores: ["#365069", "#47c1c8", "#f95785"],
        },
    ];

    return (
        <>
            {produtos
                .filter(
                    (produto) => Number(produto.preco.replace("R$ ", "")) > 1500
                )
                .map(({ id, nome, preco, cores }) => (
                    <div key={id}>
                        <h1>{nome}</h1>
                        <p>Preço: {preco}</p>
                        {cores.map((cor) => (
                            <p
                                key={cor}
                                style={{
                                    backgroundColor: cor,
                                    color: "#fff",
                                    marginLeft: "30px",
                                }}
                            >
                                {cor}
                            </p>
                        ))}
                    </div>
                ))}
        </>
    );
}

export default Desafio2;
