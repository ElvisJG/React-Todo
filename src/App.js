import React from 'react';

class App extends React.Component {
  // "C" declare your 'CLASS'
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    // "C" build out your 'CONSTRUCTOR'
    super();
    this.state = {
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
  }

  addTask = task => {
    let addedTask = {
      task,
      id: '',
      completed: false
    };

    //   this.setState({
    //    hogwartsStudents: [...this.state.hogwartsStudents, newStudent]
    //   });
    this.setState({
      tasks: [...this.state.tasks, addedTask]
    });
  };

  render() {
    // "R" don't forget to call 'RENDER'
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
