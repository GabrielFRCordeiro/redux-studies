// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onRemove, onToggle }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;