import React from 'react';

function Todo(props) {
  const clickHandler = () => {
    props.toggleTask(props.task.id);
  };

  return (
    <div
      className={`task${props.task.completed ? ' completed' : ''}`}
      onClick={clickHandler}
    >
      <p>{props.task}</p>
    </div>
  );
}

export default Todo;
