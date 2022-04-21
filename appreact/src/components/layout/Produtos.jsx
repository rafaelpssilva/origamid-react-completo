import React from "react";
import KeyRandom from "../Key";

function Produtos() {
    const produtos = [
        { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
        { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
    ];

    const produto = produtos.map(({ nome, propriedades }) => (
        <div
            key={nome}
            style={{
                padding: "1rem",
                margin: "1rem 0",
                border: "1px solid black",
            }}
        >
            <p>{nome}</p>
            <ul>
                {propriedades.map((propriedade) => (
                    <li key={KeyRandom()}>{propriedade}</li>
                ))}
            </ul>
        </div>
    ));

    return (
        <section>
            <h1>Produtos</h1>
            {produto}
        </section>
    );
}

export default Produtos;
