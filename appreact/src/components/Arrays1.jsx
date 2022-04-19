import React from "react";

function Arrays1() {
    // const filmes = ["Gigantes de Aço", "The Batman", "Homem Aranha 3"];

    const funcionarios = [
        {
            id: 1,
            nome: "Feodor",
            sobrenome: "Pheby",
            email: "fpheby0@163.com",
            genero: "M",
            cidade: "Balshavik",
            pais: "Belarus",
            empresa: "Dabjam",
            salario: 2401.69,
            ativo: true,
        },
        {
            id: 2,
            nome: "Irwinn",
            sobrenome: "Pridmore",
            email: "ipridmore1@squarespace.com",
            genero: "M",
            cidade: "Pancoran",
            pais: "Indonesia",
            empresa: "Topicshots",
            salario: 12347.24,
            ativo: false,
        },
        {
            id: 3,
            nome: "Cedric",
            sobrenome: "Ormes",
            email: "cormes2@yale.edu",
            genero: "M",
            cidade: "Sanli",
            pais: "China",
            empresa: "Digitube",
            salario: 22018.66,
            ativo: true,
        },
        {
            id: 4,
            nome: "Reina",
            sobrenome: "Borth",
            email: "rborth3@furl.net",
            genero: "F",
            cidade: "Vysokovsk",
            pais: "Russia",
            empresa: "Jaxspan",
            salario: 11064.27,
            ativo: true,
        },
        {
            id: 5,
            nome: "Gwenny",
            sobrenome: "Burnhill",
            email: "gburnhill4@nature.com",
            genero: "F",
            cidade: "El Puente",
            pais: "Honduras",
            empresa: "Thoughtstorm",
            salario: 19942.83,
            ativo: false,
        },
        {
            id: 6,
            nome: "Sindee",
            sobrenome: "Lavington",
            email: "slavington5@howstuffworks.com",
            genero: "F",
            cidade: "El Valle del Espíritu Santo",
            pais: "Venezuela",
            empresa: "Jayo",
            salario: 6907.48,
            ativo: true,
        },
        {
            id: 7,
            nome: "Ingamar",
            sobrenome: "Ewdale",
            email: "iewdale6@drupal.org",
            genero: "M",
            cidade: "Paris 19",
            pais: "France",
            empresa: "Eare",
            salario: 18069.6,
            ativo: true,
        },
        {
            id: 8,
            nome: "Waverly",
            sobrenome: "Vassbender",
            email: "wvassbender7@nba.com",
            genero: "M",
            cidade: "Xiakou",
            pais: "China",
            empresa: "Digitube",
            salario: 15995.7,
            ativo: false,
        },
        {
            id: 9,
            nome: "Dunstan",
            sobrenome: "Wakeling",
            email: "dwakeling8@wsj.com",
            genero: "M",
            cidade: "Kakata",
            pais: "Liberia",
            empresa: "Devshare",
            salario: 11287.61,
            ativo: true,
        },
        {
            id: 10,
            nome: "Forrester",
            sobrenome: "Ciccottio",
            email: "fciccottio9@dot.gov",
            genero: "M",
            cidade: "Chaoyang",
            pais: "China",
            empresa: "Kayveo",
            salario: 17309.69,
            ativo: true,
        },
    ];

    return (
        <ul>
            {funcionarios
                .filter((funcionario) => funcionario.ativo === true)
                .map((funcionario) => (
                    <ul key={funcionario.nome}>
                        <li key={funcionario.nome}>
                            Nome: {funcionario.nome} {funcionario.sobrenome}
                        </li>
                        <ul>
                            <li key={funcionario.email}>
                                Email: {funcionario.email}
                            </li>
                            <li key={funcionario.genero}>
                                Gênero:{" "}
                                {funcionario.genero.toUpperCase() === "M"
                                    ? "Masculino"
                                    : "Feminino"}
                            </li>
                            <li key={funcionario.cidade}>
                                Cidade: {funcionario.cidade}
                            </li>
                            <li key={funcionario.salario}>
                                Salário:
                                {funcionario.salario > 0 &&
                                    funcionario.salario < 11000 &&
                                    ` ${funcionario.salario} - Baixo`}
                                {funcionario.salario > 11000 &&
                                    funcionario.salario < 15000 &&
                                    ` ${funcionario.salario} - Médio`}
                                {funcionario.salario > 15000 &&
                                    ` ${funcionario.salario} - Alto`}
                            </li>
                        </ul>
                    </ul>
                ))}
        </ul>
    );
}

export default Arrays1;
