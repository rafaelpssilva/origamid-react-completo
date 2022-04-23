import React from "react";

function UseMemo() {
    const [contar, setContar] = React.useState(0);

    function operacaoLenta() {
        let c;
        for (let i = 0; i < 100000000; i++) {
            c = i + i / 10;
        }
        return c;
    }

    const valor = React.useMemo(() => operacaoLenta(), []);
    console.log(valor);

    return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
}

export default UseMemo;
