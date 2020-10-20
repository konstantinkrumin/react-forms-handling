import React from 'react'
import Form from './Form'

const FormsContainer = ({ data }) => {
    return (
        <div>
            <h2>Forms Container</h2>
            {
                data.map(item => <Form key={item} value={item} />)
            }
        </div>
    )
}

export default FormsContainer