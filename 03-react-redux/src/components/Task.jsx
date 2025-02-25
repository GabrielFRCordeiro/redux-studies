import React from 'react';

const Task = ({ task, onRemove, onToggle }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onToggle(task.id)}>Toggle</button>
      <button onClick={() => onRemove(task.id)}>Remove</button>
    </div>
  );
};

export default Task;