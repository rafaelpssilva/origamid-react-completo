import React from "react";

function UseRef() {
    // Exemplo 1
    // const video = React.useRef();

    // React.useEffect(() => {
    //     console.log(video.current);
    // }, []);

    // return <video ref={video}></video>;

    // Exemplo 2

    const [comentarios, setComentarios] = React.useState([]);
    const [input, setInput] = React.useState("");
    const inputElement = React.useRef();

    function hnadleClick() {
        setComentarios([...comentarios, input]);
        setInput("");
        inputElement.current.focus();
    }

    return (
        <div>
            <ul>
                {comentarios.map((comentario) => (
                    <li key={comentario}>{comentario}</li>
                ))}
            </ul>
            <input
                ref={inputElement}
                type="text"
                value={input}
                onChange={({ target }) => setInput(target.value)}
            />
            <br />
            <button onClick={hnadleClick}>Enviar</button>
        </div>
    );
}

export default UseRef;
