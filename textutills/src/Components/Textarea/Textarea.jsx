import React from 'react'

const Textarea = ({ input, inputHandler, heading, mode }) => {

    return (

        <div class="form">
            <h1>{heading}</h1>
            <textarea value={input} rows={8} cols={85} placeholder="Leave a comment here" onChange={inputHandler} style={{ backgroundColor: mode === 'light' ? 'white' : 'rgba(155, 149, 149, 0.6)', color: mode === 'light' ? 'black' : 'white' }}></textarea>
            {/* <Buttons /> */}

        </div>
    )
}

export default Textarea
