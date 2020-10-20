import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            representative: '',
            textInput: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        this.setState({[name]: value})
      }
    
      handleSubmit(event) {
        event.preventDefault()
        this.props.handleFormSubmit(this.props.requestNum)
      }
    
      render() {
        const isSelected = this.props.isItemSelected[this.props.requestNum] === true ? "form_show" : "form_hide"
        const requestNum = this.props.requestNum
        const representative = this.state.representative
        const textInput = this.state.textInput

        return (
          <form className={isSelected + " form-component"} onSubmit={this.handleSubmit}>
            <div className="form-component__element form-component__title">Обращение № {requestNum}</div>
            <br />
            <input className="form-component__element input" type="text" name="representative" value={representative} placeholder="Представитель" onChange={this.handleChange} />
            <br />
            <textarea className="form-component__element textarea" name="textInput" value={textInput} placeholder="Суть обращения" onChange={this.handleChange} />
            <br />
            <input className="form-component__element button" type="submit" value="Отправить" />
          </form>
        );
      }
}

export default Form
