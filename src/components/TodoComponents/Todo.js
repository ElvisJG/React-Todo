import React from 'react';
import './Todo.css';

function Todo(props) {
  // function, the passed down toggle function from App.js makes it's glorious return and is added to each task
  // div - applies a .completed or nothing depending on the completed status bool. This toggles our CSS
  const clickHandler = () => {
    props.toggleTask(props.id);
    // console.log(props.task);
  };

  return (
    <div
      className={`task${props.completed ? ' completed' : ''}`}
      onClick={clickHandler}
    >
      <p>{props.task}</p>
    </div>
  );
}

export default Todo;
