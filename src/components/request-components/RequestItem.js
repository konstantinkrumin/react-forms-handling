import React from 'react'

const RequestItem = ({ value, title }) => {
    function handleClick() {
        console.log("clicked on " + value)
    }

    return (
        <div onClick={handleClick}>
            <div>{title}</div>
            <div>{value}</div>
        </div>
    )
}

export default RequestItem
