import React from 'react'

const Alert = ({ alert }) => {
    return (
        <div class={`alert alert-${alert.type} role="alert `}>
            {alert.msg}
        </div>
    )
}

export default Alert
