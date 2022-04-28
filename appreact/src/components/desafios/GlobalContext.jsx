import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStore = ({ children }) => {
    const [produtos, setProdutos] = React.useState(null);
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/")
            .then((resp) => resp.json())
            .then((json) => setProdutos(json));
    }, []);

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/")
            .then((resp) => resp.json())
            .then((json) => setProdutos(json));
    }, [visible]);

    function limparDados() {
        setProdutos(null);
    }

    return (
        <GlobalContext.Provider
            value={{
                produtos,
                limparDados,
                visible,
                setVisible,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
