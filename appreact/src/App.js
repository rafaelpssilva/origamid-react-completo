import React from "react";
import Checkbox from "./components/form/Checkbox";
import Radio from "./components/form/Radio";
import Select from "./components/form/Select";
import Textarea from "./components/form/Textarea";

function App() {
    return (
        <div>
            <Textarea />
            <Select />
            <Radio />
            <Checkbox />
        </div>
    );
}

export default App;
