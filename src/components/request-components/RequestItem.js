import React from 'react'

const RequestItem = ({ value, title }) => {
    return (
        <div>
            <div>{title}</div>
            <div>{value}</div>
        </div>
    )
}

export default RequestItem
