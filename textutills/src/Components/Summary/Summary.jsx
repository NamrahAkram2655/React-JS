import React from 'react'

const Summary = ({ input }) => {
    return (
        <div>
            <h2>Your text Summary</h2>
            <p>Total characters {input.length}</p>
            <p>Total Words {input.split(" ").length - 1}</p>
            <h2>Preview</h2>
            <p>{input}</p>
        </div>
    )
}

export default Summary
