import React, {Component} from 'react';

class Task extends Component {
    render () {

        const {task} = this.props;

        return <p>

        {task.title} - 
        {task.description} - 
        {task.done} -
        {task.id} -
        <input type="checkbox" />
        <button>
            x
        </button>
        </p>
    }
}
export default Task;