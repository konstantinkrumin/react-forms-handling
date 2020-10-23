import React from 'react'
import PropTypes from 'prop-types'

import Form from './Form'

const FormsContainer = ({ data, handleFormSubmit, isItemSelected }) => {
    return (
        <div className="forms-container">
            {
                data.map(item => <Form 
                                    key={item} 
                                    requestNum={item} 
                                    handleFormSubmit={handleFormSubmit} 
                                    isItemSelected={isItemSelected} />
                )
            }
        </div>
    )
}

FormsContainer.propTypes = {
    data: PropTypes.array.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    isItemSelected: PropTypes.object.isRequired
}

export default FormsContainer