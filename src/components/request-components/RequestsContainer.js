import React from 'react'
import RequestItem from './RequestItem'

const RequestsContainer = ({ data, requestName, handleSelection }) => {


    return (
        <div className="requests-list-containter">
            {
                data.map(item => <RequestItem key={item} value={item} title={requestName} handleSelection={handleSelection} />)
            }
        </div>
    )
}

export default RequestsContainer
