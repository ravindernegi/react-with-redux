import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, listTodo } from './store/action/todo';
class TodoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: '',
    };
  }
  componentDidMount() {
    this.props.listTodo();
  }

  handelChange = (e) => {
    this.setState({ todoData: e.target.value });
  };

  saveTodo = () => {
    this.props.addTodo({ id: 4, title: this.state.todoData });
    this.setState({ todoData: '' });
  };

  render() {
    return (
      <div className='container'>
        <h1>Add Todo</h1>

        <p>
          <input
            type='text'
            onChange={(e) => this.handelChange(e)}
            value={this.state.todoData}
            placeholder={'Add todo'}
          />
          <button onClick={() => this.saveTodo()}>Save</button>
        </p>
        <h1>List Todo</h1>
        <ul>
          {this.props.todoState &&
            this.props.todoState.list.map((todo, index) => {
              return <li key={index}>{todo.title}</li>;
            })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    todoState: state.todo,
  };
}
export default connect(mapStateToProps, { addTodo, listTodo })(TodoClass);
