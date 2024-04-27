import React from 'react'

const Reset = (props) => {
    return (
        <div id='btn'>
            <button onClick={props.ResetHandler}> Reset</button>
        </div>
    )
}

export default Reset
