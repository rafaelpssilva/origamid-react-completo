import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form() {
    return (
        <form>
            <p>
                <label htmlFor="nome">Nome</label>
                <Input />
            </p>
            <p>
                <label htmlFor="email">Email</label>
                <Input tipo="email" required placeholder="digite seu email" />
            </p>
            <Button text="Enviar" />
            <Button text="Limpar" />
        </form>
    );
}

export default Form;
