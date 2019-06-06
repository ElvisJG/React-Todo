import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// Initial State, has the initial tasks
const initialState = {
  tasks: [
    {
      task: 'Learn React',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Improve React Skills',
      id: 1528817084358,
      completed: false
    },
    {
      task: 'Try not to feel so lost 😅',
      id: 1528817084366,
      completed: false
    }
  ]
};

class App extends React.Component {
  // "C" declare your 'CLASS'
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    // "C" build out your 'CONSTRUCTOR'
    super();
    this.state = initialState;
  }

  addTask = task => {
    const newTask = {
      task,
      id: Date.now(),
      completed: false
    };

    // Very similar to the Harry Potter app
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleTask = id => {
    const newToggle = this.state.initialState.map(item => {
      if (item.id === id) {
        const newObj = {
          ...item,
          completed: !item.completed
        };
        return newObj;
      } else {
        return item;
      }
    });
    this.setState({ initialState: newToggle });
  };

  render() {
    // "R" don't forget to call 'RENDER'
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        <TodoForm addTask={this.addTask} clearTask={this.clearTask} />
      </div>
    );
  }
}

export default App;
