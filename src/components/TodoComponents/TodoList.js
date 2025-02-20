// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

// Function for the TodoList.js component, using a spread operator recieves a task, an ID, and the toggleTask function
function TodoList(props) {
  return (
    <div>
      {props.tasks.map(task => (
        <Todo {...task} key={task.id} toggleTask={props.toggleTask} />
      ))}
    </div>
  );
}

export default TodoList;
