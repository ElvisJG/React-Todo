import React from 'react';
import propTypes from 'prop-types';

class TodoForm extends React.Component {
  state = {
    task: ''
  };

  static propTypes = { clearTask: propTypes.func.isRequired };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
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
