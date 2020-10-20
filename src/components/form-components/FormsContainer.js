import React from 'react'
import Form from './Form'

const FormsContainer = ({ data, handleFormSubmit }) => {
    return (
        <div>
            <h2>Forms Container</h2>
            {
                data.map(item => <Form key={item} requestNum={item} handleFormSubmit={handleFormSubmit} />)
            }
        </div>
    )
}

export default FormsContainer