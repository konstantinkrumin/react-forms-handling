import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../helpers/fontAwesome';

const RequestItem = ({ value, title, handleSelection, isItemSelected }) => {
    const activeClass = isItemSelected[value] === true ? "request-item__active" : null
    
    function handleClick() {
        handleSelection(value)
    } 

    return (
        <div className={activeClass + " request-item"} onClick={handleClick}>
            <div className="request-item__image">
                <FontAwesomeIcon className="request-item__briefcase" icon={['fas', 'briefcase']} />
            </div>
            <div className="request-item__text">
                <div className="request-item__title">{title}</div>
                <div className="request-item__value">{value}</div>
            </div>
        </div>
    )
}

RequestItem.propTypes = {
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    handleSelection: PropTypes.func.isRequired,
    isItemSelected: PropTypes.object.isRequired
}

export default RequestItem
