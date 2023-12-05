import PropTypes from 'prop-types'; // Dodaj import prop-types
import React from 'react';

import {
  container,
  task,
  taskButton,
  taskCheckbox,
  taskCompleted,
  taskNotCompleted,
  taskTitle,
} from './TaskList.module.scss';

export const TaskList = ({ tasks, handleRemove, handleToggle }) => {
  
  return (
    <div className={`${container}`}>
      {tasks.map((oneTask) =>
        oneTask.completed ? (
          <div key={oneTask.id} className={`${task}`}>
            <input
              type="checkbox"
              className={`${taskCheckbox}`}
              checked={oneTask.completed}
              onChange={() => handleToggle(oneTask)}
            ></input>
            <div className={`${taskTitle} ${taskCompleted}`}>
              {oneTask.id}. {oneTask.text}
            </div>
            <button
              className={`${taskButton}`}
              onClick={() => handleRemove(oneTask)}
            >
              Remove
            </button>
          </div>
        ) : (
          <div key={oneTask.id} className={`${task}`}>
            <input
              type="checkbox"
              checked={oneTask.completed}
              className={`${taskCheckbox}`}
              onChange={() => handleToggle(oneTask)}
            ></input>
            <div className={`${taskTitle} ${taskNotCompleted}`}>
              {oneTask.id}. {oneTask.text}
            </div>
            <button
              className={`${taskButton}`}
              onClick={() => handleRemove(oneTask)}
            >
              Remove
            </button>
          </div>
        )
      )}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};
