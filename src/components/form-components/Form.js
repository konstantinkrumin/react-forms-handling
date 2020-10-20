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

        this.setState({[name]: value});
      }
    
      handleSubmit(event) {
        console.log('Form # ' + this.props.requestNum)
        console.log('Name: ' + this.state.representative)
        console.log('Textarea: ' + this.state.textInput)
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>Обращение № {this.props.requestNum}</div>
            <div>
                Представитель: 
                <input type="text" name="representative" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div>
                Обращение:
                <textarea value={this.state.value} name="textInput" onChange={this.handleChange} />
            </div>
            <input type="submit" value="Отправить" />
          </form>
        );
      }
}

export default Form
