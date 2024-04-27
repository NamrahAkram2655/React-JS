import React, { useState } from 'react'

const Result = (props) => {

    return (
        <div className='result'>
            Total Bill is ${Number(props.input) + props.result} (${props.review} + ${props.frndReview}) <br />
            
        </div>
    )
}

export default Result
