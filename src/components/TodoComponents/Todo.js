import React from 'react';
import './Todo.css';

function Todo(props) {
  const clickHandler = () => {
    props.toggleTask(props.id);
    console.log(props.task);
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
