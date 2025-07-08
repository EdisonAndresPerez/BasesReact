import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {
    return (
        <button
            className="btn btn-primary mt-2"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
