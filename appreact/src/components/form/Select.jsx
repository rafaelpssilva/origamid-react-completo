import React from "react";

function Select() {
    const [select, setSelect] = React.useState("");

    return (
        <form>
            <select
                name="options"
                id="options"
                value={select}
                onChange={({ target }) => setSelect(target.value)}
            >
                <option value="" disabled>
                    Selecione
                </option>
                <option value="nootebok">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
            </select>
            <p>{select}</p>
        </form>
    );
}

export default Select;
