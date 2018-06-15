import React, { Component } from 'react';
import './FormStyle.css';
class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Pankaj', 
            description: 'Test Desc',
            color: 'red'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //this.setState({ value: event.target.value });
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <label>
                    Pick your favorite color:
                        <select value={this.state.color} onChange={this.handleChange}>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="white">white</option>
                    </select>
                </label>
                <label>
                    Select your avtar: <input type="file" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default TestForm;