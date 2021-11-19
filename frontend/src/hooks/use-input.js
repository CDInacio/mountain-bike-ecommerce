import { useState } from "react";

const useInput = (valueValidation) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = valueValidation(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        reset,
        valueChangeHandler,
        inputBlurHandler
    }
}

export default useInput;