import React from 'react';
import propTypes from 'prop-types';

class TodoForm extends React.Component {
  state = {
    task: ''
  };

  // propType to make sure clearTask exists
  static propTypes = { clearTask: propTypes.func.isRequired };

  // fuction, recieves state when the value of the form is changed
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // function, adds a task and sets the state of the input form to null for the next addition
  addTask = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: '' });
  };
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          onChange={this.changeHandler}
          type='text'
          name='task'
          placeholder='...todo'
          value={this.state.task}
        />
        <button type='submit'>Add Todo</button>
        <button type='button' onClick={this.props.clearTask}>
          Clear Todo
        </button>
      </form>
    );
  }
}

export default TodoForm;
