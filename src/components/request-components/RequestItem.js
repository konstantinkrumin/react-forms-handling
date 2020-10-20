import React from 'react'

const RequestItem = ({ value, title, handleSelection }) => {
    function handleClick() {
        handleSelection(value)
    }

    return (
        <div onClick={handleClick}>
            <div>{title}</div>
            <div>{value}</div>
        </div>
    )
}

export default RequestItem
