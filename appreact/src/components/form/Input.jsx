import React from "react";

function Input({ tipo, ...props }) {
    return <input type={tipo} {...props} />;
}

export default Input;
