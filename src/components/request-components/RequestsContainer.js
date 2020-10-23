import React from 'react'
import PropTypes from 'prop-types'

import RequestItem from './RequestItem'

const RequestsContainer = ({ data, requestName, handleSelection, isItemSelected }) => {


    return (
        <div className="requests-list-container">
                {
                    data.map(item => <RequestItem 
                                        key={item} 
                                        value={item} 
                                        title={requestName} 
                                        handleSelection={handleSelection} 
                                        isItemSelected={isItemSelected} />
                    )
                }
        </div>
    )
}

RequestsContainer.propTypes = {
    data: PropTypes.array.isRequired,
    requestName: PropTypes.string.isRequired,
    handleSelection: PropTypes.func.isRequired,
    isItemSelected: PropTypes.object.isRequired
}

export default RequestsContainer
