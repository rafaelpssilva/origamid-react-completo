import React from "react";

function Radio() {
    const [radio, setRadio] = React.useState("");

    function handleChange({ target }) {
        setRadio(target.value);
    }

    return (
        <form>
            <label htmlFor="smartphone">
                <input
                    type="radio"
                    id="smartphone"
                    value="smartphone"
                    checked={radio === "smartphone"}
                    onChange={handleChange}
                />
                Smartphone
            </label>
            <label htmlFor="notebook">
                <input
                    type="radio"
                    id="notebook"
                    value="notebook"
                    checked={radio === "notebook"}
                    onChange={handleChange}
                />
                Notebook
            </label>
        </form>
    );
}

export default Radio;
