import React from "react";

function Checkbox() {
    const [termos, setTermos] = React.useState(false);
    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    value="termos"
                    checked={termos}
                    onChange={({ target }) => setTermos(target.checked)}
                />
                Aceito os termos 
            </label>
            {termos && <p>Aceitou os termos</p>}
        </form>
    );
}

export default Checkbox;
