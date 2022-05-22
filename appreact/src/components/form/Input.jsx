import React from "react";

function Input() {
    const [nome, setNome] = React.useState("");
    const [email, setEmial] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                value={nome}
                name="nome"
                onChange={(event) => setNome(event.target.value)}
            />
            <label htmlFor="nome">Email</label>
            <input
                type="email"
                value={email}
                name="email"
                onChange={(event) => setEmial(event.target.value)}
            />

            <button>Enviar</button>
        </form>
    );
}

export default Input;
