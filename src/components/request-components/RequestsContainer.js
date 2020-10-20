import React from 'react'
import RequestItem from './RequestItem'

const RequestsContainer = ({ data, requestName }) => {


    return (
        <div>
            <h2>Request List</h2>
            {
                data.map(item => <RequestItem key={item} value={item} title={requestName} />)
            }
        </div>
    )
}

export default RequestsContainer
