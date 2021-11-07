//Necesita npm install react-router-dom
import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Post from './components/Post'

class App extends Component {

  state = {
    tasks: tasks
  }

addTask = (title, description) => {
  const newTask = {
    title: title,
    description: description,
    id: this.state.tasks.length
  }
  
  this.setState ({
    tasks: [...this.state.tasks, newTask]
  })
}

deleteTask = (id) => {
  const newTask = this.state.tasks.filter(task => task.id !== id);
  this.setState ({tasks: newTask})
}

checkDone = (id) => {
  const newTask = this.state.tasks.filter(task => {
   if(task.id === id) {
    task.done = !task.done;
   }
   return task;
  })
  this.setState ({tasks: newTask})
}

Home = () => {
  return (
    <div>
      <TaskForm addTask={this.addTask}/>
      <br />
      <br />
      <Tasks 
              tasks={this.state.tasks}
              deleteTask ={this.deleteTask}
              checkDone={this.checkDone}/>
    </div>
  );
}

  render() {
    return <div>
      <BrowserRouter>
        <Link to="/">[Home]</Link> <Link to="/post">[post]</Link>
        <Routes>
            <Route exact path='/' element={<this.Home />} />
              <Route exact path='/post' element={<Post/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  }
}

export default App;
