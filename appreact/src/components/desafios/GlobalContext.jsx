import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStore = ({ children }) => {
    const [produtos, setProdutos] = React.useState(null);

    async function pegarProdutos() {
        const produtos = await fetch(
            "https://ranekapi.origamid.dev/json/api/produto"
        );
        const json = await produtos.json();
        setProdutos(json);
    }

    return (
        <GlobalContext.Provider value={{ pegarProdutos }}>
            {children}
        </GlobalContext.Provider>
    );
};
