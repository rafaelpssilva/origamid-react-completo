import React from "react";

function UseRef() {
    // Exemplo 1
    // const video = React.useRef();

    // React.useEffect(() => {
    //     console.log(video.current);
    // }, []);

    // return <video ref={video}></video>;

    // Exemplo 2
    // const [comentarios, setComentarios] = React.useState([]);
    // const [input, setInput] = React.useState("");
    // const inputElement = React.useRef();

    // function handleClick() {
    //     if (input.length > 0) {
    //         setComentarios([...comentarios, input]);
    //         setInput("");
    //         inputElement.current.focus();
    //     }
    // }

    // return (
    //     <div>
    //         <ul>
    //             {comentarios.map((comentario) => (
    //                 <li key={comentario}>{comentario}</li>
    //             ))}
    //         </ul>
    //         <input
    //             ref={inputElement}
    //             type="text"
    //             value={input}
    //             onChange={({ target }) => setInput(target.value)}
    //         />
    //         <br />
    //         <button onClick={handleClick}>Enviar</button>
    //     </div>
    // );

    // Exemplo 3

    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null);
    const timeoutRef = React.useRef();

    function handleClick() {
        setCarrinho(carrinho + 1);
        setNotificacao("Item adicionado");

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setNotificacao(null);
            console.log("teste");
        }, 2000);
    }

    return (
        <div>
            <p>{notificacao}</p>
            <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
        </div>
    );
}

export default UseRef;
