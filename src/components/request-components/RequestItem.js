import React from 'react'

const RequestItem = ({ value, title, handleSelection }) => {
    function handleClick() {
        handleSelection(value)
    }

    return (
        <div className="request-item" onClick={handleClick}>
            <div className="request-item__title">{title}</div>
            <div className="request-item__value">{value}</div>
        </div>
    )
}

export default RequestItem
