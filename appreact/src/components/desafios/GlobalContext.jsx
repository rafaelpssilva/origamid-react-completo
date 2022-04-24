import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStore = ({ children }) => {
    const [produtos, setProdutos] = React.useState(null);

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/")
            .then((resp) => resp.json())
            .then((json) => setProdutos(json));
    }, []);

    function limparDados() {
        setProdutos(null);
    }

    return (
        <GlobalContext.Provider value={{ produtos, limparDados }}>
            {children}
        </GlobalContext.Provider>
    );
};
