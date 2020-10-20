import React from 'react'

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

export default RequestsContainer
