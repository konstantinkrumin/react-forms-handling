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

        return (
          <form className={isSelected} onSubmit={this.handleSubmit}>
            <div>Обращение № {requestNum}</div>
            <div>
                Представитель: 
                <input type="text" name="representative" value={this.state.representative} onChange={this.handleChange} />
            </div>
            <div>
                Обращение:
                <textarea name="textInput" value={this.state.textInput} onChange={this.handleChange} />
            </div>
            <input type="submit" value="Отправить" />
          </form>
        );
      }
}

export default Form
