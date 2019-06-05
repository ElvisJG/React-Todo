import React from 'react';

class TodoForm extends React.Component {
  state = {
    task: ''
  };

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
      </form>
    );
  }
}

export default TodoForm;
