import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";
import Footer from "./Footer";

function Paginas() {
    const { pathname } = window.location;
    console.log(pathname);
    return (
        <>
            <Header />
            {pathname === "/" && <Home />}
            {pathname === "/produtos" && <Produtos />}
            <Footer />
        </>
    );
}

export default Paginas;
