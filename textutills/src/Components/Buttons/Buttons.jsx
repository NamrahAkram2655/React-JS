import React from 'react'

const Buttons = ({ input, setinput, showAlert }) => {

    const UpperCaseHandler = () => {
        setinput(input.toUpperCase());
        showAlert("Converted to uppercase", "success");
    }
    const LowerCaseHandler = () => {
        setinput(input.toLowerCase());
        showAlert("Converted to Lowercase", "success");
    }
    const RemoveExtraSpace = () => {
        setinput(input.split(/\s+/).join(' '));
        showAlert("Removed spaces", "info");
    }
    const ClearText = () => {
        setinput("");
        showAlert("text is cleared", "danger");
    }

    return (

        <div class="btn-group m-1">
            <button class="m-1 btn btn-primary" onClick={UpperCaseHandler}>UpperCase</button>
            <button class="m-1 btn btn-info" onClick={LowerCaseHandler}>Lowercase</button>
            <button class="m-1 btn btn-danger" onClick={RemoveExtraSpace}>Remove Extra Spaces</button>
            <button class="m-1 btn btn-success" onClick={ClearText}>Clear Text</button>
        </div>

    )
}

export default Buttons
