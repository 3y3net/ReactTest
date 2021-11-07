import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    alEnviar = (evento) => {
        this.props.addTask(this.state.title, this.state.description)
        evento.preventDefault();        
    }

    alCambiar = (evento) => {
        this.setState({
            [evento.target.name]: evento.target.value
        })
    }

    render () {

        return (
            <form onSubmit = {this.alEnviar}>
                <input
                    type ="text"
                    name="title"
                    placeholder="Write a task"
                    onChange = {this.alCambiar}
                    value={this.state.title}/>
                <br />
                <br />
                <textarea
                    name="description"
                    placeholder="Write a description"
                    onChange = {this.alCambiar}
                    value={this.state.description}></textarea>
                <input type="submit" />
            </form>
        )        
    }

}
