import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/index';
import Addtodo from './components/Addtodo';
import Todo from './components/Todo';

class App extends Component{
  state = {
    task:'',
    todos:[]
  }
  onChangeHandler = (e) =>{
    this.setState({
      task: e.target.value
    });
  }
  addTodo = (e)=>{
    e.preventDefault();
    const todos = this.state.todos;
    todos.push({
      id: Math.random(),
      task: this.state.task,
      isCompleted: false
    });

    this.setState({
      task: '',
      todos: todos
    });
    console.log(this.state.todos);
  }
  //remove task
  removeTodo = (id) =>{
    const todosIndex = this.state.todos.findIndex((todo)=> todo.id==id);
    const todos = this.state.todos;
    todos.splice(todosIndex, 1);
    this.setState({
      todos : todos
    });
  }
  //update todo
  updateTodo = (id)=>{
    const todosIndex = this.state.todos.findIndex((todo)=> todo.id==id);
    const todos = this.state.todos;
    todos[todosIndex].isCompleted = true;
    this.setState({
      todos : todos
    });
  }
  //clear list
  clearList = () => {
    this.setState({
      todos:[]
    })
  }
render(){
  return(
    <div>
      <Header clearList={this.clearList}/>
      <div className="TodoContainer">
        {
          this.state.todos.map((todo)=>{
            return <Todo {...todo} removeTodo={this.removeTodo} updateTodo={this.updateTodo}/>
          })
        }
      </div>
      <Addtodo task={this.state.task} onChangeHandler={this.onChangeHandler}
       addTodo={this.addTodo} />
    </div>
  );
}
}

export default App;