import React from 'react'

const RequestItem = ({ value, title, handleSelection, isItemSelected }) => {
    const activeClass = isItemSelected[value] === true ? "request-item__active" : null
    
    function handleClick() {
        handleSelection(value)
    } 

    return (
        <div className={activeClass + " request-item"} onClick={handleClick}>
            <div className="request-item__title">{title}</div>
            <div className="request-item__value">{value}</div>
        </div>
    )
}

export default RequestItem
