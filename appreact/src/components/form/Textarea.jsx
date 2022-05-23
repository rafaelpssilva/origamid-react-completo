import React from "react";

function Textarea() {
    const [text, setText] = React.useState("");

    return (
        <form>
            <textarea
                name="message"
                id="message"
                rows="5"
                value={text}
                onChange={({ target }) => setText(target.value)}
            ></textarea>
            <p>{text}</p>
        </form>
    );
}

export default Textarea;
