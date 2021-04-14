import React from 'react'

function ErrorMessage({children, variant}) {
    return (
        <div className={`alert alert-${variant || 'info'}`}>{children}</div>
    )
}

export default ErrorMessage
