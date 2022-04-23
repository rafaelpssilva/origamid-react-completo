import React from "react";

function Par({ contador, setContador }) {
    // const [contador, setContador] = React.useState(0);
    // React.useEffect(() => {
    //     document.title = "React " + contador;
    //     return () => (document.title = "React App");
    // }, [contador]);
    // return (
    //     <>
    //         <h1>{contador}</h1>
    //         <button onClick={() => setContador(contador + 1)}>Atualizar</button>
    //         <Par contador={contador} setContador={setContador} />
    //     </>
    // );
    // const [visivel, setVisivel] = React.useState(true);
    // React.useEffect(() => {
    //     setVisivel(() => !visivel);
    // }, [contador]);
    // React.useEffect(() => {
    //     if (contador === 11) {
    //         setContador((contador = 0));
    //     }
    // }, [contador]);
    // return <>{visivel ? <p>Impar</p> : <p>Par</p>}</>;
}

export default Par;
