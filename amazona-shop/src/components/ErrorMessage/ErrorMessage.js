import React from 'react'

function ErrorMessage({loadingError, variant}) {
    return (
        <div className={`alert alert-${variant || 'info'}`}>{loadingError}</div>
    )
}

export default ErrorMessage
