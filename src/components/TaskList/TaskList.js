import PropTypes from 'prop-types'; // Dodaj import prop-types
import React, { useState } from 'react';

import {
  container,
  task,
  taskButton,
  taskCheckbox,
  taskCompleted,
  taskNotCompleted,
  taskTitle,
} from './TaskList.module.scss';

export const TaskList = ({ listOfTasks }) => {
  const [tasks, setTasks] = useState(listOfTasks);

  const handleRemove = (oneTask) => {
    setTasks(tasks.filter((taskItem) => taskItem.id !== oneTask.id));
  };

  const handleToggle = (oneTask) => {
    setTasks(
      tasks.map((task) => {
        return task.id == oneTask.id
          ? { ...task, completed: !task.completed }
          : task;
      })
    );
  };


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
  listOfTasks: PropTypes.array.isRequired, // Walidacja propa 'n' jako wymaganej liczby
};
