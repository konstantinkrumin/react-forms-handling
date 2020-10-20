import React from 'react'
import Form from './Form'

const FormsContainer = ({ data, handleFormSubmit, isItemSelected }) => {
    return (
        <div>
            {
                data.map(item => <Form key={item} requestNum={item} handleFormSubmit={handleFormSubmit} isItemSelected={isItemSelected} />)
            }
        </div>
    )
}

export default FormsContainer