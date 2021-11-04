import { useState, useEffect } from "react";
import { StylesButtons, StylesInput } from "../../styled";

// Exercise 3: Create custom components with buttons to add pages and languages into the budget
const Buttons = ({ onValueChange }) => {
    const [value, setValue] = useState(1);

    useEffect(() => {
        onValueChange(value)
    }, [value])

    const minusValue = (event) => {
        if (value > 1) setValue(value - 1);
    }
    const plusValue = (event) => setValue(value + 1);

    return (
        <StylesInput>
            <StylesButtons onClick={minusValue}>-</StylesButtons>
            <input type="text" size="5" name="value" value={value} onChange={(event) => setValue(event.target.value)} />
            <StylesButtons onClick={plusValue}>+</StylesButtons>
        </StylesInput>
    )
}

export default Buttons;