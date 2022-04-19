import React from "react";

function Desafio1() {
    // const luana = {
    //     cliente: "Luana",
    //     idade: 27,
    //     compras: [
    //         { nome: "Notebook", preco: "R$ 2500" },
    //         { nome: "Geladeira", preco: "R$ 3000" },
    //         { nome: "Smartphone", preco: "R$ 1500" },
    //     ],
    //     ativa: true,
    // };

    const mario = {
        cliente: "Mario",
        idade: 31,
        compras: [
            { nome: "Notebook", preco: "R$ 2500" },
            { nome: "Geladeira", preco: "R$ 3000" },
            { nome: "Smartphone", preco: "R$ 1500" },
            { nome: "Guitarra", preco: "R$ 3500" },
        ],
        ativa: false,
    };

    const dados = mario;
    const precosTotal = dados.compras
        .map((compra) => Number(compra.preco.replace("R$ ", "")))
        .reduce((acumulador, numero) => acumulador + numero);

    const colorGreen = {
        color: "green",
    };

    const colorRed = {
        color: "red",
    };

    return (
        <div>
            <p>
                Nome: {dados.cliente} <br />
                Idade: {dados.idade} <br />
                Situação:{" "}
                {dados.ativa ? (
                    <span style={colorGreen}>Atva</span>
                ) : (
                    <span style={colorRed}>Inativo</span>
                )}{" "}
                <br />
                compras:
            </p>
            <ul>
                {dados.compras.map((compra) => (
                    <li
                        key={compra.nome}
                    >{`${compra.nome} - ${compra.preco}`}</li>
                ))}
            </ul>
            <p>
                Total gasto: R$ {precosTotal} <br />
                {precosTotal > 10000 && "Você está gastando muito"}
            </p>
        </div>
    );
}

export default Desafio1;
